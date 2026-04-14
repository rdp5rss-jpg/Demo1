import { Mail, Twitter, Github, ChevronRight } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-neon selection:text-background">
      {/* Texture Overlay */}
      <div className="texture-overlay" />

      {/* Section 1: Hero */}
      <section className="relative h-screen w-full overflow-hidden rounded-b-[32px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4" type="video/mp4" />
        </video>
        
        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-6 py-8 md:px-12 lg:px-20 max-w-[1831px] mx-auto w-full">
          <div className="font-grotesk text-[16px] uppercase tracking-wider">Orbis.Nft</div>
          
          <nav className="hidden lg:block liquid-glass rounded-[28px] px-[52px] py-[24px]">
            <ul className="flex gap-10">
              {['Homepage', 'Gallery', 'Buy NFT', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-grotesk text-[13px] uppercase transition-colors hover:text-neon">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="lg:hidden">
            {/* Mobile menu could go here, but prompt doesn't specify one beyond hiding nav */}
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 lg:px-20 max-w-[1831px] mx-auto w-full">
          <div className="relative lg:ml-32 max-w-[780px]">
            <h1 className="font-grotesk text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] uppercase leading-[1.05] md:leading-[1]">
              Beyond earth<br />
              and ( its ) familiar boundaries
            </h1>
            <span className="absolute -right-4 md:-right-12 top-0 rotate-[-1deg] font-condiment text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-neon mix-blend-exclusion opacity-90">
              Nft collection
            </span>
          </div>

          {/* Social Icons (Desktop) */}
          <div className="hidden lg:flex absolute right-20 top-1/2 -translate-y-1/2 flex-col gap-4">
            {[Mail, Twitter, Github].map((Icon, i) => (
              <button key={i} className="liquid-glass flex h-[56px] w-[56px] items-center justify-center rounded-[1rem] transition-colors hover:bg-white/10">
                <Icon size={20} />
              </button>
            ))}
          </div>

          {/* Social Icons (Mobile) */}
          <div className="lg:hidden flex justify-center gap-4 mt-12">
            {[Mail, Twitter, Github].map((Icon, i) => (
              <button key={i} className="liquid-glass flex h-[56px] w-[56px] items-center justify-center rounded-[1rem] transition-colors hover:bg-white/10">
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: About */}
      <section className="relative min-h-screen w-full py-16 md:py-24">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-[1831px] mx-auto w-full h-full flex flex-col justify-between gap-20">
          {/* Top Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="relative">
              <h2 className="font-grotesk text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] uppercase leading-none">
                Hello!<br />
                I'm orbis
              </h2>
              <span className="absolute -bottom-4 -right-8 rotate-[-1deg] font-condiment text-[36px] sm:text-[44px] md:text-[56px] lg:text-[68px] text-neon mix-blend-exclusion">
                Orbis
              </span>
            </div>
            <p className="font-mono text-[14px] md:text-[16px] uppercase max-w-[266px] leading-relaxed">
              A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
            </p>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[14px] md:text-[16px] uppercase opacity-10 text-[#010828] lg:text-cream">
                A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
              </p>
              <p className="font-mono text-[14px] md:text-[16px] uppercase opacity-10 text-[#010828] lg:text-cream">
                A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
              </p>
            </div>
            <div className="hidden lg:flex flex-col gap-4">
              <p className="font-mono text-[14px] md:text-[16px] uppercase opacity-10">
                A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
              </p>
              <p className="font-mono text-[14px] md:text-[16px] uppercase opacity-10">
                A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: NFT Grid */}
      <section className="bg-background py-20 lg:py-32">
        <div className="px-6 md:px-12 lg:px-20 max-w-[1831px] mx-auto w-full">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 lg:mb-24">
            <div>
              <h2 className="font-grotesk text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] uppercase leading-tight">
                Collection of<br />
                <span className="ml-12 md:ml-24 lg:ml-32">
                  <span className="font-condiment text-neon normal-case">Space</span> objects
                </span>
              </h2>
            </div>
            <button className="group flex flex-col items-start">
              <div className="flex items-end gap-2">
                <span className="font-grotesk text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-none">SEE</span>
                <div className="flex flex-col font-grotesk text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] leading-[0.8]">
                  <span>ALL</span>
                  <span>CREATORS</span>
                </div>
              </div>
              <div className="h-[6px] md:h-[8px] lg:h-[10px] w-full bg-neon mt-2 transition-all group-hover:scale-x-110 origin-left" />
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4", score: "8.7/10" },
              { url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4", score: "9/10" },
              { url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4", score: "8.2/10" }
            ].map((nft, i) => (
              <div key={i} className="liquid-glass group rounded-[32px] p-[18px] transition-colors hover:bg-white/10">
                <div className="relative pb-[100%] rounded-[24px] overflow-hidden mb-4">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source src={nft.url} type="video/mp4" />
                  </video>
                </div>
                
                <div className="liquid-glass flex items-center justify-between rounded-[20px] px-5 py-4">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-cream/70 uppercase">Rarity Score:</span>
                    <span className="text-[16px] font-grotesk">{nft.score}</span>
                  </div>
                  <button className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] shadow-lg shadow-purple-500/50 transition-transform hover:scale-110">
                    <ChevronRight size={24} className="text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="relative w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto block"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4" type="video/mp4" />
        </video>

        {/* CTA Content */}
        <div className="absolute inset-0 flex items-center justify-end lg:pr-[20%] lg:pl-[15%] px-6">
          <div className="relative text-right">
            <span className="absolute -top-12 -left-12 font-condiment text-[17px] sm:text-[34px] md:text-[50px] lg:text-[68px] text-neon mix-blend-exclusion">
              Go beyond
            </span>
            <h2 className="font-grotesk text-[16px] sm:text-[30px] md:text-[45px] lg:text-[60px] uppercase leading-tight">
              <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-12">JOIN US.</div>
              REVEAL WHAT'S HIDDEN.<br />
              DEFINE WHAT'S NEXT.<br />
              FOLLOW THE SIGNAL.
            </h2>
          </div>
        </div>

        {/* Social Icons (Bottom-left) */}
        <div className="absolute left-[8%] bottom-[12%] md:bottom-[15%] lg:bottom-[20%]">
          <div className="liquid-glass flex flex-col rounded-[0.5rem] md:rounded-[1rem] lg:rounded-[1.25rem] overflow-hidden">
            {[Mail, Twitter, Github].map((Icon, i) => (
              <button 
                key={i} 
                className={`flex items-center justify-center transition-colors hover:bg-white/10
                  w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem]
                  h-[10vw] sm:h-[4.5rem] md:h-[3.5rem] lg:h-[5.5rem]
                  ${i !== 2 ? 'border-b border-white/10' : ''}`}
              >
                <Icon size={24} />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
