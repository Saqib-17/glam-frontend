import { Link } from "react-router-dom";

const JewelleryGuides = () => {
  return (
    <div>
      {/* Jewellery Guides Section */}
      <section id="about" className="bg-blue-100 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-blue-700">Jewellery Guides</h2>
          <p className="text-lg text-gray-700">Check out our ready-made guides to make your buying process easier.</p>
        </div>
      </section>

      {/* Sparkle for Every Occasion Section */}
      <section className="bg-blue-50 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-purple-600">Find Your Perfect Sparkle for Every Occasion</h2>
          <p className="text-lg text-gray-700">Explore similar styles</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl px-6">
          {/* Guide Cards */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
            <h3 className="font-bold text-gray-800 mb-2">Find Your Ring Size</h3>
            <img src="https://i.ibb.co.com/r271tsK/d.jpg" alt="Ring Image" className="rounded-lg w-48 h-48 object-cover mb-4" />
            <Link to="/coming-soon" className="text-orange-500 font-bold">Explore More →</Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
            <h3 className="font-bold text-gray-800 mb-2">The Bangles Size</h3>
            <img src="https://i.ibb.co.com/1b1rkqR/BANGLES.png" alt="Bangles Image" className="rounded-lg w-48 h-48 object-cover mb-4" />
            <Link to="/coming-soon" className="text-orange-500 font-bold">Explore More →</Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
            <h3 className="font-bold text-gray-800 mb-2">24k Pure Gold Necklace</h3>
            <img src="https://i.ibb.co.com/WxjnDnK/ring-2-1.jpg" alt="Gold Necklace" className="rounded-lg w-48 h-48 object-cover mb-4" />
            <Link to="/coming-soon" className="text-orange-500 font-bold">Explore More →</Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
            <h3 className="font-bold text-gray-800 mb-2">The Jewellery Care Guide</h3>
            <img src="https://i.ibb.co.com/ChwKL63/ring.jpg" alt="Jewellery Care" className="rounded-lg w-48 h-48 object-cover mb-4" />
            <Link to="/coming-soon" className="text-orange-500 font-bold">Explore More →</Link>
          </div>
        </div>
      </section>

      {/* Shop By Gender Section */}
      <section className="bg-brown-50 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-purple-600">Shop By Gender</h2>
          <p className="text-lg text-gray-700">First-class Jewellery for first-class Men, Women & Children.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl px-6">
          {/* Gender Cards */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
            <img src="https://i.ibb.co.com/Q63tVcC/Men.webp" alt="Men Image" className="rounded-lg w-48 h-48 object-cover mb-4" />
            <Link to="/coming-soon" className="text-orange-500 font-bold">Explore More →</Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
            <img src="https://i.ibb.co.com/NskZVL4/kid.jpg" alt="Kid Image" className="rounded-lg w-48 h-48 object-cover mb-4" />
            <Link to="/coming-soon" className="text-orange-500 font-bold">Explore More →</Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
            <img src="https://i.ibb.co.com/XYGxCRG/Woman.webp" alt="Woman Image" className="rounded-lg w-48 h-48 object-cover mb-4" />
            <Link to="/coming-soon" className="text-orange-500 font-bold">Explore More →</Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
            <img src="https://i.ibb.co.com/4PcqdHC/get-together.jpg" alt="Get Together Image" className="rounded-lg w-48 h-48 object-cover mb-4" />
            <Link to="/coming-soon" className="text-orange-500 font-bold">Explore More →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JewelleryGuides;
