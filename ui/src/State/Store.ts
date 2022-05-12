import OutputExample from "./out.json";
import {Param, RunTaskInfo} from "./InformationContracts";
import { ChangeEvent } from "react";
import RunTaskFileManager, { IRunTaskFileManager } from './RunTaskFileManager'
import INeuromorphicApiClient from "../ApiClient/INeuromorphicApiClient";
import NeuromorphicApiClient from "../ApiClient/NeuromorphicApiClient";
import {NeuromorphicEpochResult, TaskStatus} from "../Dto/ApiContracts";
import NeuromorphicModuleConverter from "../ApiClient/NeuromorphicModuleConverter";
import replacer from "../Utils/MapSerializer";

export class State {
    public TaskInformation!: RunTaskInfo;
    public NeuromorphicEpochsResults!: NeuromorphicEpochResult[];
    public RunProtocol!: String;
    public SelectedTaskStatusId!: String;
    public SelectedTaskResultId!: String;
    public SelectedMemristorId!: number;
}

export enum ParamGroup{
    Memristor,
    NeuralNetwork
}

export interface IStateManager{
    Subscribe(observer: (state: State) => void): void;

    SetInputParam(paramGroup: ParamGroup, paramName: String, paramValue: number): void;
    SelectMemristor(memristorId: number): void;
    SelectTaskProtocol(taskId: string): void;
    SelectTaskResult(taskId: string): void;

    RunTask(): void;
    ReadTaskInputFromFile(e: ChangeEvent<HTMLInputElement>): void;
    SaveTaskInputToFile(): void;
    GetData(): State;
}

export function initStateManager(observer: (state: State) => void): IStateManager{
        let apiClient: INeuromorphicApiClient = new NeuromorphicApiClient();
        let runTaskFileManager: IRunTaskFileManager = new RunTaskFileManager();
        let stateManager = new StateManager(apiClient, runTaskFileManager);
        stateManager.Subscribe(observer);
        return stateManager;
}

export default class StateManager implements IStateManager{

    private _observer!: ((state: State) => void);
    private _state: State;
    private _runTaskFileManager: IRunTaskFileManager;
    private _neuromorphicApiClient: INeuromorphicApiClient;
    private _neuromorphicConverter: NeuromorphicModuleConverter;

    constructor(neuromorphicApiClient: INeuromorphicApiClient, runTaskFileManager: IRunTaskFileManager){
        this._neuromorphicApiClient = neuromorphicApiClient;
        this._runTaskFileManager = runTaskFileManager;
        this._neuromorphicConverter = new NeuromorphicModuleConverter();
        this._state = new State();
        this._state.TaskInformation = neuromorphicApiClient.getTaskInputExample();
        this._state.NeuromorphicEpochsResults = OutputExample.map(example => new NeuromorphicEpochResult(example.epoch, example.weights));
        this._state.SelectedMemristorId = 0;
    }


    SelectMemristor(memristorId: number): void {
        this._state.SelectedMemristorId = memristorId;
        this._observer(this._state);
    }

    SetInputParam(paramGroup: ParamGroup, paramName: String, paramValue: number): void {

        if(paramValue < 0)
            return;

        switch (paramName) {
            case "epoch_count":
                this._state.TaskInformation.neural_network.n_epochs = paramValue;
                break;
            default:
                let params = paramGroup == ParamGroup.Memristor
                    ? this._state.TaskInformation.model_memristors[this._state.SelectedMemristorId].params
                    : this._state.TaskInformation.neural_network.params;
                this.setParam(params, paramName, paramValue);
                break;
        }
    }

    private setParam(params: Param[], paramName: String, paramValue: number): void{
        let paramIndex = params.findIndex(param => param.name == paramName);
        params[paramIndex].value = paramValue;
    }

    SelectTaskProtocol(taskId: string) {
        this._state.SelectedTaskStatusId = taskId;
        this._neuromorphicApiClient
            .getTaskLogs(taskId)
            .then(taskLogs => {
                this._state.RunProtocol = taskLogs;
                this._observer(this._state);
            });
    }

    SelectTaskResult(taskId: string): void {
        this._state.SelectedTaskResultId = taskId;
        this._neuromorphicApiClient
            .getTaskResult(taskId)
            .then(taskResult => {
                this._state.NeuromorphicEpochsResults = taskResult;
                this._observer(this._state);
            });
        this._observer(this._state);
    }

    RunTask(): void {
        if(!this._neuromorphicApiClient.isApiWorking()){
            alert("Невозможно запустить задачу. Нет доступа к системе нейроморфного моделирования.");
            return;
        }


        let convertedRunInput = this._neuromorphicConverter.convert(this._state.TaskInformation, this._state.SelectedMemristorId);

        this._neuromorphicApiClient.runTask(convertedRunInput)
            .then(result => {
                let taskStatus = result as TaskStatus;
                alert(`Задача запущена. Id = ${taskStatus.id}`);
            });
    }

    Subscribe(observer: (state: State) => void){
        this._observer = observer;
    }

    ReadTaskInputFromFile(e: ChangeEvent<HTMLInputElement>){
        if(e.target.files == null)
            return;
        let runTaskInputFile = e.target.files[0];
        this._runTaskFileManager.loadInput(runTaskInputFile)
            .then((runTaskInfo) => {
                this._state.TaskInformation = runTaskInfo;
                this._observer(this._state);
            });
    }

    SaveTaskInputToFile(){
        this._runTaskFileManager.saveInput(this._state.TaskInformation);
    }

    GetData(): State{
        return this._state;
    }
}
