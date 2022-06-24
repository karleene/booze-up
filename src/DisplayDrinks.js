const DisplayDrinks = (props) => {

    console.log(props.liquorResults.idDrink);
    return(
        <section>
            {
                props.liquorResults.slice(0, 9).map((result) => {
                    return(
                        <div 
                        className="drinkContainer"
                        key={result.idDrink}>
                            <h2>{result.strDrink}</h2>
                            <img src={result.strDrinkThumb} alt={result.strDrink}/>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default DisplayDrinks;
