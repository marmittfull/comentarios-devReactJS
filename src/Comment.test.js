import React from 'react'
import Comment from './Comment'
import { render } from 'enzyme'

it('should render', () => {
  const c = {
    texto: 'Teste 1'
  }
  const wrapper = render(<Comment c={c} />)
  expect(wrapper.text()).toBe("Teste 1");
})

it('should render empty', () => {
  const wrapper = render(<Comment />)
  expect(wrapper.text()).toBe('vazio')
})