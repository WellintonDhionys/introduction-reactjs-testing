import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Count from "."

describe('Count Component', () => {
  test('should render decrement button', () => {
    const { getByText } = render(<Count />)

    expect(getByText('-')).toBeInTheDocument()
  })

  test('should render increment button', () => {
    const { getByText } = render(<Count />)

    expect(getByText('+')).toBeInTheDocument()
  })

  test('should render count component with value 1', () => {
    const { getByRole } = render(<Count />)

    const inputCount = getByRole('input-count')
    expect(inputCount).toHaveValue(1)
  })

  test('should the increment button when clicked', async () => {
    const { getByRole, getByText } = render(<Count />)

    const incrementButton = getByRole('increment-button')

    userEvent.click(incrementButton)

    await waitFor(async () => {
      expect(getByRole('input-count')).toHaveValue(2)
    })
  })

  test('should the decrement button when clicked', () => {
    const { getByRole } = render(<Count />)

    const decrementButton = getByRole('decrement-button')

    userEvent.click(decrementButton)

    const inputCount = getByRole('input-count')
    expect(inputCount).toHaveValue(1)
  })
})