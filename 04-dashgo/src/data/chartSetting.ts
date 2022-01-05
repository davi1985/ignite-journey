import { theme } from '@chakra-ui/react'
import { ApexOptions } from 'apexcharts'

export const options: ApexOptions = {
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021.03.18T00:00:00.00Z',
      '2021.03.19T00:00:00.00Z',
      '2021.03.20T00:00:00.00Z',
      '2021.03.21T00:00:00.00Z',
      '2021.03.22T00:00:00.00Z',
      '2021.03.23T00:00:00.00Z',
      '2021.03.24T00:00:00.00Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
}

export const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 28, 61, 18, 109],
  },
]
