import { Stack } from '@chakra-ui/react'

import {
  RiContactsLine,
  RiDashboardLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from 'react-icons/ri'

import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export const SidebarNav = () => (
  <Stack spacing="12" align="flex-start">
    <NavSection title="Geral">
      <NavLink icon={RiDashboardLine} href="/dashboard">
        Dashboard
      </NavLink>
      <NavLink icon={RiContactsLine} href="/users">
        Usuários
      </NavLink>
    </NavSection>

    <NavSection title="Automação">
      <NavLink icon={RiInputMethodLine} href="/forms">
        Formulários
      </NavLink>
      <NavLink icon={RiGitMergeLine} href="/automation">
        Automação
      </NavLink>
    </NavSection>
  </Stack>
)
