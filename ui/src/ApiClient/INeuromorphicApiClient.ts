import { RunTaskInfo, TaskStatus } from "../State/InformationContracts";

export default interface INeuromorphicApiClient{
    runTask(taskInfo: RunTaskInfo): TaskStatus;
    stopTask(id: String): TaskStatus;
    getTaskStatus(id: String): TaskStatus;
    getAllTasksStatus(): TaskStatus[];
    getTaskInputExample(): RunTaskInfo;
}