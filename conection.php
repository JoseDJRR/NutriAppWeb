<?php  
	$hn = 'localhost'; //o puede ser 127.0.0.1, es lo mismo :)
	$db = 'nutriapp'; //aqui pon el nombre de tu base de datos
	$un = 'root'; //tu usuario en caso de que sea otro
	$pw = 'tec'; //contraseña en caso de que la hayas configurado
	$conn = new  mysqli($hn, $un, $pw, $db); //creamos un objeto $conn
	if ($conn->connect_error){//revisamos errores
  		 die($conn->connect_error);
  		 echo "Revisa tu Conexion";
	   }
	else {
		
	}

?>