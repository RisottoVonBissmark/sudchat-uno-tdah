package bzh.sudchat.uno.exceptions;

public class NotPlayerTurnException extends RuntimeException {
    public NotPlayerTurnException(String message) {
        super(message);
    }
}
