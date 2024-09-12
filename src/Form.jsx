import './Layout.css';

const Form = ()=>{
    return(

        <div className="right-side">
        <form className="form">
          <h2>Formulario</h2>
          <input type="text" className="input" placeholder="Input 1" />
          <input type="text" className="input" placeholder="Input 2" />
          <input type="text" className="input" placeholder="Input 3" />
          <button className="button">Enviar</button>
        </form>
      </div>
    
    )

}
export {Form};