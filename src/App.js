import {useState, useEffect} from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'HTTP://www.omdbapi.com?apikey=59c00c44';
const movie1 = {

"Title": "Reign of Judges: Title of Liberty - Concept Short",
"Type": "movie",
"Year": "2018",
"imdbID": "tt4275958"
    

}
const App = () =>  {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        searchMovies("Spider");
      }, []);
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);



    };



    return  (
        <div className = "app">
            <h1>PopMovies</h1>
            <div className = "search">
                <input 
                    placeholder="What movie tonight?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}

                />
                <img 
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0 
                ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ) )

                    }

                 </div>
                ) : (
                    <div className="Empty">
                        <h2>No movies found </h2>
                    </div>
                )




            }
            
            
        </div>
    );
};
export default App