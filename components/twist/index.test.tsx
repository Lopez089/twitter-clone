import { render, screen } from '@testing-library/react'
import { Twist } from './index'
import '@testing-library/jest-dom'

test('dice hola', () => {
  render(<Twist />)
  const text = screen.getByText('hola')

  expect(text)
})
