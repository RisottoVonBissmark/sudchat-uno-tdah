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

    public Game() {
        id = UUID.randomUUID().toString().replace("-", "");
    }
}
