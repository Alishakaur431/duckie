let userPoints = 100; // Default points

function redeemReward(item, cost, duckImage) {
    if (userPoints >= cost) {
        userPoints -= cost;
        document.getElementById("userPoints").textContent = userPoints;

        // Replace the duck image
        let duck = document.getElementById("duck");
        duck.src = duckImage;

        alert(`You equipped ${item}!`);
    } else {
        alert("Not enough points!");
    }
}
