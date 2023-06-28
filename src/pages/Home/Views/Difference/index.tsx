import React from 'react'

import Heading from '@/components/Heading'
import SubHeading from '@/components/SubHeading'


import './difference.styles.scss'
import { SectionWrapper } from '@/hoc'

const Difference = () => {
    return (
        <section id="difference" className='difference'>
            <div className='container'>
                <div className="grid">
                    
                    <div className='content'>
                        <hgroup>
                        <h1>The difference we make at American Hospice</h1>
                        <SubHeading>
                            Hospice care can dramatically reduce the amount of pain and suffering experienced by a patient and their loved ones. American Hospice's family of caring and compassionate professionals and trained volunteers are committed to providing our patients with a richer, fuller and more meaningful life in the time that is left to ensure a dignified, comfortable and peaceful experience.
                        </SubHeading>
                    </hgroup>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default SectionWrapper( Difference, {} );