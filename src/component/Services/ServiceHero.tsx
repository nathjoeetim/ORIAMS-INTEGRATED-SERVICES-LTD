export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 bg-linear-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white mb-6">
            Our Services
          </div>
          <h1 className="text-white mb-6">
            Comprehensive Environmental Cleanup Solutions
          </h1>
          <p className="text-xl text-blue-100">
            From oil spill response to site remediation and ecosystem
            restoration, we deliver end-to-end environmental services with
            expertise, safety, and sustainability at the core.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
          <div className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="text-3xl font-semibold text-white mb-2">150+</div>
            <div className="text-blue-100">Sites Cleaned</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="text-3xl font-semibold text-white mb-2">8+</div>
            <div className="text-blue-100">Years Experience</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="text-3xl font-semibold text-white mb-2">50+</div>
            <div className="text-blue-100">Projects in Rivers State</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="text-3xl font-semibold text-white mb-2">1</div>
            <div className="text-blue-100">Shell Partnership</div>
          </div>
        </div>
      </div>
    </section>
  );
}
