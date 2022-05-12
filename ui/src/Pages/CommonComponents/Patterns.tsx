import './Patterns.css';
import ImagePattern from "./ImagePattern";
import PropsWrapper from "../../PropsWrapper";

const ImagePatterns = (props: PropsWrapper<number[][][]>) =>
       <div className="patterns-wrapper">
            <h3>
                Шаблоны для распознавания
            </h3>
            <div className="patterns">
                {props.Data.map((pattern, patternNumber) => 
                    (<ImagePattern 
                        Pattern={pattern} 
                        PatternNumber = {patternNumber}
                        EidatblePattern = {true}
                        Width={240}
                        Height={250}
                    />))}
            </div>
        </div>;

export default ImagePatterns;