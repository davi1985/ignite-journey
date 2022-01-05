import { Box, Text } from '@chakra-ui/react'
import { ChartItem } from './ChartItem'

type BoxChartsProps = {
  title: string
}

export const BoxCharts = ({ title }: BoxChartsProps) => (
  <Box padding="8" bg="gray.800" borderRadius={8} pb="4">
    <Text fontSize="lg" mb="4">
      {title}
    </Text>

    <ChartItem />
  </Box>
)
