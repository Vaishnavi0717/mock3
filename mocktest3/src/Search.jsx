import React from "react";

const SearchBar=({searchItem, setSearchItem})=>{

    return (
        
<input type="text"
placeholder="Search by name or symbol"
value={searchItem}
onChange={(e)=>setSearchItem(e.target.value)}
/>
        
    )
}


export default SearchBar;