import React from "react";

const Pagination=({coinsPerPage, totalCoins, currentPage,setCurrentPage})=>{

    const pageNumber=[]; 

    for(let i=1; i<=Math.ceil(totalCoins/coinsPerPage); i++){
        pageNumber.push(i)
    }
    return (
        <div>

            {pageNumber.map((number)=>(
                <button key={number} onClick={()=>setCurrentPage(number)}>{number}</button>
            ))}
        </div>
    )
}

export default Pagination;