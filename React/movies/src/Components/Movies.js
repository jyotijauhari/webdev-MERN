import React, { Component } from 'react'
import { movies } from './getMovies'

export default class Movies extends Component {
    render() {
    let movie = movies.results;
    return (
      <>
      {
        movie.length==0?
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only"></span>
        </div>:
        <div>
            <h3><strong>Trending</strong></h3>
            <div className='movies-list'>
                {
                    movie.map((movieobj)=>(
                        <div className="card movies-card">
                        <img src={`https://image.tmdb.org/t/p/original${movieobj.backdrop_path}`} style={{height:'40vh', width:'20vw'}} alt="Card image cap"/>
                            <h1 className="card-title banner-title">{movieobj.original_title}</h1>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    ))
                }
            </div>
        </div>
      }
      </>
    )
  }
}
