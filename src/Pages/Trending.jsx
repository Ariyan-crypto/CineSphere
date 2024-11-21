import React, { useEffect, useState } from 'react'
import { img_300, unavailable } from '../assets/Config';
import Pagination from './Pagination';
import './Trending.css'
export default function Trending() {
  const[state,setState]=useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
 
  const fetching=async()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTM3MWM1ZDA3ZWI3Yzg0ZmFhMzg0ZTE2Y2I3MTU1YyIsIm5iZiI6MTcyNzcwNzY5MC4xODcyNSwic3ViIjoiNjZmOTVlOTExYTljOTE4OGZlY2M1YjM3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.JSHDvqcxHn4nNEZri07HKXd8ILk9E0BRhswGsfCLgLw'
      }
    };
    const data=await fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`,options)
    const data2=await data.json();
    console.log(data2)
    setState(data2.results)
    setTotalPages(data2.total_pages)
  }
  useEffect(()=>{
fetching();
},[page])
  return (
   <> <h3 className="trending-heading">🔥Trending Today</h3>
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
  <div  className="card-image">
    <img src={poster_path?`${img_300}/${poster_path}`:unavailable}/>
  </div>
 <div className="card-content">
    <h5>{title||name}</h5>
    </div>
    <div className="card-meta">
   <div>
    <span className="media-type">{media_type=='tv'?"TV":'MOVIE'}</span>
    </div>
    <div >
      <span  className="release-date" >{release_date}</span>
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
    </>
  )
}


