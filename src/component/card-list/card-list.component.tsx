import React, { Component } from 'react';
import './card-list.css';
import Card from '../card/card.component.js';
import { Monster } from '../../App.js';

export interface CardListProps {
    monsters: Monster[];
}


const CardList = ({ monsters }: CardListProps) => {
    return (
        <div className='card-list'>
            {monsters.map((monster) => {

                return (
                    <Card monster={monster} />
                )
            })}
        </div>
    );
}

export default CardList;




