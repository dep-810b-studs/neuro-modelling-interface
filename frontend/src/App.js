import React from 'react';
import ReactDOM from 'react-dom'
  
const App = () => {
  const getLeaders = event =>{
    const axios = require('axios');
    axios.get(`${process.env.REACT_APP_LEADERS_API_URL}/leaders`)
         .then(resp =>{
          console.log(resp.data);
          ReactDOM.render(<ol>{resp.data.map(leader => <li>{leader}</li>)}</ol>
          ,document.getElementById("leaders-list"));
         });
  };

  return (
    <div>
      <h1>Leaders Raiting</h1>
      <button onClick={getLeaders}>Update</button>
      <hr id="leaders-list" />
    </div>
  );
}

export default App;
