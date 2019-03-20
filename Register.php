<!DOCTYPE html>
<html lang="en">
<head>
	<title></title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<link href="https://fonts.googleapis.com/css?family=Roboto:400i" rel="stylesheet">
	<link rel="stylesheet" href="css/estilos.css">
	</head>
<body>
	<header>
		<img src="logo/NutriApp.png" alt="">
	</header>
	<div>
		<img src="https://i.pinimg.com/564x/ce/3a/8d/ce3a8d422b5636f7de305392f04e6153.jpg" alt="">
	</div>
	<div class="contenedor-form">
		<div class="wrap">
			<h1>Registro</h1>
			<br>
			<form action="server.php" class="formulario" name="formulario-registro" method="POST" id="form">
				<div>
					<div class="input-group">
						<input type="text" id="Nombre" name="Nombre">
						<label class="label" for="Nombre"> Nombre: </label>
					</div>
					<div class="input-group">
						<input type="email" name="email" id="email">
						<label class="label" for="email"> Correo: </label>
					</div>
					<div class="input-group">
						<input type="password" name="Password" id="Password">
						<label class="label" for="Password"> Contraseña: </label>
					</div>
					<div class="input-group">
						<input type="Password" name="Password2" id="Password2">
						<label class="label" for="Password2"> Repite la contraseña: </label>
					</div>
					<div class="input-group">
						<input type="text" name="Cedule" id="Cedule">
						<label class="label" for="Cedule"> Cédula: </label>
					</div>


					<div class="input-group radio">
						<input type="radio" name="sexo" id="Mujer" value="Mujer" >
						<label for="Mujer"> Mujer</label>

						<input type="radio" name="sexo" id="Hombre" value="Hombre" checked="checked">
						<label for="Hombre"> Hombre </label>
					</div>

					<div class="input-group checkbox">
						<input type="checkbox" name="Term" id="Ter_y_con" value="true">
						<label for="Ter_y_con"> Acepto terminos y condiciones </label>
					</div>

					<input type="submit" id="B-sub" name="Registro" value="Enviar" >
					<a href="Login.php">Inicia sesión</a>
				</div>
			</form>
		</div>
	</div>
	<script src="js/registro.js"></script>
</body>
</html>