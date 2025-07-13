import React, { useEffect, useState } from "react";
import "./Genre.css";
export default function Genre({
  genre,
  setGenre,
  setPage,
  type,
  value,
  setValue,
}) {
  const CategoryAdd = (genres) => {
    setValue([...value, genres]);
    setGenre(genre.filter((g) => g.id !== genres.id));
    setPage(1);
  };

  const CategoryRemove = (genres) => {
    setValue(value.filter((g) => g.id !== genres.id));
    setGenre([...genre, genres]);
    setPage(1);
  };
  const fetchGenre = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SECRET_KEY}`,
      },
    };
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/${type}/list?language=en`,
      options
    );
    const { genres } = await data.json();

    setGenre(genres);
  };
  useEffect(() => {
    fetchGenre();
  }, []);
  return (
    <div className="flex2">
      {value &&
        value.map((Val) => {
          const { id, name } = Val;
          return (
            <>
              <div className="m-2" key={id}>
                <button className="genre-btn selected-genre" onClick={() => CategoryRemove(Val)}>{name}</button>
              </div>
            </>
          );
        })}
      {genre &&
        genre.map((Gen) => {
          const { id, name } = Gen;
          return (
            <>
              <div key={id}>
                <button className="genre-btn" onClick={() => CategoryAdd(Gen)}>
                  {name}
                </button>
              </div>
            </>
          );
        })}
    </div>
  );
}
