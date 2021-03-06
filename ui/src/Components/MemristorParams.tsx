import React from 'react';
import info from "./../ConstData/info.json";

const modelMemristors = info.model_memristors;

export const MemristorParams: React.FunctionComponent = () => (
   <ul>
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
