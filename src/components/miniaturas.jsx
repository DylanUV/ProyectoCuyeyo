function Miniaturas({imagen, cambio}) {
    return(
        <div class="mini">
            <img src={imagen} onClick={cambio}/>
        </div>
    )

}

export default Miniaturas;