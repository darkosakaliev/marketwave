// src/app/page.tsx
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Nav />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 dark:bg-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Buy and Sell with</span>
                <span className="block text-blue-600 dark:text-blue-400">
                  MarketWave
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Your trusted marketplace for buying and selling anything online.
                Join our community today!
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="/browse"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
                  >
                    Start Browsing
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="/sell"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                  >
                    Start Selling
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-8">
              Featured Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Electronics", "Fashion", "Home & Garden"].map((category) => (
                <div
                  key={category}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {category}
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-300">
                    Browse the latest in {category.toLowerCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 dark:bg-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
              Why Choose MarketWave
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Secure Transactions",
                  description:
                    "Every transaction is protected with our secure payment system",
                },
                {
                  title: "Wide Selection",
                  description: "Thousands of items across multiple categories",
                },
                {
                  title: "Easy to Use",
                  description:
                    "Simple and intuitive platform for buying and selling",
                },
              ].map((feature) => (
                <div key={feature.title} className="text-center">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
