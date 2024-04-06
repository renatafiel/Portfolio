import React from "react"
import Renata from "./Imagens/renata.jpg"
import Instagram from "./Imagens/instagram.png"
import Facebook from "./Imagens/facebook.png"
import Linkedin from "./Imagens/linkedin.png"
import * as S from "./Style.jsx"

function Inicio() {
    return (
      <S.Inicio>
        <img src={Renata} alt="minha foto" />
        
        <h2>Olá! Eu sou Renata Fiel</h2>
        <p>Bem Vindo ao Meu Portfólio!</p>
  
        <S.RedesSociais>
        <img src={Instagram} alt="" />
        <img src={Facebook} alt="" />
        <img src={Linkedin} alt="" />
        </S.RedesSociais>
  
      </S.Inicio>
    )
  }
  
  export default Inicio