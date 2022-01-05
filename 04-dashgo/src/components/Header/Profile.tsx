import { Box, Flex, Text, Avatar } from '@chakra-ui/react'

export const Profile = () => (
  <Flex align="center">
    <Box mr="4" textAlign="right">
      <Text>Davi Silva</Text>
      <Text color="gray.300" fontSize="small">
        davisilvaphoto@gmail.com
      </Text>
    </Box>

    <Avatar size="md" name="Davi Silva" src="https://github.com/davi1985.png" />
  </Flex>
)
