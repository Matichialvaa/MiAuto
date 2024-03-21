package org.austral.ing.lab1;

import javax.persistence.Column;
import java.time.LocalDateTime;

public class UserService {

    @Column(nullable = false, unique = true)
    private String Username;

    @Column(nullable = false, unique = true)
    private String Email;

    @Column
    private String Password;

    @Column
    private String Domicilio;

    @Column
    private LocalDateTime creationDate;
}
