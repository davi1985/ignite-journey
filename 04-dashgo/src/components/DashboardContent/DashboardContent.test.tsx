import { render, screen } from '@testing-library/react'
import { DashboardContent } from './index'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return { asPath: '/' }
    },
  }
})

describe('<DashBoardContent />', () => {
  it('should render correctly', () => {
    render(<DashboardContent />)

    screen.logTestingPlaygroundURL()
    // expect(screen.getByText(/dashgo/i)).toBeInTheDocument()
  })
})
