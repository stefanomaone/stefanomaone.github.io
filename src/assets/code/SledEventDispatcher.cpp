
void USledEventDispatcher::PlayerInSledDoor()
{
	InSledDoor.Broadcast();
};
void USledEventDispatcher::PlayerExitSledDoor()
{
	ExitSledDoor.Broadcast();
};

void USledEventDispatcher::PlayerIsCharacter()
{
	OnCharacter.Broadcast();
}
void USledEventDispatcher::PlayerIsSled()
{
	OnSled.Broadcast();
}
void USledEventDispatcher::PlayerFallInWater()
{
	FallInWater.Broadcast();
}

void USledEventDispatcher::ExitSled()
{
	PlayerExitSled.Broadcast();
}

void USledEventDispatcher::PlayerEnterSled()
{
	EnterSled.Broadcast();
}

void USledEventDispatcher::PushSound()
{
	SoundPush.Broadcast();
}

void USledEventDispatcher::SkatingSound()
{
	SoundSkating.Broadcast();
}
void USledEventDispatcher::StopSkating()
{
	StopSkatingSound.Broadcast();
}
void USledEventDispatcher::CheckingSled()
{
	CheckSled.Broadcast();
}
void USledEventDispatcher::SledEquip()
{
	EquipSled.Broadcast();
}

void USledEventDispatcher::IceFocus()
{
	Focus.Broadcast();
}

void USledEventDispatcher::EndIceFocus()
{
	EndIceInFocus.Broadcast();
}


