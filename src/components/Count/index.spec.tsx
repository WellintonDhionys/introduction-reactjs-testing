import { render, fireEvent } from '@testing-library/react'
import { Count } from "."

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

  test('should the increment button be clicked to change the input value to two', async () => {
    const { getByRole } = render(<Count />)

    const incrementButton = getByRole('increment-button')

    fireEvent.click(incrementButton)

    expect(getByRole('input-count')).toHaveValue(2)
  })

  test('when clicking on the decrement button the input value cannot be less than one', async () => {
    const { getByRole } = render(<Count />)

    const decrementButton = getByRole('decrement-button')

    fireEvent.click(decrementButton)
    expect(getByRole('input-count')).toHaveValue(1)
  })

  test('should disable the decrement button if the input value is less than or equal to one', async () => {
    const { getByRole } = render(<Count />)

    const decrementButton = getByRole('decrement-button')

    expect(decrementButton).toBeDisabled()
  })

  test('the input value cannot be less than one', async () => {
    const { getByRole } = render(<Count />)

    const inputCount = getByRole('input-count')

    fireEvent.change(inputCount, {target: {value: '-1'}})
    expect(inputCount).toHaveValue(1)
  })
})