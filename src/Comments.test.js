import React from 'react'
import Comments from './Comments' 
import { shallow   } from 'enzyme'
import Comment from './Comment'

it('should shallow Comments', () => {
  const comentarios = {
    a: {id: 'a', texto: 'Primeiro'},
    b: {id: 'b', texto: 'segundo'}
  }
  const wrapper = shallow(<Comments comentarios={comentarios} />)
  expect(wrapper.find(Comment).length).toBe(2)
  expect(wrapper.find(Comment).get(0).props.c).toBe(comentarios.a)
  expect(wrapper.find(Comment).get(1).props.c).toBe(comentarios.b)

  expect(wrapper.find(Comment).get(0).key).toBe('a')
  expect(wrapper.find(Comment).get(1).key).toBe(comentarios.b.id)
})

it('should works without any comments', () => {
  const comentarios = {}
  const wrapper = shallow(<Comments comentarios={comentarios} />)
  expect(wrapper.find(Comment).length).toBe(0);
})