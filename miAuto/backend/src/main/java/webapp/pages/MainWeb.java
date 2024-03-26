package webapp.pages;
import java.io.*;
import static spark.Spark.*;



public class MainWeb {
    static String absolutePathXL = "/home/xoaquin-sanchez-varsallona/IdeaProjects/MiAuto/miAuto/src/main/java/webapp/pages/";
    static String absolutePathCheva = "/C:/Users/flopi/Home/Projects/Laboratorio/MiAuto/miAuto/src/main/java/webapp/pages/";
    public static void main(String[] args) {
        port(4567);
        webPage("index.jsp");
        webPage("home.jsp");
        webPage("register.jsp");
        webPage("login.jsp");
        System.out.println("The page is updated, please check it.");
    }
    public static void webPage(String jspFilePath) {

        // Configurar la ruta GET para manejar la solicitud y enviar el archivo JSP
        get("/"+jspFilePath, (req, res) -> {
            // Establecer el tipo de contenido de la respuesta como HTML
            res.type("text/html");

            // Renderizar y enviar el contenido del archivo JSP
            return renderJsp(jspFilePath);
        });


    }
    private static String renderJsp(String jspFilePath) {
        try {
            // Leer el contenido del archivo JSP
            BufferedReader reader = new BufferedReader(new FileReader(absolutePathCheva + jspFilePath));

            // Construir el contenido del archivo JSP como una cadena
            StringBuilder content = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                content.append(line).append("\n");
            }

            // Devolver el contenido del archivo JSP
            return content.toString();
        } catch (IOException e) {
            e.printStackTrace();
            return "Error al cargar el archivo JSP";
        }
    }
}
