package bzh.sudchat.uno.repository;

import bzh.sudchat.uno.model.Deck;
import bzh.sudchat.uno.model.Player;

import java.util.HashMap;
import java.util.Map;

public class PlayerRepository {

    private static PlayerRepository playerRepository = null;
    private final Map<String, Player> players;

    public PlayerRepository() {
        players = new HashMap<>();
    }

    public void save(Player player) {
        this.players.put(player.getId(), player);
    }

    public Player findById(String id) {
        return players.get(id);
    }

    public static  PlayerRepository get() {
        if (playerRepository == null) {
            playerRepository = new PlayerRepository();
        }

        return playerRepository;
    }
}
