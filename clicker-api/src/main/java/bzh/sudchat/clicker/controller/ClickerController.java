package bzh.sudchat.clicker.controller;

import bzh.sudchat.clicker.model.Clicker;
import bzh.sudchat.clicker.service.ClickerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/clicker")
public class ClickerController {

    ClickerService clickerService;

    @Autowired
    public ClickerController(ClickerService clickerService) {
        this.clickerService = clickerService;
    }

    @GetMapping("/{clickerId}/click")
    public int click(@PathVariable int clickerId) {
        return clickerService.increment(clickerId);
    }

    @GetMapping("/create")
    public Clicker create() {
        return clickerService.create();
    }
}
