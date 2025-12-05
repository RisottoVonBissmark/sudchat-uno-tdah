package bzh.sudchat.uno.model;

import lombok.Data;

import java.util.ArrayList;
import java.util.UUID;

@Data
public class Game {

    private String id;
    private String deckId;
    private ArrayList<String> playerIds;
    private Card lastCard;
    private int curPlayer = 0;
    private int sens = 1;

    public Game() {
        id = UUID.randomUUID().toString().replace("-", "");
    }
}
