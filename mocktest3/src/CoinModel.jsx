const CoinModel=({ coin, closeModel})=>{
    return (
        <div>
            <h2>{coin.name}-{coin.symbol}-{coin.current_price}-{coin.market_cap_rank}-{coin.price_change_24h
}</h2>
    

            <button onClick={closeModel}>Close</button>

        </div>
    )
}

export default CoinModel;