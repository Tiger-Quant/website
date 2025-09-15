import { Metadata } from "next";
import { Mail, Linkedin } from "lucide-react";
import boardData from "@/../data/board.json";
import alumniData from "@/../data/alumni.json";

export const metadata: Metadata = {
  title: "Executive Board | TigerQuant",
  description: "Meet the TigerQuant Executive Board - the leadership team driving innovation in quantitative finance education at the University of Missouri.",
  openGraph: {
    title: "Executive Board | TigerQuant",
    description: "Meet the TigerQuant Executive Board - the leadership team driving innovation in quantitative finance education at the University of Missouri.",
  },
};

export default function ExecutiveBoardPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Executive Board
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Meet the leadership team driving innovation in quantitative finance education at the University of Missouri.
          </p>
        </div>

        {/* Officers Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading font-semibold text-primary mb-8 text-center">
            Current Officers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardData.officers.map((officer) => (
              <div key={officer.id} className="bg-elevated rounded-lg p-6 card-hover">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-black">
                      {officer.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    {officer.name}
                  </h3>
                  <p className="text-gold font-medium mb-1">{officer.role}</p>
                  <p className="text-secondary text-sm">{officer.major}</p>
                  <p className="text-secondary text-sm">Class of {officer.gradYear}</p>
                </div>
                <p className="text-secondary text-sm mb-6 leading-relaxed">
                  {officer.bio}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${officer.email}`}
                    className="p-2 bg-surface rounded-lg hover:bg-gold hover:text-black transition-colors duration-200"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href={officer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-surface rounded-lg hover:bg-gold hover:text-black transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Alumni Section */}
        <section>
          <h2 className="text-3xl font-heading font-semibold text-primary mb-8 text-center">
            Distinguished Alumni
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumniData.alumni.map((alumnus) => (
              <div key={alumnus.id} className="bg-elevated rounded-lg p-6 card-hover">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-lg font-bold text-black">
                      {alumnus.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                    {alumnus.name}
                  </h3>
                  <p className="text-gold font-medium mb-1">{alumnus.currentPosition}</p>
                  <p className="text-secondary text-sm mb-2">{alumnus.company}</p>
                  <p className="text-secondary text-sm">Class of {alumnus.graduationYear}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
