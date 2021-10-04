
$AllUsers = Get-MailBox | Select Identity


--For VA --

foreach($user in $AllUsers){
     if($user -inotlike "*cabinet*"){
    		if($user -inotlike "*alertes*")
	 	{
			if($user -inotlike "*equipement*")
	 		{
				if($user -notlike "*dr*")
	 			{
					if($user -notlike "*fse*")
	 				{
						if($user -notlike "*sih*")
	 					{
							if($user -notlike "*salle*")
	 						{
								if($user -notlike "*PCP*")
	 							{
									if($user -notlike "*SRP*")
	 								{
										if($user -notlike "*ZZ*")
	 									{
											if($user -notlike "*DMP*")
	 										{
												if($user -notlike "*ORANGE*")
	 											{
													if($user -notlike "*C7V*")
	 												{
														$user
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
     }
}

For PCP

foreach($user in $AllUsers){
     if($user -inotlike "*cabinet*"){
    		if($user -inotlike "*alertes*")
	 	{
			if($user -inotlike "*equipement*")
	 		{
				if($user -inotlike "*dr*")
	 			{
					if($user -inotlike "*fse*")
	 				{
						if($user -inotlike "*sih*")
	 					{
							if($user -inotlike "*salle*")
	 						{
								if($user -inotlike "*VA*")
	 							{
									if($user -inotlike "*SRP*")
	 								{
										if($user -inotlike "*ZZ*")
	 									{
											if($user -inotlike "*DMP*")
	 										{
												if($user -inotlike "*ORANGE*")
	 											{
													if($user -inotlike "*C7V*")
	 												{
														if($user -inotlike "*service*")
	 													{
															if($user -ilike "PCP - * - *")
	 														{
																$user
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
     }
}


FOR EQUIPEMENT AND SALLE

foreach($user in $AllUsers){
     	if($user -ilike "*salle*")
	{
    		
		$user	
     	}

	if($user -ilike "*equipement*")
	{
    			$user
     	}
}

FOR CONSULT CABINET DR

foreach($user in $AllUsers){
     	if($user -ilike "*cabinet*")
	{
    		
		$user	
     	}

	if($user -ilike "*consultations*")
	{
    			$user
     	}

	if($user -ilike "*Dr *")
	{
    			$user
     	}
}

FOR REFERENT AND SIH

foreach($user in $AllUsers){
     	if($user -ilike "*referent*")
	{
    		
		$user	
     	}

	if($user -ilike "*SIH*")
	{
    			$user
     	}

	
}

FOR ALERTE AND ROR AND DMP

foreach($user in $AllUsers){
     	if($user -ilike "*alerte*")
	{
    		
		$user	
     	}

	if($user -ilike "*ROR*")
	{
    		$user
     	}

	if($user -ilike "*DMP*")
	{
    		$user
     	}	
}


$NewMDP = Set-MsolUserPassword -UserPrincipalName "AdresseMail" -ForceChangePassword $true