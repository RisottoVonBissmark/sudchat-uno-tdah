package bzh.sudchat.uno.controller;

import bzh.sudchat.uno.model.Card;
import bzh.sudchat.uno.model.Game;
import bzh.sudchat.uno.service.GameService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
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

    @GetMapping("/{gameID}/join")
    public boolean join(@PathVariable String gameID, HttpServletResponse response) {

        String playerID = this.gameService.join(gameID);

        Cookie cookie = new Cookie("session", playerID);
        cookie.setMaxAge(3600); // 1 hour
        cookie.setSecure(true); // use HTTPS in production!
        cookie.setHttpOnly(true);
        cookie.setPath("/");

        response.addCookie(cookie);

        return true;
    }

    //piocher (GET)
    @GetMapping("/{gameID}/pioche")
    public Card piocheCard(@PathVariable String gameID, @CookieValue(value = "session", required = false) String playerID) {
        return this.gameService.pioche(gameID, playerID);
    }

    // Jouer une carte (POST)
    @PostMapping("/{gameID}/play")
    public void playCard(@PathVariable String gameID, @CookieValue(value = "session", required = false) String playerID, @RequestBody Integer cardID) {
        gameService.playCard(gameID, playerID, cardID);
    }

    // voir la dernière carte jouée (GET)
    @GetMapping("/{gameID}/lastplay")
    public Card viewLastCard(@PathVariable String gameID) {
        return this.gameService.getLastCard(gameID);
    }

    @GetMapping("/{gameID}/cards")
    public Iterable<Card> viewCards(@PathVariable String gameID, @CookieValue(value = "session", required = false) String session) {
        return this.gameService.getCards(gameID, session);
    }

    @GetMapping("/{gameID}/ismyturn")
    public boolean isMyTurn(@PathVariable String gameID, @CookieValue(value = "session", required = false) String playerID) {
        return this.gameService.isMyTurn(gameID, playerID);
    }

    @GetMapping("/{gameID}/nbplayers")
    public int nbPlayers(@PathVariable String gameID, @CookieValue(value = "session", required = false) String playerID) {
        return this.gameService.nbPlayers(gameID, playerID);
    }

    // uno (POST)
    // contre uno (POST)

}
