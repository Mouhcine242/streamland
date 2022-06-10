import React from 'react'
import ReadMore from '../lib/ReadMore'
import '../styles/Blog.css'
import { Link } from 'react-router-dom'

const Blog = ({title , desc , author , image  }) => {
  return (
    <Link to={`/blogs/${title}`}  style={{textDecoration: 'none'}}>
  <div class="card1">
      
  <img src={image} class="card-img-top1" alt="..."/>    <div class="card-body">
      <h5 class="card-title1">{title}</h5>
      <p class="card-text1">{desc}</p>
      <p class="card-text1"><small class="text-muted">{author}</small></p>
    </div>
  </div>
  </Link>
        
  )



  
}

export default Blog

