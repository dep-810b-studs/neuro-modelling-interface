import React from "react";

export declare interface ImagePatternProps
{
    Values: number [][]
}

export default class ImagePattern extends React.Component<ImagePatternProps, any>
{
    private transpose = (array: number[][]): number[][] =>
        array[0].map((_, colIndex) => array.map(row => row[colIndex]));

    private getClassNameForPatternItem = (itemValue: number) : string =>
        itemValue == 1 ? "pattern-item-black" : "pattern-item-white";


    render()
    {
        return (
            <div>
                {this.props.Values.map(row =>
                <div className="pattern-row">
                    {row.map(item =>
                    <div className={this.getClassNameForPatternItem(item)}>
                        &#160;
                    </div>)}
                    <br/>
                </div>)}
            </div>
        )
    }
};