let x = 0;
let array = Array();
function add_element_to_array() {
    array[x] = document.getElementById("txtValue").value;
    alert("Element: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("txtValue ").value = "";
}