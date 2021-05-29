import {Button} from "semantic-ui-react";
import {RunTaskInfo} from "../../State/InformationContracts";
import { stateManager } from '../../index';
import LoadFileButton from "./Components/LoadFileButton";
import "./RunTasks.css";

type RunTaskInputProps = {
    Data: RunTaskInfo;
};

 const RunTaskMenu = (props:RunTaskInputProps) =>
    <div className = "button-group">
        <LoadFileButton/>
        <Button 
            className="button-item" 
            icon='save' 
            content='Сохранить параметры в файл' 
            onClick={() => stateManager.SaveTaskInputToFile()}
        />
        <Button 
            className="button-item"
            icon='play' 
            content='Запустить задачу'
        />
    </div>;

export default RunTaskMenu;