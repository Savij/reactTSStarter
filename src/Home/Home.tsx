import * as React from 'react';
import { getStuff } from '../../Api/ReactStarter.Api';
export default class HomeComponent extends React.Component<{}, {}> {

    public componentDidMount() {
        getStuff('1', '2').execute().then(result => {
            // do stuff here
        });
    }
    public render() {
        return <div>So this is love....</div>;
    }
}