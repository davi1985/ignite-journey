import {
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
  HStack,
  Button,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

const CreateUser = () => (
  <Box>
    <Header />

    <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
      <Sidebar />

      <Box flex="1" borderRadius="8" bg="gray.800" p={['6', '8']}>
        <Heading size="lg" fontWeight="normal">
          Criar usuário
        </Heading>

        <Divider my="6" borderColor="gray.700" />

        <VStack spacing="8">
          <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
            <Input name="name" label="Nome Completo" />
            <Input name="email" label="E-mail" type="email" />
          </SimpleGrid>

          <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
            <Input name="password" label="Senha" type="password" />
            <Input
              name="password_confirmation"
              label="Confirmação da Senha"
              type="password"
            />
          </SimpleGrid>
        </VStack>

        <Flex mt="8" justify="flex-end">
          <HStack spacing="4">
            <Link href={'/users'} passHref>
              <Button as="a" colorScheme="whiteAlpha">
                Cancelar
              </Button>
            </Link>
            <Button colorScheme="pink">Salvar</Button>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  </Box>
)

export default CreateUser
