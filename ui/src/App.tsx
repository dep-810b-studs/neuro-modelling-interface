import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Controls/Navbar';
import TasksResults from './Pages/Result/TaskskResults';
import RunTaskPage from "./Pages/Run/RunTasks";
import {RunTaskInfo} from "./State/InformationContracts";
import {NeuromorphicEpochResult, TaskStatus} from "./Dto/ApiContracts";
import TasksStatus from "./Pages/Status/Tasks";

type AppProps = {
  Data: RunTaskInfo;
  AllTasks: TaskStatus[];
  FinishedTasks: TaskStatus[];
  RunProtocol: [String, String];
  NeuromorphicEpochsResults: [NeuromorphicEpochResult[], String];
  SelectedMemristorId: number;
  IsReady: boolean;
}

export default function App(props: AppProps) {

  return (<Router>
          <Navbar/>
            <Switch>
              <Route path='/tasks/run' exact component={() => <RunTaskPage
                  Info={props.Data}
                  SelectedMemristorId={props.SelectedMemristorId}
              />} />
              <Route path='/tasks/status' component={() => <TasksStatus
                  Statuses={props.AllTasks}
                  RunProtocol={props.RunProtocol}
                  IsReady={props.IsReady}/>}/>
              <Route path='/tasks/results' component={() => <TasksResults
                  Statuses={props.FinishedTasks}
                  NeuromorphicEpochsResults={props.NeuromorphicEpochsResults}
                  IsReady={props.IsReady} />} />
            </Switch>
          </Router>);
}