import dynamic from 'next/dynamic'
import { options, series } from '../../data/chartSetting'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

export const ChartItem = () => (
  <Chart options={options} series={series} type="area" height={160} />
)
