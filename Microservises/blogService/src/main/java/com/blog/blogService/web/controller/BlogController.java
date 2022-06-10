package com.blog.blogService.web.controller;

import java.net.URI;
import java.util.List;
import java.util.Objects;
import com.blog.blogService.dao.BlogDao;
import com.blog.blogService.model.Blog;
import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin
public class BlogController {

    @Autowired

    private BlogDao blogDao;


    public BlogController(BlogDao blogDao) {
        this.blogDao = blogDao;
    }

    @GetMapping("/Blogs")
    public MappingJacksonValue listBlogs() {

        List<Blog> blogs = blogDao.findAll();
        SimpleBeanPropertyFilter monFilter = SimpleBeanPropertyFilter.serializeAllExcept("id");
        FilterProvider listDeNosFilter = new SimpleFilterProvider().addFilter("monFiltreDynamique" , monFilter);

        MappingJacksonValue result = new MappingJacksonValue(blogs);

        result.setFilters(listDeNosFilter);

        return result ;
        
    }

   
   
    @GetMapping(value = "Blogs/{id}")
    public Blog afficherUnBlog(@PathVariable int id) {
        
        Blog blog = blogDao.findById(id);

        if(blog == null) throw new BlogIntrouvableException("le blog avec l'id"+ id + " not found");

        return blog;

    }

    @PostMapping(value = "AddBlog")

    public ResponseEntity<Void> ajouterBlog( @RequestBody Blog blog) {
        Blog blogAdded = blogDao.save(blog);

            if(Objects.isNull(blogAdded)){
                return ResponseEntity.noContent().build();
            }
            URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(blogAdded.getId()).toUri();

                return ResponseEntity.created(location).build();
            }
    
    @DeleteMapping (value = "Blogs/{id}")
    public void supprimerBlog(@PathVariable int id) {
        blogDao.deleteById(id);
    }    
}
