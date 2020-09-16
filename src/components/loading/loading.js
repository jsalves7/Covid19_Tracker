import React from 'react'
import PropTypes from 'prop-types'
import {Backdrop, CircularProgress} from '@material-ui/core';
import styles from './loading.module.scss';

const loading = ({loading, addEndListener, onClick, transitionDuration, timeout, icon}) => {

    if (!loading) return null;

    return (
        <Backdrop 
            className={styles.loading}
            addEndListener={addEndListener}
            onClick={onClick}
            open={loading}
            transitionDuration={transitionDuration}
            timeout={timeout}>
            {icon}
        </Backdrop> 
    )
}

loading.propTypes = {
    loading: PropTypes.bool,
    addEndListener: PropTypes.func,
    onClick: PropTypes.func,
    transitionDuration: PropTypes.number,
    timeout: PropTypes.number,
    icon: PropTypes.any,
}

loading.defaultProps = {
    loading: false,
    addEndListener: () => null,
    onClick: () => null,
    transitionDuration: 100,
    timeout: 100,
    icon: <CircularProgress color="inherit"/>
}

export default loading
