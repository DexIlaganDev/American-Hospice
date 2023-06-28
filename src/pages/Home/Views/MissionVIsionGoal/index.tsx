import React from 'react'

import SliderMVG from './components/SliderMVG'


import './mvg.styles.scss'

import { SectionWrapper } from '@/hoc'

type Props = {}

const MissionVisionGoal = (props: Props) => {
    return (
        <section>
            <div className='container'>
            <div className="grid mvg-grid">
                <div>
                    <img src='/images/care.jpg' />
                </div>
                <div>
                    <SliderMVG />
                </div>
            </div>
                
            </div>
        </section>
    )
}

export default SectionWrapper (MissionVisionGoal, {})