import React from 'react';
import {NeuromorphicEpochResult, TaskStatus} from "../../Dto/ApiContracts";
import EpochPatterns from "../CommonComponents/EpochPatterns";
import TaskItem from "../CommonComponents/TaskItem";
import ApiDontRunning from "../ApiDontRunning";
import {stateManager} from "../../index";

type TasksProps = {
    Statuses: TaskStatus[];
    NeuromorphicEpochsResults: [NeuromorphicEpochResult[], String];
    IsReady: boolean;
}

const TasksResult = (props: TasksProps) => {
    if(props.IsReady){

        let [taskResult, taskId] = props.NeuromorphicEpochsResults;

        return (
            <div className='tasks'>
                <div className='tasks-res'>
                    <div className='tasks-res-header'>
                        <h2>Результаты распознавания шаблонов для задачи </h2>
                        <h2>{taskId}</h2>
                    </div>
                    <div className="running-tasks-weights">
                        {taskResult
                            .map(epochItem => <EpochPatterns Patterns={epochItem.matched_patterns} EpochNumber={epochItem.epoch_number}/>)}
                    </div>
                </div>
                <div className='running-tasks-list'>
                    <h1>Завершенные задачи</h1>
                    <div className='tasks-status'>
                        {props.Statuses.map(taskStatus =>
                            <TaskItem
                                Data={taskStatus}
                                AboutCallback={(id) => stateManager.SelectTaskResult(id)}
                            />)}
                    </div>
                </div>
            </div>
        );
    }

    return <ApiDontRunning/>;
};

export default TasksResult;