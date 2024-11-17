

ASled::ASled()
{
    PrimaryActorTick.bCanEverTick = true;
    //Mesh
    MeshComponent = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("SledMesh"));
    RootComponent = MeshComponent; 
    MeshComponent->SetCollisionProfileName(TEXT("SledCollision"));
    // Camera
    CameraComponent = CreateDefaultSubobject<UCameraComponent>(TEXT("SledCamera"));
    CameraComponent->SetupAttachment(RootComponent);
    // TriggerVolume
    TriggerComponent = CreateDefaultSubobject<UBoxComponent>(TEXT("TriggerVolume"));
    TriggerComponent->SetupAttachment(RootComponent);
    TriggerComponent->SetCollisionProfileName(TEXT("Trigger"));
    TriggerComponent->SetGenerateOverlapEvents(true);
}

// Called when the game starts or when spawned
void ASled::BeginPlay()
{
        Super::BeginPlay();
        SledEvent = GetWorld()->GetGameInstance()->GetSubsystem<USledEventDispatcher>();
        SledEvent->PlayerExitSled.AddUObject(this, &ASled::StopSkatingSound);
}

void ASled::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)
{
    // Add Input Mapping Context
    if (APlayerController* PlayerController = Cast<APlayerController>(GetController()))
    {
        if (UEnhancedInputLocalPlayerSubsystem* Subsystem = ULocalPlayer::GetSubsystem<UEnhancedInputLocalPlayerSubsystem>(PlayerController->GetLocalPlayer()))
        {
            Subsystem->AddMappingContext(SledInputMappingContext, 0);
        }
    }
    // Setup action bindings
    if (UEnhancedInputComponent* EnhancedInputComponent = Cast<UEnhancedInputComponent>(PlayerInputComponent))
    {
        EnhancedInputComponent->BindAction(ActionLook, ETriggerEvent::Triggered, this, &ASled::HandleLook);
        EnhancedInputComponent->BindAction(ActionPushOff, ETriggerEvent::Triggered, this, &ASled::HandlePushOff);
        EnhancedInputComponent->BindAction(ActionSteer, ETriggerEvent::Triggered, this, &ASled::HandleSteer);
        EnhancedInputComponent->BindAction(ActionBrake, ETriggerEvent::Triggered, this, &ASled::HandleBrake);
    }
}


void ASled::RemoveInputMappingComponent()
{
    if (APlayerController* PlayerController = Cast<APlayerController>(GetController()))
    {
        if (UEnhancedInputLocalPlayerSubsystem* Subsystem = ULocalPlayer::GetSubsystem<UEnhancedInputLocalPlayerSubsystem>(PlayerController->GetLocalPlayer()))
        {
            Subsystem->RemoveMappingContext(SledInputMappingContext);
        }
    }
}

void ASled::Tick(float DeltaTime)
{
    Super::Tick(DeltaTime);

    FVector Velocity = MeshComponent->GetPhysicsLinearVelocity();
    Speed= Velocity.Size();
    if(Speed<1.5f)
    {
        bIsPushOff=false;
        bSoundOff=true;
        SledEvent->StopSkating();
    }
}

void ASled::HandlePushOff()
{
    if (Speed < MaxSpeed)
    {
        bIsPushOff = true;
        ForwardDirection = GetActorForwardVector();
        ImpulseVector = ForwardDirection * Impulse;
        MeshComponent->AddImpulse(ImpulseVector, NAME_None, true);
        if(bSoundOff&&!bIsOutSled)
        SledEvent->SkatingSound();
    }
}

void ASled::HandleLook(const FInputActionValue& InputActionValue)
{
    if(!bIsPushOff)
    {
        const FVector2D LookAxisVector = InputActionValue.Get<FVector2D>();
        FRotator NewRotation = GetActorRotation();
        NewRotation.Yaw += LookAxisVector.X * LookAtIdle;
        SetActorRotation(NewRotation);
    }
}

void ASled::HandleSteer(const FInputActionValue& InputActionValue)
{
    if (bIsPushOff)
    {

        const FVector2D LookAxisVector = InputActionValue.Get<FVector2D>();
        FRotator NewRotation = GetActorRotation();
        NewRotation.Yaw += LookAxisVector.X * SteerSpeed;
        MeshComponent->SetLinearDamping(0.05f);
        SetActorRotation(NewRotation);
    }
}


void ASled::HandleBrake(const FInputActionValue& InputActionValue)
{
    bIsBraking = InputActionValue.Get<bool>();
    if(bIsBraking)
    {
        BreakRuntime();
    }
    else
    {
        StopBrake();
    }
    bIsPushOff = false;
    bSoundOff=true;
}

void ASled::BreakRuntime()
{
    MeshComponent->SetLinearDamping(BrakeForce);
}

void ASled::StopBrake()
{
    MeshComponent->SetLinearDamping(0);
}

void ASled::StopSkatingSound()
{
    SledEvent->StopSkating();
    bIsOutSled=true;
}

