import React from 'react';
import PropTypes from 'prop-types';
import {Container} from '@material-ui/core';
import {Line, Bar} from 'react-chartjs-2';

const Chart = ({ data }) => {

    const lineChart = (
        data.length
            ? (
                <Line
                    data={{
                        labels: data.map(({reportDate}) => reportDate),
                        datasets: [{
                            data: data.map(({confirmed}) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true,
                        }, {
                            data: data.map(({deaths}) => deaths),
                            label: 'Deaths',
                            borderColor: 'rgba(255, 0, 0, 0.5)',
                            fill: true,
                        }],
                    }}
                />
            ) : null
    )

    return (
        <Container style={{width: '85%'}}>
            {lineChart}
        </Container>
    )
}

Chart.propTypes = {
    data: PropTypes.array,
};

Chart.defaultProps = {
    data: [],
};

export default Chart;
