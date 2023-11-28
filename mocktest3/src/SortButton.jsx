const SortButton=({sortOrder,setSortOrder})=>{

    const handleSort=()=>{
        setSortOrder(sortOrder==="asc" ? "desc": "asc");

    }
    return (
        <div>
            <button onClick={handleSort}>

                {sortOrder==="asc"?"Sort Ascending":"Sort Descending"}
            </button>
        </div>
    )
}

export default SortButton;