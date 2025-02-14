"use client"

import { useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card"
import { BarChart2, Link, MousePointer } from "lucide-react"

const Analytics = () => {
  const [slug, setSlug] = useState("");
  const [clicks, setClicks] = useState<number | null>(null);

  const fetchAnalytics = async () => {
    if (!slug) return;

    try {
      const { data } = await axios.get(`/api/analytics/${slug}`);
      setClicks(data.clicks);
    } catch (error) {
      console.error("Error fetching analytics", error);
      setClicks(null);
    }
  };

  const steps = [
    {
      icon: <Link className="h-8 w-8 text-purple-500" />,
      title: "Paste your long URL",
      description: "Enter the long URL you want to shorten into our easy-to-use form.",
    },
    {
      icon: <MousePointer className="h-8 w-8 text-purple-500" />,
      title: 'Click "Shorten URL"',
      description: "Hit the button and watch as we instantly generate a short, powerful link for you.",
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-purple-500" />,
      title: "Check Analytics",
      description: "Enter your short URL alias and track detailed analytics including clicks and top referrers.",
    },
  ]


  return (
    <>
      <div className="sm:mx-auto mx-4 max-w-md bg-white shadow-xl border border-gray-200 my-16 p-8 rounded-xl flex flex-col gap-6">
        <h1 className="text-purple-700 text-center font-extrabold text-3xl">URL Analytics</h1>
        <input
          type="text"
          placeholder="Enter Your Short URL slug/alias"
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
        <button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded-lg shadow-lg py-3 font-bold text-white text-lg" onClick={fetchAnalytics}>
          Get Analytics
        </button>
        {clicks !== null && <p className="mt-4 text-center">Total Clicks: {clicks}</p>}
      </div>

      <section id="how-it-works" className="py-3">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-purple-700 mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 mx-4 sm:mx-auto mb-5">
            {steps.map((step, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6">
                {step.icon}
                <h3 className="text-lg font-semibold my-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Analytics;
