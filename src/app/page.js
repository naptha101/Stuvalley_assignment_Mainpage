import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Header Section */}
      <header className="text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          Welcome to Information Center
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mt-2">
          Your hub for Services, Products, and Research
        </p>
      </header>

      {/* Sections Grid */}
      <div className="max-w-7xl w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Services Section */}
        <SectionCard
          title="Our Services"
          description="Explore the professional services we offer, including web development, AI solutions, and more."
          link="/services"
          imageSrc="/services.svg"
        />

        {/* Products Section */}
        <SectionCard
          title="Our Products"
          description="Discover our innovative products designed to enhance your digital experience."
          link="/products"
          imageSrc="/products.svg"
        />

        {/* Research Section */}
        <SectionCard
          title="Research Contributions"
          description="Browse our latest research papers and contributions in various domains."
          link="/research"
          imageSrc="/research.svg"
        />
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <p className="text-lg sm:text-xl text-gray-700">Ready to explore?</p>
        <Link
          href="/services"
          className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Information Center. All rights reserved.</p>
      </footer>
    </div>
  );
}

/** Section Card Component */
function SectionCard({ title, description, link, imageSrc }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
      {/* <Image
        src={imageSrc}
        alt={title}
        width={80}
        height={80}
        className="mb-4"
      /> */}
      <h2 className="text-2xl font-bold text-blue-600">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <Link
        href={link}
        className="inline-block mt-4 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Learn More
      </Link>
    </div>
  );
}
