import React from 'react'

import Heading from '@/components/Heading'
import SubHeading from '@/components/SubHeading'

import  './inspiringtext.styles.scss'

// * HOC
import { SectionWrapper } from '@/hoc'


const InspiringText = () => {
    return (
        <div id="about" className='container inspirationtext'>
            <hgroup>
                    <Heading variant='sub'>Our family dedicated to yours.</Heading>
                    <SubHeading>
                        
                        We will care for you and that is our commitment.
                    </SubHeading>
            </hgroup>
        </div>   
    )
}

export default SectionWrapper(InspiringText, {alt : true} )