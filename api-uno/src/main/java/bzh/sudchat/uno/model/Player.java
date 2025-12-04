package bzh.sudchat.uno.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.ArrayList;
import java.util.UUID;

@Data
@Entity
public class Player {

    @Id
    String id;

    ArrayList<Card> deck;
}
