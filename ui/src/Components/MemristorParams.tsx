import React from 'react';
import { Input } from 'semantic-ui-react'
import './MemristorParams.css';
import info from "./../const_data/info.json";

const modelMemristors = info.model_memristors;

export const MemristorParams: React.FunctionComponent = () => (
/*    <div>
       <Input list='memristors' placeholder='Choose memristor model...'  />
       <datalist id='memristors'>
           {modelMemristors.map(model =>
           {
               <option value={model.name}>{model.name}</option>
           })}
       </datalist>
    </div>*/
   <ul className="memrisotor-params-list">
       {modelMemristors
           .map(model => (
               <li>
                   Название модели мемристора &#9;
                   <a href={model.url}>
                       {model.name}
                   </a>
                   <br/>
                   Описание модели мемристора &#9;
                   {model.description}
                   <br/>
                  Параметры модели мемристора &#9;
                  <ul>
                      {model.params.map(param => <li> {param.name} &#9; {param.value}</li>)}
                   </ul>
               </li>
           ))}
   </ul>
);

export default MemristorParams;
