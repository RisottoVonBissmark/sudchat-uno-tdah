package bzh.sudchat.uno.service;

import bzh.sudchat.uno.exceptions.GameNotFoundException;
import bzh.sudchat.uno.exceptions.PlayerNotFoundException;
import bzh.sudchat.uno.model.Card;
import bzh.sudchat.uno.model.Deck;
import bzh.sudchat.uno.model.Game;
import bzh.sudchat.uno.model.Player;
import bzh.sudchat.uno.repository.DeckRepository;
import bzh.sudchat.uno.repository.GameRepository;
import bzh.sudchat.uno.repository.PlayerRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Data
@Service
public class GameService {

    private GameRepository gameRepository;

    private DeckService deckService;
    private PlayerService playerService;

    @Autowired
    public GameService(DeckService deckService, PlayerService playerService) {
        gameRepository = GameRepository.get();
        this.deckService = deckService;
        this.playerService = playerService;
    }

    public String createGame() {
        Game game = new Game();
        String deckId = deckService.create(108);
        game.setDeckId(deckId);

        ArrayList<String> playerIds = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            String playerId = playerService.create(7);
            playerIds.add(playerId);
        }

        game.setPlayerIds(playerIds);

        game.setLastCard(deckService.pioche(game.getDeckId()));

        this.gameRepository.save(game);

        return game.getId();
    }

    public Game getGameById(String gameId) {
        Game game = gameRepository.findById(gameId);

        if (game == null) {
            throw new GameNotFoundException(gameId);
        }

        return game;
    }

    public Iterable<Card> getCards(String gameId, String playerID) {
        Game game = getGameById(gameId);
        Player player = playerService.getPlayerById(playerID);

        if (!game.getPlayerIds().contains(player.getId())) {
            throw new PlayerNotFoundException(player.getId());
        }

        return player.getDeck();
    }

    public Card pioche(String gameID, String playerID) {
        Card card;

        Game game = getGameById(gameID);
        card = deckService.pioche(game.getDeckId());

        playerService.addCard(playerID, card);

        return card;
    }

    public Card getLastCard(String gameID) {
        Game game = getGameById(gameID);
        return game.getLastCard();
    }
}
