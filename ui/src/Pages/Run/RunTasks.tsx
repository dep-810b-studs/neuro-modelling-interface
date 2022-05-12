import './RunTasks.css';
import MemristorParams from "./Components/MemristorParams";
import NetworkParams from "./Components/NetworkParams";
import Patterns from "../CommonComponents/Patterns";
import RunTaskMenu from "./RunTaskMenu";
import {RunTaskInfo} from "../../State/InformationContracts";

type RunTaskPageProps = {
    Info: RunTaskInfo;
    SelectedMemristorId: number;
}

const RunTaskPage = (props: RunTaskPageProps) =>
            <div className='home-page-wrapper'>
                <div className='params-section'>
                    <MemristorParams Data = {props.Info.model_memristors} SelectedMemristorId = {props.SelectedMemristorId}/>
                    <NetworkParams Data = {props.Info.neural_network}/>
                    <Patterns Data = {props.Info.patterns} />
                </div>
                <RunTaskMenu/>
            </div>;
export default RunTaskPage;