import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import sum from '@/test';

const s = sum(1, 99)
console.log(s);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
