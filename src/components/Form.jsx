import { useEffect, useState } from 'react'
import Error from './Error'
import { v4 as uuidv4 } from 'uuid'

const Form = ({ apps, setApps, app, setApp }) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [symps, setSymps] = useState('') //symps as a abbreviation of symptomps

  const [error, setError] = useState(false) //To show error message if any form field is empty

  useEffect(() => {
    if (Object.keys(app).length > 0) {
      // To fill the form with the object to be edited
      setName(app.name)
      setNumber(app.number)
      setEmail(app.email)
      setDate(app.date)
      setSymps(app.symps)
    }
  }, [app])

  const handleSubmit = (e) => {
    e.preventDefault()

    //Validating the form - all fields are required
    if ([name, number, email, date, symps].includes('')) {
      setError(true)
      return
    } else {
      setError(false)
    }

    //To save or edit our written data in the form
    //NewApp is filled because of the input value property
    const newApp = {
      name,
      number,
      email,
      date,
      symps,
    }

    // Check out if we are editing or setting a new appointment
    if (app.id) {
      //Editing the existing one
      console.log('Editing')
      newApp.id = app.id
      console.log(newApp)
      console.log(app)

      //New array to set changes in our 'apps' state
      const appsChanged = apps.map((appState) =>
        appState.id === app.id ? newApp : appState
      )

      setApps(appsChanged)
      setApp({})
    } else {
      //New appointment
      newApp.id = uuidv4() //Generate the id
      setApps([...apps, newApp])
    }

    //Clear states to reset the form after submit
    setName('')
    setNumber('')
    setEmail('')
    setDate('')
    setSymps('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <p className="font-bold text-lg text-center">
        Complete the form to set your{' '}
        <span className="text-indigo-400">appointment</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg m-10 mt-5 py-8 p-5"
      >
        <label className="block font-semibold">Name</label>
        <input
          className="block mb-3 border-2 w-full p-2 rounded-md placeholder-gray-500"
          type="text"
          placeholder="Contact Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="block mt-2 font-semibold">Number</label>
        <input
          className="block mb-3 border-2 w-full p-2 rounded-md placeholder-gray-500"
          type="text"
          placeholder="Contact Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <label className="block mt-2 font-semibold">Email</label>
        <input
          className="block mb-3 border-2 w-full p-2 rounded-md placeholder-gray-500"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block mt-2 font-semibold">
          Date {'(click the calendar)'}
        </label>
        <input
          className="block border-2 w-full p-2 rounded-md placeholder-gray-500"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label className="block mt-2 font-semibold">Symptomps</label>
        <textarea
          className="block mb-4 border-2 w-full p-2 rounded-md placeholder-gray-500"
          placeholder="Describe all your symptomps"
          value={symps}
          onChange={(e) => setSymps(e.target.value)}
        />

        {error && <Error />}

        <input
          type="submit"
          className="block bg-indigo-600 w-3/5 p-2 text-white mx-auto hover:bg-indigo-700 cursor-pointer rounded-md"
          value={app.id ? 'Save changes' : 'Add appointment'}
        />
      </form>
    </div>
  )
}

export default Form
