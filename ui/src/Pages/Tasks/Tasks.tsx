import React from 'react';
import epochs from "../../const_data/out.json";
import {Dropdown, DropdownItemProps, Search} from "semantic-ui-react";
import "./Tasks.css";
import TaskItem from "./TaskItem/TaskItem";
import ImagePattern from "../../Components/ImagePattern";

export default class RunningTasks extends React.Component<any, any>
{
    private _epochSelectionItems : DropdownItemProps[];

    constructor(props: any)
    {
        super(props);
        this._epochSelectionItems = epochs.map(epochItem =>
            {
                return {key: epochItem.epoch, text: epochItem.epoch, value: epochItem.epoch};
            });
    };

    render() {
        return (
            <div className='tasks'>
                <div className='running-tasks-list'>
                    <h1>Запущенные задачи</h1>
                    <div className="tk-blk tk-wdg__wrap">
                        <Search  />
                        <div className="tk-wdg__area">
                            <div className="tk-wdg__blk">
                                <TaskItem/>
                                <TaskItem/>
                                <TaskItem/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='task-info'>
                    <h1>
                        Номер эпохи:
                    </h1>
                    <Dropdown
                        search selection options={this._epochSelectionItems}/>
                    <h1>
                        Результаты распознавания
                    </h1>
                    <div className="running-tasks-weights">
                        {epochs.map(epochItem =>
                            epochItem.weights.map(epochItemWeights =>
                                <ImagePattern Values={epochItemWeights}/>))}
                    </div>
                </div>
            </div>
        );
    }
}