
import React from 'react'
import VisionMissionCard from '../Common/VisionMissionCard'

function VisionMission() {
  return (
    <section className='w-full logistics-container  relative h-auto grid grid-cols-1 sm:grid-cols-2 '>
        <VisionMissionCard image='/export-image.webp' title="Vision" description='To be India’s most reliable and tech-enabled logistics partner.'/>
        <VisionMissionCard image='/rail-image.webp' title="Mission" description='To deliver exceptional logistics services by combining real-time tracking, industry expertise, and a customer-first approach.'/>
    </section>
  )
}

export default VisionMission