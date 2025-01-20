import {
    calculatePortfolioPerformance,
    findLargestHolding,
    calculateAssetAllocation,
    Asset,
  } from '../src/portfolio/portfolioPerformance';
  
  describe('Portfolio Performance Functions', () => {
    describe('calculatePortfolioPerformance', () => {
        it('should calculate correct performance for a profit scenario', () => {
            const result = calculatePortfolioPerformance(10000, 12000);
            expect(result).toEqual({
              initialInvestment: 10000,
              currentValue: 12000,
              profitOrLoss: "2000.00", // Expected as a string
              percentageChange: "20.00", // Expected as a string
              performanceSummary: "The portfolio has gained significantly with a profit of $2000.00."

            });
          });
          
  
          it('should calculate correct performance for a loss scenario', () => {
            const result = calculatePortfolioPerformance(15000, 12000);
            expect(result).toEqual({
              initialInvestment: 15000,
              currentValue: 12000,
              profitOrLoss: "-3000.00", // As a string with two decimal places
              percentageChange: "-20.00", // As a string with two decimal places
              performanceSummary: "The portfolio has experienced a loss of $-3000.00.", // With a period at the end
            });
          });
          
          it('should calculate correct performance for no change', () => {
            const result = calculatePortfolioPerformance(10000, 10000);
            expect(result).toEqual({
              initialInvestment: 10000,
              currentValue: 10000,
              profitOrLoss: "0.00", // As a string with two decimal places
              percentageChange: "0.00", // As a string with two decimal places
              performanceSummary: "The portfolio has experienced no change.", // With a period at the end
            });
          });
          
    });
  
    describe('findLargestHolding', () => {
      it('should identify the asset with the highest value', () => {
        const assets: Asset[] = [
          { name: 'Stocks', value: 5000 },
          { name: 'Bonds', value: 3000 },
          { name: 'Real Estate', value: 8000 },
        ];
        const result = findLargestHolding(assets);
        expect(result).toEqual({ name: 'Real Estate', value: 8000 });
      });
  
      it('should return null for an empty portfolio', () => {
        const result = findLargestHolding([]);
        expect(result).toBeNull();
      });
  
      it('should return the first asset if multiple have the same highest value', () => {
        const assets: Asset[] = [
          { name: 'Stocks', value: 5000 },
          { name: 'Bonds', value: 5000 },
          { name: 'Real Estate', value: 5000 },
        ];
        const result = findLargestHolding(assets);
        expect(result).toEqual({ name: 'Stocks', value: 5000 });
      });
    });
  
    describe('calculateAssetAllocation', () => {
      it('should calculate the correct percentage allocation for each asset', () => {
        const assets: Asset[] = [
          { name: 'Stocks', value: 5000 },
          { name: 'Bonds', value: 3000 },
          { name: 'Real Estate', value: 2000 },
        ];
        const result = calculateAssetAllocation(assets);
        expect(result).toEqual([
          { name: 'Stocks', percentage: 50 },
          { name: 'Bonds', percentage: 30 },
          { name: 'Real Estate', percentage: 20 },
        ]);
      });
  
      it('should return an empty array for an empty portfolio', () => {
        const result = calculateAssetAllocation([]);
        expect(result).toEqual([]);
      });
  
      it('should handle a portfolio with one asset', () => {
        const assets: Asset[] = [{ name: 'Stocks', value: 10000 }];
        const result = calculateAssetAllocation(assets);
        expect(result).toEqual([{ name: 'Stocks', percentage: 100 }]);
      });
    });
  });