import React from 'react'
import { render } from '@testing-library/react'
import Alert from './alert'

describe('test Alert component',() => {
  it('should render the correct default alert',() => {
    const wrapper = render(<Alert closable type="default" title="this is alert!"></Alert>)
  })
})