package com.games.gamesService.dao;

import com.games.gamesService.model.Game;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin("*")
public  interface GameDao extends JpaRepository<Game, Integer> {

    
}
