import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/movieSlice";
import NavBar from "./NavBar";

const Movies = () => {

    const dispatch = useDispatch();

    const {items: movies, status, error} = useSelector((state) => state.movies);
    
    useEffect(() => {
        dispatch(fetchMovies());
    },[dispatch]);

    if(status === 'loading') return <p>Loading movies.......</p>;
    if(status === 'failed') return <p>Error: {error}</p>
    return(

        <>
        <NavBar/>
         <div className="container">
            <h4>Movie List</h4>
            <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <p>{movie.title}</p>
                    <p>{movie.releaseYear}</p>
                </li>
            ))}
            </ul>
        </div>
        </>
       
    )
}

export default Movies;