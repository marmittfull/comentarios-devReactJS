import React from 'react'
import { shallow } from 'enzyme'
import NewComment from './NewComment'

describe('<NewComment />', () => {
  it('should handle changes in textarea', () => {
    const wrapper = shallow(<NewComment />)
    const event = {
      target: {value: 'test'}
    }
    wrapper.find('textarea').simulate('change', event)
    expect(wrapper.state().novoComentario).toBe('test')
  })
  it('should call sendComment on button click', () => {
    const adicionarComentario = jest.fn()
    const wrapper = shallow(<NewComment adicionarComentario={adicionarComentario} />)
    const event = {
      target: {value: 'test'}
    }
    wrapper.find('textarea').simulate('change', event)
    wrapper.find('button').simulate('click')
    expect(adicionarComentario).toBeCalledWith('test')
  })
})