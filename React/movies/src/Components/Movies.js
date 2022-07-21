import React, { Component } from 'react'
import { movies } from './getMovies'
import axios from 'axios';
let apikey = require("./apikey");

export default class Movies extends Component {
  constructor(){
    super();
    this.state = {
      hover:'',
      parr : [1],
      currPage : 1,
      movies : []
    }
  } 
  
  async componentDidMount(){
    const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apikey}&page=${this.state.currPage}`)
    let data = res.data;
    console.log(data);
    this.setState({
      movies : [...data.results]
    })
    
    console.log("mounting done");
    console.log(this.state.movies);
  }

  changeMovies = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apikey}&page=${this.state.currPage}`)
    let data = res.data;
    this.setState({
      movies : [...data.results]
    })
  }

  handleRight = () => {
    let temparr = [];
    for(let i=1; i<=this.state.parr.length+1; i++){
      temparr.push(i);
    }
    this.setState({
      parr:[...temparr],
      currPage: this.state.currPage+1
    },this.changeMovies);
  }

  handleLeft = () => {
    let temparr = [];
    if(this.state.currPage==1){
      return;
    }
    for(let i=1; i<=this.state.parr.length-1; i++){
      temparr.push(i);
    }
    this.setState({
      parr:[...temparr],
      currPage: this.state.currPage-1
    },this.changeMovies);
  }

  handleClick = (pageno) => {
    if(pageno != this.state.currPage){
      this.setState({
        currPage : pageno
      }, this.changeMovies)
    }
  }
  
  render() {
    console.log("render");
    console.log(apikey);
    // let movie = movies.results;
    return (
      <>
      {
        this.state.movies.length==0?
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only"></span>
        </div>:
        <div>
            <h3><strong>Trending</strong></h3>
            <div className='movies-list'>
                {
                    this.state.movies.map((movieObj)=>(
                        <div className="card movies-card" onMouseEnter={()=>this.setState({hover:movieObj.id})} onMouseLeave={()=>this.setState({hover:''})}>
                        <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt="Card image cap" className='card-img-top movies-img'/>
                            <h5 className="card-title movies-title">{movieObj.original_title}</h5>
                            <div className="button-wrapper" style={{display:'flex',width:'100%',justifyContent:'center'}}>
                              {
                                this.state.hover == movieObj.id && 
                                <a className="btn btn-primary movies-button">Add to favourites</a>
                              }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      }
      <div style={{display:'flex', justifyContent:'center'}}>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" onClick={this.handleLeft}>Previous</a></li>
            {
              this.state.parr.map((pageno)=>(
                <li class="page-item"><a class="page-link" onClick={()=>this.handleClick(pageno)}>{pageno}</a></li>
              ))
            }
            <li class="page-item"><a class="page-link" onClick = {this.handleRight}>Next</a></li>
          </ul>
        </nav>
      </div>
      </>
    )
  }
}
