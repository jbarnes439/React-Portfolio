import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FlashyStudies from './FlashyStudies';

configure({ adapter: new Adapter()})

describe('<FlashyStudies />', () => {
  it('should render without crashing', () => {
    shallow(<FlashyStudies />);    
  })
})