package org.austral.ing.lab1;


import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Main {
    public static void main(String[] args) {
        final EntityManagerFactory factory = Persistence.createEntityManagerFactory("miAutoDB");

        final EntityManager entityManager = factory.createEntityManager();

        sample1(entityManager);

        entityManager.close();

        factory.close();
    }

    private static void sample1(EntityManager entityManager) {
        UserDriver maxVerstappen = new UserDriver("max234@gmail.com", "Maxiver123", "Max", "Verstappen", "passwordMax", "buenos aires - la matanza");

        entityManager.getTransaction().begin();
        entityManager.persist(maxVerstappen);
        entityManager.getTransaction().commit();
    }
}


