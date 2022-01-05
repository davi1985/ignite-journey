import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'
import { ElementType } from 'react'
import { ActiveLink } from '../ActiveLink'

type NavLinkProps = {
  icon: ElementType
  children: string
  href: string
} & ChakraLinkProps

export const NavLink = ({ icon, children, href, ...props }: NavLinkProps) => (
  <ActiveLink href={href} passHref>
    <ChakraLink display="flex" align="center" {...props}>
      <Icon as={icon} fontSize="20" />

      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </ChakraLink>
  </ActiveLink>
)
