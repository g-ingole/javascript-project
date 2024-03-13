// Function to calculate the volume of the Sphere
function calculateSphereVolume() {
    const radius = parseFloat(document.getElementById("radius").value);
    const volume4 = (4 / 3) * Math.PI * Math.pow(radius, 3);
    // Convert cubic centimeters to gallons
    const conversionFactor = 0.000264172; // 1 cm³ = 0.000264172 gallons
    const volumeGallons = volume4 * conversionFactor;
    document.getElementById("sphereResult").textContent = `Volume: ${volume4} cm³ (${volumeGallons.toFixed(4)} gallons)`;
}
// Function to reduce the fill level of the sphere by a percentage
function reduceSphereVolume() {
  const fillLevel = parseFloat(document.getElementById("fillLevelSphere").value);
  const volume = parseFloat(document.getElementById("sphereResult").textContent.split(' ')[1]); // Update index to 1
  const reducedVolume8 = volume * (1 - fillLevel / 100);
  // Convert reduced volume from cubic centimeters to gallons
  const conversionFactor = 0.000264172; // 1 cm³ = 0.000264172 gallons
  const reducedVolumeGallons = reducedVolume8 * conversionFactor;
  document.getElementById("reducedSphereResult").textContent = `Reduced Volume: ${reducedVolume8.toFixed(2)} cm³ (${reducedVolumeGallons.toFixed(4)} gallons)`;
}

document.getElementById("sphereInputs").addEventListener("input", function () {
  calculateSphereVolume();
  reduceSphereVolume(); // reduce function when the input changes
});

// Function to calculate the volume of the cube
function calculateCubeVolume() {
  const length = parseFloat(document.getElementById("cubeLength").value);
  const width = parseFloat(document.getElementById("cubeWidth").value);
  const height = parseFloat(document.getElementById("cubeHeight").value);
  const volumeCm3 = length * width * height;
  // Convert cubic centimeters to gallons
  const conversionFactor = 0.000264172; // 1 cm³ = 0.000264172 gallons
  const volumeGallons = volumeCm3 * conversionFactor;
  document.getElementById("cubeResult").textContent = `Cube Volume: ${volumeCm3} cm³ (${volumeGallons.toFixed(4)} gallons)`;
}

// Function to reduce the fill level of the cube by a percentage
function reduceFillLevel1(shape) {
  const fillLevel = parseFloat(document.getElementById("fillLevelCube").value);
  const volumeCm3 = parseFloat(document.getElementById("cubeResult").textContent.split(' ')[2]);
  // Calculate reduced volume in cubic centimeters
  const reducedVolumeCm3 = volumeCm3 * (fillLevel / 100);
  // Convert reduced volume from cubic centimeters to gallons
  const conversionFactor = 0.000264172; // 1 cm³ = 0.000264172 gallons
  const reducedVolumeGallons = reducedVolumeCm3 * conversionFactor;
  document.getElementById("reducedCubeResult").textContent = `Reduced Volume: ${reducedVolumeCm3.toFixed(2)} cm³ (${reducedVolumeGallons.toFixed(4)} gallons)`;
}


// // Function to calculate the volume of the cube
// function calculateCubeVolume() {
//     const length = parseFloat(document.getElementById("cubeLength").value);
//     const width = parseFloat(document.getElementById("cubeWidth").value);
//     const height = parseFloat(document.getElementById("cubeHeight").value);

//     const volume = length * width * height;
//     document.getElementById("cubeResult").textContent = `Cube Volume: ${volume} cm³`;
// }

// // Function to reduce the fill level of the cube by a percentage
// function reduceFillLevel1(shape) {
//     const fillLevel = parseFloat(document.getElementById("fillLevelCube").value);
//     const volume = parseFloat(document.getElementById("cubeResult").textContent.split(' ')[2]);
//     const reducedVolume = volume * (fillLevel / 100);
//     document.getElementById("reducedCubeResult").textContent = `Reduced Cube Volume: ${reducedVolume} cm³`;
// }

