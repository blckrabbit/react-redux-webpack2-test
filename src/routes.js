/**
 * Created by yongyuehuang on 2017/1/15.
 */
import React from 'react';
import { BrowserRouter, HashRouter, Match, Router, Route, Redirect } from 'react-router';

import App from 'containers/app';
import Home from 'containers/Home/home'
import Search from 'containers/Search/search'
// const Search = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('containers/Search/search').default)
//     },'search')
// }

export default (
    <BrowserRouter>
        <App>
            <Match exactly pattern="/" component={Home} />
            <Match pattern="/search" component={Search} />
            {/*在这里添加你的Route*/}
        </App>
    </BrowserRouter>
);
