import { useState, useEffect } from "react";
export default function WhenEresElCristian() {
  const [result, setResult] = useState(0);
  const [data, setData] = useState(null);
  const [imagen, setImagen] = useState();

  function check(formData) {
    const params = new URLSearchParams({
      f_str: formData.get("f"),
      x0: formData.get("x0"),
      y0: formData.get("y0"),
      steps: formData.get("steps"),
      end: formData.get("end"),
    });

    console.log(params.toString());

    fetch(`https://runge-kutta.kaerdos.dev/values?` + params)
      .then((res) => res.json())
      .then((data) => {
        setResult(data.result);
        setData(data);
      });

    setImagen(`https://runge-kutta.kaerdos.dev/img?` + params);
  }

  return (
    <form action={check}>
      <input required name="f" type="text" placeholder="Funcion" />
      <input required name="x0" type="text" placeholder="x0" />
      <input required name="y0" type="text" placeholder="y0" />
      <input required name="steps" type="number" placeholder="Pasos" />
      <input required name="end" type="text" placeholder="X maxima" />
      <input type="submit" />
      <span>Resultado: {result}</span>


      <div style={{'display': 'flex'}}>
        <img src={imagen} alt=""></img>
        <div className="table">
          <table id="runge-kutta-vals" border="1">
            <thead>
              <tr>
                <th>X</th>
                <th>Y</th>
                <th>k1</th>
                <th>k2</th>
                <th>k3</th>
                <th>k4</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.k1.map((y, i) => (
                  <tr>
                    <td>{data.xn[i].toFixed(4)}</td>
                    <td><b>{data.steps[i].toFixed(4)}</b></td>
                    <td>{data.k1[i].toFixed(4)}</td>
                    <td>{data.k2[i].toFixed(4)}</td>
                    <td>{data.k3[i].toFixed(4)}</td>
                    <td>{data.k4[i].toFixed(4)}</td>
                  </tr>
                ))}
              {data &&
                <tr>
                  <td>{data.xn[data.xn.length - 1].toFixed(4)}</td>
                  <td><b>{data.steps[data.xn.length - 1].toFixed(4)}</b></td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </form>
  );
}
