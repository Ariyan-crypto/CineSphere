import React, { useEffect, useState } from 'react'
export default  function Genre({genre,setGenre,setPage,type,value,setValue}) {
  const CategoryAdd=(genres)=>{
setValue([...value,genres])
setGenre(genre.filter((g)=>g.id!==genres.id))
setPage(1);

}

const CategoryRemove = (genres) => {
    setValue(value.filter((g) => g.id !== genres.id));
    setGenre([...genre, genres]);
    setPage(1);  
    };
    const fetchGenre=async()=>{

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTM3MWM1ZDA3ZWI3Yzg0ZmFhMzg0ZTE2Y2I3MTU1YyIsIm5iZiI6MTcyOTQzMTAxMi45MjAxOTYsInN1YiI6IjY2Zjk1ZTkxMWE5YzkxODhmZWNjNWIzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TEq1Goql04I1UTvkhFd6-HjE68k4q8__CDP2eNEY6Jg'
            }
          };
          const data=await fetch(`https://api.themoviedb.org/3/genre/${type}/list?language=en`, options)
          const {genres}=await data.json();
       
          setGenre(genres)      
    }
    useEffect(()=>{fetchGenre()},[])
  return (
    <div className='flex2'>
        {value &&
              value.map((Val) => {
                const { id, name } = Val;
                return (
                  <>
                    <div className="m-2" key={id}>
                      <button
                       
                        onClick={() => CategoryRemove(Val)}
                      >
                        {name}
                      </button>
                    </div>
                  </>
                );
              })}
      {genre && 
      genre.map((Gen)=>{
        const{id,name}=Gen;
      return(<>
      <div key={id}>
      <button  className={``} onClick={() => CategoryAdd(Gen)}>{name}</button>
      </div>
      </>)
    })
      }
    </div>
  )
}


