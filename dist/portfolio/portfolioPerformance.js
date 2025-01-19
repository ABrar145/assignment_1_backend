"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePortfolioPerformance = calculatePortfolioPerformance;
exports.findLargestHolding = findLargestHolding;
exports.calculateAssetAllocation = calculateAssetAllocation;
function calculatePortfolioPerformance(initialInvestment, currentValue) {
    const profitOrLoss = currentValue - initialInvestment;
    const percentageChange = (profitOrLoss / initialInvestment) * 100;
    const formattedProfitOrLoss = profitOrLoss.toFixed(2); // formatted as a string with 2 decimals
    const formattedPercentageChange = percentageChange.toFixed(2); // formatted as a string with 2 decimals
    const performanceSummary = profitOrLoss > 0
        ? `The portfolio has gained significantly with a profit of $${formattedProfitOrLoss}.`
        : profitOrLoss < 0
            ? `The portfolio has experienced a loss of $${formattedProfitOrLoss}.`
            : `The portfolio has experienced no change.`;
    return {
        initialInvestment,
        currentValue,
        profitOrLoss: formattedProfitOrLoss,
        percentageChange: formattedPercentageChange,
        performanceSummary,
    };
}
function findLargestHolding(assets) {
    if (assets.length === 0)
        return null;
    return assets.reduce((largest, asset) => (asset.value > largest.value ? asset : largest));
}
function calculateAssetAllocation(assets) {
    if (assets.length === 0)
        return []; // Return empty array for empty portfolio
    const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);
    return assets.map(asset => ({
        name: asset.name,
        percentage: parseFloat(((asset.value / totalValue) * 100).toFixed(2)), // Convert back to number
    }));
}
