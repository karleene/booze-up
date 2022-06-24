import { useState } from "react";

const Form = (props) => {

    const [selectValue, setSelectValue] = useState('placeholder')

    const handleChange = (event) => {
        setSelectValue(event.target.value)
    }

    return(
        <form action="" onSubmit={(event) => {
            props.handleSubmit(event, selectValue)
        }}>
            <label htmlFor="liquorChoice"></label>
            <select name="" id="liquorChoice" onChange={handleChange} value={selectValue}>
                <option value="placeholder" disabled>Choose a liquor</option>
                <option value="bourbon">Bourbon</option>
                <option value="brandy">Brandy</option>
                <option value="gin">Gin</option>
                <option value="rum">Rum</option>
                <option value="scotch">Scotch</option>
                <option value="tequila">Tequila</option>
                <option value="vodka">Vodka</option>
                <option value="whiskey">Whiskey</option>
            </select>
            <button>Show Drinks</button>
        </form>
    )
}

export default Form; 