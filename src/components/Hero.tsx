export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0">
        {/* Indigo blob */}
        <div 
          className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-indigo-900/30 blur-3xl"
          style={{
            animation: 'breathe 6s ease-in-out infinite',
          }}
        />
        
        {/* Purple blob */}
        <div 
          className="absolute right-1/4 top-1/2 h-[500px] w-[500px] rounded-full bg-purple-900/30 blur-3xl"
          style={{
            animation: 'breathe 8s ease-in-out infinite',
            animationDelay: '1s',
          }}
        />
        
        {/* Teal blob */}
        <div 
          className="absolute left-1/3 -bottom-1/4 h-80 w-80 rounded-full bg-teal-900/30 blur-3xl"
          style={{
            animation: 'breathe 7s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-7xl font-light tracking-tighter text-white sm:text-8xl md:text-9xl">
          Betancourt
        </h1>
        <h2 className="mt-4 text-2xl font-light tracking-tight text-zinc-400 sm:text-3xl">
          Audio Production
        </h2>
      </div>
    </section>
  );
}

