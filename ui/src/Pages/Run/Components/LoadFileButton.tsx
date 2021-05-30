import React from 'react';
import { Button } from 'semantic-ui-react';
import { stateManager } from '../../..';
import './LoadFileButton.css';
import "./../RunTasks.css";

const LoadFileButton = () => {
    let fileInputRef = React.createRef<any>();
    return  <div className="button-item">
                <Button className="load-file-button"
                    content="Загрузить параметры из файла" 
                    icon="file"
                    onClick={() => fileInputRef.current.click()}
                />
                <input
                    ref={fileInputRef}
                    type="file"
                    hidden
                    onChange={(e) => stateManager.ReadTaskInputFromFile(e)}
                />
    </div>;
}

export default LoadFileButton;