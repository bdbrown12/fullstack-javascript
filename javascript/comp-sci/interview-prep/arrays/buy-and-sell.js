let buyStock = function(arr) {
    if (arr.length < 2) return 0; // Need at least two days to make a profit

    let minPrice = arr[0]; // Track minimum price so far
    let maxProfit = 0; // Track max profit

    for (let i = 1; i < arr.length; i++) {
        let currentPrice = arr[i];

        // Calculate potential profit if we sell today
        let potentialProfit = currentPrice - minPrice;

        // Update max profit if this is a better deal
        maxProfit = Math.max(maxProfit, potentialProfit);

        // Update min price if we find a new lower price
        minPrice = Math.min(minPrice, currentPrice);
    }

    return maxProfit;
};

console.log(buyStock([7, 1, 5, 3, 6, 4])); // Output: 5 (Buy at 1, sell at 6)
console.log(buyStock([7, 6, 4, 3, 1])); // Output: 0 (No profit possible)
