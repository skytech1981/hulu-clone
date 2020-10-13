import React ,{useEffect, useState} from 'react'
import './results.css';
import VideoCard from "./VideoCard";
import axios from "./axios";



function Results({selectedOption}) {
    const [movies ,setMovies] = useState([]);
    

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption);
                setMovies(request.data.results);
                console.log(request)
                return request;
                }

            fetchData();
    },[selectedOption])

    return (
        <div className="results">
            {movies.map((movie) => (
                <VideoCard movie={movie}/>
            ))} 
           
        </div>
    )
}

export default Results
