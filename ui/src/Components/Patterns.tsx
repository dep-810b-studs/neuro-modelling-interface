import React from 'react';
import './Patterns.css';
import info from "./../const_data/info.json";
import ImagePattern from "./ImagePattern";
import {Button} from "semantic-ui-react";

const patterns = info.patterns;

export const Patterns: React.FunctionComponent = () => (
    <div className="patterns-wrapper">
        <h3>
            Шаблоны для распознавания
        </h3>
        <div className="patterns">
            {patterns.map(pattern => (<ImagePattern Values={pattern}/>))}
        </div>
        <Button icon='plus'/>
    </div>
);

export default Patterns;