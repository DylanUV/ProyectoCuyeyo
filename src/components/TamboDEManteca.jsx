import { useState, useEffect } from "react";
export default function TamboDeManteca() {
  const [imgs, setImgs] = useState();

  useEffect(() => {
    fetch("https://rotoplas.kaerdos.dev/api/files/list?page=1&count=5")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImgs(
          data.files.map((el) => {
            return (
              <a target="_blank" href={`https://rotoplas.kaerdos.dev/files/${el.Name}`} rel="noreferrer">
                <img
                  style={{
                    width: "300px",
                    height: "100px",
                    "object-fit": "contain",
                  }}
                  src={`https://rotoplas.kaerdos.dev/thumbs/${el.Name}`}
                  alt="sexo en el oxxo" />
              </a>
            );
          })
        );
      });
  }, []);

  return imgs;
}
