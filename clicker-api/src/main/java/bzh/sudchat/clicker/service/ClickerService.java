package bzh.sudchat.clicker.service;

import bzh.sudchat.clicker.exception.ClickerNotFoundException;
import bzh.sudchat.clicker.model.Clicker;
import bzh.sudchat.clicker.repository.ClickerRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.UUID;

@Data
@Service
public class ClickerService {

    ClickerRepository clickerRepository;

    public ClickerService() {
        this.clickerRepository = ClickerRepository.get();
    }

    public Clicker getClicker(String id) {

        Clicker clicker = clickerRepository.findById(id);

        if (clicker == null) {
            throw new ClickerNotFoundException("" + id);
        }

        clickerRepository.save(clicker);

        return clicker;
    }

    public Clicker create() {
        Clicker clicker = new Clicker();
        clicker.setId(UUID.randomUUID().toString().replace("-", ""));
        clicker.setNb(0);

        return clicker;
    }

    public int increment(String clickerId) {
        Clicker clicker = getClicker(clickerId);
        clicker.setNb(clicker.getNb() + 1);

        return clicker.getNb();
    }

}
