import React, { useEffect, useState } from 'react'
import Genre from './Component/Genre';
import useGenre from './Component/useGenre';
import Pagination from './Pagination';
import { img_300, unavailable } from '../assets/Config';
import'./Movie.css'
export default function Movie() {
 const [state, setState] = useState([]); 
const [page, setPage] = useState(1); 
const [genre, setGenre] = useState([]);
const [value, setValue] = useState([]);
const [totalPages, setTotalPages] = useState(1);
const genreURL=useGenre(value)

const fetching=async()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTM3MWM1ZDA3ZWI3Yzg0ZmFhMzg0ZTE2Y2I3MTU1YyIsIm5iZiI6MTcyOTQzMTAxMi45MjAxOTYsInN1YiI6IjY2Zjk1ZTkxMWE5YzkxODhmZWNjNWIzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TEq1Goql04I1UTvkhFd6-HjE68k4q8__CDP2eNEY6Jg'
    }
  };
  const data=await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&page=${page}&with_genres=${genreURL}
`, options)
const data2=await data.json()
setState(data2.results)
setTotalPages(data2.total_pages)

}
useEffect(() => {
  fetching();
}, [page, genreURL]);
  return (
    <div>
      <h2 className='movie'>Movie</h2>
<Genre genre={genre}
setGenre={setGenre}
setPage={setPage}
  type="movie"
  value={value}
  setValue={setValue}
/>
<div className='flex'>
      {state.map((Val)=>{
     const {
      name,
      title,
      poster_path,
      release_date,
      media_type,
      id,
      overview
     }=Val;
     return(
      <>
<div key={id} className='card'>
  <div className="card-image">
    <img src={poster_path?`${img_300}/${poster_path}`:`${unavailable}`}/>
  </div>
 <div className="card-content">
    <h5>{title||name}</h5>
    </div>
    <div className="card-meta">
   <div>
    <span className="media-type">MOVIE</span>
    </div>
    <div >
      <span className="release-date">{release_date}</span>
      </div>
    </div>
    <div  className="card-overview"> <h4>{overview}</h4>  </div>
</div>
      </>
     )
      })
      } 
    </div>

<Pagination page={page} setPage={setPage} totalPages={totalPages}/>
    </div>
  )
}


