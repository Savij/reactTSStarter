import '../../assets/css/styles.less';
import * as React from 'react';
import '../Helper/tsHelpers';

export default class ProspectContainer extends React.Component<{}, {}> {
    public render() {
        return (
            <div>                
                <div className='appHostContainer'>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}