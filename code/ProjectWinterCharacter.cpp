

void AProjectWinterCharacter::FadeInCharacter()
{	
	FadeWidgetInstance->AddToViewport(); 
	FadeWidgetInstance->StartFadeOut(FadeOutDuration);
	GetWorld()->GetTimerManager().SetTimer(ResetStaminaHandle, this, &AProjectWinterCharacter::SpawnSled, 2.f, false);
}

void AProjectWinterCharacter::SpawnSled()
{
	if (!SledInstance)
	{
		FVector ForwardVector = GetActorForwardVector();
		FVector SpawnLocation = GetActorLocation() + (ForwardVector *200.0f);
		FRotator SpawnRotation = GetActorRotation();
		SledInstance = GetWorld()->SpawnActor<ASled>(SledBlueprint, SpawnLocation, SpawnRotation);
		GetWorld()->GetTimerManager().SetTimer(ResetStaminaHandle, this, &AProjectWinterCharacter::SwitchToSled, 1.f, false);
	}
}

void AProjectWinterCharacter::SwitchToSled()
{

	if (APlayerController* PlayerController = Cast<APlayerController>(GetController()))
	{
		PlayerController->DisableInput(PlayerController);
		PlayerController->UnPossess();
		if (UEnhancedInputLocalPlayerSubsystem* Subsystem = ULocalPlayer::GetSubsystem<UEnhancedInputLocalPlayerSubsystem>(PlayerController->GetLocalPlayer()))
		{
			Subsystem->RemoveMappingContext(DefaultMappingContext);
		}
		
		// Pawn Attach to sled
		AttachToActor(SledInstance, FAttachmentTransformRules::KeepRelativeTransform);
		// Pawn Position Attach Sled
		FVector RelativeLocation(0.0f, 0.0f, 400.0f);
		SetActorRelativeLocation(RelativeLocation);
		PlayerController->Possess(SledInstance);
		PlayerController->EnableInput(PlayerController);
		FadeWidgetInstance->AddToViewport(); 
		FadeWidgetInstance->StartFadeIn(FadeInDuration); 
	}
}

void AProjectWinterCharacter::FadeInSled()
{
	FadeWidgetInstance->AddToViewport(); 
	FadeWidgetInstance->StartFadeOut(FadeOutDuration);
	GetWorld()->GetTimerManager().SetTimer(ResetStaminaHandle, this, &AProjectWinterCharacter::SwitchToCharacter, FadeInDuration, false);
}


void AProjectWinterCharacter::SwitchToCharacter()
{
	if (FadeWidgetInstance)
	{
		FadeWidgetInstance->AddToViewport(); 
		FadeWidgetInstance->StartFadeIn(FadeInDuration); 
	}
	if (APlayerController* PlayerController = Cast<APlayerController>(SledInstance->GetController()))
	{
		PlayerController->UnPossess();
		PlayerController->DisableInput(PlayerController);
		if (SledInstance)
		{
			SledInstance->RemoveInputMappingComponent();
		}
		
		SledCamera = SledInstance->CameraComponent;
		if (SledCamera)
		{
			//Keep Camera Sled references
			FVector CameraForward = SledCamera->GetForwardVector();
			FVector CameraLocation = SledCamera->GetComponentLocation();
			FVector NewLocation = CameraLocation + (CameraForward * 200.0f);
			FRotator NewRotation = CameraForward.Rotation();
			// Position and Rotation For RespawnCharacter
			SetActorLocation(NewLocation);
			SetActorRotation(NewRotation);
			PlayerController->Possess(this);
			PlayerController->EnableInput(PlayerController);
			//Destroy Sled
			SledInstance->Destroy();
			SledInstance = nullptr;
		}
	}
	
}
