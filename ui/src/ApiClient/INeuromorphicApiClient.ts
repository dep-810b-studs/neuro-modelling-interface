import { RunTaskInfo } from "../State/InformationContracts";
import {NeuromorphicEpochResult, NeuromorphicModuleRunInput, TaskStatus} from "../Dto/ApiContracts";


export default interface INeuromorphicApiClient{
    runTask(runInput: NeuromorphicModuleRunInput): Promise<TaskStatus>;
    stopTask(id: String): TaskStatus;
    getTaskStatus(id: String): TaskStatus;
    getAllTasksStatus(): Promise<TaskStatus[]>;
    getTaskLogs(taskId: string): Promise<string>;
    getTaskResult(taskId: string): Promise<NeuromorphicEpochResult[]>
    getTaskInputExample(): RunTaskInfo;
    isApiWorking(): Promise<boolean>;
}