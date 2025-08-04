export default function Tarjetas({photo, content, cambio}){
    return(
        <div>
        <img src={photo} />
          <p>{content}</p>
          <button onClick={cambio}>Cambiar Tema</button>
        </div>
    )
}