import {Component} from "react";
import {Link} from "@material-ui/core";

export default class TaskItem extends Component<any,any>{
    render(){
        return (
            <div className="tk-item flbxc bgca-5">
                <div className="tk-item__wrap clr-7">
                    <div className="frm-line tk-item__line">
                        <i className="clipboard outline icon clr-6i"></i>
                        <span>1</span>
                    </div>
                    <div className="frm-line tk-item__line">
                        <i className="calendar check outline icon clr-6i"></i>
                        <span>04.04.2021</span>
                    </div>
                    <div className="frm-line tk-item__line">
                        <i className="clock outline icon clr-6i"></i>
                        <span>Running</span>
                    </div>
                </div>
            </div>
        );
    }
}