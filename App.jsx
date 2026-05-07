import profilePic from './assets/profile.jpg'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Dipta Dey
            </span>
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-purple-400 transition font-semibold">About</a>
            <a href="#skills" className="hover:text-purple-400 transition font-semibold">Skills</a>
            <a href="#projects" className="hover:text-purple-400 transition font-semibold">Projects</a>
            <a href="#contact" className="hover:text-purple-400 transition font-semibold">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-block px-4 py-2 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 mb-8 font-semibold">
              🔐 Cybersecurity | 🤖 AI/ML | 🎬 Creative Developer
            </div>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8 text-white">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Dipta Dey
              </span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mb-8 font-medium">
              CSE Student & Aspiring Cybersecurity Engineer passionate about building secure systems, exploring AI/ML, and creating immersive digital experiences through cinematic storytelling.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition duration-300"
              >
                Explore Projects
              </a>

              <a
                href="https://github.com/Dipto-04"
                target="_blank"
                className="px-8 py-4 rounded-lg border-2 border-purple-500 text-purple-300 font-bold hover:bg-purple-500/20 transition duration-300"
              >
                GitHub
              </a>
            </div>

            <div className="flex gap-3 flex-wrap">
              {[
                ['GitHub', 'https://github.com/Dipto-04'],
                ['LinkedIn', 'https://www.linkedin.com/in/dipta-dey-7ab029309/'],
                ['Facebook', 'https://www.facebook.com/dipta.dey/'],
                ['Instagram', 'https://www.instagram.com/_.yukaze._/'],
              ].map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  className="px-4 py-2 rounded-lg border border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/20 hover:border-purple-400 hover:text-purple-300 transition duration-300 font-semibold text-sm"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative w-80 h-80 rounded-2xl border-2 border-purple-500/30 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden shadow-2xl">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 bg-slate-900/50 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-4 text-white">About Me</h2>
            <p className="text-gray-400 text-lg font-medium">Passionate learner exploring the frontiers of technology and creativity</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-slate-900 p-10 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/20 transition duration-300">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Who Am I?</h3>

              <p className="text-gray-300 leading-relaxed text-base mb-4 font-medium">
                I'm Dipta Dey, a CSE student from Bangladesh with a strong passion for Cybersecurity, AI/ML, cinematic storytelling, and building innovative digital experiences.
              </p>

              <p className="text-gray-400 leading-relaxed font-medium">
                I'm actively learning Linux, networking, ethical hacking, and software development. Beyond tech, I'm fascinated by history, Russian culture, football, gaming, and filmmaking.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                ['🔐 Cybersecurity', 'Future Security Engineer'],
                ['🤖 AI/ML', 'Intelligent Systems'],
                ['🎬 Film Editing', 'Cinematic Storytelling'],
                ['⚙️ Problem Solving', 'Continuous Learning'],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-900 p-6 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/10 transition duration-300"
                >
                  <h4 className="text-lg font-bold mb-2 text-purple-300">{title}</h4>
                  <p className="text-gray-400 text-sm font-medium">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 px-6 bg-slate-950 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-4 text-white">Technical Skills</h2>
            <p className="text-gray-400 text-lg font-medium">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { skill: 'C', level: 85 },
              { skill: 'C++', level: 80 },
              { skill: 'Java', level: 75 },
              { skill: 'Python', level: 85 },
              { skill: 'HTML/CSS', level: 88 },
              { skill: 'JavaScript', level: 80 },
              { skill: 'Git/GitHub', level: 90 },
              { skill: 'Linux', level: 80 },
              { skill: 'Networking', level: 75 },
              { skill: 'Cybersecurity', level: 70 },
              { skill: 'AI/ML', level: 75 },
              { skill: 'Video Editing', level: 85 },
            ].map(({ skill, level }) => (
              <div
                key={skill}
                className="rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-900 p-6 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/10 transition duration-300 group"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition">{skill}</h3>
                  <span className="text-purple-400 font-bold">{level}%</span>
                </div>

                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                    style={{ width: `${level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6 bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-4 text-white">Featured Projects</h2>
            <p className="text-gray-400 text-lg font-medium">Showcasing my work and ideas</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                icon: '🤖',
                title: 'Fake News Detection using ML',
                desc: 'Machine learning project focused on detecting fake news using NLP and classification techniques for reliable information.',
                tags: ['Python', 'NLP', 'ML'],
              },
              {
                icon: '🎬',
                title: 'Campus Chronicles: The Last Note',
                desc: 'A cinematic mystery thriller short film exploring university pressure, hidden truths, and the human condition.',
                tags: ['Filmmaking', 'Direction', 'Editing'],
              },
              {
                icon: '⚙️',
                title: 'Java Multithreading Project',
                desc: 'Comprehensive Java project demonstrating advanced multithreading, synchronization, and concurrent process handling.',
                tags: ['Java', 'Threading', 'Concurrency'],
              },
              {
                icon: '💻',
                title: 'Personal GitHub Projects',
                desc: 'Collection of coding experiments, university projects, and emerging cybersecurity research work.',
                tags: ['Various', 'Learning', 'Development'],
              },
            ].map((project, index) => (
              <div
                key={project.title}
                className="group rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-900 overflow-hidden hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/20 transition duration-300"
              >
                <div className="h-40 bg-gradient-to-r from-purple-600/20 to-pink-600/20 flex items-center justify-center text-6xl border-b border-purple-500/20">
                  {project.icon}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6 font-medium">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:shadow-lg hover:shadow-purple-500/50 transition duration-300 text-sm">
                      GitHub
                    </button>

                    <button className="px-6 py-2 rounded-lg border border-purple-500/50 text-purple-300 font-bold hover:bg-purple-500/20 transition duration-300 text-sm">
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-32 px-6 bg-slate-950 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-4 text-white">Cybersecurity Journey</h2>
            <p className="text-gray-400 text-lg font-medium">My learning path and milestones</p>
          </div>

          <div className="space-y-6">
            {[
              { step: 'Learning Linux & Terminal', icon: '🐧' },
              { step: 'Networking Fundamentals', icon: '🌐' },
              { step: 'Ethical Hacking Basics', icon: '🔍' },
              { step: 'Cybersecurity Foundations', icon: '🔒' },
              { step: 'TryHackMe & HackTheBox', icon: '🎯' },
              { step: 'CTF Challenges', icon: '🏆' },
            ].map((item, index) => (
              <div
                key={item.step}
                className="flex gap-6 items-center rounded-xl border border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-slate-900 p-8 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/10 transition duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{item.step}</h3>
                  <p className="text-gray-400 font-medium">Building expertise and advancing security knowledge</p>
                </div>

                <div className="text-3xl font-bold text-purple-500 font-black hidden md:block">
                  #{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 bg-slate-900/50 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-black mb-6 text-white">Let's Connect</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16 font-medium">
            Open to collaborations, creative projects, cybersecurity learning, and exciting opportunities
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['📧 Email', 'diptadey768@gmail.com'],
              ['🐙 GitHub', 'github.com/Dipto-04'],
              ['💼 LinkedIn', 'linkedin.com/in/dipta-dey-7ab029309'],
              ['📘 Facebook', 'facebook.com/dipta.dey'],
              ['📸 Instagram', 'instagram.com/_.yukaze._'],
              ['📍 Location', 'Dhaka, Bangladesh'],
            ].map(([title, value]) => (
              <div
                key={title}
                className="rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-900 p-8 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/10 transition duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-purple-300">{title}</h3>
                <p className="text-gray-300 break-words font-medium text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-12 px-6 text-center bg-slate-950">
        <p className="text-gray-400 font-medium">
          Designed & Developed by{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent font-bold">
            Dipta Dey
          </span>
          {' '} | © 2026 All Rights Reserved
        </p>
      </footer>
    </div>
  )
}
