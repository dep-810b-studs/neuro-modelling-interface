import React from "react";

export declare interface ImagePatternProps
{
    Values: number [][];
}

export const ImagePattern: React.FunctionComponent<ImagePatternProps> = (imagePatternProps: ImagePatternProps) =>
{
    const canvas = React.useRef(null);

    React.useEffect(() =>
    {
        if(canvas == null || canvas.current == null)
            return;

        // @ts-ignore ignore cause one line upper exist handling case when canvas is null
        const context = canvas.current.getContext("2d") as CanvasRenderingContext2D;

        const cellSide = 30;

        for (let i = 0; i < imagePatternProps.Values.length; i++)
        {
            for (let j = 0; j < imagePatternProps.Values[i].length; j++)
            {
                let x = j * cellSide;
                let y = i * cellSide;

                let color = imagePatternProps.Values[i][j] * 255;
                const cellColor = `rgb(${color},${color},${color})`;

                context.beginPath();
                context.fillStyle = cellColor;
                context.fillRect(x, y, cellSide, cellSide);
                }
            }

        }, [canvas]);

       return <canvas height={300} ref={canvas} onClick={() => alert('you click on canvas')}/>;
};

export default ImagePattern;