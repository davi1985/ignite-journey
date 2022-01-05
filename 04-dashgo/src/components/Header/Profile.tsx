import { Box, Flex, Text, Avatar } from '@chakra-ui/react'

type ProfileProps = {
  showProfileDate?: boolean
}

export const Profile = ({ showProfileDate = true }: ProfileProps) => (
  <Flex align="center">
    {showProfileDate && (
      <Box mr="4" textAlign="right">
        <Text>Davi Silva</Text>
        <Text color="gray.300" fontSize="small">
          davisilvaphoto@gmail.com
        </Text>
      </Box>
    )}

    <Avatar size="md" name="Davi Silva" src="https://github.com/davi1985.png" />
  </Flex>
)
