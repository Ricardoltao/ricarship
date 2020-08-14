import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Alert,{AlertProps} from './alert'

const defaultProps: AlertProps = {
  title: 'title',
  onClose: jest.fn()
}

describe('test Alert component',() => {
  it('should render the correct default alert',() => {
    const {getByText, container, queryByText} = render(<Alert {...defaultProps}></Alert>)
    expect(queryByText('title')).toBeInTheDocument()
    expect(container.querySelector('.ricar-alert')).toHaveClass('ricar-alert-default')
    fireEvent.click(getByText('X'))
    expect(defaultProps.onClose).toHaveBeenCalled()
    // expect(queryByText('title')).not.toBeInTheDocument()
  })
})