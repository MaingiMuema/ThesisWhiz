import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-50 dark:from-background dark:to-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Transform Your Research Ideas Into{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Academic Papers
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Let our AI-powered platform generate structured, high-quality
              research papers from your prompt. Professional formatting,
              comprehensive research, zero hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/ai"
                className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors font-semibold"
              >
                Try ThesisWhiz Free
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg bg-white dark:bg-gray-800 p-6 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="h-8 bg-gray-100 dark:bg-gray-700 rounded flex items-center px-4 text-sm text-gray-500 dark:text-gray-400">
                  Enter your research topic...
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded w-1/2"></div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded w-5/6"></div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-3xl opacity-20"></div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Powered by Advanced AI Technology
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Transform your research process with our comprehensive suite of
              AI-powered tools
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Intelligent Outlining
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Generate comprehensive research paper outlines in minutes with
                our advanced AI system
              </p>
            </div>

            {/* Feature 2 */}
            <div className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Formatting</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Automatically format your papers according to academic standards
                and citation styles
              </p>
            </div>

            {/* Feature 3 */}
            <div className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Real-time Generation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Watch your research paper take shape in real-time as our AI
                writes and refines content
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white dark:bg-gray-800" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission Statement */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Revolutionizing Academic Research
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              At ThesisWhiz, we&apos;re committed to democratizing academic
              writing through artificial intelligence, making high-quality
              research accessible to everyone.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-16">
            {["20k+", "95%", "24/7", "100%"].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {
                    [
                      "Papers Generated",
                      "Satisfaction Rate",
                      "AI Availability",
                      "Original Content",
                    ][index]
                  }
                </div>
              </div>
            ))}
          </div>

          {/* Value Propositions */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every paper is verified for originality and academic standards
                compliance
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Generate comprehensive research papers in minutes, not hours or
                days
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Deep Research</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Powered by advanced AI that understands complex academic
                concepts
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Start Your Research Journey
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
