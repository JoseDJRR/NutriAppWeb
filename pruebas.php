
<?php

$conexión = mysqli_connect("localhost", "root", "tec", "nutriapp");

if (!$conexión) {
    echo "No pudo conectarse a la BD: " . mysql_error();
    exit;
}

if (!mysqli_select_db("nutriapp")) {
    echo "No ha sido posible seleccionar la BD: " . mysql_error();
    exit;
}

$sql = "SELECT *
        FROM   nutriologos
        WHERE  IDNutriologo = 0";

$resultado = mysql_query($sql);

if (!$resultado) {
    echo "No se pudo ejecutar con exito la consulta ($sql) en la BD: " . mysql_error();
    exit;
}

if (mysql_num_rows($resultado) == 0) {
    echo "No se han encontrado filas, nada a imprimir, asi que voy a detenerme.";
    exit;
}

// Mientras exista una fila de datos, colocar esa fila en $fila como un array asociativo
// Nota: Si solo espera una fila, no hay necesidad de usar un bucle
// Nota: Si coloca extract($fila); dentro del siguiente bucle,
//       estará creando $id_usuario, $nombre_completo, y $estatus_usuario
while ($fila = mysql_fetch_assoc($resultado)) {
    echo $fila["IDNutriologo"];
    echo $fila["Nombre"];
    echo $fila["Contraseña"];
    echo $fila["Celular"];
    echo $fila["Correo"];
    echo $fila["Sexo"];
    echo $fila["Fecha/Nacimiento"];
    echo $fila["Cedula"];

}

mysql_free_result($resultado);

?>
