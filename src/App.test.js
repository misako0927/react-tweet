import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
it('renders with shallow', () => {
  const wrapper = shallow(<App />)
  const code = <code>src/App.js</code>
  expect(wrapper.contains(code)).toEqual(true)
})