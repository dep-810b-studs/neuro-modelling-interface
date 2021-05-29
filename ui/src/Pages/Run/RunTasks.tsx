import React from "react";
import './RunTasks.css';
import MemristorParams from "./Components/MemristorParams";
import NetworkParams from "./Components/NetworkParams";
import Patterns from "../CommonComponents/Patterns";
import RunTaskMenu from "./RunTaskMenu";
import {RunTaskInfo} from "../../State/InformationContracts";
import PropsWrapper from "../../PropsWrapper";

const RunTaskPage = (props: PropsWrapper<RunTaskInfo>) =>
            <div className='home-page-wrapper'>
                <div className='params-section'>
                    <MemristorParams Data={props.Data.model_memristors}/>
                    <NetworkParams Data={props.Data.neural_network}/>
                    <Patterns Data = {props.Data.patterns} />
                </div>
                <RunTaskMenu Data={props.Data}/>
            </div>;
export default RunTaskPage;