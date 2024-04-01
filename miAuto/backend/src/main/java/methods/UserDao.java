package java.methods;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.org.austral.ing.lab1.UserDriver;

// Clase para definir la conexión entre la página web y la base de datos
@RestController
public class UserDao { // User Data Access Objects
    @PostMapping("/register")
    public void registerUser(@RequestBody UserDriver user) {
        RegisterRequest.saveInBd(user.Email, user.Username, user.Password, user.Name, user.Surname, user.Domicilio);
    }
    // Previo al login o al registro, el usuario debería poder decidir si entrar como userDriver o userService.

    // Función para login, dado un email y un password busca en la bdd y si lo encuentra, deja iniciar sesión.
    // GetUserByEmailAndPassword


    // Función para registrar un usuario, una vez rellenados todos los parámetros pedidos, guardo al usuario en la bdd.


}
