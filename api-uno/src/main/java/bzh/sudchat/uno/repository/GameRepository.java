package bzh.sudchat.uno.repository;

import bzh.sudchat.uno.model.Game;
import bzh.sudchat.uno.model.Game;

import java.util.HashMap;
import java.util.Map;

public class GameRepository {

    private static GameRepository gameRepository = null;
    private final Map<String, Game> games;

    public GameRepository() {
        games = new HashMap<>();
    }

    public void save(Game game) {
        this.games.put(game.getId(), game);
    }

    public Game findById(String id) {
        return games.get(id);
    }

    public static GameRepository get() {
        if (gameRepository == null) {
            gameRepository = new GameRepository();
        }

        return gameRepository;
    }
}
