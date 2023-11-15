import React, { Component } from 'react';

class CardList extends Component {
    render() {
        console.log('render from CardList');
        const { monsters } = this.props;

        return (
            <div>
                <h1>Ciao Fabio</h1>
                {monsters.map((monster) => (
                    <h2 key={monster.id}>{monster.name}</h2>
                ))}
            </div>
        );
    }
}

export default CardList;




