import React from "react"
import './card.css';
import { Monster } from "../../App";

export interface CardProps {
    monster: Monster
}


const Card = ({ monster: { id, name, email } }: CardProps) => {

    return (
        <div className='card-container' key={id}>
            <h1>Ciao Fabio</h1>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}


export default Card;