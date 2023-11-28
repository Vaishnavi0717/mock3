import './App.css';
import axios from "axios";
import CoinModel from './CoinModel';
import CoinTable from './CoinTable';
import SearchBar from './Search';
import SortButton from "./SortButton";
import CurrencySelector from './CurrencySelector';
import Pagination from './Pagination';
import { useEffect, useState } from 'react';


function App() {
  const[coinData, setCoinData]= useState([]); 
  const [currentPage, setCurrentPage]= useState(1); 
  const[coinsPerPage]=useState(10);
  const[searchItem, setSearchItem]=useState("");
  const[sortOrder, setSortOrder]=useState('asc'); 
  const[selectedCurrency, setSelectedCurrency]=useState("INR"); 
  const[modelData, setModelData]= useState(null); 


  useEffect(()=>{
    const fetchData=async()=>{
      try {
        const res=await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}`
        );
        console.log(res.data)
        setCoinData(res.data)
      } catch (error) {
        console.log("error")
      }
    }

    fetchData()
  },[selectedCurrency])

  const openModel=(coin)=>{
setModelData(coin)
  }

  const closeModel=()=>{
    setModelData(null)
  }


  const indexoflastCoin=currentPage*coinsPerPage
const indexoffirstCoin=indexoflastCoin-coinsPerPage; 
const currentCoins=coinData
.filter(
  (coin)=>
  coin.name.toLowerCase().includes(searchItem.toLowerCase())||
  coin.symbol.toLowerCase().includes(searchItem.toLowerCase())
)
.sort((a,b)=>{
  if(sortOrder==="asc"){
    return a.market_cap -b.market_cap;

  }else{
    return b.market_cap- a.market_cap;
  }
})
.slice(indexoffirstCoin, indexoflastCoin)

  return (
    <div className="App ">
   <h1>Crypto Coins</h1>
   <CurrencySelector 
   selectedCurrency={selectedCurrency}
   setSelectedCurrency={setSelectedCurrency}
   />
   <SearchBar searchItem={searchItem} 
   setSearchItem={setSearchItem}
   />
   <sortButton sortOrder={sortOrder}
   setSortOrder={setSortOrder}
   />
   <CoinTable
   coinData={currentCoins}
   openModel={openModel}
   />
<Pagination  
coinsPerPage={coinsPerPage}
totalCoins={coinData.length}
currentPage={currentPage}
setCurrentPage={setCurrentPage}

/>
{modelData && <CoinModel coin={modelData}
closeModel={closeModel}
/>}
  

</div>
  
  )
  }

export default App;
