package methods;
import static spark.Spark.*;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
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

        //ruta para un posteo del login
        post("/login", (req, res) -> {
            // tengo el JSON string
            String requestBody = req.body();

            // lo parseo a un objeto json al string
            JsonObject jsonObj = gson.fromJson(requestBody, JsonObject.class);

            // extraigo mail y password
            String email = jsonObj.get("email").getAsString();
            String password = jsonObj.get("password").getAsString();

            // Validate the password
            boolean isValid = LoginRequest.passwordValidation(email, password);

            // si el usuario existe y los datos son correctos.
            if (isValid) {
                res.status(200); //manda respuesta positiva al frontend
                return "User logged in successfully!";
            } else {
                res.status(401); // 401 Unauthorized
                return "User not found or password incorrect";
            }
        });
    }

    // Previo al login o al registro, el usuario debería poder decidir si entrar como userDriver o userService.

    // Función para login, dado un email y un password busca en la bdd y si lo encuentra, deja iniciar sesión.
    // GetUserByEmailAndPassword


    // Función para registrar un usuario, una vez rellenados todos los parámetros pedidos, guardo al usuario en la bdd.


}
