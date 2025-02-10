document.getElementById('mineForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputData = document.getElementById('inputData').value;
    const result = predictMine(inputData);
    document.getElementById('result').innerText = `Prediction: ${result}`;
});

function predictMine(input) {
    // Replace this with your actual prediction logic
    if (input % 2 === 0) {
        return "Safe";
    } else {
        return "Mine!";
    }
}