document.getElementById("shapeSelect").addEventListener("change", function () {
  const selectedShape = this.value;
  if (selectedShape === "cube") {
      document.getElementById("cubeInputs").style.display = "block";
      document.getElementById("sphereInputs").style.display = "none";
      document.getElementById("rectangleInputs").style.display = "none"; // Hide rectangle inputs
      document.getElementById("conicalInputs").style.display = "none"; // Hide conical inputs
  } else if (selectedShape === "sphere") {
      document.getElementById("cubeInputs").style.display = "none";
      document.getElementById("sphereInputs").style.display = "block";
      document.getElementById("rectangleInputs").style.display = "none"; // Hide rectangle inputs
      document.getElementById("conicalInputs").style.display = "none"; // Hide conical inputs
  } else if (selectedShape === "rectangle") {
      document.getElementById("cubeInputs").style.display = "none";
      document.getElementById("sphereInputs").style.display = "none";
      document.getElementById("rectangleInputs").style.display = "block"; // Show rectangle inputs
      document.getElementById("conicalInputs").style.display = "none"; // Hide conical inputs
  } else if (selectedShape === "conical") {
      document.getElementById("cubeInputs").style.display = "none";
      document.getElementById("sphereInputs").style.display = "none";
      document.getElementById("rectangleInputs").style.display = "none"; // Hide rectangle inputs
      document.getElementById("conicalInputs").style.display = "block"; // Show conical inputs
  }
});
// Rectangle volume
function calculateRectangleVolume() {
  var length = document.getElementById('rectangleLength').value;
  var width = document.getElementById('rectangleWidth').value;
  var height = document.getElementById('rectangleHeight').value;
  var volume7 = length * width * height;
  // Convert cubic centimeters to gallons
  const conversionFactor = 0.000264172; // 1 cm³ = 0.000264172 gallons
  const volumeGallons = volume7 * conversionFactor;
  document.getElementById('rectangleResult').innerText = 'Volume: ' + volume7 + ' cm³' + `(${volumeGallons.toFixed(4)} gallons)`;
  return volume7; // Return the calculated volume
}
// Rectangle volume Reduce 
function reduceFillLevel2(shape) {
  var fillLevelInput = document.getElementById('fillLevelRectangle');
  var reducedResult = document.getElementById('reducedRectangleResult');
  var fillLevel = parseFloat(fillLevelInput.value);
  if (isNaN(fillLevel) || fillLevel < 0 || fillLevel > 100) {
      reducedResult.innerText = 'Invalid fill level. Please enter a value between 0 and 100.';
      return;
  }

  var initialVolume = calculateRectangleVolume();
  var reducedVolume = fillLevel / 100 * initialVolume;
   // Convert reduced volume from cubic centimeters to gallons
   const conversionFactor = 0.000264172; // 1 cm³ = 0.000264172 gallons
   const reducedVolumeGallons = reducedVolume * conversionFactor;
  reducedResult.innerText = 'Reduced Volume: ' + reducedVolume.toFixed(2) +' cm³' + `(${reducedVolumeGallons.toFixed(4)} gallons)`;
}


// Conical volume
function calculateConicalVolume() {
  // var length = document.getElementById('conicalLength').value;
  var height = document.getElementById('conicalHeight').value;
  var radius = document.getElementById('conicalRadius').value;
  var volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
   // Convert cubic centimeters to gallons
   const conversionFactor = 0.000264172; // 1 cm³ = 0.000264172 gallons
   const volumeGallons = volume * conversionFactor;
  document.getElementById('conicalResult').innerText = 'Volume: ' + volume.toFixed(2) +' cm³'+`(${volumeGallons.toFixed(4)} gallons)`;
  return volume; // Return the calculated volume
}

// reduce Conical volume
function reduceFillLevel(shape) {
  var fillLevelInput = document.getElementById('fillLevelConical');
  var reducedResult = document.getElementById('reducedConicalResult');
  var fillLevel = parseFloat(fillLevelInput.value);
  if (isNaN(fillLevel) || fillLevel < 0 || fillLevel > 100) {
      reducedResult.innerText = 'Invalid fill level. Please enter a value between 0 and 100.';
      return;
  }
  var initialVolume = calculateConicalVolume();
  var reducedVolume = fillLevel / 100 * initialVolume;
  // Convert reduced volume from cubic centimeters to gallons
  const conversionFactor = 0.000264172; // 1 cm³ = 0.000264172 gallons
  const reducedVolumeGallons = reducedVolume * conversionFactor;
  reducedResult.innerText = 'Reduced Volume: ' + reducedVolume.toFixed(2) + ' cm³' + `(${reducedVolumeGallons.toFixed(4)} gallons)`;
}


