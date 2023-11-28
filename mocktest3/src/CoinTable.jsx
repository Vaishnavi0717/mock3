import React from "react";

const CoinTable=({coinData, openModel})=>{
    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Current Price</th>
                    <th>Price Change 24 hour</th>
                    <th>Market Cap</th>
                </tr>
            </thead>
            <tbody>
                {coinData.map((coin)=>{
                <tr key={coin.id} onClick={()=>openModel(coin)}>
                    <td><img src={coin.image}/></td>
                    <td>{coin.name}</td>
                    <td>{coin.current_price}</td>
                    <td>{coin.price_change_percentage_24h}</td>
                    <td>{coin.market_cap}</td>
                </tr>
                })}
            </tbody>
        </table>
    )
}

export default CoinTable;