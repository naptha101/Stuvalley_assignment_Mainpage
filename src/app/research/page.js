"use client";

import { useEffect, useState } from "react";

export default function Research() {
  const [research, setResearch] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResearch = async () => {
      try {
        const res = await fetch("/api/research");
        const data = await res.json();
        setResearch(data);
      } catch (error) {
        console.error("Error fetching research:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchResearch();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Research Contributions
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading research data...</p>
      ) : research.length === 0 ? (
        <p className="text-center text-gray-500 italic">No research contributions available.</p>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {research.map((paper) => (
            <div
              key={paper._id}
              className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-blue-600">{paper.title}</h2>
              <p className="text-gray-700 mt-2">
                <strong>Year:</strong> {paper.year}
              </p>
              <p className="text-gray-700">
                <strong>Type:</strong> {paper.type}
              </p>
              <p className="text-gray-600 mt-2">{paper.description}</p>
              <a
                href={paper.doi}
                target="_blank"
                className="inline-block mt-4 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
