import React, {useEffect} from 'react';
import {useState, useActions} from '../../store/store';
import Chart from './chart';

const ConnectedCards = () => {

    const {covidTracker: {dailyData}} = useState();
    const {covidTracker: {retrieveDailyData}} = useActions();

    useEffect(() => {
        retrieveDailyData();
    }, [retrieveDailyData]);

    const modifiedData = dailyData.map((dailyData) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        reportDate: dailyData.reportDate,
    }));

    return (
        <Chart
            data={modifiedData}
        />
    )
}

export default ConnectedCards;
