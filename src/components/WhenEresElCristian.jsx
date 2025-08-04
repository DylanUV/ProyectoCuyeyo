import { useState, useEffect } from 'react';
export default function WhenEresElCristian() {
  const [result, setResult] = useState(0)
  const [imagen, setImagen] = useState()

  function check(formData) {
    const params = new URLSearchParams({
      f_str: formData.get('f'),
      x0: formData.get('x0'),
      y0: formData.get('y0'),
      h: formData.get('h'),
      end: formData.get('end'),
    })


    console.log(params.toString())

    fetch(`https://runge-kutta.kaerdos.dev/grunt-kutta?` + params
    ).then(res => res.json()).then(data => setResult(data.result))

    setImagen(`https://runge-kutta.kaerdos.dev/img?` + params)
  }

  return (
    <form action={check}>
      <input required name="f" type='text' placeholder="Funcion" />
      <input required name="x0" type='text' placeholder="x0" />
      <input required name="y0" type='text' placeholder="y0" />
      <input required name="h" type='text' placeholder="h (paso)" />
      <input required name="end" type='texxt' placeholder="X maxima" />
      <input type='submit' />
      <span>Resultado: {result}</span>
      <img src={imagen} alt=''></img>
    </form>
  )
}