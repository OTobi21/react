import React from "react";

 

const Search = ({searchTerm, setsearchTerm}) => {
  return(
    <div className="search">
        <div>
          <img src="./Vector.svg" alt="search" />

          <input
           type="text" 
           placeholder="Search through thousands of movies"
           value={searchTerm}
           onChange={(e) => setsearchTerm (e.target.value)} />
           
        </div>
    </div>
  )
}
export default Search