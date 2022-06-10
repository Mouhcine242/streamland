package com.blog.blogService.dao;

import com.blog.blogService.model.Blog;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin("*")
public  interface BlogDao extends JpaRepository<Blog , Integer> {

    Blog findById(int id);

    
}
