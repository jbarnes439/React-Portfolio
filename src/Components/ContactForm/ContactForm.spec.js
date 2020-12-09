import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContactForm from './ContactForm';

configure({ adapter: new Adapter()})

describe('<ContactForm />', () => {
  it('should render without crashing', () => {
    shallow(<ContactForm />);    
  })
})