package bzh.sudchat.clicker.repository;

import bzh.sudchat.clicker.exception.ClickerNotFoundException;
import bzh.sudchat.clicker.model.Clicker;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

public class ClickerRepository {

    private static ClickerRepository clickerRepository = null;

    private final Map<String, Clicker> clickers;

    private ClickerRepository() {
        clickers = new HashMap<>();
    }

    public Clicker findById(String id) {
        return clickers.get(id);
    }

    public void save(Clicker clicker) {
        this.clickers.put(clicker.getId(), clicker);
    }

    public static ClickerRepository get() {
        if (clickerRepository == null) {
            clickerRepository = new ClickerRepository();
        }

        return clickerRepository;
    }
}
