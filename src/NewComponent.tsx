import React from 'react';
import {FilterButtonsType} from "./App";
type NewComponentPropsType = {
    currentMoney: any
    filterButton: (nameButton: FilterButtonsType) => void
}

const NewComponent = (props: NewComponentPropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney}
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