document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const deviceName = urlParams.get("deviceName");
  const temperature = urlParams.get("temperature");
  const signal = urlParams.get("signal");
  const battery = urlParams.get("battery");
  const fill_Level = urlParams.get("fill_Level");
  const fill_Level1 = urlParams.get("fill_Level1");
  // const rag = urlParams.get("rag");

  if (deviceName && temperature && signal && battery && fill_Level && fill_Level1) {
      const deviceNameElement = document.getElementById("deviceNameElement");
      const temperatureElement = document.getElementById("temperatureElement");
      const signalElement = document.getElementById("signalElement");
      const batteryElement = document.getElementById("batteryElement");
      const fill_LevelElement = document.getElementById("fill_LevelElement");
      const fill_Level1Element = document.getElementById("fill_Level1Element");
      // const ragElement = document.getElementById("ragElement");

      if (deviceNameElement && temperatureElement && signalElement && batteryElement && fill_LevelElement && fill_Level1Element) {
          deviceNameElement.textContent = deviceName;
          signalElement.textContent = signal + ' (dBm)';
          batteryElement.textContent = battery;
          fill_Level1Element.textContent = fill_Level1 + ' (%)';
          // ragElement.textContent = rag;

          // Set initial temperature
          let currentTemperature = parseFloat(temperature);

          // Function to convert Celsius to Fahrenheit
          function celsiusToFahrenheit(celsius) {
              return (celsius * 9 / 5) + 32;
          }

          // Function to convert centimeters to inches
          function cmToInches(cm) {
              return cm  * 0.3937;
          }

          // Event listener for radio button changes
          document.querySelectorAll('input[name="temperatureUnit"]').forEach(function (radio) {
              radio.addEventListener("change", function () {
                  if (this.value === "celsius") {
                      temperatureElement.textContent = currentTemperature + ' °C';
                      fill_LevelElement.textContent = fill_Level + ' (cm)';
                  } else if (this.value === "fahrenheit") {
                      temperatureElement.textContent = celsiusToFahrenheit(currentTemperature) + ' °F';
                      fill_LevelElement.textContent = cmToInches(fill_Level) + ' (in)';
                  }
              });
          });

          // Initial display of temperature and fill level based on the default radio button
          if (document.querySelector('input[name="temperatureUnit"]:checked').value === "fahrenheit") {
              temperatureElement.textContent = celsiusToFahrenheit(currentTemperature) + ' °F';
              fill_LevelElement.textContent = cmToInches(fill_Level) + ' (in)';
          } else {
              temperatureElement.textContent = currentTemperature + ' °C';
              fill_LevelElement.textContent = fill_Level + ' (cm)';
          }

      } else {
          console.error("Elements not found. Check IDs in your HTML.");
      }
  } else {
      console.error("deviceName or temperature not provided in URL.");
  }
});

// Image code diagram 
function showDiagram() {
  var shapeSelect = document.getElementById("shapeSelect");
  var selectedOption = shapeSelect.options[shapeSelect.selectedIndex].value;
  var diagramContainer = document.getElementById("diagramContainer");
  // Remove any previously displayed diagrams
  while (diagramContainer.firstChild) {
      diagramContainer.removeChild(diagramContainer.firstChild);
  }
  if (selectedOption === "cube") {
      // Display the Cube (Cuboid) diagram
      var cubeDiagram = document.createElement("img");
      cubeDiagram.src = "https://curvebreakerstestprep.com/wp-content/uploads/2021/04/Net-of-a-Cube-1.png"; // Replace with the actual image source
      cubeDiagram.alt = "Cube Diagram";
      diagramContainer.appendChild(cubeDiagram);
  } else if (selectedOption === "sphere") {
      // Display the Sphere (by Radius) diagram
      var sphereDiagram = document.createElement("img");
      sphereDiagram.src = "https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/surface-area-of-cylinder-01-1644988981.png"; // Replace with the actual image source
      sphereDiagram.alt = "Sphere Diagram";
      diagramContainer.appendChild(sphereDiagram);
  } else if (selectedOption=="rectangle"){
    // Display the Rectangle (by Length and Width) diagram
    var rectangleDiagram=document.createElement("img");
    rectangleDiagram.src="https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/3d-shapes-02-1642498884.png";
    rectangleDiagram.alt="Rectangle Diagram";
    diagramContainer.appendChild(rectangleDiagram);
  } else if (selectedOption=="conical"){
    // Display the Conical Prism (by Base, Height, Top radius) diagram
    var conicalPrismDiagram=document.createElement("img");
    conicalPrismDiagram.src="https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/parts-of-cone-1629690914.png";
    conicalPrismDiagram.alt="Conical Prism Diagram";
    diagramContainer.appendChild(conicalPrismDiagram);
  }
}
// Call showDiagram() with the default selection when the page loads
window.onload = function() {
  showDiagram();
}




 
