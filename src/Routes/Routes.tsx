import * as React from 'react';
import * as ReactDom from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import AppHost from '../AppHost/AppHost';
import Home from '../Home/Home';
import '../Helper/tsHelpers';

export default class Routes extends React.Component<{}, {}> {
    public componentWillMount() {

    }

    public render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={(context) => { return (<AppHost {...context} />); }}>
                    <IndexRoute component={() => (<Home />)} />
                </Route>
            </Router>
        );
    }
}
ReactDom.render(<Routes />, document.getElementById('app'));
