import React from 'react';
import out from "../const_data/out.json";
import {Input} from "@material-ui/core";
import ParamsList from "../Components/ParamsList";

function Tasks() {
    return (
      <div className='tasks'>
        <h1>Запущенные задачи</h1>
          <h3>
              Номер эпохи: {out.epoch}
          </h3>
      </div>
    );
  }
  
  export default Tasks;