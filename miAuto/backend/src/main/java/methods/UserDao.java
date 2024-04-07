package methods;
import static spark.Spark.*;
import com.google.gson.Gson;
import org.austral.ing.lab1.UserDriver;

// Clase para definir la conexión entre la página web y la base de datos
public class UserDao { // User Data Access Objects
    public static void main(String[] args) {
        Gson gson = new Gson();

        post("/register", (req, res) -> {
            UserDriver user = gson.fromJson(req.body(), UserDriver.class);
            RegisterRequest.saveInBd(user);
            return "User registered successfully!";
        });
    }

    // Previo al login o al registro, el usuario debería poder decidir si entrar como userDriver o userService.

    // Función para login, dado un email y un password busca en la bdd y si lo encuentra, deja iniciar sesión.
    // GetUserByEmailAndPassword


    // Función para registrar un usuario, una vez rellenados todos los parámetros pedidos, guardo al usuario en la bdd.


}
