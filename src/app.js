import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

let HelloWorld = () => {
    return <h1>Hello World!</h1>
}

ReactDom.render(
    <HelloWorld/>,
    document.getElementById('app')
);