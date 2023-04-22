import React from 'react'
import "./google-login.css"

function GoogleIcon(props) {
  return (
    <div className='google-login' onClick={props.clickEvent}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" height={30} width={30} />
        <p>Continue with Google</p>
    </div>
  )
}

export default GoogleIcon