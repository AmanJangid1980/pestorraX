import Header from '@/components/Header';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="container-custom py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Pest Control Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional, effective, and eco-friendly pest control solutions for your home and business
            </p>
          </div>
        </div>
        <Services />
      </div>
      <Footer />
    </main>
  );
}
