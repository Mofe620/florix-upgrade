import React from 'react'
import { Image } from 'react-bootstrap'

function FloatingAction() {
  return (
    <div>
        <div className="btn__floating">
            <div className="btn__floating__icon"><a href="https://wa.me/2347014868950" className="btn__floating__icon__link" target="_blank"><Image src='/assets/images/WhatsApp_icon.png' className="btn__floating__icon__link__fa"/></a></div>
        </div>
    </div>
  )
}

export default FloatingAction