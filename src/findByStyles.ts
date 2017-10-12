import { css } from 'aphrodite';
import { HTMLAttributes } from 'react';
import { ReactWrapper, ShallowWrapper } from 'enzyme'; //tslint:disable-line

declare module 'enzyme' {
	interface ShallowWrapper<P, S> { //tslint:disable-line
        findByStyles(...aphroditeStyles: any[]): ShallowWrapper<HTMLAttributes, any>;
    }

	interface ReactWrapper<P, S> { //tslint:disable-line
        findByStyles(...aphroditeStyles: any[]): ReactWrapper<HTMLAttributes, any>;
    }
}

declare var ShallowWrapper: any;
declare var ReactWrapper: any;

function findByStyles(...styles: any[]) {
    return this.find(`.${css(...styles)}`);
}

ShallowWrapper.prototype.findByStyles = findByStyles;
ReactWrapper.prototype.findByStyles = findByStyles;