	<?php 

	session_start();

	$Nombre = "";
	$email    = "";
	$errores = array(); 
	require_once 'conection.php';
	$ID;

	if (isset($_POST['Registro'])) {

		$Nombre = mysqli_real_escape_string($conn, $_POST['Nombre']);
		$email = mysqli_real_escape_string($conn, $_POST['email']);
		$Password1 = mysqli_real_escape_string($conn, $_POST['Password']);
		$Password2 = mysqli_real_escape_string($conn, $_POST['Password2']);
		$Cedula = mysqli_real_escape_string($conn, $_POST['Cedule']);

		// Validamos 
		if (empty($Nombre)) { array_push($errores, "Llena el campo Nombre"); }
		if (empty($email)) { array_push($errores, "Llena el campo email"); }
		if (empty($Password1)) { array_push($errores, "Llena el campo Password"); }

		//Checamos si el correo ya existe o no. Lo de la cedula esta comentado porque será despúes, en un futuro
		$Chequeo = "SELECT * FROM nutriologos WHERE Cedula='$Cedula' OR Correo='$email'";
		$result = mysqli_query($conn, $Chequeo);
		$usuario = mysqli_fetch_assoc($result);

		if ($usuario['Correo'] === $email) {
			array_push($errores, "El correo ya existe");
		}

		// Si todos esta bien se registra el usuario
		if (count($errores) == 0) {
			$password = md5($Password1);//Se encripta la contraseña

			$query = "INSERT INTO nutriologos (Nombre,Contrasena,Correo,Cedula) VALUES ('$_POST[Nombre]','$_POST[Password]','$_POST[email]','$_POST[Cedule]')";
			$result = $conn->query($query); //objeto nuevo   		 
	  		if (!$result){ //revisamos errores
	  			 die($conn->error);
	  		}
			$consulta = "SELECT IDNutriologo FROM `nutriologos` WHERE Correo='$email' ";
			/*if ($busqueda = $conn->query($consulta)) {
				$busqueda = data_seek(0);
				$ID = $busqueda-fetch_row();
	  		}
			$insertar = mysqli_query($conn, $query);
			if (!$insertar) {
				echo "algo salio mal :C";
				var_dump($insertar);
			}*/
			$_SESSION['Nombre'] = $Nombre;
			$_SESSION['success'] = "Ya te has registrado";
			header( "location: index.php" );

		}
		else {
			echo "Algo salio mal";
		}
	}

	if (isset($_POST['Login'])) {
		$email = mysqli_real_escape_string($conn, $_POST['email']);
		$Password = mysqli_real_escape_string($conn, $_POST['Password']);

		if (empty($email)) { array_push($errores, "Llena el campo email"); }
		if (empty($Password)) { array_push($errores, "Llena el campo Password"); }

		if (count($errores) == 0 ) {
			$password = md5($Password);
			$query = "SELECT * FROM nutriologos WHERE Correo='$email' AND Contrasena='$Password'";
			$resultado = mysqli_query($conn, $query);
			if (mysqli_num_rows($resultado)) {
				$_SESSION['email'] = $email;
				$_SESSION['success'] = "Ya iniciaste sesión";
				$consulta = "SELECT IDNutriologo FROM `nutriologos` WHERE Correo='$email' ";
				if ($busqueda = $conn->query($consulta)) {
					$ID = $busqueda->fetch_row();
				}
				header("Location: index.php");
			}
			else {
  				header("Location: Login.php");
  			}
		}
	}
	
	if (isset($_POST['Pacientes'])) {
		$Nombre = mysqli_real_escape_string($conn, $_POST['Nombre']);
		$Apellido = mysqli_real_escape_string($conn, $_POST['Apellido']);
		$email = mysqli_real_escape_string($conn, $_POST['email']);
		$Telefono = mysqli_real_escape_string($conn, $_POST['Telefono']);
		$Celular = mysqli_real_escape_string($conn, $_POST['Celular']);
		$Direccion = mysqli_real_escape_string($conn, $_POST['Direccion']);
		$Fecha = mysqli_real_escape_string($conn, $_POST['Fecha']);

		$query = "INSERT INTO pacientes (IDNutriologo, Nombre, Apellido, Celular, Correo, FechaNacimiento, Direccion, Telefono) VALUES (1, '$Nombre', '$Apellido', '$Celular', '$email', '$Fecha', '$Direccion', '$Telefono')";
		$conclusion = $conn->query($query); 
		if (!$conclusion) {
			die($conn->error);
		}
		else {
			?>
			<script>
				alert("Se ha subido con exito");
			</script>
			<?php
			header("Location: Pacientes.php");
		}
	}

 ?>