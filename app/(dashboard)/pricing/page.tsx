import { checkoutAction } from '@/lib/payments/actions';
import { Check } from 'lucide-react';
import { getStripePrices, getStripeProducts } from '@/lib/payments/stripe';
import { SubmitButton } from './submit-button';

export const revalidate = 3600;

export default async function PricingPage() {
  const [prices, products] = await Promise.all([
    getStripePrices(),
    getStripeProducts(),
  ]);

  const basePlan = products.find((product) => product.name === 'Base');
  const basePrice = prices.find((price) => price.productId === basePlan?.id);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Üyelik Planı</h1>
        <p className="mt-4 text-lg text-gray-500">
          Tüm sınav hazırlık materyallerine tam erişim. İptal istediğin zaman.
        </p>
      </div>
      <div className="max-w-sm mx-auto">
        <div className="pt-6 border border-gray-200 rounded-2xl p-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-2">
            Yıllık Üyelik
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Tüm modüllere sınırsız erişim
          </p>
          <p className="text-4xl font-medium text-gray-900 mb-6">
            {basePrice ? `€${basePrice.unitAmount / 100}` : '€25'}
            <span className="text-xl font-normal text-gray-600"> / yıl</span>
          </p>
          <ul className="space-y-4 mb-8">
            {[
              'Lesen (Okuma) testleri',
              'Hören (Dinleme) testleri',
              'Schreiben (Yazma) egzersizleri',
              'Telc B1/B2 sınav formatı',
              'DTB B2 sınav formatı',
              'Türkçe açıklamalar',
              'Sınırsız pratik',
            ].map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          <form action={checkoutAction}>
            <input type="hidden" name="priceId" value={basePrice?.id} />
            <SubmitButton />
          </form>
        </div>
      </div>
    </main>
  );
}
