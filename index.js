document.addEventListener("keyup", (event) => {
    const getinput = document.getElementById('searchinput').value;
    const getelement = document.getElementById('delete');
    if (document.activeElement.id == "searchinput") {
        if(getinput.length > 0) {
            getelement.style = "display:block;"
        }
        else {
            getelement.style = "display:none;"
        }
    }
})

function resetinput() {
    const getinput = document.getElementById('searchinput').value = "";
    const getelement = document.getElementById('delete');
    getelement.style = "display:none;"
}