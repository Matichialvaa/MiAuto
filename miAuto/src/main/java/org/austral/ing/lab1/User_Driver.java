package org.austral.ing.lab1;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class User_Driver {

    @Column(nullable = false, unique = true)
    private String Username;

    @Id
    private String Email;

    @Column
    private String Password;

    @Column
    private String Domicilio;

    @Column
    private LocalDateTime creationDate;

}
