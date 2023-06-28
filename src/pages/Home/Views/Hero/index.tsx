import React from 'react'

import './hero.styles.scss'
import Heading from '@/components/Heading'
import SubHeading from '@/components/SubHeading'

type Props = {}

const Hero = (props: Props) => {
    return (
        <section className='hero-section'>
            <div className='container'>
                <div className="grid hero-layout">

                    <hgroup>
                        <Heading>Commited to our Partners and their Families</Heading>
                        <SubHeading>
                            <strong>The American Hospice Connection Family</strong> will take care of you as though you are our father, our mother, our brother, our sister our very best friend.
                        </SubHeading>
                    </hgroup>

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

export default Hero