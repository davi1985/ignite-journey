import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Text,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  useBreakpointValue,
  Spinner,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useQuery } from 'react-query'

import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'

const UserList = () => {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data = response.json()

    return data
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Listagem de usuários
            </Heading>

            <Link href={'/users/create'} passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={['4', '4', '6']} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>s
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    <Th w="8"></Th>
                  </Tr>
                </Thead>

                <Tbody>
                  <Tr>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme="pink" />
                    </Td>

                    <Td>
                      <Box>
                        <Text fontWeight="bold">Davi Silva</Text>
                        <Text fontSize="sm" color="gray.300">
                          davisilvaphoto@gmail.com
                        </Text>
                      </Box>
                    </Td>

                    {isWideVersion && <Td>03 de janeiro de 2022</Td>}

                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={
                          <Icon
                            as={RiPencilLine}
                            fontSize="16"
                            marginInlineEnd={isWideVersion ? 0 : -2}
                          />
                        }
                      >
                        {isWideVersion && 'Editar'}
                      </Button>
                    </Td>
                  </Tr>

                  <Tr>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme="pink" />
                    </Td>

                    <Td>
                      <Box>
                        <Text fontWeight="bold">Davi Silva</Text>
                        <Text fontSize="sm" color="gray.300">
                          davisilvaphoto@gmail.com
                        </Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>03 de janeiro de 2022</Td>}

                    <Td>
                      <Button
                        display="flex"
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={
                          <Icon
                            as={RiPencilLine}
                            fontSize="16"
                            marginInlineEnd={isWideVersion ? 0 : -2}
                          />
                        }
                      >
                        {isWideVersion && 'Editar'}
                      </Button>
                    </Td>
                  </Tr>

                  <Tr>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme="pink" />
                    </Td>

                    <Td>
                      <Box>
                        <Text fontWeight="bold">Davi Silva</Text>
                        <Text fontSize="sm" color="gray.300">
                          davisilvaphoto@gmail.com
                        </Text>
                      </Box>
                    </Td>

                    {isWideVersion && <Td>03 de janeiro de 2022</Td>}

                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={
                          <Icon
                            as={RiPencilLine}
                            fontSize="16"
                            marginInlineEnd={isWideVersion ? 0 : -2}
                          />
                        }
                      >
                        {isWideVersion && 'Editar'}
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>

              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}

export default UserList
