import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const newsArticles = [
  {
    id: 1,
    title: "Launching Advanced Courses",
    description: "Zeki Foundation proudly launches advanced courses in AI, Data Science, and Cybersecurity to equip learners with world-class skills.",
  },
  {
    id: 2,
    title: "Adding More Courses to Our Platform",
    description: "We've expanded our learning platform with new programs in UI/UX Design, Digital Marketing, and Mobile App Development.",
  },
  {
    id: 3,
    title: "Zeki Foundation Partners with Global Tech Firms",
    description: "Through our new global partnerships, learners will gain access to international mentorship, certification, and internship opportunities.",
  }
];

const News = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient-blue">News</span>
              </h1>
              <p className="text-xl text-gray-700">
                Stay up to date with the latest news, programs, and community impact stories from Zeki Foundation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Latest News</h2>
              <p className="text-gray-700">
                Learn more about Zeki Foundation’s initiatives, partnerships, and milestones.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {newsArticles.map(article => (
                <Card key={article.id} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{article.title}</CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="mt-4 bg-zeki-600 hover:bg-zeki-700 w-full">Read More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">View All News</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default News;
