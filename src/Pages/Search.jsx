import React, { useEffect, useState } from 'react'
import { img_300, unavailable } from '../assets/Config';
import Pagination from './Pagination';
import'./Search.css'
export default function Search() {
 
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
 const[searchtext,setSearchText]=useState('')
 const[content,setContent]=useState([])
 const [hasSearched, setHasSearched] = useState(false);
 const fetching=async()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_SECRET_KEY}`
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
  setPage(1)
  setHasSearched(true);
  fetching();
}
  return (
  <>
    <div className="search-bar">
      <input
        type="text"
        value={searchtext}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={Search}>Search</button>
    </div>
    { hasSearched && content.length === 0 ? (
      <div><span>Loading...</span></div>
    ) : (
      content.length > 0 && (
        <>
          <div className="flex">
            {content.map((Val) => {
              const {
                name,
                title,
                poster_path,
                release_date,
                media_type,
                id,
                overview,
              } = Val;
              return (
                <div key={id} className="card">
                  <div className="card-image">
                    <img src={poster_path ? `${img_300}/${poster_path}` : unavailable} />
                  </div>
                  <div className="card-content">
                    <h5>{title || name}</h5>
                  </div>
                  <div className="card-meta">
                    <div>
                      <span className="media-type">{media_type === 'tv' ? "TV" : "MOVIE"}</span>
                    </div>
                    <div>
                      <span className="release-date">{release_date}</span>
                    </div>
                  </div>
                  <div className="card-overview">
                    <h4>{overview}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )
    )}
  </>
);
}


