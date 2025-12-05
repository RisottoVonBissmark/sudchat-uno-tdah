package bzh.sudchat.uno.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "Cartes")
public class Card {

    @Id
    private int id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "description")
    private String description;

    @Column(name = "color")
    private int color;

    @Column(name = "numCarte")
    private int numCarte;

    @Column(name = "valeur")
    private int valeur;

    @Column(name = "rarete")
    private int rarete;
}
