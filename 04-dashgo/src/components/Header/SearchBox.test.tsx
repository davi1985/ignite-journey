import { render, screen } from '@testing-library/react'
import { SearchBox } from './SearchBox'

describe('<Header />', () => {
  it('should render correctly', () => {
    render(<SearchBox />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
