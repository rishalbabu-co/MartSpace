import { useState } from 'react';
import { Check, Star, Shield, Zap } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

export default function MembershipPlans() {
  const [plans] = useState<Plan[]>([
    {
      id: 'basic',
      name: 'Basic',
      price: '$29',
      period: 'month',
      features: [
        '100 Product Listings',
        'Basic Analytics',
        'Email Support',
        'Standard Visibility'
      ]
    },
    {
      id: 'pro',
      name: 'Professional',
      price: '$99',
      period: 'month',
      features: [
        'Unlimited Product Listings',
        'Advanced Analytics',
        'Priority Support',
        'Enhanced Visibility',
        'Custom Branding',
        'Lead Generation Tools'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$299',
      period: 'month',
      features: [
        'All Pro Features',
        'Dedicated Account Manager',
        'API Access',
        'Custom Integration',
        'Advanced Security',
        'Bulk Operations',
        '24/7 Phone Support'
      ]
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Membership Plans</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to grow your business on MartSpace
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-lg shadow-sm p-6 ${
                plan.popular ? 'ring-2 ring-blue-500 relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`inline-block p-3 rounded-full mb-4 ${
                  plan.id === 'basic' ? 'bg-gray-100' :
                  plan.id === 'pro' ? 'bg-blue-100' :
                  'bg-purple-100'
                }`}>
                  {plan.id === 'basic' ? (
                    <Shield className={`h-6 w-6 ${
                      plan.id === 'basic' ? 'text-gray-600' :
                      plan.id === 'pro' ? 'text-blue-600' :
                      'text-purple-600'
                    }`} />
                  ) : plan.id === 'pro' ? (
                    <Star className="h-6 w-6 text-blue-600" />
                  ) : (
                    <Zap className="h-6 w-6 text-purple-600" />
                  )}
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h2>
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-500 ml-2">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2 rounded-lg font-medium ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {plan.popular ? 'Get Started' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                Can I change plans later?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for business accounts.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                Is there a free trial available?
              </h3>
              <p className="text-gray-600">
                Yes, we offer a 14-day free trial for our Professional plan. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}