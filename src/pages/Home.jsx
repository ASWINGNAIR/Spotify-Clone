import React from 'react'
import AllItems from '../components/AllItems'
import YourLibrary from '../components/YourLibrary'

function Home() {
  return (
    <>
      <div className="container-fluid p-4">
        <div className="row">
          <div className="col-md-3">
            <YourLibrary  />
          </div>
          <div className="col-md-9">
            <AllItems />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home