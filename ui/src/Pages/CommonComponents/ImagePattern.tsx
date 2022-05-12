import React, { useRef} from "react";

type ImagePatternProps = {
    Pattern: number[][];
    PatternNumber: number;
    EidatblePattern: boolean;
    Height: number;
    Width: number;
};

function drawPattern(canvas: HTMLCanvasElement, patternToDraw: number[][]){
    if(canvas == null)
        return;

    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const cellSide = 30;

    patternToDraw.forEach((patternRow, patternRowNumber) => {
        patternRow.forEach((patternItem, patternColumnNumber) => {
            let x = patternColumnNumber * cellSide;
            let y = patternRowNumber * cellSide;

            let color = patternItem * 255;
            let cellColor = `rgb(${color},${color},${color})`;

            context.beginPath();
            context.fillStyle = cellColor;
            context.fillRect(x, y, cellSide, cellSide);
        });
    });
};

export function ImagePattern(imagePatternProps: ImagePatternProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    React.useEffect(() => {
        if(canvasRef == null || canvasRef.current == null)
            return;
        const canvas: HTMLCanvasElement = canvasRef.current;
        let pattern = imagePatternProps.Pattern;
        drawPattern(canvas, pattern);
        // @ts-ignore ignore cause one line upper exist handling case when canvas is null
        if(imagePatternProps.EidatblePattern){
            canvas.addEventListener('mousedown', (e) => {
                let x = Math.trunc(e.offsetX/30) - 1;
                let y = Math.trunc(e.offsetY/30);
                pattern[y][x] = pattern[y][x] == 1 ? 0 : 1;
                drawPattern(canvas, pattern)
            });
        }
    }, [canvasRef]);

    return <canvas height={imagePatternProps.Height} width={imagePatternProps.Width}  ref={canvasRef}/>;
};

export default ImagePattern;