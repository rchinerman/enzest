/**
 * Code to be included before every test to initialize Enzyme. 
 */

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });