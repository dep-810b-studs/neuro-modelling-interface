import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import {initStateManager, State} from './State/Store';
import NeuromorphicApiClient from "./ApiClient/NeuromorphicApiClient";

require('dotenv').config();
export const apiClient = new NeuromorphicApiClient();

async function rerenderEntireTree(state: State) {
    const allTasks = await apiClient.getAllTasksStatus();
    const finishedTasks = allTasks.filter(task => task.status == 'CALCULATION_SUCCEEDED');
    let apiReady = await apiClient.isApiWorking();

    return ReactDOM.render(
        <React.StrictMode>
            <App
                Data={state.TaskInformation}
                AllTasks={allTasks}
                FinishedTasks={finishedTasks}
                RunProtocol={[state.RunProtocol, state.SelectedTaskStatusId]}
                NeuromorphicEpochsResults={[state.NeuromorphicEpochsResults, state.SelectedTaskResultId]}
                SelectedMemristorId={state.SelectedMemristorId}
                IsReady={apiReady}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


export const stateManager = initStateManager(rerenderEntireTree);
rerenderEntireTree(stateManager.GetData());