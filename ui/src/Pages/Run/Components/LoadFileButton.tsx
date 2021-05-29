import { stateManager } from '../../..';
import './LoadFileButton.css';

const LoadFileButton = () =>  
    <input 
        type="file" 
        id="file-input" 
        className="load-file-button"
        onChange={(e) => stateManager.ReadTaskInputFromFile(e)}
    />;

export default LoadFileButton;