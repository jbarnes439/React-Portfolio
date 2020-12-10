import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Spanglish from './Spanglish';

configure({ adapter: new Adapter()})

describe('<Spanglish />', () => {
  it('should render without crashing', () => {
    shallow(<Spanglish />);    
  })
})