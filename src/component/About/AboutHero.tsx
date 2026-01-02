export function AboutHero() {
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
            About Oriams Services
          </div>
          <h1 className="text-white mb-6">
            Protecting Communities, Restoring Environments
          </h1>
          <p className="text-xl text-blue-100">
            For over a decade, Oriams Services has been leading the way in oil
            spill cleanup and environmental remediation. We deliver rapid
            response, safe site restoration, and sustainable solutions that
            safeguard ecosystems and communities for the future.
          </p>
        </div>
      </div>
    </section>
  );
}
