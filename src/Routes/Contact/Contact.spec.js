import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Contact from './Contact';

configure({ adapter: new Adapter()})

describe('<Contact />', () => {
  it('should render without crashing', () => {
    shallow(<Contact />);    
  })
})