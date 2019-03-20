<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		
		<link rel="stylesheet" href="css/sidebar.css">
		<link rel="stylesheet" href="fonts/style.css">
		<link rel="stylesheet" href="css/pacientes.css">
		<title></title>
	</head>
	<body>
		<?php 
			require_once 'conection.php';
		 ?>
		<header>
			<img src="logo/NutriApp.png" alt="">
			<a href="login.php"> Log out</a>
		</header>
		<div class="sidebar">
			<h1>Menú</h1>
			<ul>
				<li><a href="http://nutre.in/" target="_blank"><span class=""></span><i class="icon-tongue"></i> Dieta</a></li>
				<li><a href="http://nutre.in/" target="_blank"><span class=""></span><i class="icon-tree"></i> Distribución</a></li>
				<li><a href="index.php"><span class=""></span><i class="icon-calendar"></i> Calendario</a></li>
				<li><a href="#"><span class=""></span><i class="icon-users"></i> Pacientes</a></li>
				<li><a href="soporte.php"><span class=""></span><i class="icon-question"></i> Soporte</a></li>
			</ul>
		</div>
		
		<div class="contenido desplegar">
			<label class="menu" id="barra"><span class="icon icon-paragraph-justify"></span></label>
			
			
			<div class="contenedor-form">
				<div class="registro" id="registro">Registro</div>
				<div class="lista" id="lista">Lista</div>
				<div class="registro-form" id="formularioregistro">
					<div class="wrap">
						<form action="server.php" method="POST">
							<div class="formulario">
								<div class="input-group">
									<label class="label" for="Nombre"> Nombre: </label>
									<input type="text" id="Nombre" name="Nombre">
								</div>
								<div class="input-group">
									<label class="label" for="Apellido"> Apellido: </label>
									<input type="text" id="Apellido" name="Apellido">
								</div>
								<div class="input-group">
									<label class="label" for="email"> Correo: </label>
									<input type="email" name="email" id="email">
								</div>
								<div class="input-group">
									<label class="label" for="Telefono"> Telefono: </label>
									<input type="text" id="Telefono" name="Telefono">
								</div>
								<div class="input-group">
									<label class="label" for="Celular"> Celular: </label>
									<input type="text" id="Celular" name="Celular">
								</div>
							</div>

							<div class="formularioa">
								<div class="input-group">
									<label class="label" for="Direccion"> Dirección: </label>
									<input type="text" id="Direccion" name="Direccion">
								</div>
								<div class="input-group">
									<label class="label" for="Fecha"> Fecha de nacimiento: </label>
									<input type="text" id="Fecha" name="Fecha" placeholder="AAAA-MM-DD">
								</div>
								<div class="input-group radio">
									<input type="radio" name="sexo" id="Mujer" value="Mujer" checked="checked">
									<label for="Mujer"> Mujer</label>

									<input type="radio" name="sexo" id="Hombre" value="Hombre">
									<label for="Hombre"> Hombre </label>
								</div>
								<input type="submit" id="B-sub" name="Pacientes" value="Enviar" >
							</div>
						</form>
					</div>
				</div>
				<div class="lista-form" id="formulariolista">
					<div class="wrap">
						 <div class="row">
							<div class="col-sm-4">
								<h2>Nombre:</h2>
								<br>
								<?php 

									$Query = "SELECT pacientes.Nombre, pacientes.Apellido FROM pacientes INNER JOIN nutriologos ON pacientes.IDNutriologo = nutriologos.IDNutriologo WHERE pacientes.IDNutriologo = 1 ";
									$Resultado = $conn->query($Query);
									if (!$Resultado) {
										die($conn->error);
									}
									$rows = $Resultado->num_rows;
									for ($i=0; $i < $rows; $i++) { 
										$Resultado->data_seek($i);
										$row = $Resultado->fetch_array(MYSQLI_ASSOC);
										echo $row['Nombre'] . ' ' . $row['Apellido'];
										echo "<br>";
										echo "<br>";
									}
								 ?>
							</div>
							<div class="col-sm-4">
								<h2>Dieta:</h2>
								<br>
							</div>
							<div class="col-sm-4">
								<h2>Datos:</h2>
								<br>
								<?php 

									$Query = "SELECT pacientes.Celular, pacientes.Direccion FROM pacientes INNER JOIN nutriologos ON pacientes.IDNutriologo = nutriologos.IDNutriologo WHERE pacientes.IDNutriologo = 1";
									$Resultado = $conn->query($Query);
									if (!$Resultado) {
										die($conn->error);
									}
									$rows = $Resultado->num_rows;
									for ($i=0; $i < $rows; $i++) { 
										$Resultado->data_seek($i);
										$row = $Resultado->fetch_array(MYSQLI_ASSOC);
										echo 'Celular: ' .$row['Celular'];
										echo "<br>";
										echo "Dirección: ".$row['Direccion'];
										echo "<br>";
										echo "<br>";
									}
								 ?>
							</div>
						</div> 
					</div>
				</div>
			</div>
		</div>
		<script
			  src="https://code.jquery.com/jquery-3.3.1.min.js"
			  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
			  crossorigin="anonymous">
		</script>
		<script src="js/Pacientes.js"></script>
		<script src="js/sidebar.js"></script>
	</body>
</html>