import React from 'react';
import info from "./../ConstData/info.json";

const model_memristors = info.model_memristors;

export const MemristorParams: React.FunctionComponent = () => (
   <ul>
       {model_memristors
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
