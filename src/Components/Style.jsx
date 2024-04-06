import styled from "styled-components"

export const Navegacao = styled.nav`
    background-color: #660f56;
    font-family: "kurale", cursive;
`

export const Lista = styled.ul`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
height: 20vh;
list-style: none;
font-family: "kurale", cursive;

a{
    text-decoration: none;
    color: #ae2d68; 
    font-size: 2rem;
}

a:hover{
color: purple;
font-weight: 800;
}

@media(min-width: 320px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    height: 50vh;

    a:hover{
        font-size: 2.5rem;
        color: purple;
    }
}
`

export const Inicio = styled.main`
background-color: #ae2d68;
display: flex;
justify-content: space-evenly;
flex-direction: column;
align-items: center;
height: 80vh;

img{
    width: 70vh;
    border-radius: 50%;
}

h2, p{
    color: #280659;
    font-size: 2rem;
}

@media(min-width: 320px) and (max-width: 768px){
    height: 100vh;


    img{
        width: 70vw;
    }

    h2, p{
        font-size: 2rem;
        text-align: center;
    }
}
`

export const RedesSociais = styled.div`
width: 30vw;
display: flex;
justify-content: space-evenly;

img{
    width: 2vw;
}

@media(min-width: 320px) and (max-width: 768px){

    width: 80vw;
    justify-content: space-evenly;
    img{
        width: 15vw;
    }
}
`

export const Sobre = styled.main`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #ae2d68;
`

export const Estudos = styled.section`
//border: solid red;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: space-evenly;
    height: 70vh;
    width: 30vw;
    margin-top: 3rem;
`

export const Habilidades = styled.section`
//border: solid; 
height: 50vh;
width: 30vw;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
margin-top: 3rem;

div{
    display: flex;
    align-items: center;
}

img{
    height: 7vh;
}
`
