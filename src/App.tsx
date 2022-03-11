import React, {useState} from 'react';
import './App.css';

type FilterButtonsType = 'all' | 'RUBLS' | 'Dollars'

function App() {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [filter, setFilter] = useState<FilterButtonsType>('all')

    const getFilterForMoney = () => {
        switch (filter){
            case "RUBLS":
                return money.filter(f => f.banknots === 'RUBLS')
            case "Dollars":
                return money.filter(f => f.banknots === 'Dollars')
            default:
                return money
        }
    }

    const currentMoney = getFilterForMoney().map(cash => {
        return(
            <li>
                <span> {cash.banknots}</span>
                <span> {cash.value}</span>
                <span> {cash.number}</span>
            </li>
        );
    })

    const filterButton = (nameButton: FilterButtonsType) => {
        setFilter(nameButton)
    }

    return (
        <div>
            <ul>
                {currentMoney}
            </ul>
            <div className={'filterButtons'}>
                <button onClick={() => filterButton('all')}>all</button>
                <button onClick={() => filterButton('RUBLS')}>rubles</button>
                <button onClick={() => filterButton('Dollars')}>Dollars</button>
            </div>
        </div>
    );
}

export default App;
