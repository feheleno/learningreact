import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/globals.scss';
import AddColorForm from './AddColorForm';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<AddColorForm onNewColor={(title, color) => {
//     console.log(`TODO: add new ${title} and ${color} to the list`)
//     console.log(`TODO: render UI with new Color`)
// }} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
