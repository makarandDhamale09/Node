function generateRandom() {
  const rand = Math.random();
  console.log(rand);
  const num = Math.floor(rand * 100) + 1;
  return num;
}

function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

module.exports = { generateRandom, celciusToFahrenheit };
