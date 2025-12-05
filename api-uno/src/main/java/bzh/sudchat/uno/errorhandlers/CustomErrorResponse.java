package bzh.sudchat.uno.errorhandlers;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ProblemDetail;
import org.springframework.lang.NonNull;
import org.springframework.web.ErrorResponse;

public class CustomErrorResponse implements ErrorResponse {

    HttpStatus status;
    ProblemDetail detail;

    public CustomErrorResponse(HttpStatus status, ProblemDetail detail) {
        super();

        this.status = status;
        this.detail = detail;
    }

    @Override
    @NonNull
    public HttpStatusCode getStatusCode() {
        return this.status;
    }

    @Override
    @NonNull
    public ProblemDetail getBody() {
        return this.detail;
    }
}
