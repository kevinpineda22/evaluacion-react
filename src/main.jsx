import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Aside } from './Aside'
import { Article } from './Article'
import { Form } from './Form'

const App = () => (
  <div className="container">
    <Aside />
    <Article />
    <Form />
  </div>
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  
    
    
  </StrictMode>,
)
