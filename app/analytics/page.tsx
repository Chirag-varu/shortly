"use client"

import { useState } from "react";
import axios from "axios";

const Analytics  = () => {
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

  return (
    <div className="mx-auto max-w-md bg-white shadow-xl border border-gray-200 my-16 p-8 rounded-xl flex flex-col gap-6">
      <h1 className="text-2xl font-bold">URL Analytics</h1>
      <input
        type="text"
        placeholder="Enter Your Short URL slug/alias"
        className="border p-2 mt-2"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
      />
      <button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded-lg shadow-lg py-3 font-bold text-white text-lg" onClick={fetchAnalytics}>
        Get Analytics
      </button>
      {clicks !== null && <p className="mt-4">Total Clicks: {clicks}</p>}
    </div>
  );
};

export default Analytics;
