import {
  Icon,
  Link,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'
import { ElementType } from 'react'

type NavLinkProps = {
  icon: ElementType
  children: string
} & ChakraLinkProps

export const NavLink = ({ icon, children, ...props }: NavLinkProps) => (
  <Link display="flex" align="center" {...props}>
    <Icon as={icon} fontSize="20" />
    <Text ml="4" fontWeight="medium">
      {children}
    </Text>
  </Link>
)
