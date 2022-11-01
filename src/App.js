import React from "react";
import BtnProduto from "./BtnProduto";
import Produto from "./Produto";

function App() {

  // Os links abaixo puxam dados de um produto em formato JSON
  // https://ranekapi.origamid.dev/json/api/produto/tablet
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // Crie uma interface com 3 botões, um para cada produto.
  // Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
  // Mostre apenas um produto por vez
  // Mostre a mensagem carregando... enquanto o fetch é realizado

  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function mostraItem(evento) {
    setCarregando(true);
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${evento.target.innerText}`);

    const json = await response.json();

    setDados(json);
    setCarregando(false);
  }



  return (
    <div>
      <BtnProduto texto={'notebook'} onClick={mostraItem}/>
      <BtnProduto texto={'smartphone'} onClick={mostraItem}/>
      <BtnProduto texto={'tablet'} onClick={mostraItem}/>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados}/>}
    </div>
  );
}

export default App;