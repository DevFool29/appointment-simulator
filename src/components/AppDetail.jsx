const AppDetail = ({ apps, app, setApp, setApps }) => {
  const { name, number, email, date, symps } = app

  const handleDelete = () => {
    const newApps = apps.filter((singularApp) => singularApp.id !== app.id)
    setApps(newApps)
  }

  return (
    <div className="bg-white my-5 md:mb-5 md:ml-0 px-5 py-5 rounded-xl">
      <p className="font-bold text-gray-700">
        Patient's name: {''}
        <span className="font-normal">{name}</span>
      </p>

      <p className="font-bold text-gray-700">
        Patient's number contact: {''}
        <span className="font-normal">{number}</span>
      </p>

      <p className="font-bold text-gray-700">
        Patient's email: {''}
        <span className="font-normal">{email}</span>
      </p>

      <p className="font-bold text-gray-700">
        Date of the appointment: {''}
        <span className="font-normal">{date}</span>
      </p>

      <p className="font-bold text-gray-700">Symptomps described:</p>
      <p className="font-normal">{symps}</p>

      <div className="flex justify-around">
        <button
          type="button"
          className="py-1 px-10 mt-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md"
          onClick={() => setApp(app)}
        >
          Edit
        </button>
        <button
          type="button"
          className="py-1 px-10 mt-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
export default AppDetail
