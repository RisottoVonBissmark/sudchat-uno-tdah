package bzh.sudchat.uno.service;

import bzh.sudchat.uno.exceptions.CardNotFoundException;
import bzh.sudchat.uno.model.Card;
import bzh.sudchat.uno.repository.CardRepository;
import jakarta.persistence.Entity;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Data
@Service
public class CardService {

    private final CardRepository cardRepository;

    @Autowired
    public CardService(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    public Iterable<Card> getCards() {
        return cardRepository.findAll();
    }

    public Card getCardByID(int id) {
        Optional<Card> card = cardRepository.findById(id);

        if (card.isEmpty()) {
            throw new CardNotFoundException(id);
        }

        return card.get();
    }
}
