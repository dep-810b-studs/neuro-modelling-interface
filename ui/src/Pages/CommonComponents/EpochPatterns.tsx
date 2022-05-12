import ImagePattern from "./ImagePattern";
import React from "react";

type EpochPatternsProps = {
    EpochNumber: number;
    Patterns: number[][][];
}

const EpochPatterns = (props: EpochPatternsProps) =>
    <div>
        <h4>Эпоха №{props.EpochNumber}</h4>
        <div className='epoch-patterns'>
            {props.Patterns.map(epochItemWeights =>
                <ImagePattern
                    Pattern={epochItemWeights}
                    PatternNumber = {-1}
                    EidatblePattern = {false}
                    Width={250}
                    Height={250}
                />)}
        </div>
    </div>;
export default EpochPatterns;