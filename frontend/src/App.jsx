import React from 'react';
import ReactDOM from 'react-dom'

const App = () => {
  function getLeaders(event) {
    const axios = require('axios');
    axios.get(`${process.env.REACT_APP_LEADERS_API_URL}/runs`)
         .then((resp) =>{
          console.log(resp.data);
          ReactDOM.render(<ol>{resp.data.map((run) => <li>{run.id} {run.userId} {run.startTime} {run.endTime} {run.status}</li>)}</ol>
          ,document.getElementById("leaders-list"));
         });
  };

  return (
    <div>
      <h1>Список задач</h1>
      <button onClick={getLeaders}>Update</button>
      <hr id="leaders-list" />
    </div>
  );
}

export default App;
