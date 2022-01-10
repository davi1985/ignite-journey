import { render, screen } from '@testing-library/react'
import { Logo } from './Logo'

describe('<Header />', () => {
  it('should render correctly', () => {
    render(<Logo />)

    expect(screen.getByText(/dashgo/i)).toBeInTheDocument()
  })
})
