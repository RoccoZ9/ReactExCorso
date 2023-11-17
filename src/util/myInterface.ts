import React, { ChangeEvent } from "react";

export interface Monster {
    id: string;
    name: string;
    email: string;
  }

export interface CardListProps {
    monsters: Monster[];
}


export interface CardProps {
    monster: Monster
}


export interface SearchBarProps extends ChangeHanlerProps {
    className: string;
    placeholder?: string;
}


export interface ChangeHanlerProps {
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}