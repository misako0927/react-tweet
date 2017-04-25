import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import renderer from 'react-test-renderer'
import { createRenderer } from 'react-test-renderer/shallow'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
it('renders with shallow', () => {
  const shallow = createRenderer()
  shallow.render(<App />)
  const code = <code>src/App.js</code>
  expect(shallow.getRenderOutput().type).toEqual('div')
})