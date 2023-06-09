import React, { useState } from 'react';
import './poisson.css'

const PoissonDistributionCalculator = () => {
  const [lambda, setLambda] = useState('');
  const [x, setX] = useState('');
  const [result, setResult] = useState('');

  function handleLambdaChange(e) {
    setLambda(e.target.value);
  }

  const handleXChange = (e) => {
    setX(e.target.value);
  };

  const handleCalculateClick = () => {

    const lambdaFloat = parseFloat(lambda);
    const xInt = parseInt(x, 10);

    if (isNaN(lambdaFloat) || isNaN(xInt)) {
      setResult('Por favor, insira valores válidos para Lambda e X.');
      return;
    }

    const poissonResult = poissonDistribution(lambdaFloat, xInt);
    setResult(`A distribuição de Poisson para X=${xInt}
    com Lambda=${lambdaFloat} é: ${(100*poissonResult).toFixed(2)}%`);
  };

  const poissonDistribution = (lambda, x) => {
    const numerator = Math.pow(lambda, x) * Math.exp(-lambda);
    const denominator = factorial(x);
    return numerator / denominator;
  };

  const factorial = (n) => {
    if (n === 0) {
      return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  return (
    <div className='geral'>
      <img src='./targino/src/img3.jpg' alt='junior'/>
      <h1>Calculadora de Distribuição de Poisson</h1>
      <label className='label2'>
        Lambda (média de ocorrências por unidade de tempo, espaço, etc.):
        <input type="number" value={lambda} onChange={handleLambdaChange} className='inp2' />
      </label>
      <label className='label3'>
        X (número de ocorrências desejado):
        <input type="number" value={x} onChange={handleXChange} />
      </label>
      <button onClick={handleCalculateClick}>Calcular</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default PoissonDistributionCalculator;
