import './Layout.css';

const Layout = () => {
  return (
    <div className="container">
      {/* Aside izquierdo */}
      <div className="left-side">
        <aside className="aside"></aside>
        <aside className="aside"></aside>
      </div>

      {/* Artículo en el centro */}
      <div className="center">
        <article className="article">
          <h1>Artículo</h1>
          <div className="box">Cuadro 1</div>
          <div className="box">Cuadro 2</div>
          <div className="box">Cuadro 3</div>
        </article>
      </div>

      {/* Formulario en la derecha */}
      <div className="right-side">
        <form className="form">
          <h2>Formulario</h2>
          <input type="text" className="input" placeholder="Input 1" />
          <input type="text" className="input" placeholder="Input 2" />
          <input type="text" className="input" placeholder="Input 3" />
          <button className="button">Enviar</button>
        </form>
      </div>
    </div>
  );
};
export{Layout};