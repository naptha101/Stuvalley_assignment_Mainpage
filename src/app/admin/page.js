"use client";

import { useState, useEffect } from "react";

export default function Admin() {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ category: "", description: "" });

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleAddService = async () => {
    const res = await fetch("/api/services", {
      method: "POST",
      body: JSON.stringify(newService),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setServices([...services, data]);
  };

  const handleDeleteService = async (id) => {
    await fetch(`/api/services/${id}`, { method: "DELETE" });
    setServices(services.filter((s) => s._id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Category"
          className="border p-2 mr-2"
          onChange={(e) => setNewService({ ...newService, category: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="border p-2 mr-2"
          onChange={(e) => setNewService({ ...newService, description: e.target.value })}
        />
        <button onClick={handleAddService} className="bg-blue-500 text-white p-2">Add Service</button>
      </div>

      <ul>
        {services.map((service) => (
          <li key={service._id} className="flex justify-between border p-2 mb-2">
            <div>
              <strong>{service.category}</strong> - {service.description}
            </div>
            <button
              onClick={() => handleDeleteService(service._id)}
              className="bg-red-500 text-white p-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
