// from data.js
let tableData = data;
var tbody = d3.select("tbody");

// get the data posted in front (attempting to convert this to a function to invoke inside the loop)

// filter and button
let button = d3.select("#filter-btn")

button.on('click', function() {
    let inputElement = d3.select('#datetime')
    let inputValue = inputElement.property('value')
    let filteredTime = tableData.filter((entry) => entry.datetime === inputValue);
    console.log(filteredTime); 
    $('#ufo-table tbody').empty(); //[1][2]
    // Replaced tableData w filteredTime
    filteredTime.forEach((table) => {
        // console.log(filteredTime);
        // console.log(table);
        let row = tbody.append('tr');

        Object.entries(table).forEach(([key, value]) => {
            console.log(key, value);
            let cell = row.append("td");
            cell.text(value);
        });
    });
});
// Originally had this on top of the button function. Return filter wouldn't render and clear the original table. Reordered to the bottom of the button click. Worked.
tableData.forEach((table) => {
    // console.log(table);
    let row = tbody.append('tr');
    Object.entries(table).forEach(([key, value]) => {
        console.log(key, value);
        let cell = row.append("td");
        cell.text(value);
    });
});

// References I used so I can read them again later:
// [1]https://stackoverflow.com/questions/10779148/javascript-jquery-is-not-defined-function-error
// [2]https://stackoverflow.com/questions/4982846/jquery-clear-empty-all-contents-of-tbody-element