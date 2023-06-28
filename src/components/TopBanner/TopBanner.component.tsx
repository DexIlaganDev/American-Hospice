import React from 'react'

import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { FaFax, FaMapMarkedAlt } from 'react-icons/fa';
import TopBannerIconText from './TopBannerIconText';


const TopBanner = () => {
  return (
    <div className='topBanner'>
        <div className="container topBanner__container">

          <div>
              <div>
                
              </div>

              <TopBannerIconText 
                icon={<BiSolidPhoneCall /> }
                text={ <div style={styles.fs}>We're here for you <strong>24/7</strong> &nbsp; including weekends and holidays: <strong>818-869-4998</strong></div> }
              />
          </div>
            

            <div className='topBanner__right'>
              <TopBannerIconText 
                icon={<MdEmail /> }
                text={<div style={styles.fs}>americanhospiceconnection@gmail.com</div>}
              />
            </div>


        </div>
    </div>
    
  )
}

export default TopBanner

const styles = {
  fs : {
    fontSize : '12px'
  }
}