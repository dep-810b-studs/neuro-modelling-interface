import React from 'react';
import './Patterns.css';
import ImagePattern from "./ImagePattern";
import {Button} from "semantic-ui-react";
import PropsWrapper from "../../PropsWrapper";

const ImagePatterns = (props: PropsWrapper<number[][][]>) =>
       <div className="patterns-wrapper">
            <h3>
                Шаблоны для распознавания
            </h3>
            <div className="patterns">
                {props.Data.map(pattern => (<ImagePattern Data={pattern}/>))}
            </div>
            <Button icon='plus'/>
        </div>;

export default ImagePatterns;