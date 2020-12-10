import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProjectContainer from './ProjectContainer';

configure({ adapter: new Adapter()})

describe('<ProjectContainer />', () => {
  it('should render without crashing', () => {
    shallow(<ProjectContainer />);    
  })
})