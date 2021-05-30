import InputExample from "./in_neural_network_modeling_1.json";
import {Memristor, Neuron, RunTaskInput} from "../Dto/ApiContracts";
import {RunTaskInfo} from "./InformationContracts";
import { ChangeEvent } from "react";
import RunTaskFileManager, { IRunTaskFileManager } from './RunTaskFileManager'
import INeuromorphicApiClient from "../ApiClient/INeuromorphicApiClient";
import NeuromorphicApiClientStub from "../ApiClient/NeuromorphicApiClientStub";

export function getRunTaskInputExample() : RunTaskInput {
    const exampleMemristor: Memristor = {
        id : InputExample.memristor.id,
        x0 : InputExample.memristor.x0,
        v_p: InputExample.memristor.v_p,
        v_n: InputExample.memristor.v_n,
        nu_v: InputExample.memristor.nu_v,
        r_on: InputExample.memristor.r_on,
        r_off: InputExample.memristor.r_off,
        d: InputExample.memristor.d
    }
    const exampleNeuron: Neuron = {
        tau_s: InputExample.neuron.tau_s,
        tau_r: InputExample.neuron.tau_r,
        tau_out: InputExample.neuron.tau_out,
        v_th: InputExample.neuron.v_th,
        vp_te: InputExample.neuron.vp_te,
        vn_te: InputExample.neuron.vn_te,
        v0_te: InputExample.neuron.v0_te,
        vp_out: InputExample.neuron.vp_out,
        c_int: InputExample.neuron.c_int,
        r_int: InputExample.neuron.r_int,
        alfa: InputExample.neuron.alfa,
        p_noise: InputExample.neuron.p_noise
    }
    const runInputExample: RunTaskInput = {
        module: InputExample.module,
        seed: InputExample.seed,
        n_epochs: InputExample.n_epochs,
        n_out: InputExample.n_out,
        n_patterns: InputExample.n_patterns,
        w: InputExample.w,
        h: InputExample.h,
        memristor: exampleMemristor,
        neuron: exampleNeuron,
        patterns: InputExample.patterns
    }

    return runInputExample;
}


export interface IStateManager{
    Subscribe(observer: (runTaskInfo: RunTaskInfo) => void): void;
    ReadTaskInputFromFile(e: ChangeEvent<HTMLInputElement>): void;
    SaveTaskInputToFile(): void;
    GetData(): RunTaskInfo;
}

export function initStateManager(observer: (runTaskInfo: RunTaskInfo) => void): IStateManager{
        let apiClient: INeuromorphicApiClient = new NeuromorphicApiClientStub();
        let runTaskFileManager: IRunTaskFileManager = new RunTaskFileManager();
        let stateManager = new StateManager(apiClient, runTaskFileManager);
        stateManager.Subscribe(observer);
        return stateManager;
}

export default class StateManager implements IStateManager{

    private _observer!: ((runTaskInfo: RunTaskInfo) => void);
    private _state: RunTaskInfo;
    private _runTaskFileManager: IRunTaskFileManager;

    constructor(neuromorphicApiClient: INeuromorphicApiClient,
         runTaskFileManager: IRunTaskFileManager){
        this._state = neuromorphicApiClient.getTaskInputExample();
        this._runTaskFileManager = runTaskFileManager;
    }

    Subscribe(observer: (runTaskInfo: RunTaskInfo) => void){
        this._observer = observer;
    }

    ReadTaskInputFromFile(e: ChangeEvent<HTMLInputElement>){
        if(e.target.files == null)
            return;
        let runTaskInputFile = e.target.files[0];
        this._runTaskFileManager.loadInput(runTaskInputFile)
            .then((runTaskInfo) => {
                this._state = runTaskInfo;
                this._observer(this._state);
            });
    }

    SaveTaskInputToFile(){
        this._runTaskFileManager.saveInput(this._state);
    }

    GetData(): RunTaskInfo{
        return this._state;
    }
}
