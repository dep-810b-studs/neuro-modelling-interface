import {TaskStatus} from "../../Dto/ApiContracts";

type TaskItemProps = {
  Data: TaskStatus;
  AboutCallback: (taskId: string)=>void;
};

const TaskItem = (props: TaskItemProps) =>
    <div className='task-info'>
        <div >
            <i className="clipboard outline icon clr-6i"></i>
            <span>{props.Data.id}</span>
        </div>
        <div >
            <i className="calendar check outline icon clr-6i"></i>
            <span>{props.Data.date}</span>
        </div>
        <div >
            <i className="clock outline icon clr-6i"></i>
            <span>{props.Data.status}</span>
        </div>
        <div >
            <a className="Details" onClick={() => props.AboutCallback(props.Data.id)}>Подробнее</a>
        </div>
        <h4/>
    </div>;

export default TaskItem;
