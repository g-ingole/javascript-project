// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();
// Define the callback function when the request is completed
xhr.onreadystatechange = function() {
 if (xhr.readyState === 4 && xhr.status === 200) {
   readCSV(xhr.responseText);
 }
};
// Open a GET request to the CSV file
xhr.open("GET", "https://cdn.kizora.com/training/data.csv", true);
// Send the request
xhr.send();

function readCSV(csvData) {
 const rows = csvData.trim().split("\n").slice(1);
 let countDevices = {};
 for (let i = 0; i < rows.length; i++) {
   const row = rows[i].split(",");
   let siteId = row[0];
   if (!countDevices[siteId]) {
     countDevices[siteId] = 1;
   } else {
     countDevices[siteId]++;
   }
 }
 const dataMap = new Map();
 rows.forEach((row) => {
   const [siteId, devicesNum] = row.split(",").slice(0, 3);
   if (!dataMap.has(siteId)) {
     dataMap.set(siteId, devicesNum);
   }
 });
 const tableBody = document.getElementById("table_body");
 dataMap.forEach((devicesNum, siteId) => {
   const newRow = document.createElement("tr");
   let siteURL = encodeURIComponent(devicesNum);
   newRow.innerHTML = `<td><a href="index_2pg.html?devicesNum=${siteURL}" class="one">${devicesNum}</td>
<td>${siteId}</td>
<td>${countDevices[siteId]}</td>`;
   tableBody.appendChild(newRow);
 });

//   innerHtml Instead of createElement code 
// const tableBody = document.getElementById("table_body");
// dataMap.forEach((devicesNum, siteId) => {
//   const newRow = document.createElement("tr");

//   // Create the first cell with an anchor element
//   const cell1 = document.createElement("td");
//   const link = document.createElement("a");
//   let siteURL = encodeURIComponent(devicesNum);
//   link.href = `index_2pg.html?devicesNum=${siteURL}`;
//   link.classList.add("one");
//   link.textContent = devicesNum;
//   cell1.appendChild(link);

//   // Create the second cell with siteId
//   const cell2 = document.createElement("td");
//   cell2.textContent = siteId;

//   // Create the third cell with countDevices
//   const cell3 = document.createElement("td");
//   cell3.textContent = countDevices[siteId];

//   // Append the cells to the row
//   newRow.appendChild(cell1);
//   newRow.appendChild(cell2);
//   newRow.appendChild(cell3);

//   // Append the row to the table body
//   tableBody.appendChild(newRow);
// });
}
// function sortTable() {
//  var table = document.getElementById("myTable");
//  var rows = Array.from(table.rows).slice(1); // Exclude the header row
//  rows.sort((a, b) => {
//    var x = a.cells[0].textContent.toLowerCase();
//    var y = b.cells[0].textContent.toLowerCase();
//    return x.localeCompare(y);
//  });
//  rows.forEach((row) => table.appendChild(row));
// }

let isAscending = true; // Initial sorting order is ascending
function sortTable() {
  const table = document.getElementById("myTable");
  const rows = Array.from(table.rows).slice(1); // Exclude the header row
  rows.sort((a, b) => {
    const x = a.cells[0].textContent.toLowerCase();
    const y = b.cells[0].textContent.toLowerCase();
    return isAscending ? x.localeCompare(y) : y.localeCompare(x);
  });
  // Clear the table
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
  // Append sorted rows
  rows.forEach((row) => table.appendChild(row));
  isAscending = !isAscending; // Toggle sorting order
}
  
