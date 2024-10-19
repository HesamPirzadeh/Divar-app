import React, { useState } from 'react'
import Authenticate from '../components/templates/Authenticate'
import Mobile from 'components/templates/Mobile'

function AuthPage() {
    const [step,setStep]= useState(1)
    const [mobile,setMobile]= useState("")
    const [sms,setSms]= useState("")
   
  return (
    <div>
        {step ===1 && <Mobile mobile={mobile} setMobile={setMobile} setStep={setStep}/> }
        {step === 2 && <Authenticate sms={sms} setSms={setSms} setStep={setStep} mobile={mobile}/>}
    </div>
  )
}

export default AuthPage