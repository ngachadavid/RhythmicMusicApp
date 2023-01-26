import React from "react";
import SongItem from "./SongItem";

function Search({search, setSearch, songs}) {
function handleSearch(event){
  setSearch(event.target.value)
}

return (
  <div className="elementp text-light text-center theme-bg">
    <div className="ui large fluid icon input py-5">
    
    <input
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
      {songs.map(song=><SongItem song = {song}/>)}
          </div>
        </div>
  </div>
);
}

export default Search;
 