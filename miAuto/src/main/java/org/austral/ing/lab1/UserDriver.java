package org.austral.ing.lab1;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class UserDriver {

    @Id
    @GeneratedValue(generator = "userGen", strategy = GenerationType.SEQUENCE)
    private long id;

    @Column(nullable = false, unique = true)
    private String Username;

    @Column(nullable= false, unique = true)
    private String Email;

    @Column
    private String Name;

    @Column
    private String Surname;

    @Column
    private String Password;

    //entiendo q esto lo usariamos para en un futuro buscar mecanicos cerca del domicilio. habria q pensar si no conviene pedir provincia y ciudad, xq si nos pasan "tigre avenida bancalari 1200 barrio las aguas"
    //no nos va a servir tanto. estaría bueno simplificarlo capaz, tipo q sea [provincia][ciudad] o algo asi.
    @Column
    private String Domicilio;

    //dicen q hace falta? de ser asi, habría q pasarle al constructor la date del momento.
    //@Column
    //private LocalDateTime creationDate;

    //constructores
    public UserDriver(String Email, String Username, String Name, String Surname, String Password, String Domicilio) {
        this.Email = Email;
        this.Username = Username;
        this.Password = Password;
        this.Domicilio = Domicilio;
        this.Name = Name;
        this.Surname = Surname;

    }

    public UserDriver() {

    }
}
