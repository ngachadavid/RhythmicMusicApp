import React, { useState } from "react";
import SongItem from "./SongItem";

function Search({ songs, clickedInAdd }) {
  const [search, setSearch] = useState("");
  function handleSearch(event) {
    setSearch(event.target.value);
  }

  let found = songs.filter((item) => {
    let itemName = item.name.toLocaleLowerCase();
    let itemCategory = item.category.toLocaleLowerCase();
    let itemArtist = item.artist.toLocaleLowerCase();

    if (search === "") {
      return true;
    } else if (
      itemName.includes(search) ||
      itemCategory.includes(search) ||
      itemArtist.includes(search)
    ) {
      return item;
    }
  });

  return (
    <div className="elementp text-light text-center theme-bg">
      <div className="ui large fluid icon input py-5">
        <input
          className="p-2"
          type="text"
          placeholder="Search Songs"
          value={search}
          onChange={handleSearch}
        />
        <i className="circular search link icon"></i>
      </div>
      <div className="container">
        <div className="row gap-3">
          {/* <SongItem/> */}
          {found.map((song) => (
            <SongItem song={song} clickedInAdd={clickedInAdd} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
