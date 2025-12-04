package bzh.sudchat.uno.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

@Data
public class Deck {

    Queue<Card> cards = new LinkedList<>();

}
