"use client";

import { useEffect, useState } from "react";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const res = await fetch("/api/service");
      const data = await res.json();
      setServices(data);
    };
    fetchServices();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Our Services
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service._id}
            className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-2">
              {service.category}
            </h2>
            <p className="text-gray-600">{service.description}</p>

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">Sub Services</h3>

              {service.sub_services.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {service.sub_services.map((sub, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 p-3 rounded-lg border border-blue-200"
                    >
                      <h4 className="text-md font-semibold text-blue-700">{sub.name}</h4>
                      <p className="text-gray-600 text-sm">{sub.description}</p>
                      {sub.technologies && (
                        <p className="text-gray-500 text-xs mt-1">
                          <strong>Technologies:</strong> {sub.technologies.join(", ")}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic mt-2">No sub-services available.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
