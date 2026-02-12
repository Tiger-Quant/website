import { Metadata } from "next";
import { CheckCircle, ArrowRight, Users, BookOpen, Trophy, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Join TigerQuant | Quantitative Finance Club",
  description: "Join TigerQuant and become part of the next generation of quantitative finance professionals at the University of Missouri.",
  openGraph: {
    title: "Join TigerQuant | Quantitative Finance Club",
    description: "Join TigerQuant and become part of the next generation of quantitative finance professionals at the University of Missouri.",
  },
};

export default function JoinPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Join TigerQuant
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Become part of the next generation of quantitative finance professionals. 
            Learn, build, and compete with the best and brightest at Mizzou.
          </p>
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-primary mb-8 text-center">
            Why Join TigerQuant?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-elevated rounded-lg">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">Network</h3>
              <p className="text-secondary">
                Connect with industry professionals, alumni, and like-minded students passionate about quantitative finance.
              </p>
            </div>
            <div className="text-center p-6 bg-elevated rounded-lg">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">Learn</h3>
              <p className="text-secondary">
                Access exclusive workshops, guest lectures, and hands-on projects with cutting-edge financial technology.
              </p>
            </div>
            <div className="text-center p-6 bg-elevated rounded-lg">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">Compete</h3>
              <p className="text-secondary">
                Test your skills in national competitions and showcase your abilities to potential employers.
              </p>
            </div>
          </div>
        </section>

        {/* How to Join Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-primary mb-8 text-center">
            How to Join
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-black font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  Attend an Information Session
                </h3>
                <p className="text-secondary">
                  Come to one of our weekly meetings to learn more about TigerQuant and meet current members. 
                  Meetings are held every Monday and Wednesday at 6:00 PM in Middlebush Hall, Room 132.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-black font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  Start Trading
                </h3>
                <p className="text-secondary">
                  Begin your journey with our paper trading platform and start building 
                  your quantitative finance skills through hands-on experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-gold to-gold-600 rounded-lg p-12">
          <h2 className="text-3xl font-heading font-bold text-gold-bg mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gold-bg-muted mb-8">
            Join TigerQuant today and begin your journey in quantitative finance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://groupme.com/join_group/98022237/L6xXfKtc"
              className="inline-flex items-center px-8 py-4 bg-black text-gold font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gold"
            >
              <Users className="w-5 h-5 mr-2" />
              GroupMe
            </a>
            <a
              href="/register"
              className="inline-flex items-center px-8 py-4 border-2 text-gold-bg font-semibold rounded-lg hover:bg-gold-bg hover:text-gold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold-bg focus:ring-offset-2 focus:ring-offset-gold"
              style={{ borderColor: 'var(--text-dark)' }}
            >
              Start Paper Trading
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
