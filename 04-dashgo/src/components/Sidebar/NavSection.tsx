import { Box, Stack, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

type NavSectionProps = {
  title: string
  children: ReactNode
}

export const NavSection = ({ title, children }: NavSectionProps) => (
  <Box>
    <Text
      fontWeight="bold"
      color="gray.400"
      fontSize="small"
      textTransform="uppercase"
    >
      {title}
    </Text>

    <Stack spacing="4" mt="8" align="stretch">
      {children}
    </Stack>
  </Box>
)
