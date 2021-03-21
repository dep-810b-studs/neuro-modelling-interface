import React from 'react';
import './NetworkParams.css';
import info from "./../const_data/info.json";

const networkParams = info.neural_network;

export const NetworkParams: React.FunctionComponent = () => (
    <div className="nertwork-params-list">
        <h3>
            Параметры нейросети
        </h3>
        {networkParams.description}
    </div>
);

export default NetworkParams;