import { useState } from 'react';
import { CreditCard, DollarSign, Clock, AlertCircle, ArrowUpRight } from 'lucide-react';

interface Transaction {
  id: string;
  type: string;
  amount: string;
  description: string;
  date: string;
}

export default function CreditBalance() {
  const [transactions] = useState<Transaction[]>([
    {
      id: 'TRX-001',
      type: 'Credit Added',
      amount: '+$1,000',
      description: 'Monthly credit purchase',
      date: '2024-03-15'
    },
    {
      id: 'TRX-002',
      type: 'Credit Used',
      amount: '-$200',
      description: 'Product promotion',
      date: '2024-03-14'
    },
    {
      id: 'TRX-003',
      type: 'Credit Added',
      amount: '+$500',
      description: 'Bonus credit',
      date: '2024-03-13'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Credit Balance</h1>

          {/* Credit Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600 font-medium">Available Credits</p>
                  <p className="text-2xl font-bold text-blue-700 mt-1">2,500</p>
                </div>
                <CreditCard className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600 font-medium">Credits Used</p>
                  <p className="text-2xl font-bold text-green-700 mt-1">500</p>
                </div>
                <ArrowUpRight className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-orange-600 font-medium">Expiring Soon</p>
                  <p className="text-2xl font-bold text-orange-700 mt-1">200</p>
                </div>
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
            </div>
          </div>

          {/* Buy Credits */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 mb-8">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Need More Credits?</h2>
                <p className="text-blue-100 mb-4">Purchase credits at discounted rates</p>
                <button className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50">
                  Buy Credits
                </button>
              </div>
              <DollarSign className="h-12 w-12 text-white opacity-50" />
            </div>
          </div>

          {/* Transaction History */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Transaction History</h2>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full ${
                      transaction.type === 'Credit Added' 
                        ? 'bg-green-100 text-green-600'
                        : 'bg-orange-100 text-orange-600'
                    }`}>
                      {transaction.type === 'Credit Added' ? <DollarSign className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-800">{transaction.type}</p>
                      <p className="text-sm text-gray-500">{transaction.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${
                      transaction.type === 'Credit Added' 
                        ? 'text-green-600'
                        : 'text-orange-600'
                    }`}>
                      {transaction.amount}
                    </p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}