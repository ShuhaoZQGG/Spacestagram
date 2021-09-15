import React from "react";
import './App.css';
import HandleAPI from './components/HandleAPI';
import Layout from './components/Layout';
import Like from './components/Like';

function App() {
  return (
    <div>
    <Layout/>
    <HandleAPI/>
    <Like/>
    </div>
  );
}
export default App;

