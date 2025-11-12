import React from 'react';
import {createRoot} from 'react-dom/client';
import ChatWindow from './components/ChatWindow';

function App(){return <div style={{padding:20}}><h2>ImproveTogether - Demo</h2><ChatWindow/></div>}
createRoot(document.getElementById('root')).render(<App/>);
