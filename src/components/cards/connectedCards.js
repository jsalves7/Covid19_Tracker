import React, {useEffect} from 'react';
import {useState, useActions} from '../../store/store';
import Cards from './cards';

const ConnectedCards = () => {

    const {covidTracker: {globalData}} = useState();
    const {covidTracker: {retrieveGlobalData}} = useActions();

    useEffect(() => {
        retrieveGlobalData();
    }, [retrieveGlobalData]);

    const {confirmed, recovered, deaths, lastUpdate} = globalData;

    return (
        <Cards 
            confirmed={confirmed}
            recovered={recovered}
            deaths={deaths}
            lastUpdate={lastUpdate}
        />
    )
}

export default ConnectedCards;
