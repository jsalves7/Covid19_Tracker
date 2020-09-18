import React from 'react';
import Loading from './loading';
import {useState} from "../../store/store";

const LoadingConnected = () => {

    const {app: {loading}} = useState();

    return <Loading loading={loading}/>;
}

export default LoadingConnected;
