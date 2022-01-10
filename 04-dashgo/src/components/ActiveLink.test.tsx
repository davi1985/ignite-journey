import { render, screen } from '@testing-library/react'
import { ActiveLink } from './ActiveLink'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return { asPath: '/' }
    },
  }
})

describe('<Header />', () => {
  it('should render correctly', () => {
    const path = '/'

    render(
      <ActiveLink href={path}>
        <a href="">Login</a>
      </ActiveLink>,
    )

    expect(screen.getByText('Login')).toBeInTheDocument()
  })
})
