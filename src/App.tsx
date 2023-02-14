
import { useState } from 'react'
import { App as SendbirdLiveApp } from '@sendbird/live-uikit-react'
import './App.css'

function SampleApp() {
  const [hasSession, setHasSession] = useState(false)
  const [appId, setAppId] = useState("A5265267-3D06-4FD6-9A25-26E3C0106390");
  const [userId, setUserId] = useState("sendbird_desk_agent_id_2e69844b-5fcd-4526-8b9d-f5ab2791042b");
  const [accessToken, setAccessToken] = useState("c07eded8ce5f5d25687d2a5f47284710e13f6c76");


  return (
    <div className="App">
      {
        hasSession ?
          <SendbirdLiveApp
              appId={appId}
              userId={userId}
              accessToken={accessToken ? accessToken : null}
          /> :
          <div className="login-panel">
            <img src='/logo.png' className="logo" />
            <div className='login-form'>
              <div className='section'>Application ID</div>
              <input type='text' className='input'
                placeholder='Application ID'
                value={appId}
                onChange={(event) => setAppId(event.target.value)} />
              <div className='section'>User ID</div>
              <input type='text' className='input'
                placeholder='User ID'
                value={userId}
                onChange={(event) => setUserId(event.target.value)} />
              <div className='section'>Access token (optional)</div>
              <input type='password' className='input'
                placeholder='Access token (optional)'
                value={accessToken}
                onChange={(event) => setAccessToken(event.target.value)} />
              <input type='button' className='submit' value='Sign in'
                onClick={() => setHasSession(true)}/>
            </div>
          </div>
      }
    </div>
  )
}

export default SampleApp
