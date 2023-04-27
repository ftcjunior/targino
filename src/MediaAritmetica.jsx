import React, { useState } from 'react';
import './folhageral.css'

const MediaAritmetica = () => {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [media, setMedia] = useState(0);

  const calcularMedia = () => {
    const mediaCalculada = (Number(valor1) + Number(valor2)) / 2;
    setMedia(mediaCalculada);
  };

  return (
    <div>
      <h1>Calculadora de Média Aritmética</h1>
      <input className='junior targ'
        type="number"
        value={valor1}
        onChange={(e) => setValor1(e.target.value)}
      />
      <input className='targ junior'
        type="number"
        value={valor2}
        onChange={(e) => setValor2(e.target.value)}
      />
      <button className='btn2' onClick={calcularMedia}>Calcular Média aritmética</button>
      <p>Média: {media}</p>
      {media > 12 && (
        <img
          src='https://images.alphacoders.com/807/thumb-1920-807175.jpg'
          alt="Imagem Exemplo"
          style={{ width: '200px', height: 'auto', border:'3px solid #a0091d' }}
        />
      )}
    </div>
  );
};

export default MediaAritmetica;
