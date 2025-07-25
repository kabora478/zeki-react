import Navbar from "@/components/Navbar";
import ImpactSection from "@/components/Impact";
import Footer from "@/components/Footer";

const Impact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="py-12 bg-zeki-50">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Our Impact</h1>
            <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Zeki Foundation is transforming lives through technology, education, and community empowerment across East Africa.
            </p>
          </div>
        </div>
        <ImpactSection />

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
                <p className="text-gray-700 mb-4">
                  These are the stories of real people whose lives have been transformed through Zeki Foundation's initiatives.
                </p>

                <div className="space-y-8 mt-8">
                  <div className="p-6 border rounded-lg bg-white shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Maria's Tech Journey</h3>
                    <p className="text-gray-600 mb-4">
                      "Zeki Foundation gave me the skills and confidence to launch my own software consultancy. Now, I mentor others in my village."
                    </p>
                    <p className="text-zeki-600 font-medium">Maria Kimani, Tech Entrepreneur</p>
                  </div>

                  <div className="p-6 border rounded-lg bg-white shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">James' Art Collective</h3>
                    <p className="text-gray-600 mb-4">
                      "The creative arts program at Zeki helped me build a career in digital illustration. We now host online exhibitions globally."
                    </p>
                    <p className="text-zeki-600 font-medium">James Odhiambo, Visual Artist</p>
                  </div>
                </div>
              </div>

              <div className="bg-zeki-100 p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-6">Impact Report</h2>
                <p className="text-gray-700 mb-6">
                  Explore the measurable change we're driving across the region. Our annual report covers progress in employment, innovation, and inclusion.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <p className="text-4xl font-bold text-zeki-600">87%</p>
                    <p className="text-gray-700">of participants employed within 6 months</p>
                  </div>

                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <p className="text-4xl font-bold text-zeki-600">90%</p>
                    <p className="text-gray-700">of supported startups survive over 2 years</p>
                  </div>

                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <p className="text-4xl font-bold text-zeki-600">65%</p>
                    <p className="text-gray-700">of beneficiaries come from underserved areas</p>
                  </div>

                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <p className="text-4xl font-bold text-zeki-600">4.8/5</p>
                    <p className="text-gray-700">average satisfaction rating</p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <a 
                    href="#download-report" 
                    className="text-zeki-600 font-medium hover:text-zeki-700 transition-colors inline-flex items-center"
                  >
                    Download our 2024 Impact Report
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Impact;
