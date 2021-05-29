import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Controls/Navbar';
import TasksResults from './Pages/Result/TaskskResults';
import Tasks from './Pages/Status/Tasks';
import RunTaskPage from "./Pages/Run/RunTasks";
import {RunTaskInfo} from "./State/InformationContracts";

type AppProps = {
  Data: RunTaskInfo;
}

export default function App(props: AppProps) {

  return (<Router>
          <Navbar/>
            <Switch>
              <Route path='/tasks/run' exact component={() => <RunTaskPage Data={props.Data}/>} />
              <Route path='/tasks/status' component={Tasks} />
              <Route path='/tasks/results' component={TasksResults} />
            </Switch>
          </Router>);
}