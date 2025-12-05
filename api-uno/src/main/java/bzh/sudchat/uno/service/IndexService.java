package bzh.sudchat.uno.service;

import bzh.sudchat.uno.model.Index;
import lombok.Data;
import org.springframework.stereotype.Service;

@Data
@Service
public class IndexService {

    public Index getIndex() {
        return Index.get();
    }

}
