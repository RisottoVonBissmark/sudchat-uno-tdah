package bzh.sudchat.uno.controller;

import bzh.sudchat.uno.model.Card;
import bzh.sudchat.uno.model.Game;
import bzh.sudchat.uno.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping("/{gameID}/{playerID}/pioche")
    public Card piocheCard(@PathVariable String gameID, @PathVariable String playerID) {
        return this.gameService.pioche(gameID, playerID);
    }

    // Jouer une carte (POST)
    @PostMapping("/{gameID}/{playerID}/play")
    public void playCard(@PathVariable String gameID, @PathVariable String playerID, @RequestBody Integer cardID) {
        gameService.playCard(gameID, playerID, cardID);
    }

    // voir la dernière carte jouée (GET)
    @GetMapping("/{gameID}/lastplay")
    public Card viewLastCard(@PathVariable String gameID) {
        return this.gameService.getLastCard(gameID);
    }

    @GetMapping("/{gameID}/{playerID}/cards")
    public Iterable<Card> viewCards(@PathVariable String gameID, @PathVariable String playerID) {
        return this.gameService.getCards(gameID, playerID);
    }

    @GetMapping("/{gameID}/{playerID}/ismyturn")
    public boolean isMyTurn(@PathVariable String gameID, @PathVariable String playerID) {
        return this.gameService.isMyTurn(gameID, playerID);
    }
    // uno (POST)
    // contre uno (POST)

}
