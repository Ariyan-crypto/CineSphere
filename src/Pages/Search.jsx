import React, { useEffect, useState } from 'react'
import { img_300, unavailable } from '../assets/Config';
import Pagination from './Pagination';
import'./Search.css'
export default function Search() {
 
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
 const[searchtext,setSearchText]=useState('')
 const[content,setContent]=useState([])
 const fetching=async()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTM3MWM1ZDA3ZWI3Yzg0ZmFhMzg0ZTE2Y2I3MTU1YyIsIm5iZiI6MTcyNzcwNzY5MC4xODcyNSwic3ViIjoiNjZmOTVlOTExYTljOTE4OGZlY2M1YjM3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.JSHDvqcxHn4nNEZri07HKXd8ILk9E0BRhswGsfCLgLw'
    }
  };
  const data=await fetch(` https://api.themoviedb.org/3/search/multi?language=en-US&query=${searchtext}&page=${page}&include_adult=false`,options)
  const data2=await data.json();
  console.log(data2)
  setContent(data2.results)
  setTotalPages(data2.total_pages)
}
useEffect(()=>{
  if(searchtext!=''){
    
    fetching()
  }
 
},[page])
const Search=()=>{
  fetching();
}
  return (
    <>
    <div  className="search-bar">
      <input type='text' value={searchtext} onChange={(e)=>setSearchText(e.target.value)}/>
      <button onClick={Search}>Search</button>   
    </div>
    {content &&
    <>
    <div className='flex'>
    {content.map((Val)=>{
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
    <img src={poster_path?`${img_300}/${poster_path}`:unavailable}/>
  </div>
 <div className="card-content">
    <h5>{title||name}</h5>
    </div>
    <div className="card-meta">
   <div>
    <span className="media-type"> {media_type=='tv'?"TV":'MOVIE'}</span>
   </div>
    <div >
      <span className="release-date" >{release_date}</span></div>
    </div>
    <div className="card-overview"> <h4>{overview}</h4>  </div>
</div>
      </>
     )
      })
      } 
    </div>
    <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
    </>}
    </>
  )
}


