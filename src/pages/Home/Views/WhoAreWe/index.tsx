import React from 'react'
import { SectionWrapper } from '@/hoc'

import Heading from '@/components/Heading'
import SubHeading from '@/components/SubHeading'

import './whoweare.styles.scss'


const WhoAreWe = () => {
    return (
        <section className='whoweare'>
            <div className='container'>
                <div className="grid">
                    
                    <div className='content'>
                        <hgroup>
                        <Heading>We, Your American Hospice Family</Heading>
                        <SubHeading>
                            The American Hospice Connection family is a team of dedicated and compassionate care providers who will provide you quality care. You will be taken care of by: 
                        </SubHeading>
                    </hgroup>
                        <div className='team'>
                            <ul>
                                <div>
                                <li>Medical Director/Physician</li>
                                <li>Registered Nurses</li>
                                <li>Licensed Vocational Nurses</li>
                                <li>Medical Social Workers</li>
                                </div>
                                <div>
                                <li>Bereavement Counselors</li>
                                <li>Chaplains</li>
                                <li>Hospice Aids</li>
                                <li>Trained Volunteers</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                    
                
                    <div className='heart-grid'>
                        <div>
                            <img src='/images/elements/heartbg.png' />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SectionWrapper(WhoAreWe, {} )