<?php 

	$email = $_POST["emial"];

	if($email != null){

		$soubor=fopen("email.txt", "w+");
		fwrite($soubor, $email);

		header("Location: index.php");

	}else{
		echo "Nezadali jste email";
	}
	
	

	


 ?>