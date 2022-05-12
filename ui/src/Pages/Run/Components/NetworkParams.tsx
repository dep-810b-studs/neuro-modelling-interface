import React from 'react';
import './NetworkParams.css';
import {Input} from "@material-ui/core";
import ParamsList from "../../CommonComponents/ParamsList";
import {Button} from "semantic-ui-react";
import {NeuralNetworkInfo} from "../../../State/InformationContracts";
import PropsWrapper from "../../../PropsWrapper";
import {stateManager} from "../../../index";
import {ParamGroup} from "../../../State/Store";

export const NetworkParams = (props: PropsWrapper<NeuralNetworkInfo>) => {

    let epochCount:number = props.Data.n_epochs;

    return (<div className='network-params'>
            <h3>
                Описание модели нейросети
            </h3>
            {props.Data.description}
            <h3>
                Количество эпох
            </h3>
            <Input
                placeholder={epochCount.toString()}
                inputMode='numeric'
                onChange={(e) => epochCount = parseInt(e.target.value)}
                onMouseLeave={() => stateManager.SetInputParam(ParamGroup.NeuralNetwork, "epoch_count", epochCount)}
            />
            <h3>
                Параметры модели нейросети
            </h3>
            <ParamsList
                Data={props.Data.params}
                Group={ParamGroup.NeuralNetwork}
            />
        </div>
    );
}
export default NetworkParams;