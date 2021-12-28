/**
 * Maximaler Prozentwert in der Tabelle. Wird in setup berechnet
 */
let maxVal = 0;

let colCount = 0;

function preload() {
  data = loadTable('Geschlechterverteilung.csv', 'csv', 'header');
}

/**
 * Zeichnet den Graph aus der Reihe row in der data Tabelle
 * @param {number} row 
 */
function drawGraph(row) {
  beginShape();
  for (let i = 1; i < colCount; i++) {
    // Das Diagramm soll von 30 bis 770 gehen (in x und y Richtung)
    let x = map(i, 1, colCount, 30, 770);
    let y = map(data.getNum(row, i), maxVal, 0, 30, 770)
    vertex(x, y);
  }
  endShape();
}

/**
 * Sucht die Zeile in der Tabelle, deren Wert in dieser Spalte (gerundeter x-Wert)
 * am nähsten am y-Wert liegt
 * @param {number} col Gerundeter x-Wert 
 * @param {number} y Auf das Diagramm bezogener y-Wert (das ist ein Wert zwischen 0 und maxVal %)
 * @returns 
 */
function getNearestRow(col, y) {
  let row = 0;
  // Wir fangen mit einem Riesenabstand an
  let diff = 100000;
  for (let i = 1; i < data.getRowCount(); i++) {
    // Wie ist der Wert für dieses Land (row, also i) in dieser Spalte (Quartal)?
    let num = data.getNum(i, col);
    // Wie nahe ist der Wert an der Maus Y-Position?
    let newDiff = Math.abs(y - num);
    // Besser als vorher?
    if (newDiff < diff) {
      // Dann merken wir uns das mitsammt der Zeile (dem Land)
      diff = newDiff;
      row = i;
    }
  }
  return row;
}

function setup() {
  // maxVal ausrechnen (siehe oben)
  colCount = data.getColumnCount();
  for (let j = 1; j < data.getRowCount(); j++) {
    for (let i = 1; i < colCount; i++) {
      maxVal = Math.max(maxVal, data.getNum(j, i));
    }
  }

  createCanvas(800, 800);
  background("black")
  console.log("Rowcount= " + data.getRowCount());
  console.log(data.columns);
}

function drawAllGraphs() {
  noFill();
  for (let j = 1; j < data.getRowCount(); j++) {
    let r = map(j, 1, data.getRowCount(), 50, 255);
    stroke(r, 0, 0);
    drawGraph(j);
  }
}

function draw() {
  drawAllGraphs()

  // Wenn die Maus außerhalb ist, wird das mappen auf das Diagramm nicht funktionieren
  if (mouseX > 30 && mouseX < 770 && mouseY > 30 && mouseY < 770) {
    // Mausposition auf das Diagramm umrechnen (genau anderes herum wie be drawGraph)
    let y = map(mouseY, 30, 770, maxVal, 0);
    let col = Math.floor(map(mouseX, 30, 770, 1, colCount));
    // Welches Land ist unter dem Cursor?
    let nRow = getNearestRow(col, y);
    // Aten Text löschen
    fill("black")
    noStroke()
    rect(0, 0, 800, 30)
    // Neuen Text schreiben
    fill("white")
    text(`This is ${data.get(nRow, 0)}: ${data.getNum(nRow, col)} % in ${data.columns[col]}`, 0, 20);
    // den passenden Graph in grün zeichnen
    stroke(0, 255, 0)
    noFill()
    drawGraph(nRow)
  };

}


