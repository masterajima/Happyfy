import React from "react"
import { ReactDOM } from "react";
import App from './App'
if('render without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<App/>,div);
    ReactDOM.unmountcomponentAtNode(div);
    
});