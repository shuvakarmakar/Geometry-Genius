let serial = 0;
// Triangle Calculation
document.getElementById('btn-triangle').addEventListener('click', function(){
    serial = serial + 1;
    // Get base and height after calling Funtion
    const baseTriangle = getComponentValueBase('triangle-base');
    const widthTriangle = getComponentValueWidth('triangle-height');

    // Multiply
    const areaOfTriangle = (0.5 * baseTriangle * widthTriangle).toFixed(2);

    // Get Triangle Name
    const triangleName = document.getElementById('triangle-name').innerText;

    // Show the Data
    displayData(triangleName, areaOfTriangle);
})
// Rectangle Calculation 
document.getElementById('btn-rectangle').addEventListener('click', function(){
    serial = serial + 1;
    // Get length and width after calling Funtion
    const baseRectangle = getComponentValueBase('rectangle-length');
    const widthRectangle = getComponentValueWidth('rectangle-width');

    // Multiply
    const areaOfRectangle = (baseRectangle * widthRectangle).toFixed(2);

    // Get Triangle Name
    const rectangleName = document.getElementById('rectangle-name').innerText;

    // Show the Data
    displayData(rectangleName, areaOfRectangle);
})
// Parallelogram Caluclation
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    serial = serial + 1;
    // Get base and height after calling Funtion
    const baseParallelogram = getComponentValueBase('parallelogram-base');
    const widthParallelogram = getComponentValueWidth('parallelogram-height');

    // Multiply
    const areaOfParallelogram = (baseParallelogram * widthParallelogram).toFixed(2);

    // Get Triangle Name
    const ParallelogramName = document.getElementById('parallelogram-name').innerText;

    // Show the Data
    displayData(ParallelogramName, areaOfParallelogram);
})
// Rhombus Calculation
document.getElementById('btn-rhombus').addEventListener('click', function(){
    serial = serial + 1;
    // Get d1 and d2 after calling Funtion
    const rhombusDOne = getComponentValueBase('rhombus-d1');
    const rhombusDTwo = getComponentValueWidth('rhombus-d2');

    // Multiply
    const areaOfRhombus = (0.5 * rhombusDOne * rhombusDTwo).toFixed(2);

    // Get Triangle Name
    const RhombusName = document.getElementById('rhombus-name').innerText;

    // Show the Data
    displayData(RhombusName, areaOfRhombus);
})
// Pentagon Calculation
document.getElementById('btn-pentagon').addEventListener('click', function(){
    serial = serial + 1;
    // Get p and b after calling Funtion
    const pentagonP = getComponentValueBase('pentagon-p');
    const pentagonB = getComponentValueWidth('pentagon-b');

    // Multiply
    const areaOfPentagon = (0.5 * pentagonP * pentagonB).toFixed(2);

    // Get Triangle Name
    const PentagonName = document.getElementById('pentagon-name').innerText;

    // Show the Data
    displayData(PentagonName, areaOfPentagon);
})
// Ellipse Calculation
document.getElementById('btn-ellipse').addEventListener('click', function(){
    serial = serial + 1;
    // Get a and b after calling Funtion
    const ellipseA = getComponentValueBase('ellipse-a');
    const ellipseB = getComponentValueWidth('ellipse-b');

    // Multiply
    const areaOfEllipse = (Math.PI * ellipseA * ellipseB).toFixed(2);

    // Get Triangle Name
    const EllipseName = document.getElementById('ellipse-name').innerText;

    // Show the Data
    displayData(EllipseName, areaOfEllipse);
})


// Funtion for opening a new tap for blog page!!!!
function joinfunction() {
    window.open("blog.html");
}

