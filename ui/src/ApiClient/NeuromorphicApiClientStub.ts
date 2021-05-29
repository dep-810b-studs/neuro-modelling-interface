import { RunTaskInfo, TaskStatus } from '../State/InformationContracts';
import INeuromorphicApiClient from './INeuromorphicApiClient';
import Information from "./../State/info.json";

export default class NeuromorphicApiClientStub implements INeuromorphicApiClient{
    runTask(taskInfo: RunTaskInfo): TaskStatus {
        throw new Error('Method not implemented.');
    }
    stopTask(id: String): TaskStatus {
        throw new Error('Method not implemented.');
    }
    getTaskStatus(id: String): TaskStatus {
        throw new Error('Method not implemented.');
    }
    getAllTasksStatus(): TaskStatus[] {
        throw new Error('Method not implemented.');
    }
    getTaskInputExample(): RunTaskInfo {
        return Information;
    }

}