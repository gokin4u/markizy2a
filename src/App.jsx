import { useEffect } from 'react'
import Configurator from './Configurator'
import NProgress from 'nprogress';

function App() {

  //loading indicator
  useEffect(() => {
    NProgress.start();
    NProgress.done()
  }, [])

  return (
    <>
      <div className='heading'>
        <h1>Konfigurator markiz</h1>
      </div>
      <Configurator />
    </>
  )
}

export default App
