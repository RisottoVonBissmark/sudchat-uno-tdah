package bzh.sudchat.uno.service;

import bzh.sudchat.uno.exceptions.DeckNotFoundException;
import bzh.sudchat.uno.model.Card;
import bzh.sudchat.uno.model.Deck;
import bzh.sudchat.uno.repository.CardRepository;
import bzh.sudchat.uno.repository.DeckRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.Optional;
import java.util.Queue;

@Data
@Service
public class DeckService {

    DeckRepository deckRepository;
    CardService cardService;

    @Autowired
    public DeckService(CardService cardService) {
        this.deckRepository = DeckRepository.get();
        this.cardService = cardService;
    }

    public String create(int nbCard) {
        Deck deck = new Deck();
        Queue<Card> cards = new LinkedList<>();
        for (int i = 0; i < nbCard; i++) {
            cards.add(cardService.getRandomCard());
        }

        deck.setCards(cards);

        deckRepository.save(deck);
        return deck.getId();
    }

    public Deck getDeckById(String id) {

        Deck deck = deckRepository.findById(id);

        if (deck == null) {
            throw new DeckNotFoundException(""+id);
        }

        return deck;

    }

    public Card pioche(String id) {

        Deck deck = getDeckById(id);
        return deck.getCards().remove();
    }
}
