import React from 'react';
import './card-list.css';
import Card from '../card/card.component.tsx';
import { CardListProps } from '../../util/myInterface.ts';


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




