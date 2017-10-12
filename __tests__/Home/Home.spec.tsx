jest.mock('../../Api/ReactStarter.Api');
jest.mock('react-router');
import * as React from 'react';
import { hashHistory } from 'react-router';
import { css } from 'aphrodite';
import * as api from '../../Api/ReactStarter.Api';
import { shallow, ShallowWrapper } from 'enzyme';
import * as testUtils from '../../testUtils/testUtils';
import HomeComponent from '../../src/Home/Home';

describe('Home', () => {

    let home: ShallowWrapper<{}, {}>;


    const theResult: string[] = [
        'FOO',
        'BAR'
    ];


    const getStuffMock = api.getStuff as jest.Mock<{}>;

    beforeEach(() => {
        testUtils.mockQuery(getStuffMock, Promise.resolve(theResult));
        home = shallow(<HomeComponent />, { lifecycleExperimental: true });
        return testUtils.waitForPromises();
    });

    describe('On page load', () => {
        it('gets data required to display component', () => {
            expect(getStuffMock).toHaveBeenCalled();
        });
    });
});