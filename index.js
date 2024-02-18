let counter = document.getElementById("counter")
let svdVal = document.getElementById("svd-val")
let count = 0

function increment() {
    count += 1
    counter.textContent = count

}

function save() {

    let counstr = count + " - "
    svdVal.textContent += counstr
    counter.textContent = 0
    count = 0 
}
function reset() {

    let resetVal = "Counted : "
    svdVal.textContent = resetVal
}