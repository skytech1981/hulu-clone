import React from 'react'
import "./videocard.css";
import TextTruncate from "react-text-truncate";

const base_url= "https://image.tmdb.org/t/p/original/";

function VideoCard({movie}) {

    return (
        <div className="videoCard">
            
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
             alt=""/>
             <TextTruncate
             line={2}
             element="p"
             truncateText="..."
            //  textTruncateChild={<a href="#">Read on</a>}
             text={movie.overview}
             
             />
           
            <h1>{movie.title || movie.original.title}</h1>
            <p>{movie.vote_count}</p>

        </div>
    )
}

export default VideoCard
