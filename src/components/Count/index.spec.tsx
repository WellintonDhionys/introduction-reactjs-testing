import { render } from '@testing-library/react';
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
})