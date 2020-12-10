import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OtakuRisuto from './OtakuRisuto';

configure({ adapter: new Adapter()})

describe('<OtakuRisuto />', () => {
  it('should render without crashing', () => {
    shallow(<OtakuRisuto />);    
  })
})