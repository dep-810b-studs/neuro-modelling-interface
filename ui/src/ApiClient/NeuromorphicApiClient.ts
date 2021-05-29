import { RunTaskInfo, TaskStatus } from '../State/InformationContracts';
import INeuromorphicApiClient from './INeuromorphicApiClient';

export default class NeuromorphicApiClient implements INeuromorphicApiClient{
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
        throw new Error('Method not implemented.');
    }

}