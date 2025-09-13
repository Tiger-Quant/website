"use client";

import { useState } from "react";
import { Calendar, Users, Trophy, Clock, ExternalLink } from "lucide-react";
import competitionsData from "@/../data/competitions.json";

export default function CompetitionsPage() {
  const [selectedCompetition, setSelectedCompetition] = useState<typeof competitionsData.competitions[0] | null>(null);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'upcoming':
        return 'text-blue-400 bg-blue-400/10';
      case 'ongoing':
        return 'text-green-400 bg-green-400/10';
      case 'completed':
        return 'text-medium-contrast bg-muted/10';
      default:
        return 'text-medium-contrast bg-muted/10';
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Competitions
          </h1>
          <p className="text-xl text-medium-contrast max-w-3xl mx-auto">
            Test your skills in national and international quantitative finance competitions.
          </p>
        </div>

        {/* Competitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {competitionsData.competitions.map((competition) => (
            <div 
              key={competition.id} 
              className="bg-elevated rounded-lg p-8 card-hover cursor-pointer"
              onClick={() => setSelectedCompetition(competition)}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-heading font-semibold text-white">
                    {competition.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(competition.status)}`}>
                    {competition.status}
                  </span>
                </div>
                <p className="text-medium-contrast text-sm mb-4">
                  Hosted by {competition.host}
                </p>
                <p className="text-medium-contrast text-sm leading-relaxed">
                  {competition.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-medium-contrast">
                  <Trophy className="w-4 h-4 mr-2 text-gold" />
                  Prize: {competition.prize}
                </div>
                <div className="flex items-center text-sm text-medium-contrast">
                  <Users className="w-4 h-4 mr-2 text-gold" />
                  {competition.participants}
                </div>
                <div className="flex items-center text-sm text-medium-contrast">
                  <Clock className="w-4 h-4 mr-2 text-gold" />
                  {competition.duration}
                </div>
                <div className="flex items-center text-sm text-medium-contrast">
                  <Calendar className="w-4 h-4 mr-2 text-gold" />
                  {competition.year}
                </div>
              </div>

              <button className="w-full bg-gold text-black font-semibold py-3 px-4 rounded-lg hover:bg-gold-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-elevated">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Competition Details Modal */}
        {selectedCompetition && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-elevated rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-heading font-semibold text-white">
                    {selectedCompetition.title}
                  </h2>
                  <button
                    onClick={() => setSelectedCompetition(null)}
                    className="text-medium-contrast hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gold mb-2">Description</h3>
                    <p className="text-medium-contrast leading-relaxed">
                      {selectedCompetition.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gold mb-2">Host Organization</h3>
                      <p className="text-medium-contrast">{selectedCompetition.host}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gold mb-2">Year</h3>
                      <p className="text-medium-contrast">{selectedCompetition.year}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gold mb-2">Prize</h3>
                      <p className="text-medium-contrast">{selectedCompetition.prize}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gold mb-2">Participants</h3>
                      <p className="text-medium-contrast">{selectedCompetition.participants}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gold mb-2">Duration</h3>
                      <p className="text-medium-contrast">{selectedCompetition.duration}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gold mb-2">Status</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedCompetition.status)}`}>
                        {selectedCompetition.status}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gold mb-2">Requirements</h3>
                    <p className="text-medium-contrast leading-relaxed">
                      {selectedCompetition.requirements}
                    </p>
                  </div>

                  <div className="flex justify-end space-x-4 pt-6 border-t border-subtle">
                    <button
                      onClick={() => setSelectedCompetition(null)}
                      className="px-6 py-3 border border-subtle text-medium-contrast rounded-lg hover:text-white hover:border-gold transition-colors duration-200"
                    >
                      Close
                    </button>
                    <button className="px-6 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gold-600 transition-colors duration-200 flex items-center">
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gold to-gold-600 rounded-lg p-12">
          <h2 className="text-3xl font-heading font-bold text-black mb-4">
            Ready to Compete?
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Join TigerQuant to participate in these exciting competitions and showcase your quantitative finance skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/join"
              className="inline-flex items-center px-8 py-4 bg-black text-gold font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gold"
            >
              Join TigerQuant
            </a>
            <a
              href="/executive-board"
              className="inline-flex items-center px-8 py-4 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-gold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gold"
            >
              Contact Leadership
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
