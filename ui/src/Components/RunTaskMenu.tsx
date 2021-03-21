import React from "react";
import {Button} from "semantic-ui-react";

export default class RunTaskMenu extends React.Component<any, any>
{
    render()
    {
        return(
            <Button.Group attached='bottom'>
                <Button icon='file' content='Загрузить параметры из файла'/>
                <Button icon='save' content='Сохранить параметры в файл'/>
                <Button icon='play' content='Запустить задачу'/>
            </Button.Group>);
    }
}