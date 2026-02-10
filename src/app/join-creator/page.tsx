import Image from "next/image";
import Link from "next/link";
import HomeHeader from "@/app/_elements/HomeHeader";
import Footer from "@/app/_elements/Footer";

export const metadata = {
  title: "Join as Creator | Wizad AI",
  description: "Your portfolio, reimagined for the age of AI. Show your creative thinking and let it earn from one place.",
};

export default function JoinCreatorPage() {
  // Replace with your actual Google Forms link
  const GOOGLE_FORMS_LINK = "https://forms.gle/K4d1ppAtMi7praja9";

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <HomeHeader />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Join as </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Creator
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-semibold">
              Earn while building your AI Portfolio
            </p>
            <p className="text-xl md:text-2xl text-gray-400 mb-10">
              Show your creative thinking. Let it earn — from one place.
            </p>
            <a
              href={GOOGLE_FORMS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Join the Creator Waitlist
            </a>
          </div>

          {/* Hero Image */}
          <div className="mt-16 max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop"
              alt="Creative team collaborating on digital content"
              width={1200}
              height={600}
              className="relative z-10 rounded-3xl object-cover w-full h-auto shadow-2xl border border-purple-500/30"
            />
          </div>
        </section>

        {/* Portfolio That Does More */}
        <section className="bg-gradient-to-br from-gray-900/50 to-black py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                A Portfolio That Does <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">More Than Showcase</span>
              </h2>
              <p className="text-xl text-gray-300 text-center mb-12">
                Wizad is where your ideas live, get used, and generate income.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/40 border border-purple-500/20 rounded-2xl p-8">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Your creative ideas become part of an AI content system</h3>
                </div>
                <div className="bg-gradient-to-br from-pink-900/20 to-gray-900/40 border border-pink-500/20 rounded-2xl p-8">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Businesses generate branded content using your work</h3>
                </div>
                <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/40 border border-purple-500/20 rounded-2xl p-8">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Usage translates into earnings</h3>
                </div>
                <div className="bg-gradient-to-br from-pink-900/20 to-gray-900/40 border border-pink-500/20 rounded-2xl p-8">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Everything is visible in one place</h3>
                </div>
              </div>

              <div className="text-center mt-12">
                <p className="text-2xl md:text-3xl font-bold text-white">
                  Your portfolio doesn&apos;t just get seen.<br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">It gets used.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Do */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What You Do</h2>
              <p className="text-xl text-gray-400 text-center mb-16">A simple flow. Built for scale.</p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Step 1 */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-600/10 to-transparent border border-purple-500/30 rounded-2xl p-6 h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">1</div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Join the program</h3>
                    <p className="text-gray-400 text-sm">Apply through the creator form or get invited via selected partners.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-pink-600/10 to-transparent border border-pink-500/30 rounded-2xl p-6 h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">2</div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Create your profile</h3>
                    <p className="text-gray-400 text-sm">Set up your creator identity and portfolio inside Wizad.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-600/10 to-transparent border border-purple-500/30 rounded-2xl p-6 h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">3</div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Submit AI creatives</h3>
                    <p className="text-gray-400 text-sm">Add your creative ideas as prompts and submit them for monetization.</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-pink-600/10 to-transparent border border-pink-500/30 rounded-2xl p-6 h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">4</div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Earn while you sleep</h3>
                    <p className="text-gray-400 text-sm">Approved ideas earn every time they&apos;re used to generate content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where Showing and Earning Come Together */}
        <section className="bg-gradient-to-br from-purple-900/10 to-black py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                Where Showing and Earning <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Come Together</span>
              </h2>
              <p className="text-xl text-gray-300 text-center mb-12">
                On traditional platforms, portfolios lead to opportunities.<br />
                On Wizad, <span className="text-white font-semibold">the portfolio is the opportunity.</span>
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6">
                    <Image
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop"
                      alt="Creative workspace with digital tools"
                      width={400}
                      height={300}
                      className="rounded-lg mb-4 object-cover w-full h-48"
                    />
                    <h3 className="text-lg font-semibold text-white mb-2">One idea can power thousands of generations</h3>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6">
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                      alt="Analytics dashboard showing growth"
                      width={400}
                      height={300}
                      className="rounded-lg mb-4 object-cover w-full h-48"
                    />
                    <h3 className="text-lg font-semibold text-white mb-2">High-performing ideas gain more visibility</h3>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8 text-center">
                <p className="text-2xl font-semibold text-white mb-2">Earnings grow as usage grows</p>
                <p className="text-lg text-gray-300">This is creativity with distribution built in.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Built for a Creator Marketplace */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built for a <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Creator Marketplace</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Wizad is evolving into a global creator marketplace.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/40 border border-purple-500/20 rounded-xl p-6">
                  <div className="text-3xl mb-3">🌐</div>
                  <p className="text-white font-semibold">Public creator portfolios</p>
                </div>
                <div className="bg-gradient-to-br from-pink-900/20 to-gray-900/40 border border-pink-500/20 rounded-xl p-6">
                  <div className="text-3xl mb-3">🔍</div>
                  <p className="text-white font-semibold">Discovery driven by performance</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/40 border border-purple-500/20 rounded-xl p-6">
                  <div className="text-3xl mb-3">📈</div>
                  <p className="text-white font-semibold">Transparent usage and earnings</p>
                </div>
              </div>

              <p className="text-lg text-gray-400">
                Early creators are already shaping how this works.
              </p>
            </div>
          </div>
        </section>

        {/* Why Creators Are Here */}
        <section className="bg-gradient-to-br from-gray-900/50 to-black py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Creators Are Here</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">No clients or revisions</h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">No deadlines or follow-ups</h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">One place to show and earn</h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Creativity that compounds</h3>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-2xl p-8 text-center">
                <p className="text-2xl font-semibold text-white">
                  It feels less like freelancing — and more like <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ownership</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Access Right Now */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Access Right Now</h2>
              <p className="text-xl text-gray-300 mb-8">
                Creators are onboarded gradually to maintain quality.<br />
                Many are already contributing inside the platform.
              </p>

              <div className="relative mb-12">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop"
                  alt="Creative professionals working together"
                  width={1000}
                  height={400}
                  className="rounded-3xl object-cover w-full h-64 border border-purple-500/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl"></div>
              </div>

              <p className="text-3xl font-bold text-white mb-8">Ready?</p>
              <a
                href={GOOGLE_FORMS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-10 py-5 rounded-full text-xl transition-all transform hover:scale-105 shadow-2xl"
              >
                Join the Creator Waitlist
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
