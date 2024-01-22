import './App.css'
import { Provider } from 'react-redux'
import {Store} from './Store/Store'
import { NoteApp } from './components/NoteApp'
function App() {
  
  return (
    <>
    <Provider store={Store}>
    <NoteApp />
    </Provider>
          </>
  )
}

export default App
