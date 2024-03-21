
import { Navbar } from './components/Navbar'
import { Outlet } from 'react-router-dom'
import './App.css'
import { Cards } from './components/Cards'
import { FormRegister } from './components/FormRegister.jsx'
import { getDataApi } from './services/getDataApi'
import { useEffect, useState } from 'react'
import { postDataApi } from './services/postDataApi.js'

function App() {
  const [registerData, setRegisterData] = useState (null);

  useEffect(() => {
  
    getDataApi()
      .then((data) => {
        setRegisterData(data.data); // Solo establece el array de datos, no el objeto completo
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
 
  }, [])

  const handleFormSubmit = (FormData) => {
    postDataApi(FormData)
    .then((data) => {
      setRegisterData([data, ...registerData]);
      console.log("Datos enviados:", data);
    })
    .catch((error) => {
      console.error("Error al enviar los datos:", error);
    });
  }

  return (
    <>
        <Navbar className={"navbar-content"}/>
        <div>
          <FormRegister onFormSubmit={handleFormSubmit}/>
        </div>
        {registerData && (
        <div>
          <h2>Último registro:</h2>
          <Cards contactList={registerData} />
        </div>
      )}
        
        <Outlet/>
        {/* //hacer logica para que el formulario se muestre o se esconda */}
    </>
  )
}

export default App
