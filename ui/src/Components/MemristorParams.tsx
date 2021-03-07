import React from 'react';
import './MemristorParams.css';
import info from "./../const_data/info.json";

const modelMemristors = info.model_memristors;

export const MemristorParams: React.FunctionComponent = () => (
   <ul className="memrisotor-params-list">
       {modelMemristors
           .map(model => (
               <li>
                   <a href={model.url}>
                       {model.name}
                   </a>
                   <br/>
                   {model.description}
                   <br/>
               </li>
           ))}
   </ul>
);

export default MemristorParams;
