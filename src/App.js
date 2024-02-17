import React from 'react'
import {useState, useEffect} from 'react'
import './App.css'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=b8799a99'

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        console.log(data.Search)
    } 

    const movie1 = {
            "Title": "Spiderman",
            "Year": "2010",
            "imdbID": "tt1785572",
            "Type": "movie",
            "Poster": "N/A"
        }
    

    useEffect(() => {
        searchMovies('Spiderman');
    },[]) 
    return(
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input placeholder='Search for movies' value='spiderman' onChange={() => {}}></input>
                <img src={SearchIcon} alt='search' onClick={() => {}}></img>
            </div>

            <div className='container'>
                <div className='movie'>
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}></img>
                    </div>
                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default App; 