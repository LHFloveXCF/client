// 项目启动必须的包
import React from 'react';
import ReactDOM from 'react-dom/client';
// 导入项目入口文件
// import App from './App';
// import JsxTest from './jsx/jsx';
// import JsxList from './jsx/jsxList';
// import JsxCondition from './jsx/jsxCondition';
// import DemoEvent from './event/demo';
// import Parent from './simple/HookDemo';
import Article from './test/article';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Parent />
    // <JsxTest></JsxTest>
    // <JsxList></JsxList>
    <Article/>
);
