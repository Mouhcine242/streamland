package com.games.gamesService.web.controller;

import java.util.List;

import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;
import com.games.gamesService.dao.GameDao;
import com.games.gamesService.model.Game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class GameController {

    @Autowired

    private GameDao gameDao;


    public GameController(GameDao gameDao) {
        this.gameDao = gameDao;
    }

    @GetMapping("/Games")
    public MappingJacksonValue listGames() {

        List<Game> games = gameDao.findAll();
        SimpleBeanPropertyFilter monFilter = SimpleBeanPropertyFilter.serializeAllExcept("id");
        FilterProvider listDeNosFilter = new SimpleFilterProvider().addFilter("monFiltreDynamique" , monFilter);

        MappingJacksonValue result = new MappingJacksonValue(games);

        result.setFilters(listDeNosFilter);

        return result ;
        
    }


    
}
