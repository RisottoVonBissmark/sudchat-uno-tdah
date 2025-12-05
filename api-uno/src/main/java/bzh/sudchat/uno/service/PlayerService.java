package bzh.sudchat.uno.service;

import bzh.sudchat.uno.exceptions.PlayerNotFoundException;
import bzh.sudchat.uno.model.Card;
import bzh.sudchat.uno.model.Player;
import bzh.sudchat.uno.repository.GameRepository;
import bzh.sudchat.uno.repository.PlayerRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Data
@Service
public class PlayerService {

    private final CardService cardService;
    PlayerRepository playerRepository;
    DeckService deckService;

    @Autowired
    public PlayerService(DeckService deckService, CardService cardService) {
        this.deckService = deckService;
        this.playerRepository = PlayerRepository.get();
        this.cardService = cardService;
    }

    public String create(int nbCartesMain) {
        Player player = new Player();
        ArrayList<Card> cards = new ArrayList<>();

        for (int i = 0; i < nbCartesMain; i++) {
            cards.add(cardService.getRandomCard());
        }

        player.setDeck(cards);

        playerRepository.save(player);

        return player.getId();
    }

    public Player getPlayerById(String id) {
        Player player = playerRepository.findById(id);

        if (player == null) {
            throw new PlayerNotFoundException("" + id);
        }

        return player;
    }

    public void pioche(String playerId, String deckID) {
        Card card = deckService.pioche(deckID);
        Player player = getPlayerById(playerId);

        player.getDeck().add(card);

        playerRepository.save(player);
    }

    public void addCard(String playerID, Card card) {

        Player player = getPlayerById(playerID);

        player.getDeck().add(card);
    }
}
