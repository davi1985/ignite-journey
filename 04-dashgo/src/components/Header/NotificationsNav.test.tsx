import { render, screen } from '@testing-library/react'
import { NotificationsNav } from './NotificationsNav'

describe('<Header />', () => {
  it('should render correctly', () => {
    render(<NotificationsNav />)

    const iconsNotifications = screen.getByTestId('notifications-icons')

    expect(iconsNotifications).toBeInTheDocument()
  })
})
