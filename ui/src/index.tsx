import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import {RunTaskInfo} from "./State/InformationContracts";
import  { initStateManager }  from './State/Store';

function rerenderEntireTree(runTaskInfo : RunTaskInfo) {
    return ReactDOM.render(
        <React.StrictMode>
            <App Data={runTaskInfo}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
export const stateManager = initStateManager(rerenderEntireTree);
rerenderEntireTree(stateManager.GetData());