import { useEffect } from 'react'
import Configurator from './Configurator'
import NProgress from 'nprogress';

function App() {

  //loading indicator
  useEffect(() => {
    NProgress.set(0.0);
    return () => { NProgress.set(1.0) }
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
