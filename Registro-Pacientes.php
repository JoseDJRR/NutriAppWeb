<?php 
	if (isset($_POST['Pacientes'])) {
		$Nombre = mysqli_real_escape_string($conn, $_POST['Nombre']);
		$Apellido = mysqli_real_escape_string($conn, $_POST['Apellido']);
		$email = mysqli_real_escape_string($conn, $_POST['email']);
		$Telefono = mysqli_real_escape_string($conn, $_POST['Telefono']);
		$Celular = mysqli_real_escape_string($conn, $_POST['Celular']);
		$Direccion = mysqli_real_escape_string($conn, $_POST['Direccion']);
		$Fecha = mysqli_real_escape_string($conn, $_POST['Fecha']);

		$query = "INSERT INTO 'pacientes' ('IDNutriologo', 'Nombre', 'Apellido', 'Celular', 'Correo', 'Fecha/Nacimiento', 'Direccion', 'Telefono') VALUES ('', '$Nombre', '$Apellido', '$Celular', '$email', '$Fecha', '$Direccion', '$Telefono' )";
		$result = $conn->query($query); 
	}
 ?>