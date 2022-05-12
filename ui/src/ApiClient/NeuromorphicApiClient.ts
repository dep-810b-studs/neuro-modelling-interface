import { RunTaskInfo } from '../State/InformationContracts';
import INeuromorphicApiClient from './INeuromorphicApiClient';
import {NeuromorphicEpochResult, NeuromorphicModuleRunInput, TaskResult, TaskStatus} from "../Dto/ApiContracts";
import Information from "./../State/info.json";
import replacer from "../Utils/MapSerializer";

export default class NeuromorphicApiClient implements INeuromorphicApiClient{

    private readonly _apiUrl: string;
    private readonly _runPath: string;

    constructor() {
        let apiUrl = process.env["REACT_APP_NEUROMORPHIC_API_URL"];
        if(!apiUrl)
            throw new Error("REACT_APP_NEUROMORPHIC_API_URL should be set.");

        this._apiUrl = apiUrl;
        this._runPath = `${this._apiUrl}/api/run`;
    }

    async runTask(runInput: NeuromorphicModuleRunInput): Promise<TaskStatus> {

        let taskStatus = await fetch(this._runPath, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(runInput, replacer)})
            .then(response => response.json())
            .then(data => data as TaskStatus);

        return taskStatus;
    }
    stopTask(id: String): TaskStatus {
        throw new Error('Method not implemented.');
    }
    getTaskStatus(id: String): TaskStatus {
        throw new Error('Method not implemented.');
    }
    async getAllTasksStatus(): Promise<TaskStatus[]> {
        let tasksStatus: TaskStatus[] = [];
        try{
            tasksStatus = await fetch(this._runPath)
                .then(response => response.json())
                .then(data => data as TaskStatus[]);
        }
        finally {
            return tasksStatus;
        }
    }


    async getTaskLogs(taskId: string): Promise<string> {
        let taskLogs = "";

        try {
            taskLogs = await fetch(`${this._runPath}/${taskId}/logs`)
                .then(data => data.text())
        }
        catch (e) {
            return taskLogs;
        }
        finally {
            return taskLogs;
        }
    }


    async getTaskResult(taskId: string): Promise<NeuromorphicEpochResult[]> {
        let neuromorphicEpochsResults: NeuromorphicEpochResult[] = [];

        try {
            neuromorphicEpochsResults = await fetch(`${this._runPath}/${taskId}/result`)
                .then(response => response.json())
                .then(data => data as TaskResult)
                .then(data => data.result);
        }
        finally {
            return neuromorphicEpochsResults;
        }

        return Promise.resolve(neuromorphicEpochsResults);
    }


    getTaskInputExample(): RunTaskInfo {
        return Information;
    }

    async isApiWorking(): Promise<boolean> {
        var apiWorking: boolean = false;
        try {
            apiWorking = await fetch(`${this._apiUrl}/heartbeat`)
                .then(data => data.text())
                .then(result => result == "ok");
        }
        catch(e) {
            return false;
        }
        finally {
            return apiWorking;
        }
    }
}