function Miniaturas({imagen, cambio}) {
    return(
        <div>
            <img src={imagen} onClick={cambio}/>
        </div>
    )

}

export default Miniaturas;