import React from 'react'

// ** Custom Components
import TopBanner from '@/components/TopBanner/TopBanner.component'
import Nav from '@/components/Nav/Nav.component'
import Hero from './Views/Hero'
import InspiringText from './Views/InspiringText'
import MissionVisionGoal from './Views/MissionVIsionGoal'
import FAQ from './Views/FAQ'
import WhoAreWe from './Views/WhoAreWe'
import Difference from './Views/Difference'
import Footer from '@/components/Footer'
import DialogContact from '@/components/DialogContact'
import useOpenToggle from '@/hooks/useOpenToggle'

const HomePage = () => {

    const { toggle, toggleClick } = useOpenToggle()

    const toggleModal = () => {
        toggleClick()
    }

    return (
        <>
            <TopBanner />
            <Nav toggleModal={toggleModal} />
            <Hero />
            <InspiringText />
            <MissionVisionGoal />
            <FAQ />
            <WhoAreWe />
            <Difference />
            <Footer />
            <DialogContact toggle={toggle} toggleModal={toggleModal} />
        </> 
    )
}

export default HomePage