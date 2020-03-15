// from data.js
let tableData = data;
var tbody = d3.select("tbody");

// get the data posted in front (attempting to convert this to a function to invoke inside the loop)

// filter and button
// wanted to try using checkboxes and a single user input filter instead of having multiple entry forms
let button = d3.select("#filter-btn")

button.on('click', function() {
    d3.event.preventDefault();
    let inputElement = d3.select('#testing');
    let inputValue = inputElement.property('value');

    $('#ufo-table tbody').empty(); //[1][2]
   
    if (document.getElementById('datetime').checked && inputValue != "") {
        console.log('sheep is woolly!');
        filterOption = tableData.filter((entry) => entry.datetime === inputValue);
        filterSys();
    };
    if (document.getElementById('shape').checked && inputValue != "") {
        console.log('pusheen loves pizza!');
        filterOption = tableData.filter((entry) => entry.shape === inputValue);
        filterSys();
    };
    if (document.getElementById('country').checked && inputValue != "") {
        console.log('pusheen loves pizza!');
        filterOption = tableData.filter((entry) => entry.country === inputValue);
        filterSys();
    };
    if (document.getElementById('state').checked && inputValue != "") {
        console.log('pusheen loves pizza!');
        filterOption = tableData.filter((entry) => entry.state === inputValue);
        filterSys();
    };
    if (document.getElementById('city').checked && inputValue != "") {
        console.log('pusheen loves pizza!');
        filterOption = tableData.filter((entry) => entry.city === inputValue);
        filterSys();
    };
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

function filterSys() {
    filterOption.forEach((table) => {
        let row = tbody.append('tr');
        Object.entries(table).forEach(([key, value]) => {
            console.log(key, value);
            let cell = row.append("td");
            cell.text(value);
        });
    });
}
// References I used so I can read them again later:
// [1]https://stackoverflow.com/questions/10779148/javascript-jquery-is-not-defined-function-error
// [2]https://stackoverflow.com/questions/4982846/jquery-clear-empty-all-contents-of-tbody-element



