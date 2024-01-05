form = document.querySelector("form");
output = document.querySelector(".output");

const isFull = (data) => {
    for (i in data) {
        if (data[i] === '') {
            return false;
        }
    }
    return true;
}

form.addEventListener(('submit'), (e) => {
    e.preventDefault();
    const data = Array.from(document.querySelectorAll("form input")).reduce((acc, input) => ({...acc, [input.id] : input.value}), {});
    // all fields must be non empty
    if (!isFull(data)) {
        alert("Ensure no empty fields")
        return
    }
    const result = parseInt(data.price) * (parseInt(data.discount) / 100) * parseInt(data.width) * parseInt(data.height);
    output.value = result;
});