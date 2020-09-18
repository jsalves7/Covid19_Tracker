import React from 'react';
import PropTypes from 'prop-types';
import {Container, Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './cards.module.scss';

const Cards = ({confirmed, recovered, deaths, lastUpdate}) => {

    const {value: confirmedValue} = confirmed;
    const {value: recoveredValue} = recovered;
    const {value: deathsValue} = deaths;

    return (
        <Container>
            <Grid spacing={3} container justify={"center"}>
                <Grid xs={12} sm={3} md={3} item>
                    <Card className={styles.card}>
                        <CardContent className={styles.confirmed}>
                            <Typography color={"textSecondary"} gutterBottom>Infected</Typography>
                            <Typography variant="h5">
                                <CountUp 
                                    start={confirmedValue - 10000000} 
                                    end={confirmedValue} 
                                    duration={3} 
                                    separator=","
                                />
                            </Typography>
                            <Typography color={"textSecondary"}>{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant={"body2"}>Number of active cases of COVID-19</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} sm={3} md={3} item>
                    <Card className={styles.card}>
                        <CardContent className={styles.recovered}>
                            <Typography color={"textSecondary"} gutterBottom>Recovered</Typography>
                            <Typography variant={"h5"}>
                                <CountUp 
                                    start={recoveredValue - 10000000}
                                    end={recoveredValue}
                                    duration={3}
                                    separator=","
                                />    
                            </Typography>
                            <Typography color={"textSecondary"}>{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant={"body2"}>Number of recoveries from COVID-19</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} sm={3} md={3} item>
                    <Card className={styles.card}>
                        <CardContent className={styles.deaths}>
                            <Typography color={"textSecondary"} gutterBottom>Deaths</Typography>
                            <Typography variant={"h5"}>
                                <CountUp 
                                    start={deathsValue - 1000000}
                                    end={deathsValue}
                                    duration={3}
                                    separator=","
                                />
                            </Typography>
                            <Typography color={"textSecondary"}>{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant={"body2"}>Number of deaths caused by COVID-19</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

Cards.propTypes = {
    confirmed: PropTypes.object,
    recovered: PropTypes.object,
    deaths: PropTypes.object,
    lastUpdate: PropTypes.any,
}

Cards.defaultProps = {
    confirmed: {},
    recovered: {},
    deaths: {},
    lastUpdate: null,
}


export default Cards;
