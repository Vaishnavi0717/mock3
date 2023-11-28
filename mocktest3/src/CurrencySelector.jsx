const CurrencySelector=({selectedCurrency, setSelectedCurrency})=>{

    const handleCurrencyChange=(e)=>{
        setSelectedCurrency(e.target.value)
    }
    return (
        <div>
            <select>
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
            </select>
        </div>
    )
}

export default CurrencySelector;