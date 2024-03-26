package webapp.pages;
import org.apache.hadoop.shaded.org.jline.utils.InputStreamReader;
import org.apache.ivy.Main;

import java.io.*;

import static spark.Spark.*;



public class MainWeb {
    public static void main(String[] args) {
        port(4567);

        // Configurar la ruta GET para manejar la solicitud y enviar el archivo JSP
        get("/ejemplo", (req, res) -> {
            // Establecer el tipo de contenido de la respuesta como HTML
            res.type("text/html");

            // Renderizar y enviar el contenido del archivo JSP
            return renderJsp("index.jsp");
        });
    }
    private static String renderJsp(String jspFilePath) {
        try {
            // Leer el contenido del archivo JSP
            BufferedReader reader = new BufferedReader(new FileReader("C:/Users/Usuario/ayed/projects/MiAuto/miAuto/src/main/java/webapp/pages/index.jsp"));

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
