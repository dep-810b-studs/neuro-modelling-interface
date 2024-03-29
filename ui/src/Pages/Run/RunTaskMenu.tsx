import {Button} from "semantic-ui-react";
import { stateManager } from '../../index';
import LoadFileButton from "./Components/LoadFileButton";
import "./RunTasks.css";

 const RunTaskMenu = () =>{
    return <div className = "button-group">
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
                    onClick={() => stateManager.RunTask()}
                />
            </div>;
};

export default RunTaskMenu;