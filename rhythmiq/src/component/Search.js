import React from "react";
// import SongItem from "./SongItem";


function Search({search, setSearch}) {
 function handleSearch(event){
   setSearch(event.target.value)
 }

return (
   <div className="ui large fluid icon input">
     <input
       type="text"
       placeholder="Search your Songs"
       value={search}
       onChange={handleSearch}
     />
     <i className="circular search link icon"></i>
   </div>
 );
}


export default Search;
