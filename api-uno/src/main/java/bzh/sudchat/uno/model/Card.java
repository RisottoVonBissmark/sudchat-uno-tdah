package bzh.sudchat.uno.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Card {

    @Id
    private int id;

}
