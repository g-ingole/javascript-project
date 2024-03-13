const urlParams = new URLSearchParams(window.location.search);
const devicesNum = urlParams.get("devicesNum");
if (devicesNum) {
  const nameElement = document.getElementById("devicesNum");
  nameElement.textContent = devicesNum;
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const csvData = xhr.responseText;
      const rows = csvData.trim().split("\n");
      const siteDetails = [];
      for (const row of rows) {
        const [
          ,
          name,
          deviceName,
          temperature,
          signal,
          battery,
          fill_Level,
          fill_Level1,
          rag,
        ] = row.split(",");
        if (name === devicesNum) {
          siteDetails.push(`
<tr>
<td></td>
<td>${deviceName}</td>
<td><span class="card-temperature" data-celsius="${temperature}">${temperature} °C</span></td>
<td>${signal}</td>
<td>${battery}</td>
<td><span class="card-length" data04="${fill_Level}">${fill_Level}</span></td>
<td>${fill_Level1}</td>
<td>${rag}</td>
<td><button type="button" class="btn btn-success" onclick="showDeviceDetails('${deviceName}', '${temperature}', '${signal}', '${battery}', '${fill_Level}', '${fill_Level1}');">Details</button>
</td>
</tr>
         `);
        }
      }

      const siteDetailsDiv = document.getElementById("site-details");
      siteDetailsDiv.innerHTML = siteDetails.join("");
      const celsiusOption = document.getElementById("celsiusOption");
      const fahrenheitOption = document.getElementById("fahrenheitOption");

      celsiusOption.addEventListener("click", () => {
        updateUnit("Celsius", "CM");
      });

      fahrenheitOption.addEventListener("click", () => {
        updateUnit("Fahrenheit", "Inches");
      });
    }
  };
  xhr.open("GET", "https://cdn.kizora.com/training/data.csv", true);
  xhr.send();
} else {
  console.error("Site name not provided in URL.");
}
function showDeviceDetails(deviceName, temperature, signal, battery, fill_Level, fill_Level1) {
  // Construct the URL for the other page with the query parameters
  const newURL = `index_3pg.html?deviceName=${encodeURIComponent(deviceName)}&temperature=${encodeURIComponent(temperature)}&signal=${encodeURIComponent(signal)}&battery=${encodeURIComponent(battery)}&fill_Level=${encodeURIComponent(fill_Level)}&fill_Level1=${encodeURIComponent(fill_Level1)}`;
  
  // Redirect to the other page
  window.location.href = newURL;
}



// Define the function to update the temperature unit (Celsius or Fahrenheit)
function updateUnit(temperatureUnit, lengthUnit) {
  const temperatureElements = document.querySelectorAll(".card-temperature");
  const lengthElements = document.querySelectorAll(".card-length");

  lengthElements.forEach((element) => {
    const cmValue = parseFloat(element.getAttribute("data04"));
    if (lengthUnit === "CM") {
      element.textContent = cmValue + " CM";
    } else {
      const inchesValue = cmtoin(cmValue);
      element.textContent = inchesValue.toFixed(2) + " inches";
    }
  });

  temperatureElements.forEach((element) => {
    const celsiusValue = parseFloat(element.getAttribute("data-celsius"));
    if (temperatureUnit === "Celsius") {
      element.textContent = celsiusValue + " °C";
    } else {
      const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
      element.textContent = fahrenheitValue.toFixed(2) + " °F";
    }
  });
}

// Define the function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function cmtoin(value04) {
  return value04 * 0.3937;
}
