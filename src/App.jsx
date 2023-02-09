import Header from './components/Header'
import Form from './components/Form'
import AppsContainer from './components/AppsContainer'
import { useState, useEffect } from 'react'

function App() {
  // To all the appoinments
  const [apps, setApps] = useState(
    JSON.parse(localStorage.getItem('apps')) ?? []
  )
  const [app, setApp] = useState({}) // A state to fill by clicking edit button on AppDetail

  useEffect(() => {
    localStorage.setItem('apps', JSON.stringify(apps))
  }, [apps])

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="md:flex px-10 mt-10">
        <Form apps={apps} setApps={setApps} app={app} setApp={setApp} />
        <AppsContainer apps={apps} setApps={setApps} setApp={setApp} />
      </div>
    </div>
  )
}

export default App
