package org.austral.ing.lab1;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

// Clase para definir la conexión entre la página web y la base de datos
@RestController
public class UserDao { // User Data Access Objects
    @PostMapping("/register")
    public void registerUser(@RequestBody UserDriver user) {
        RegisterRequest.saveInBd(user.getEmail(), user.getUsername(), user.getPassword(), user.getName(), user.getSurname(), user.getDomicilio());
    }
    // Previo al log in o al registro, el usuario debería poder decidir si entrar como userDriver o userService.

    // Función para log in, dado un email y una password busca en la bdd y si lo encuentra, deja iniciar sesión.
    // GetUserByEmailAndPassword


    // Función para registrar un usuario, una vez rellenados todos los parametros pedidos, guardo al usuario en la bdd.


}
