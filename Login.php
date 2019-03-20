<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<link href="https://fonts.googleapis.com/css?family=Roboto:400i" rel="stylesheet">
	<link rel="stylesheet" href="css/login.css">
	<title></title>
</head>
<body>
	<header>
		<img src="logo/NutriApp.png" alt="">
	</header>
	<div>
		<img src="https://i.pinimg.com/564x/18/1f/09/181f096f92f26be5348acbb253dfb4c4.jpg" alt="">
	</div>
	<div class="contenedor-form">
		<div class="wrap">
			<h1>Inicia sesión</h1>
			<br>
			<form action="server.php" class="formulario" name="formulario-registro" method="POST" id="form" >
				<div>
					<div class="input-group">
						<input type="email" name="email" id="email">
						<label class="label" for="email"> Correo: </label>
					</div>
					<div class="input-group">
						<input type="password" name="Password" id="Password">
						<label class="label" for="Password"> Contraseña: </label>
					</div>
					<input type="submit" id="B-sub" name="Login" value="Enviar" >
					<a href="Register.php">Registrate</a>
				</div>
			</form>
		</div>
	</div>
	<script src="js/login.js"></script>
</body>
</html>