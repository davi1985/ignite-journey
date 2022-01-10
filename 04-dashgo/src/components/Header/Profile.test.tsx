import { render, screen } from '@testing-library/react'
import { Profile } from './Profile'

describe('<Header />', () => {
  it('should render correctly', () => {
    render(<Profile />)

    expect(screen.getByText(/davi silva/i)).toBeInTheDocument()
    expect(screen.getByText(/davisilvaphoto@gmail\.com/i)).toBeInTheDocument()
  })
})
