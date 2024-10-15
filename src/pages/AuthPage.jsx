import React, { useState } from 'react'
import Authenticate from '../components/templates/Authenticate'
import Mobile from '../components/templates/Mobile'

function AuthPage() {
    const [step,setStep]= useState(1)
    const [mobiles,setMobile]= useState("")
    const [sms,setSms]= useState("")
  return (
    <div>
        
        {step ===1 && <Mobile mobiles={mobiles} setMobile={setMobile} setStep={setStep}/> }
        {step === 2 && <Authenticate/>}
    </div>
  )
}

export default AuthPage