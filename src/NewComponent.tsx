import React from 'react';
import {FilterButtonsType} from "./App";
type NewComponentPropsType = {
    getFilterForMoney: () => Array<MoneyType>
    filterButton: (nameButton: FilterButtonsType) => void
}
type MoneyType = {
    banknots: string
    value: number
    number: string
}
const NewComponent = (props: NewComponentPropsType) => {
    const currentMoney = props.getFilterForMoney().map((cash, index) => {
        return(
            <li key={index}>
                <span> {cash.banknots}</span>
                <span> {cash.value}</span>
                <span> {cash.number}</span>
            </li>
        );
    })
    return (
        <>
            <ul>
                {currentMoney}
            </ul>
            <div className={'filterButtons'}>
                <button onClick={() => props.filterButton('all')}>all</button>
                <button onClick={() => props.filterButton('RUBLS')}>rubles</button>
                <button onClick={() => props.filterButton('Dollars')}>Dollars</button>
            </div>
        </>
    );
};

export default NewComponent;