import React from "react"
import Vnw from "./Imagens/vnw.png"
import Css from "./Imagens/css.png"
import Js from "./Imagens/js.png"
import Html from "./Imagens/html.png"
import * as S from "./Style.jsx"

function Sobre() {
    return (
    <S.Sobre>
  
        <S.Estudos>
          <h2>Estudos</h2>
          <div>
            <h3>Desenvolvimento front-end</h3>
            <h3>Ago/2023 - Maio/2024</h3>
          </div>
          <img src={Vnw} alt="" />
        </S.Estudos>
  
    <S.Habilidades>
  
    <h2>Habilidades</h2>
  
    <div>
      <img src={Css} alt="" />
      <h3>CSS</h3>
    </div>
  
    <div>
      <img src={Js} alt="" />
      <h3>JS</h3>
    </div>
  
    <div>
      <img src={Html} alt="" />
      <h3>HTML</h3>
    </div>
  
  </S.Habilidades>
  
  
      </S.Sobre>
    )
  }
  
  export default Sobre