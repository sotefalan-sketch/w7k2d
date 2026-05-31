import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Headphones, PenTool } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
              Telc & DTB Sınavına
              <span className="block text-orange-500">Hazır mısın?</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-base text-gray-500 sm:text-xl">
              Almanya'daki Türk göçmenler için özel hazırlanmış B1/B2 sınav hazırlık platformu. 
              Gerçek sınav formatında sorular, dinleme testleri ve yazma egzersizleri.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/sign-up">
                <Button size="lg" className="text-lg rounded-full bg-orange-500 hover:bg-orange-600">
                  Şimdi Başla
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="text-lg rounded-full">
                  Fiyatlar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Lesen (Okuma)
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Gerçek sınav formatında okuma parçaları ve sorular. Telc B2 ve DTB B2 odaklı.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Headphones className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Hören (Dinleme)
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Sınav formatında dinleme egzersizleri. Günlük iş hayatı ve resmi diyaloglar.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <PenTool className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Schreiben (Yazma)
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Forum yazıları, resmi mektuplar ve e-posta örnekleri ile pratik yapın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Sadece 25€/yıl
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Goethe kursları 500€'dan başlıyor. Biz tüm sınav hazırlık materyallerini 
                yılda sadece 25€'ya sunuyoruz. Hemen üye ol, sınava hazırlan.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <Link href="/pricing">
                <Button size="lg" className="text-lg rounded-full bg-orange-500 hover:bg-orange-600">
                  Üyelik Planları
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
