package bzh.sudchat.uno.controller;

import bzh.sudchat.uno.model.Index;
import bzh.sudchat.uno.service.IndexService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class MainController {

    IndexService indexService;

    @Autowired
    public MainController(IndexService indexService) {
        this.indexService = indexService;
    }


    @GetMapping("/index")
    public Index index() {
        return indexService.getIndex();
    }
}
