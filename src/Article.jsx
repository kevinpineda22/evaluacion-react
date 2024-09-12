import './Layout.css';

const Article = ()=>{
    return (
        <article className="article">
            <h1>Artículo</h1>
            <div className="box-container">
                <div className="box p1">Párrafo</div>
                <div className="box-container horizontal">
                    <div className="box p2">Cuadro 1</div>
                    <div className="box p3">Cuadro 2</div>
                </div>
            </div>
        </article>
    );
}
export {Article};