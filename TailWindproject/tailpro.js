// function search() {
//     let filter = document.getElementById('input').value.toUpperCase();
//     let item = document.querySelectorAll('.image1');
//     let name = document.getElementsByTagName('h1');
//     for (var i = 0; i < name.length; i++) {
//         let a = item[i].getElementsByTagName('h1')[0];
//         let value = a.innerHTML || a.innerText || a.textContent;
//         if (value.toUpperCase().indexOf(filter) > -1) {
//             item[i].style.display = "";
//         }
//         else {

//             item[i].style.display = "none";
//         }
//     }
// }



function search() {
    // Get the search input value and convert to uppercase
    let filter = document.getElementById('input').value.toUpperCase();

    // Select all items in the container
    let items = document.querySelectorAll('.item-container');

    // Iterate over each item to match the search text with item name
    for (let i = 0; i < items.length; i++) {
        // Find the h1 element inside the current item
        let h1 = items[i].querySelector('h1');
        
        // Get the text content of the h1
        let textValue = h1.textContent || h1.innerText;

        // Check if the textValue contains the filter text
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = ""; // Show item
        } else {
            items[i].style.display = "none"; // Hide item
        }
    }
}

