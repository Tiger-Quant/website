import Link from "next/link";
import { ArrowRight, Users, BookOpen, Trophy } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-surface to-elevated py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6 animate-fade-in">
            TigerQuant
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto animate-fade-in">
            University of Missouri&apos;s premier quantitative finance club. Learn, build, and compete in the world of quantitative finance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              href="/join"
              className="inline-flex items-center px-8 py-4 bg-gold text-black font-semibold rounded-lg hover:bg-gold-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-surface"
            >
              Join TigerQuant
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center px-8 py-4 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-surface"
            >
              Register to Trade
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-gold mb-2">30+</div>
              <div className="text-secondary">Active Members</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-gold mb-2">Top 5%</div>
              <div className="text-secondary">IMC Prosperity</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-gold mb-2">10+</div>
              <div className="text-secondary">Guest Speakers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-16">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Learn */}
            <div className="text-center p-8 bg-elevated rounded-lg card-hover">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-primary mb-4">Learn</h3>
              <p className="text-secondary">
                Master quantitative finance concepts through workshops, guest lectures, and hands-on projects with industry professionals.
              </p>
            </div>

            {/* Build */}
            <div className="text-center p-8 bg-elevated rounded-lg card-hover">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-primary mb-4">Build</h3>
              <p className="text-secondary">
                Develop trading algorithms, risk models, and financial tools using cutting-edge technology and real market data.
              </p>
            </div>

            {/* Compete */}
            <div className="text-center p-8 bg-elevated rounded-lg card-hover">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-primary mb-4">Compete</h3>
              <p className="text-secondary">
                Test your skills in national competitions and trading challenges against top universities and industry professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold to-gold-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold-bg mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gold-bg-muted mb-8">
            Join TigerQuant today and become part of the next generation of quantitative finance professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="inline-flex items-center px-8 py-4 bg-black text-gold font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gold"
            >
              Join Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 border-2 text-gold-bg font-semibold rounded-lg hover:bg-gold-bg hover:text-gold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold-bg focus:ring-offset-2 focus:ring-offset-gold"
              style={{ borderColor: 'var(--text-dark)' }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}