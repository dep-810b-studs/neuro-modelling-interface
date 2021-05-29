import React from "react";
import { stateManager } from '../../index';
import PropsWrapper from "../../PropsWrapper";

export function ImagePattern(imagePatternProps: PropsWrapper<number[][]>) {
    const canvas = React.useRef(null);

    React.useEffect(() => {
        if(canvas == null || canvas.current == null)
            return;

        // @ts-ignore ignore cause one line upper exist handling case when canvas is null
        const context = canvas.current.getContext("2d") as CanvasRenderingContext2D;

        const cellSide = 30;

        for (let i = 0; i < imagePatternProps.Data.length; i++) {
            for (let j = 0; j < imagePatternProps.Data[i].length; j++) {

                let x = j * cellSide;
                let y = i * cellSide;

                let color = imagePatternProps.Data[i][j] * 255;
                const cellColor = `rgb(${color},${color},${color})`;

                context.beginPath();
                context.fillStyle = cellColor;
                context.fillRect(x, y, cellSide, cellSide);
            }
        }}, [canvas]);

       return <canvas
                    height={300}
                    ref={canvas}
                    onClick={(e) => stateManager.UpdatePatterns(e)}
                />;
};

export default ImagePattern;