package bzh.sudchat.uno.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.UUID;

@Data
public class Deck {

    private String id;
    private Queue<Card> cards = new LinkedList<>();

    public Deck() {
        this.id = UUID.randomUUID().toString();
    }
}
