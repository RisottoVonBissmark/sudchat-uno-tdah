package bzh.sudchat.uno.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.ArrayList;
import java.util.UUID;

@Data
public class Player {

    String id;
    ArrayList<Card> deck;

    public Player() {
        id = UUID.randomUUID().toString().replace("-", "");
    }
}
