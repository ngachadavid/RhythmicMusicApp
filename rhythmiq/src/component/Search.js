import React from "react";



function Search({search, setSearch}) {
 function handleSearch(event){
   setSearch(event.target.value)
 }

return (
   <div className="ui large fluid icon input">
     <input
       type="text"
       placeholder="Search what you wanna listen to"
       value={search}
       onChange={handleSearch}
     />
     <i className="circular search link icon"></i>
   </div>
 );
}


export default Search;
