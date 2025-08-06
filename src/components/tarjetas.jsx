export default function Tarjetas({photo, content, cambio}){
    return(
        <div>
        <img src={photo} alt="xd"/>
          <p>{content}</p>
          <button onClick={cambio}>Cambiar Tema</button>
        </div>
    )
}