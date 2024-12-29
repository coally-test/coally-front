import './assets/styles/globals.scss'
import "daisyui/dist/full.css";
import { Button } from './components/Buttom';


function App() {

  return (
    <>
      <div className="underline border border-black">hola mundo</div>
      <Button title='hola mundo' variant='success' />
    </>
  )
}

export default App
