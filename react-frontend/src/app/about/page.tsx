import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | TigerQuant",
  description: "Learn about TigerQuant's mission to advance quantitative finance education at the University of Missouri through hands-on learning and industry partnerships.",
  openGraph: {
    title: "About Us | TigerQuant",
    description: "Learn about TigerQuant's mission to advance quantitative finance education at the University of Missouri through hands-on learning and industry partnerships.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            About TigerQuant
          </h1>
          <p className="text-xl text-medium-contrast max-w-3xl mx-auto">
            We are a student-led organization dedicated to advancing quantitative finance education and fostering the next generation of financial professionals.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-white mb-6">Our Mission</h2>
          <div className="bg-elevated rounded-lg p-8">
            <p className="text-lg text-medium-contrast leading-relaxed mb-6">
              TigerQuant is committed to providing University of Missouri students with comprehensive exposure to quantitative finance through hands-on learning, industry partnerships, and competitive opportunities. We bridge the gap between academic theory and real-world application in the rapidly evolving field of quantitative finance.
            </p>
            <p className="text-lg text-medium-contrast leading-relaxed">
              Our organization serves as a platform for students to develop practical skills in algorithmic trading, risk management, financial modeling, and data analysis while building a strong professional network within the quantitative finance community.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-white mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-elevated rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold text-gold mb-4">Excellence</h3>
              <p className="text-medium-contrast">
                We strive for the highest standards in everything we do, from educational content to competition performance.
              </p>
            </div>
            <div className="bg-elevated rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold text-gold mb-4">Innovation</h3>
              <p className="text-medium-contrast">
                We embrace cutting-edge technologies and methodologies to stay at the forefront of quantitative finance.
              </p>
            </div>
            <div className="bg-elevated rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold text-gold mb-4">Collaboration</h3>
              <p className="text-medium-contrast">
                We believe in the power of teamwork and knowledge sharing to achieve collective success.
              </p>
            </div>
            <div className="bg-elevated rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold text-gold mb-4">Integrity</h3>
              <p className="text-medium-contrast">
                We maintain the highest ethical standards in all our activities and professional relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-white mb-8">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">160+</div>
              <div className="text-medium-contrast">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">15+</div>
              <div className="text-medium-contrast">Competitions Won</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">50+</div>
              <div className="text-medium-contrast">Guest Speakers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">5+</div>
              <div className="text-medium-contrast">Years Active</div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section>
          <h2 className="text-3xl font-heading font-semibold text-white mb-8">Our Journey</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-white mb-2">2019 - Foundation</h3>
                <p className="text-medium-contrast">TigerQuant was founded by a group of passionate students with a vision to bring quantitative finance education to Mizzou.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-white mb-2">2020 - First Competition</h3>
                <p className="text-medium-contrast">We participated in our first national quantitative finance competition, finishing in the top 10.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-white mb-2">2022 - Industry Partnerships</h3>
                <p className="text-medium-contrast">Established partnerships with leading financial institutions for internships and mentorship programs.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-white mb-2">2024 - Record Growth</h3>
                <p className="text-medium-contrast">Reached our highest membership numbers and launched our paper trading platform for hands-on learning.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
