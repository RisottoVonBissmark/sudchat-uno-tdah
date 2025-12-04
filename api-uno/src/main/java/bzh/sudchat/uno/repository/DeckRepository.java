package bzh.sudchat.uno.repository;

import bzh.sudchat.uno.model.Deck;

import java.util.HashMap;
import java.util.Map;


public class DeckRepository {

    private static DeckRepository deckRepository = null;
    private final Map<String, Deck> decks;

    private DeckRepository() {
        decks = new HashMap<>();
    }

    public void save(Deck deck) {
        this.decks.put(deck.getId(), deck);
    }

    public Deck findById(String id) {
        return decks.get(id);
    }

    public static DeckRepository get() {

        if (deckRepository == null) {
            deckRepository = new DeckRepository();
        }

        return deckRepository;
    }

}