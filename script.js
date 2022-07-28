const grafico = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]

const valuesArea = document.querySelector('.values-area');
const valuesGraph = document.createElement('div');
const grafic = document.createElement('div');
const textGrafic = document.createElement('div');
const legendasgraficos = document.createElement('div')


grafico.forEach(elemento =>{
  const grafico = document.querySelector('.ul');
  const liGrafico = document.createElement('li');
  grafico.appendChild(liGrafico);  
  liGrafico.classList.add('grafico')
  const liP = document.createElement('p');  
  liGrafico.appendChild(liP);
  liP.innerHTML = `$${elemento.amount}`;
  liP.classList.add('grafico__valor')
  const liDiv = document.createElement('div');
  liGrafico.appendChild(liDiv);
  liDiv.style.height = `${elemento.amount/5}rem`;
  liDiv.classList.add('grafico__barras')
  const liLegenda = document.createElement('p');
  liGrafico.appendChild(liLegenda)
  liLegenda.innerHTML = elemento.day
  liLegenda.classList.add('grafico__legenda')
})

  
 
