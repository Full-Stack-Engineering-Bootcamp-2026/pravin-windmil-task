import BarChart from '@/components/chart/BarChart'
import { ChartLineDefault } from '@/components/chart/LineChart'
import { ChartPieSimple } from '@/components/chart/PieChart'
import { ChartRadialSimple } from '@/components/chart/RadialChart'
import React from 'react'

function ChartPreview() {
  return (
    <div>


            <p className='text-muted-foreground font-normal text-base py-2'>Charts provided by ShadCN.</p>

        <div className='flex flex-col gap-2 md:flex-row'>

        <BarChart/>
        <ChartLineDefault/>
        <ChartPieSimple/>
        <ChartRadialSimple/>

        </div>
        
    </div>
  )
}

export default ChartPreview