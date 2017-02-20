import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TaskContainer from 'containers/task.container';

describe('HelloWord - <HelloWord />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<TaskContainer />);
    });

    it('should render the view component', () => {
        expect(wrapper.find('h1').text()).to.equal('YOUR TO DO LIST!');
    });
})
