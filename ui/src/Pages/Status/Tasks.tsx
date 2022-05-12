import React from 'react';
import "./../Tasks.css";
import TaskItem from "../CommonComponents/TaskItem";
import {TaskStatus} from "../../Dto/ApiContracts";
import ApiDontRunning from "../ApiDontRunning";
import RunProtocol from "./RunProtocol";
import {stateManager} from "../../index";

type TasksStatusProps = {
    Statuses: TaskStatus[];
    RunProtocol: [String,String];
    IsReady: boolean;
}

const TasksStatus = (props: TasksStatusProps) => {
        if(props.IsReady){

            let [runLog, runId] =  props.RunProtocol;

            return (
                <div className='tasks'>
                    <div className='tasks-res'>
                        <div className='tasks-res-header'>
                            <h1>Протокол выполнения задачи</h1>
                            <h1>{runId}</h1>
                        </div>
                        <RunProtocol Data={runLog}/>
                    </div>
                    <div className='running-tasks-list'>
                        <h1>Запущенные задачи</h1>
                        <div className='tasks-status'>
                            {props.Statuses.map(taskStatus =>
                                <TaskItem
                                    Data={taskStatus}
                                    AboutCallback={(id) => stateManager.SelectTaskProtocol(id)}
                                />)}
                        </div>
                    </div>
                </div>
            );
        }

        return <ApiDontRunning/>;
    };

export default TasksStatus;