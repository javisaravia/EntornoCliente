<?php

    if (isset ($_POST["nombre_contacto"], $_POST["email_contacto"], $_POST["mensaje_contacto"]))
        {
            $nombre = htmlspecialchars($_POST["nombre_contacto"]);
            $email = htmlspecialchars($_POST["email_contacto"]);
            $mensaje = htmlspecialchars($_POST["mensaje_contacto"]);

            if (empty($nombre)) {
                $nombre = "Nombre no proporcionado";
            }
            if (empty($email)) {
                $email = "Email no proporcionado";
            }
            if (empty($mensaje)) {
                $mensaje = "Mensaje no proporcionado";
            }

            echo "<h1>Contacto recibido</h1>";
            echo "<p><strong>Nombre:</strong> $nombre</p>";
            echo "<p><strong>Email:</strong> $email</p>";
            echo "<p><strong>Mensaje:</strong> $mensaje</p>";
        }

?>