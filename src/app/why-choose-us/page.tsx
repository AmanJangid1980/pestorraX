import Header from '@/components/Header';
import WhyChooseUs from '@/components/Articles';
import Footer from '@/components/Footer';

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="container-custom py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose PestorraX?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes us the preferred choice for pest control services
            </p>
          </div>
        </div>
        <WhyChooseUs />
      </div>
      <Footer />
    </main>
  );
}
