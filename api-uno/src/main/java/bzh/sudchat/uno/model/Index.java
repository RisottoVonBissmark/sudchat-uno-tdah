package bzh.sudchat.uno.model;

import lombok.Data;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Data
public class Index {

    private static Index index = null;

    private String title;
    private String description;
    private Map<String, String> routes;
    private String footer;

    private Index() {
        title = "Uno TDAH";
        description = """
            petit unon TDAH (pas fini) crée pour la nuit de l'info 2025
            comme on a qu'un back end et pas de front end, nous vous
            conseillon d'utilisée curl (ou tout autre outil en ligne de commande)
            pour interagir avec le site.
            """;
        routes = new HashMap<>();
        routes.put("crée une partie", "GET /game/create");
        routes.put("rejoindre une partie", "GET /game/{gameID}/join");
        routes.put("voir ses cartes", "GET /game/{gameID}/cards");
        routes.put("jouer une carte", "POST /game/{gameID}/play body:cardID");
        routes.put("piocher", "GET /game/{gameID}/pioche");
        routes.put("voir la carte en haut de la pile", "GET /game/{gameID}/lasplay");
        routes.put("savoir si c'est mon tour", "GET /game/{gameID}/ismyturn");
        routes.put("/!\\ attention /!\\", "bien penser a metter le coockie de session dans les requête");

        footer = "Bonne partie a vous !";
    }

    public static Index get() {
        if (index == null) {
            index = new Index();
        }

        return index;
    }

}
