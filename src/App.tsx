import { useEffect, useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CommandCenterScene } from './scene/CommandCenterScene';
import LoadingScreen from './components/LoadingScreen';

gsap.registerPlugin(ScrollTrigger);

const featuredGames = [
  {
    title: 'Music Beat Ball Jumping Games',
    genre: 'Rhythm Runner',
    platform: 'Mobile / Appstore',
    tech: 'Unity • C# • DOTween',
    color: 'from-cyan-500/40 to-blue-700/30'
  },
  {
    title: 'Truck Simulator Driving Games American',
    genre: 'Simulation',
    platform: 'Mobile / Amazon',
    tech: 'Unity • C# • HDRP',
    color: 'from-violet-500/35 to-slate-900/40'
  },
  {
    title: 'Tall Man Run Race 3D',
    genre: 'Endless Runner',
    platform: 'Mobile / Android',
    tech: 'Unity • C# • Particle Systems',
    color: 'from-blue-500/40 to-slate-950/30'
  },
  {
    title: 'DIY Phone Case Makeover Games',
    genre: 'Creative Casual',
    platform: 'Mobile / iOS',
    tech: 'Unity • C# • UI/UX',
    color: 'from-pink-500/30 to-cyan-600/20'
  },
  {
    title: 'Bad Cat Simulator Hell 2026',
    genre: 'Action Sandbox',
    platform: 'Mobile / Amazon',
    tech: 'Unity • C# • Monetization',
    color: 'from-red-500/20 to-violet-950/30'
  },
  {
    title: 'Barry Prison Escape Jail Break',
    genre: 'Adventure',
    platform: 'Mobile / Google Play',
    tech: 'Unity • C# • AI Systems',
    color: 'from-emerald-400/30 to-slate-900/40'
  },
  {
    title: 'Goods Sort Master Matching Games',
    genre: 'Puzzle Strategy',
    platform: 'Mobile / Multi',
    tech: 'Unity • C# • Firebase',
    color: 'from-cyan-400/30 to-blue-950/35'
  },
  {
    title: 'Cat Simulator 3D Virtual Pet',
    genre: 'Simulation',
    platform: 'Mobile / Appstore',
    tech: 'Unity • C# • Ads Integration',
    color: 'from-indigo-400/20 to-purple-950/30'
  },
  {
    title: 'Nail Art Color Simulator Master',
    genre: 'Creative Casual',
    platform: 'Mobile / iOS',
    tech: 'Unity • C# • IAP',
    color: 'from-fuchsia-400/30 to-sky-950/25'
  }
];

const skills = [
  {
    title: 'Programming',
    items: ['Unity', 'C#', 'C++']
  },
  {
    title: 'Mobile Development',
    items: ['iOS', 'Xcode', 'Fire TV Controllers']
  },
  {
    title: 'Game Systems',
    items: ['Ads Integration', 'In-App Purchases', 'Input Systems', 'Gamepad Support']
  },
  {
    title: 'Design',
    items: ['UI/UX Design', 'Level Design', 'DOTween', 'Particle Systems']
  },
  {
    title: 'Integrations',
    items: ['Firebase', 'REST APIs']
  },
  {
    title: 'Optimization',
    items: ['Debugging', 'Performance Profiling', 'Memory Optimization']
  },
  {
    title: 'Publishing',
    items: ['Google Play Store', 'Amazon Appstore', 'Apple App Store']
  },
  {
    title: 'Collaboration',
    items: ['Git', 'GitHub', 'Agile Workflow']
  }
];

const achievements = [
  'Published Multiple Commercial Games',
  'Professional Unity Developer',
  'Cross Platform Development',
  'Game Monetization Expert',
  'Performance Optimization Specialist',
  'Firebase Integration Expert'
];

const timeline = [
  {
    company: 'Gametron Studio',
    role: 'Unity Game Developer',
    period: 'March 2025 – Present',
    bullets: ['Gameplay Programming', 'Performance Optimization', 'Mobile Systems Development', 'Advanced Feature Integration']
  },
  {
    company: 'Root Pointers',
    role: 'Game Developer',
    period: '2023 – 2025',
    bullets: ['Developed and published mobile games', 'Google Play Store deployment', 'Amazon Appstore deployment', 'Firebase integration', 'Ads monetization', 'In-App Purchasing systems', 'Game optimization']
  }
];

