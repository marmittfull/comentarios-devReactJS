import React from 'react';
import App from './App';
import { shallow } from 'enzyme'
import Comments from './Comments'
import NewComment from './NewComment'

describe('<App />', () => {
  it('should render without crashing', () => {
    const database = {
      ref: jest.fn()
    }
    database.ref.mockReturnValue({
      on: jest.fn()
    })
    const wrapper = shallow(<App database={database} />)
    expect(wrapper.find(Comments).length).toBe(1)
    expect(wrapper.find(NewComment).length).toBe(1)
  })
  it('should adds a new comment', () => {
    const database = {
      ref: jest.fn()
    }
    const child = jest.fn()
    database.ref.mockReturnValue({
      on: jest.fn(),
      child,
      update: jest.fn()
    })

    const push = jest.fn() 
    child.mockReturnValue({
      push
    })

    push.mockReturnValue({
      key: '1'
    })
    
    const wrapper = shallow(<App database={database} />)
    wrapper.instance().adicionarComentario('new comment')
  })
})