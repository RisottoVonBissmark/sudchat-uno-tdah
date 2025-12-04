package bzh.sudchat.uno.controller;

import bzh.sudchat.uno.model.Card;
import bzh.sudchat.uno.model.Game;
import bzh.sudchat.uno.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/game")
public class GameController {

    GameService gameService;

    @Autowired
    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    // url: /game/idpartie/idjoueur/action

    @GetMapping("/create")
    public Game createGame() {
        String gameId = this.gameService.createGame();
        return this.gameService.getGameById(gameId);
    }

    @GetMapping("/{gameID}")
    public Game viewCards(@PathVariable String gameID) {
        return this.gameService.getGameById(gameID);
    }

    //piocher (GET)
    // Jouer une carte (POST)
    // voir ses cartes (GET)

    @GetMapping("/{gameID}/{playerID}/cards/view")
    public Iterable<Card> viewCards(@PathVariable String gameID, @PathVariable String playerID) {
        return this.gameService.getCards(gameID, playerID);
    }

    // uno (POST)
    // contre uno (POST)

}
