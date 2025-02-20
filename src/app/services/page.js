"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/service");
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-6"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-center text-gray-800 mb-8"
      >
        Our Services
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service) => (
          <motion.div
            key={service._id}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-white shadow-lg rounded-xl p-6 transition-transform"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-2">{service.category}</h2>
            <p className="text-gray-600">{service.description}</p>

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">Sub Services</h3>

              {service.sub_services.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {service.sub_services.map((sub, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="bg-blue-50 p-3 rounded-lg border border-blue-200"
                    >
                      <h4 className="text-md font-semibold text-blue-700">{sub.name}</h4>
                      <p className="text-gray-600 text-sm">{sub.description}</p>
                      {sub.technologies && (
                        <p className="text-gray-500 text-xs mt-1">
                          <strong>Technologies:</strong> {sub.technologies.join(", ")}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic mt-2">No sub-services available.</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
