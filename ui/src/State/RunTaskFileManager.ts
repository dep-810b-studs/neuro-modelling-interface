import { RunTaskInfo } from "./InformationContracts";

export interface IRunTaskFileManager{
    loadInput(runTaskInputFile : File): Promise<RunTaskInfo>;
    saveInput(runTaskInfo : RunTaskInfo): void;
}

export default class RunTaskFileManager implements IRunTaskFileManager{
    private readonly _fileReader: FileReader;
    private _callBack!: (runTaskInfo: RunTaskInfo) => void;


    constructor() {
        this._fileReader = new FileReader();
        this._fileReader.onload = () => {
            let fileContent =  this._fileReader.result?.toString();
            if (fileContent != undefined){
                let runTaskInfo :RunTaskInfo = JSON.parse(fileContent);
                this._callBack(runTaskInfo);
            }
        };
    }


    loadInput(runTaskInputFile: File): Promise<RunTaskInfo> {
        this._fileReader.readAsText(runTaskInputFile);
        return new Promise<RunTaskInfo>((resolve) => this._callBack = resolve);
    }


    saveInput(runTaskInfo: RunTaskInfo): void{
        var runTaskInputSaver = document.createElement("a");
        var file = new Blob([JSON.stringify(runTaskInfo)], {type: 'text/plain'});
        runTaskInputSaver.href = URL.createObjectURL(file);
        runTaskInputSaver.download = 'RunTaskInput.json';
        runTaskInputSaver.click();
    }

}