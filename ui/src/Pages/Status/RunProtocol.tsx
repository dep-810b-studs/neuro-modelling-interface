import PropsWrapper from "../../PropsWrapper";

export default function RunProtocol(props: PropsWrapper<String>){
    return <textarea
        className="task-logs"
        rows={25}
        cols={100}
        readOnly={true}>
        {props.Data}
    </textarea>;
}