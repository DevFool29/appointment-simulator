import AppDetail from './AppDetail'

const AppsContainer = ({ apps, setApp, setApps }) => {
  if (apps.length === 0) {
    return (
      <div className="md:w-1/2 lg:w-3/5 pb-3">
        <h2 className="font-black text-lg text-center mb-4">
          There is not appointments made yet, add one and {''}
          <span className="text-indigo-500">manage it</span>
        </h2>
      </div>
    )
  } else {
    return (
      <div className="md:w-1/2 lg:w-3/5">
        <h2 className="font-black text-lg text-center mb-4">
          List of appointments already made, {''}
          <span className="text-indigo-500">edit yours if necessary</span>
        </h2>

        {apps.map((app) => {
          return (
            <AppDetail
              key={app.id}
              apps={apps}
              setApps={setApps}
              app={app}
              setApp={setApp}
            />
          )
        })}
      </div>
    )
  }
}
export default AppsContainer
