import React, { Component } from 'react';
import './card.css';
import './card-list.css';
class CardList extends Component {
    render() {
        console.log('render from CardList');
        const { monsters } = this.props;
        return (
            <div className='card-list'>
                {monsters.map((monster) => {
                    const { name, id, email } = monster;
                    return (
                        <div className='card-container' key={id}>
                            <h1>Ciao Fabio</h1>
                            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default CardList;




