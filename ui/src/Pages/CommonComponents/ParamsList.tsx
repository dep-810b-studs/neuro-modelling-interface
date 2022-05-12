import React from "react";
import {Param} from "../../State/InformationContracts";
import {stateManager} from "../../index";
import {ParamGroup} from "../../State/Store";

type ParamsListProps = {
  Data: Param[];
  Group: ParamGroup;
};

const ParamsList = (props: ParamsListProps) => {

let paramName = "";
let paramValue = 0;

return (<table className="table table-bordered">
        <thead>
        <tr>
            <th>Параметр</th>
            <th>Значение</th>
        </tr>
        </thead>
        <tbody>
        {props.Data.map((row, index) => {
            return (
                <tr key={index}>
                    <td>
                        <input type='text' className='form-control' step='1' min="1" value={row.name}/>
                    </td>
                    <td>
                        <input type='number' className='form-control'
                               name={row.name} defaultValue={row.value}
                               onChange={(e)=> stateManager.SetInputParam(props.Group, row.name, parseFloat(e.target.value) )}
                        />
                    </td>
                </tr>);
        })}
        </tbody>
    </table>);
}

export default ParamsList;