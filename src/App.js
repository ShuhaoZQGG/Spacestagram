import React from "react";
import './App.css';
import HandleAPI from './components/HandleAPI';
import Layout from './components/Layout';
import Like from './components/Like';

function App() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
    <Layout/>
    <HandleAPI/>
    <Like/>
    <button onClick={refreshPage}>Click to reload!</button>
    </div>
  );
}
export default App;

