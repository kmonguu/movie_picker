import React from 'react'
import { render } from '@testing-library/react'
import InputForm from '.'

describe('<Profile />', () => {
  it('matches snapshot', () => {
    const profile = render(<InputForm username="kimNaYeon" age="23" />)
    expect(profile.container).toMatchSnapshot()
  })
  it('shows the props correctly', () => {
    const utils = render(<InputForm username="kimNaYeon" age="23" />)
    utils.getByText('kimNaYeon')
    utils.getByText('23')
  })
})
