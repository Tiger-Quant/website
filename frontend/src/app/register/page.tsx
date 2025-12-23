"use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Mail, User, GraduationCap, CheckCircle } from "lucide-react";

export default function RegisterPage() {
  /*
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
            : prev.interests.filter(i => i !== value),
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    "Financial Modeling",
  ];
  */

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
          Under Construction
        </h1>
        <p className="text-lg text-secondary">
          The paper trading platform is currently being built.
          <br />
          Please check back soon.
        </p>
      </div>
    </div>
  );
}
