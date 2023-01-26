import "./Home.scss"
import user from "../../img/user.png";
import tasks from "../../img/tasks.png";
import building from "../../img/building.png";

function Home () {

  return (
    <section >
      <div className="navbar">
        <button>Log-in</button>
      </div>

      <div className="intro-txt">
          <h1>Constru-IT</h1>
            <p>
              lorem ipsimasd asd asd s
            </p>
      </div>

      <div className="info-user">
        
          <div className="icons">
          <img src={user} alt="" />
          <p>Contacto y comunicacion constante entre las partes del proyecto 
            para estar actualizado de lo que se necesita y realiza para que 
            el avance del mismo.</p>
          </div>
          <div className="icons">
          <img src={tasks} alt="" />
          <p>Control y revision de las tareas que se ejecutan para mayor 
            eficiencia en el trabajo, reducir tiempos y costos del proyecto</p>
          </div>
          <div className="icons">
          <img src={building} alt="" />
          <p>Visualizacion del avance del proyecto por medio de planos y 
            fotos actualizadas para el seguimiento del cliente.</p>
          </div>
        
      </div>

      <div className="scroll-button">
        <h1>V</h1>
      </div>

    </section>
  )
}

export default Home;
