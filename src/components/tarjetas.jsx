export default function Tarjetas({ photo, content, cambio }) {
  return (
    <div className="miniatura">
      <div className="imagen-contenedor">

        <img src={photo} />
      </div>
      <p className="titulo-miniatura">{content}</p>
      <button className="boton-miniatura" onClick={cambio}>Cambiar Tema</button>
    </div>
  )
}