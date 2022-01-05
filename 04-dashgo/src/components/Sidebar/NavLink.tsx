import Link from 'next/link'

import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'
import { ElementType } from 'react'

type NavLinkProps = {
  icon: ElementType
  children: string
  href: string
} & ChakraLinkProps

export const NavLink = ({ icon, children, href, ...props }: NavLinkProps) => (
  <Link href={href} passHref>
    <ChakraLink display="flex" align="center" {...props}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </ChakraLink>
  </Link>
)
