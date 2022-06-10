package com.blog.blogService.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@JsonIgnoreProperties(value = { "id"})
@JsonFilter("monFiltreDynamique")
@Entity
public class Blog implements Serializable {

    @Id
    private int id;
    private String title;
    private String descriptionblog;
    private String author;
    @Column(name = "imageurl")
    private String imageUrl;
    
    public Blog() {
    }

    public Blog(int id, String title, String descriptionblog, String author, String imageUrl) {
        this.id = id;
        this.title = title;
        this.descriptionblog = descriptionblog;
        this.author = author;
        this.imageUrl = imageUrl;
    }


    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getdescriptionBlog() {
        return this.descriptionblog;
    }

    public void setdescriptionBlog(String descriptionblog) {
        this.descriptionblog = descriptionblog;
    }

    public String getAuthor() {
        return this.author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getImageUrl() {
        return this.imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }




    
}
