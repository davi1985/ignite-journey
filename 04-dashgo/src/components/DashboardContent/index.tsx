import { Flex, SimpleGrid } from '@chakra-ui/react'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'
import { BoxCharts } from './BoxChart'

export const DashBoardContent = () => (
  <Flex direction="column" h="100vh">
    <Header />

    <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
      <Sidebar />

      <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
        <BoxCharts title="Inscritos da semana" />
        <BoxCharts title="Taxa de abertura" />
      </SimpleGrid>
    </Flex>
  </Flex>
)
