/**
 * 整个应用的入口，包含路由，数据管理加载
 */

import React from "react";
import mirror, { render,Router, hashHistory } from "mirrorx";
import logger from "redux-logger";
import Routes from './routes'

import MainLayout from 'layout/MainLayout/index.js';

import 'core-js/es6/map';
import 'core-js/es6/set';

import "src/app.less";


const MiddlewareConfig = [];

if(__MODE__ == "development") MiddlewareConfig.push(logger);

mirror.defaults({
    historyMode: "hash",
    middlewares: MiddlewareConfig
});

render(
    <Router>
        <MainLayout>
            <Routes />
        </MainLayout>
    </Router>
, document.querySelector("#app"));
