function calBMI() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {

        let bmi = weight / ((height / 100) * (height / 100));

        alert("Your current BMI is: " + bmi.toFixed(2));
    } else {
        alert("Please enter valid units.");
    }
}