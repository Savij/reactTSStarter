import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './Helper/tsHelpers';
import { Router, Route, IndexRedirect, browserHistory, withRouter } from 'react-router';
import NotFound from './NotFound';
import ProductChooser from './Sold/ProductChooser/ProductChooser';
import Sold from './Sold/Sold';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path='App'>
                <Route path='ProductChooser' component={ withRouter(ProductChooser) }>
                    <IndexRedirect to='noId' />
                    <Route path=':id' />
                </Route>
                <Route path='Sold' component={ withRouter(Sold) }>
                    <IndexRedirect to='noId' />
                    <Route path=':id(/:token)(/:planTrack)' />
                </Route>
            </Route>
            <Route path='*' component={ NotFound }/>
        </Router>,
        document.getElementById('app')
    );
});