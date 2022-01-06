import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
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
import { createUserSchema } from '../../utils/yup/schemas'

type CreateUserFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const CreateUser = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserSchema),
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values,
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(values)
  }

  const { errors } = formState

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"
          borderRadius="8"
          bg="gray.800"
          p={['6', '8']}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                error={errors.name}
                {...register('name')}
                name="name"
                label="Nome Completo"
              />

              <Input
                error={errors.email}
                {...register('email')}
                name="email"
                label="E-mail"
                type="email"
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                error={errors.password}
                {...register('password')}
                name="password"
                label="Senha"
                type="password"
              />

              <Input
                error={errors.password_confirmation}
                {...register('password_confirmation')}
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

              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default CreateUser
