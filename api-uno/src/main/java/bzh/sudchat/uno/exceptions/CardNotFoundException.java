package bzh.sudchat.uno.exceptions;

public class CardNotFoundException extends NotFoundException {
    public CardNotFoundException(String message) {
        super(message);
    }

    public CardNotFoundException(int id) {
        super("Card with id " + id + " not found");
    }

}
