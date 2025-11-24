export default function CallToAction() {
  return (
    <section className="py-20 bg-linear-to-r from-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-heading font-bold mb-4">
          Ready to Improve Your Game?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Track your stats, analyze your matches, and climb the ranked ladder
        </p>
        <a 
          href="#search" 
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition"
        >
          Search Your Profile
        </a>
      </div>
    </section>
  );
}