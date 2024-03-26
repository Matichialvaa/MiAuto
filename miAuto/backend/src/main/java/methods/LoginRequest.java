package methods;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;

import java.util.List;


public class LoginRequest {
    // El SessionFactory que crea las sessiones para hacer los query.
    SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();
    // Obtener los mail y contraseña del usuario que quiere acceder

    private boolean passwordValidation( String email, String password ) {
        // Crea una session para poder hacer el query.
        Session currentSession = sessionFactory.openSession();

        String SQLquery = "select Password from Userdriver where Email = :input";
        Query query = currentSession.createSQLQuery(SQLquery).setParameter("input", email);

        // Este paso es para ejecutar el query que esta arriba.
        List<String> user = query.list();
        // Es para terminar el uso de la base de datos.
        currentSession.close();


        return user.size() == 1 && user.get(0).equals(password);
    }

    public void responseToRequest(String email, String password) {
        boolean  isValidated = passwordValidation(email, password);
        if (isValidated) {

        }
    }

    //uso UserDao para chequear si existe el usuario en la base de datos

    //si existe, redirecciono a la página home e inicio al usuario, si no existe muestro mensaje indicando q no existe.
}
