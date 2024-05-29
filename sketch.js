function setup() {
  createCanvas(1000, 600);
  textAlign(CENTER, CENTER);
  noLoop();

  // Inputs
  createP('Digite a força aplicada (N):').class('input-label');
  forceInput = createInput();
  forceInput.class('custom-input');
  createP('Digite a distância (m):').class('input-label');
  distanceInput = createInput();
  distanceInput.class('custom-input');
  createP('Digite o ângulo de inclinação (graus):').class('input-label');
  angleInput = createInput();
  angleInput.class('custom-input');
  angleInput.attribute('type', 'number'); // Define o tipo de entrada como número

  calcButton = createButton('Calcular Trabalho');
  calcButton.mousePressed(calculateWork);
  resultP = createP('');
}

function preload() {
  customFont = loadFont('Bouncy-Thin-PERSONAL_USE_ONLY.otf');
}

function draw() {
  background(255);
  textFont(customFont);
  textSize(20);
  fill(0);
  text("Digite os valores:", width/2, 50);
}

function calculateWork() {
  let F = parseFloat(forceInput.value());
  let d = parseFloat(distanceInput.value());
  let theta = parseFloat(angleInput.value());

  if (isNaN(F) || isNaN(d) || isNaN(theta)) {
    resultP.html('Por favor, insira valores válidos.');
    return;
  }

  // Convertendo o ângulo para radianos
  let thetaRad = radaians(theta);

  // Calculando o trabalho
  let work = F * d * cos(thetaRad);

  // Exibindo o resultado
  resultP.html(`O trabalho realizado é: ${work.toFixed(2)} Joules`);
}

// Aplicar estilo aos inputs
function applyInputStyle() {
  let inputs = selectAll('.custom-input');
  for (let input of inputs) {
    input.style('font-family', 'Bouncy-Thin-PERSONAL_USE_ONLY.otf');
  }
}

// Chamada da função para aplicar o estilo aos inputs
applyInputStyle();
