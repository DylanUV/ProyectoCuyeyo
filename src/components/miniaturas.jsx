function Miniaturas({imagen, cambio}) {
    return(
        <div class="mini">
            <img src={imagen} onClick={cambio} alt="XD"/>
        </div>
    )

}

export default Miniaturas;