import React from "react";


const BookCard = (props) => {
    return(
        <div>
            <div className="card">
                <div className="card-body">
                    <img src={props.image} alt="Dark Lover" height={200} width={200}/>
                    <div className="card-description">
                        <h2>{props.title}</h2>
                        <h3>{props.author}</h3>
                        <p>{props.published}</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard;