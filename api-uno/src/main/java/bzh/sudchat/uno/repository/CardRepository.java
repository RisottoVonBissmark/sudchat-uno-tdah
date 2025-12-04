package bzh.sudchat.uno.repository;

import bzh.sudchat.uno.model.Card;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public interface CardRepository extends CrudRepository<Card, Integer> {
}
