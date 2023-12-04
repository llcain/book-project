import React from "react";


const SearchArea = (props) => {
    return(
        <div className="input-field">
           <form onSubmit={props.searchBook} className="form" action="">            
            <input onChange={props.handleSearch} className="input" type="text" id="lname" name="lname" />
                <button type="submit">Search</button>
                <select>
                    <option>Sort</option>
                    <option>High</option>
                    <option>Low</option>
                </select>
           </form>
        </div>
    )
}

export default SearchArea;