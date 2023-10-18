import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main application component (e.g., App.js)
import 'semantic-ui-css/semantic.min.css'; // Import Semantic UI CSS if not already done

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
