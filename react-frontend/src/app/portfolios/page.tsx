"use client";

import { useState, useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Search, TrendingUp, TrendingDown } from "lucide-react";
import portfoliosData from "@/../data/portfolios.json";

export default function PortfoliosPage() {
  const [selectedPortfolio, setSelectedPortfolio] = useState(portfoliosData.portfolios[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPortfolios = useMemo(() => {
    if (!searchTerm) return portfoliosData.portfolios;
    
    return portfoliosData.portfolios.filter(portfolio =>
      portfolio.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      portfolio.strategy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      portfolio.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Member Portfolios
          </h1>
          <p className="text-xl text-medium-contrast max-w-3xl mx-auto">
            Explore the trading strategies and performance of our members&apos; portfolios.
          </p>
        </div>

        {/* Portfolio Selector */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium-contrast w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search portfolios..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-elevated border border-subtle rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <select
                value={selectedPortfolio.id}
                onChange={(e) => {
                  const portfolio = portfoliosData.portfolios.find(p => p.id === parseInt(e.target.value));
                  if (portfolio) setSelectedPortfolio(portfolio);
                }}
                className="w-full px-4 py-3 bg-elevated border border-subtle rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              >
                {portfoliosData.portfolios.map((portfolio) => (
                  <option key={portfolio.id} value={portfolio.id}>
                    {portfolio.name} - {portfolio.strategy}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Selected Portfolio Chart */}
        <div className="mb-12">
          <div className="bg-elevated rounded-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-heading font-semibold text-white mb-2">
                  {selectedPortfolio.name}
                </h2>
                <p className="text-medium-contrast">{selectedPortfolio.strategy}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-gold mb-1">
                  {formatCurrency(selectedPortfolio.chartData[selectedPortfolio.chartData.length - 1].value)}
                </div>
                <div className={`flex items-center text-sm ${
                  selectedPortfolio.performance.totalReturn > 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {selectedPortfolio.performance.totalReturn > 0 ? (
                    <TrendingUp className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                  {formatPercentage(selectedPortfolio.performance.totalReturn)}
                </div>
              </div>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={selectedPortfolio.chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
                  <XAxis 
                    dataKey="date" 
                    stroke="#a0a0a0"
                    tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  />
                  <YAxis 
                    stroke="#a0a0a0"
                    tickFormatter={(value) => formatCurrency(value)}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#1a1a1a',
                      border: '1px solid #404040',
                      borderRadius: '8px',
                      color: '#f8f8f8'
                    }}
                    formatter={(value: number) => [formatCurrency(value), 'Portfolio Value']}
                    labelFormatter={(label) => new Date(label).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#FDB719" 
                    strokeWidth={3}
                    dot={{ fill: '#FDB719', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#FDB719', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-elevated rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-gold mb-2">
              {formatPercentage(selectedPortfolio.performance.totalReturn)}
            </div>
            <div className="text-medium-contrast text-sm">Total Return</div>
          </div>
          <div className="bg-elevated rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-gold mb-2">
              {selectedPortfolio.performance.sharpeRatio.toFixed(2)}
            </div>
            <div className="text-medium-contrast text-sm">Sharpe Ratio</div>
          </div>
          <div className="bg-elevated rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-gold mb-2">
              {formatPercentage(selectedPortfolio.performance.maxDrawdown)}
            </div>
            <div className="text-medium-contrast text-sm">Max Drawdown</div>
          </div>
          <div className="bg-elevated rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-gold mb-2">
              {formatPercentage(selectedPortfolio.performance.volatility)}
            </div>
            <div className="text-medium-contrast text-sm">Volatility</div>
          </div>
        </div>

        {/* Holdings Table */}
        <div className="mb-12">
          <h3 className="text-2xl font-heading font-semibold text-white mb-6">
            Current Holdings
          </h3>
          <div className="bg-elevated rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-surface">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gold">Symbol</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gold">Weight</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gold">Return</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-subtle">
                {selectedPortfolio.holdings.map((holding, index) => (
                  <tr key={index} className="hover:bg-surface/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-white font-medium">
                      {holding.symbol}
                    </td>
                    <td className="px-6 py-4 text-sm text-medium-contrast">
                      {holding.weight.toFixed(1)}%
                    </td>
                    <td className={`px-6 py-4 text-sm font-medium ${
                      holding.return > 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {formatPercentage(holding.return)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* All Portfolios Table */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-white mb-6">
            All Portfolios
          </h3>
          <div className="bg-elevated rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-surface">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gold">Member</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gold">Strategy</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gold">Total Return</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gold">Sharpe Ratio</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gold">Volatility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-subtle">
                {filteredPortfolios.map((portfolio) => (
                  <tr 
                    key={portfolio.id} 
                    className="hover:bg-surface/50 transition-colors cursor-pointer"
                    onClick={() => setSelectedPortfolio(portfolio)}
                  >
                    <td className="px-6 py-4 text-sm text-white font-medium">
                      {portfolio.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-medium-contrast">
                      {portfolio.strategy}
                    </td>
                    <td className={`px-6 py-4 text-sm font-medium ${
                      portfolio.performance.totalReturn > 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {formatPercentage(portfolio.performance.totalReturn)}
                    </td>
                    <td className="px-6 py-4 text-sm text-medium-contrast">
                      {portfolio.performance.sharpeRatio.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-sm text-medium-contrast">
                      {formatPercentage(portfolio.performance.volatility)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
