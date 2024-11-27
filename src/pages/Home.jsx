import React from 'react'
import { getCookie } from 'utils/cookie'

function Home() {
  console.log( getCookie("accessToken"))
  return (
    <div>Home</div>
  )
}

export default Home