type StatKey = 'games' | 'years' | 'players' | 'platforms';

function App() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState<Record<StatKey, number>>({ games: 0, years: 0, players: 0, platforms: 0 });
  const statConfig = useMemo(
    () => [
      { key: 'games' as const, label: 'Published Games', value: 9, suffix: '+' },
      { key: 'years' as const, label: 'Years Experience', value: 3, suffix: '+' },
      { key: 'players' as const, label: 'Players Reached', value: 12, suffix: 'M+' },
      { key: 'platforms' as const, label: 'Platforms Published', value: 4, suffix: '+' }
    ],
    []
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1300);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const animation = gsap.timeline({
      defaults: { duration: 1.2, ease: 'power3.out' }
    });

    animation.from('.section-title', { y: 40, opacity: 0, stagger: 0.08 });
    animation.from('.fade-in', { y: 28, opacity: 0, stagger: 0.05, delay: 0.1 });

    ScrollTrigger.batch('.card-animate', {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.08, duration: 0.75, ease: 'power2.out' })
    });
  }, []);

  useEffect(() => {
    const durations = [1200, 1800, 1600, 1400];

    statConfig.forEach((item, index) => {
      const start = 0;
      const end = item.value;
      const step = Math.ceil(end / (durations[index] / 50));
      let current = start;
      const interval = window.setInterval(() => {
        current = Math.min(current + step, end);
        setCount((prev) => ({ ...prev, [item.key]: current }));
        if (current >= end) window.clearInterval(interval);
      }, 50);
      return () => window.clearInterval(interval);
    });
  }, [statConfig]);

  return (
    <main className="relative overflow-hidden">
      {loading && <LoadingScreen />}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-hero opacity-80" />
      <div className="absolute inset-0 overflow-hidden">
        <Canvas camera={{ position: [0, 0, 10], fov: 40 }} className="pointer-events-none h-full w-full">
          <CommandCenterScene />
        </Canvas>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 pb-20 pt-6 text-slate-100">
        <header className="relative z-10 flex items-center justify-between rounded-3xl border border-slate-500/20 bg-slate-950/10 px-6 py-4 shadow-panel backdrop-blur-xl">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Game Developer Portfolio</p>
            <h1 className="mt-2 text-2xl font-semibold text-white">Muhammad Anas Butt</h1>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a href="#featured" className="rounded-full border border-cyan-400/20 px-4 py-2 text-sm text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-500/10">Explore Games</a>
            <a href="mailto:anasb5989@gmail.com" className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">Contact</a>
          </div>
        </header>

        <section className="relative z-10 mt-12 overflow-hidden rounded-[32px] border border-slate-600/20 bg-slate-950/80 p-8 shadow-panel backdrop-blur-xl sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.8fr] lg:items-end">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100 shadow-neon">
                <span className="h-2 w-2 rounded-full bg-cyan-300" /> Unity Game Developer
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-semibold tracking-tight neon-text sm:text-6xl">Transforming ideas into immersive gaming experiences.</h2>
                <p className="max-w-2xl text-base text-slate-300 sm:text-lg">Gameplay Programmer • Mobile Games Specialist • Game Systems Engineer</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <a href="#featured" className="rounded-3xl bg-cyan-500/15 px-5 py-4 text-center text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/30">Explore Games</a>
                <a href="#contact" className="rounded-3xl border border-slate-500/30 bg-slate-950/70 px-5 py-4 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-400/50">Contact Me</a>
                <a href="/resume.pdf" className="rounded-3xl bg-violet-500/15 px-5 py-4 text-center text-sm font-semibold text-violet-200 transition hover:bg-violet-500/30">Download Resume</a>
              </div>
            </div>

            <div className="grid gap-4 rounded-[28px] bg-slate-950/75 p-5 shadow-neon ring-1 ring-cyan-400/10">
              <div className="rounded-3xl border border-cyan-300/15 bg-slate-900/80 p-5">
                <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Command Center</p>
                <h3 className="mt-3 text-xl font-semibold text-white">Futuristic game world dashboard</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">Interactive player analytics and Unity-inspired holographic systems in motion.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {statConfig.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-cyan-200/5 bg-slate-900/80 p-4 text-center">
                    <p className="text-3xl font-semibold text-white">{count[stat.key]}{stat.suffix}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-title mt-20 rounded-[32px] border border-slate-600/20 bg-slate-950/80 p-10 shadow-panel backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">About</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A senior Unity developer crafting premium mobile game systems.</h2>
            </div>
            <div className="max-w-xl text-slate-300">I build highly optimized mobile experiences with gameplay programming, advanced systems, Firebase integration, monetization frameworks, UI/UX polish and level design. Currently leading feature development at Gametron Studio after publishing successful games with Root Pointers.</div>
          </div>
        </section>

        <section className="mt-16 grid gap-8 xl:grid-cols-[0.9fr_0.8fr]">
          <article className="glass-panel relative overflow-hidden rounded-[32px] border border-slate-500/20 p-8 shadow-panel">
            <div className="absolute inset-x-6 top-0 h-1.5 bg-gradient-to-r from-cyan-400 to-violet-500 opacity-80" />
            <h3 className="section-title text-2xl font-semibold text-white">Experience</h3>
            <div className="mt-8 space-y-8">
              {timeline.map((item) => (
                <div key={item.company} className="card-animate opacity-0 transform-gpu translate-y-8 rounded-[28px] border border-slate-600/15 bg-slate-950/90 p-6 shadow-neon">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-white">{item.company}</p>
                      <p className="text-sm text-cyan-200/90">{item.role}</p>
                    </div>
                    <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-200">{item.period}</span>
                  </div>
                  <ul className="mt-4 grid gap-3 text-slate-300 sm:grid-cols-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="rounded-2xl border border-slate-600/10 bg-slate-900/80 px-4 py-3">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-panel rounded-[32px] border border-slate-500/20 p-8 shadow-panel">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Studio</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Gametron Studio</h3>
            <p className="mt-3 text-slate-300">Leading gameplay and performance initiatives for premium mobile releases, optimization pipelines and next-gen interactive systems.</p>
            <div className="mt-8 space-y-4">
              <div className="rounded-3xl border border-cyan-400/10 bg-slate-900/80 p-4">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Current Focus</p>
                <p className="mt-2 text-white">Gameplay programming, system architecture, mobile performance and AAA-quality polish.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-600/10 bg-slate-900/80 p-4">Mobile Systems</div>
                <div className="rounded-3xl border border-slate-600/10 bg-slate-900/80 p-4">Game Monetization</div>
                <div className="rounded-3xl border border-slate-600/10 bg-slate-900/80 p-4">Live Ops Integration</div>
                <div className="rounded-3xl border border-slate-600/10 bg-slate-900/80 p-4">Unity Optimization</div>
              </div>
            </div>
          </article>
        </section>

        <section id="featured" className="mt-20 section-title rounded-[32px] border border-slate-600/20 bg-slate-950/80 p-10 shadow-panel backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Featured Games</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Showcase of premium mobile titles with cinematic polish.</h2>
          <p className="mt-4 max-w-2xl text-slate-300">A Netflix-style horizontal gallery built for interactive previews, genre badges, platform recognition and polished game reveals.</p>

          <div className="mt-10 overflow-x-auto pb-6 scrollbar-thin">
            <div className="flex gap-6 min-w-[1200px]">
              {featuredGames.map((game) => (
                <motion.div whileHover={{ y: -8 }} key={game.title} className={`card-animate opacity-0 transform-gpu translate-y-8 min-w-[330px] rounded-[32px] border border-slate-700/40 bg-slate-950/90 p-6 shadow-neon ${game.color}`}>
                  <div className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-slate-900/75 p-4">
                    <div className="h-44 rounded-3xl bg-gradient-to-br from-cyan-400/15 via-transparent to-violet-600/10 p-4">
                      <div className="flex h-full items-end justify-between">
                        <span className="rounded-full bg-slate-950/60 px-3 py-1 text-xs uppercase tracking-[0.32em] text-slate-200">Preview</span>
                        <div className="h-14 w-14 rounded-full bg-cyan-500/20 ring-1 ring-cyan-300/25" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">{game.genre}</p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{game.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.22em] text-slate-400">
                      <span className="rounded-full border border-cyan-500/20 px-3 py-2 bg-slate-900/70">{game.platform}</span>
                      <span className="rounded-full border border-violet-500/20 px-3 py-2 bg-slate-900/70">{game.tech}</span>
                    </div>
                    <a href="#contact" className="inline-flex items-center justify-center rounded-3xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">Download Game</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-[32px] border border-slate-600/20 bg-slate-950/80 p-10 shadow-panel backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Skills</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Floating 3D systems and skill clusters for AAA game development.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill.title} className="card-animate opacity-0 transform-gpu translate-y-8 rounded-[28px] border border-slate-600/15 bg-slate-900/85 p-6 shadow-panel">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
                  <span className="inline-flex h-3 w-3 rounded-full bg-cyan-400/70" />
                </div>
                <div className="space-y-2 text-slate-300">
                  {skill.items.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-600/10 bg-slate-950/70 px-4 py-3">{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-8 xl:grid-cols-[1fr_0.9fr]">
          <article className="glass-panel rounded-[32px] border border-slate-600/20 p-10 shadow-panel">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Achievements</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Future-facing honors for world-class Unity development.</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {achievements.map((achievement) => (
                <div key={achievement} className="card-animate opacity-0 transform-gpu translate-y-8 rounded-3xl border border-cyan-500/10 bg-slate-900/85 p-6 text-slate-200 shadow-neon">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Achievement</p>
                  <p className="mt-3 text-xl font-semibold text-white">{achievement}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-panel rounded-[32px] border border-slate-600/20 p-10 shadow-panel">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Education</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Academic foundation for technical game engineering.</h2>
            <div className="mt-10 space-y-8">
              <div className="card-animate opacity-0 transform-gpu translate-y-8 rounded-[28px] border border-slate-600/15 bg-slate-950/85 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Virtual University of Pakistan</p>
                <p className="mt-3 text-xl font-semibold text-white">2021 – 2025</p>
                <p className="mt-3 text-slate-300">ICS program with focus on programming, systems architecture and interactive app development.</p>
              </div>
              <div className="card-animate opacity-0 transform-gpu translate-y-8 rounded-[28px] border border-slate-600/15 bg-slate-950/85 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Superior College</p>
                <p className="mt-3 text-xl font-semibold text-white">2019 – 2021</p>
                <p className="mt-3 text-slate-300">Foundation in computer science, logic design and digital systems for immersive game engineering.</p>
              </div>
            </div>
          </article>
        </section>

        <section id="contact" className="mt-20 rounded-[32px] border border-slate-600/20 bg-slate-950/80 p-10 shadow-panel backdrop-blur-xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Holographic access to collaboration, hire and next-level game design.</h2>
              <p className="mt-4 max-w-xl text-slate-300">For game studio opportunities, technical leadership, or premium Unity systems consulting, reach out directly through email, WhatsApp or GitHub.</p>
            </div>
            <div className="glass-panel rounded-[32px] border border-cyan-400/15 bg-slate-900/80 p-8 shadow-neon">
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Email</p>
                  <a href="mailto:anasb5989@gmail.com" className="mt-2 block text-lg font-semibold text-white">anasb5989@gmail.com</a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Phone</p>
                  <p className="mt-2 text-lg font-semibold text-white">0319-1595420</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Location</p>
                  <p className="mt-2 text-lg font-semibold text-white">Lahore, Pakistan</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <a href="https://wa.me/923191595420" target="_blank" rel="noreferrer" className="rounded-3xl border border-cyan-500/20 bg-slate-950/70 px-4 py-3 text-center text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/10">WhatsApp</a>
                  <a href="mailto:anasb5989@gmail.com" className="rounded-3xl border border-slate-500/20 bg-slate-950/70 px-4 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-400/40">Email</a>
                  <a href="https://www.linkedin.com/in/anas-butt" target="_blank" rel="noreferrer" className="rounded-3xl border border-slate-500/20 bg-slate-950/70 px-4 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-400/40">LinkedIn</a>
                  <a href="https://github.com/anasb5989" target="_blank" rel="noreferrer" className="rounded-3xl border border-slate-500/20 bg-slate-950/70 px-4 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-400/40">GitHub</a>
                </div>
                <a href="/resume.pdf" className="mt-3 inline-flex w-full items-center justify-center rounded-3xl bg-cyan-500 px-5 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">Download Resume</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
