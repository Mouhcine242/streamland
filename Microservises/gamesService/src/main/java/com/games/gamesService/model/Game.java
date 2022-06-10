package com.games.gamesService.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(value = { "id"})
@JsonFilter("monFiltreDynamique")
@Entity
public class Game implements Serializable {
    
    @Id 
    private int id;
    private String gamename;
    private String gamedescription;
    private String gameimageurl;

    public Game() {
    }



    public Game(int id, String gamename, String gamedescription, String gameimageurl) {
        this.id = id;
        this.gamename = gamename;
        this.gamedescription = gamedescription;
        this.gameimageurl = gameimageurl;
    }


    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getGamename() {
        return this.gamename;
    }

    public void setGamename(String gamename) {
        this.gamename = gamename;
    }

    public String getGamedescription() {
        return this.gamedescription;
    }

    public void setGamedescription(String gamedescription) {
        this.gamedescription = gamedescription;
    }

    public String getGameimageurl() {
        return this.gameimageurl;
    }

    public void setGameimageurl(String gameimageurl) {
        this.gameimageurl = gameimageurl;
    }





}