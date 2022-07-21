import React, { Component } from 'react'
import { movies } from './getMovies'

export default class Banner extends Component {
  render() {
    // console.log(movies);
    let movie = movies.results[0];
    console.log(movie);
    // movie = ''; //to check loader 
    return (
      <>
      {//js writtern in {} 
        movie == '' ? 
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only"></span>
        </div>:
        <div className="card banner-card">
          <img className="banner-img" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title banner-title">{movie.original_title}</h5>
            <p className="card-text banner-text">{movie.overview}</p>
          </div>
        </div>
      }
      
      </>
      
    )
  }
}
