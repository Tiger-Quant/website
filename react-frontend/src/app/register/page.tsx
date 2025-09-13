"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, User, GraduationCap, CheckCircle } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    major: "",
    year: "",
    experience: "",
    interests: [] as string[],
    goals: "",
    terms: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === "terms") {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        setFormData(prev => ({
          ...prev,
          interests: checked 
            ? [...prev.interests, value]
            : prev.interests.filter(interest => interest !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const interestOptions = [
    "Algorithmic Trading",
    "Risk Management",
    "Portfolio Optimization",
    "Machine Learning",
    "Options Trading",
    "Cryptocurrency",
    "Quantitative Research",
    "Financial Modeling"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-white mb-6">
            Registration Successful!
          </h1>
          <p className="text-xl text-medium-contrast mb-8">
            Thank you for registering for TigerQuant&apos;s paper trading platform. 
            You&apos;ll receive an email with your login credentials within 24 hours.
          </p>
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-gold text-black font-semibold rounded-lg hover:bg-gold-600 transition-colors duration-200"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Paper Trading Registration
          </h1>
          <p className="text-xl text-medium-contrast">
            Register for access to TigerQuant&apos;s paper trading platform and start building your quantitative finance skills.
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-elevated rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h2 className="text-2xl font-heading font-semibold text-white mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-gold" />
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-surface border border-subtle rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-surface border border-subtle rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-heading font-semibold text-white mb-6 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-gold" />
                Contact Information
              </h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-surface border border-subtle rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="your.email@missouri.edu"
                  />
                </div>
                <div>
                  <label htmlFor="studentId" className="block text-sm font-medium text-white mb-2">
                    Student ID *
                  </label>
                  <input
                    type="text"
                    id="studentId"
                    name="studentId"
                    required
                    value={formData.studentId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-surface border border-subtle rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Enter your student ID"
                  />
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div>
              <h2 className="text-2xl font-heading font-semibold text-white mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-gold" />
                Academic Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="major" className="block text-sm font-medium text-white mb-2">
                    Major *
                  </label>
                  <input
                    type="text"
                    id="major"
                    name="major"
                    required
                    value={formData.major}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-surface border border-subtle rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="e.g., Computer Science & Finance"
                  />
                </div>
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-white mb-2">
                    Academic Year *
                  </label>
                  <select
                    id="year"
                    name="year"
                    required
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-surface border border-subtle rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  >
                    <option value="">Select your year</option>
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                    <option value="Graduate">Graduate</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Experience and Interests */}
            <div>
              <h2 className="text-2xl font-heading font-semibold text-white mb-6">
                Experience & Interests
              </h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-white mb-2">
                    Trading/Finance Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    rows={4}
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-surface border border-subtle rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Describe any previous experience with trading, finance, or quantitative analysis..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    Areas of Interest (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {interestOptions.map((interest) => (
                      <label key={interest} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="interests"
                          value={interest}
                          checked={formData.interests.includes(interest)}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-gold bg-surface border-subtle rounded focus:ring-gold focus:ring-2"
                        />
                        <span className="text-sm text-medium-contrast">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-white mb-2">
                    Goals & Objectives
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={4}
                    value={formData.goals}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-surface border border-subtle rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="What do you hope to achieve through the paper trading platform?"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div>
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="terms"
                  required
                  checked={formData.terms}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-gold bg-surface border-subtle rounded focus:ring-gold focus:ring-2 mt-1"
                />
                <span className="text-sm text-medium-contrast">
                  I agree to the{" "}
                  <button type="button" className="text-gold hover:text-gold-400 underline">
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button type="button" className="text-gold hover:text-gold-400 underline">
                    Privacy Policy
                  </button>
                  . I understand that this is a paper trading platform for educational purposes only.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-gold text-black font-semibold py-4 px-6 rounded-lg hover:bg-gold-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-elevated"
              >
                Register for Paper Trading
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
