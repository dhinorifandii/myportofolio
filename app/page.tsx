"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
// ... (Import komponen dan ikon lainnya)
import Lanyard from "./components/Lanyard/Lanyard"; 
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import GradientText from "./components/GradientText/GradientText";
import Squares from "./components/Squares/Squares";
import FloatingButton from "./components/FloatingButton"; // Impor komponen baru
import MusicPlayer from "./MusicPlayer";
import { FaHtml5, FaCss3Alt, FaWordpress, FaCode, FaReact, FaWhatsapp, FaGithub, FaExternalLinkAlt, FaPlay, FaPause } from "react-icons/fa";
import { SiJavascript, SiPhp, SiMysql, SiNextdotjs, SiXampp, SiUbuntu, SiCanva, SiPostman, SiTailwindcss, SiTypescript } from "react-icons/si";
import { VscCode } from "react-icons/vsc";


// --- DATA & KOMPONEN WRAPPER (Tidak Berubah) ---

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-5xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-5xl" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-5xl" /> },
  { name: 'PHP', icon: <SiPhp className="text-5xl" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-5xl" /> },
  { name: 'React', icon: <FaReact className="text-5xl" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-5xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-5xl" /> },
  { name: 'MySQL', icon: <SiMysql className="text-5xl" /> },
  { name: 'WordPress', icon: <FaWordpress className="text-5xl" /> },
  { name: 'Canva', icon: <SiCanva className="text-5xl" /> },
];

const tools = [
  { name: 'VS Code', icon: <VscCode className="text-5xl" /> },
  { name: 'GitHub', icon: <FaGithub className="text-5xl" /> },
  { name: 'Figma', icon: <SiCanva className="text-5xl" /> },
  { name: 'XAMPP', icon: <SiXampp className="text-5xl" /> },
  { name: 'Code', icon: <FaCode className="text-5xl" /> },
  { name: 'Ubuntu', icon: <SiUbuntu className="text-5xl" /> },
  { name: 'Canva', icon: <SiCanva className="text-5xl" /> },
  { name: 'Postman', icon: <SiPostman className="text-5xl" /> },
];

const projects = [
  {
    title: "Website Resmi MTs An Nashr Parung",
    description: "Pengembangan website resmi sekolah MTs An Nashr Parung sebagai pusat informasi digital bagi siswa, guru, dan calon peserta didik baru.",
    image: "/project/project_mts.png", 
    projectLink: "https://mtsannashrparung.sch.id", 
    techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Supabase"]
  }
];

const AnimatedSection = ({ children, id, className = "" }: { children: React.ReactNode, id: string, className?: string }) => (
  <motion.section
    id={id}
    className={`relative py-24 md:py-32 ${className}`} 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className="absolute inset-0 w-full h-full -z-20">
      <Squares speed={0.5} squareSize={40} direction='diagonal' borderColor='var(--color-accent-1)' hoverFillColor='var(--color-accent-2)' />
    </div>
    <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
      {children}
    </div>
  </motion.section>
);

const ModernProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const isReversed = index % 2 !== 0;
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}>
      <motion.div
        className={`relative aspect-video rounded-lg overflow-hidden shadow-2xl shadow-[var(--color-accent-1)]/20 ${isReversed ? 'lg:order-2' : ''}`}
        initial={{ opacity: 0, x: isReversed ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="transition-transform duration-500 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </motion.div>
      <motion.div
        className={`flex flex-col gap-4 ${isReversed ? 'lg:order-1' : ''}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-accent-2)]">{project.title}</h3>
        <p className="text-white/80 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack.map(tech => (
            <span key={tech} className="px-3 py-1 text-sm bg-white/10 border border-white/20 rounded-full text-white/90">
              {tech}
            </span>
          ))}
        </div>
        <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-[var(--color-accent-1)] hover:text-white font-semibold transition-colors group">
          Live Demo
          <FaExternalLinkAlt className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </motion.div>
    </div>
  );
};


// --- KOMPONEN UTAMA (HOME) ---

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // State untuk mengelola data form kontak
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(''); // Untuk menampilkan pesan sukses/error

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Sending...');

    // URL Web App dari Google Apps Script Anda
    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbyX2xFQhcBWktZGiLQcPIV1SH-yw4yvirqRtlQzMx_0YjqsLj8XzR9voVPFMdgcE2Di/exec';

    try {
      const response = await fetch(googleScriptUrl, {
        method: 'POST',
        // Google Apps Script lebih andal menerima data POST sebagai text/plain
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      // Memeriksa status dari respons JSON yang dikirim oleh Apps Script
      if (result.status === 'success') {
        setFormStatus(result.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus(`Error: ${result.message || 'An unknown error occurred.'}`);
      }
    } catch (error) {
      console.error('Submission error', error);
      setFormStatus('Error: Could not connect to the server.');
    }
  };

  // Fungsi ini HANYA mengubah state, memisahkan "niat" dari "aksi"
  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  // useEffect ini akan berjalan SETELAH state 'isPlaying' berubah
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => console.error("Audio play failed:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]); // Dependency: Hanya jalankan saat 'isPlaying' berubah

  return (
    <>
      <FloatingButton isPlaying={isPlaying} togglePlay={togglePlay} />

      <div className="min-h-screen">
        <MusicPlayer ref={audioRef} />
        <SplashCursor />

        {/* --- KONTEN WEBSITE BERIKUTNYA --- */}
        
        {/* Home Section */}
        <AnimatedSection 
          id="home" 
          className="min-h-screen md:h-screen md:min-h-[700px] py-20 md:!py-0 flex items-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 lg:col-span-6 text-center md:text-left">
              <div className="flex flex-col gap-6">
                <AnimatedContent distance={150} direction="horizontal" reverse={false} config={{ tension: 80, friction: 20 }} initialOpacity={0.2} animateOpacity scale={1.1} threshold={0.2}>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <h1 className="text-lg md:text-2xl font-bold">I'm Ready For Job</h1>
                    <RotatingText texts={['Web Design', 'Web Development', 'UI/UX Design', 'Frontend Dev']} mainClassName="px-2 md:px-3 bg-[var(--color-accent-2)] text-[var(--color-primary)] overflow-hidden py-1 justify-center rounded-lg text-lg md:text-2xl font-bold inline-flex" staggerFrom={"last"} initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-120%" }} staggerDuration={0.025} splitLevelClassName="overflow-hidden pb-1" transition={{ type: "spring", damping: 30, stiffness: 400 }} rotationInterval={2000} />
                  </div>
                </AnimatedContent>
                <div className="flex flex-col items-center md:items-start">
                  <SplitText text="I'm Dhino Rifandi" className="text-4xl sm:text-5xl lg:text-6xl font-semibold" delay={50} animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }} animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }} threshold={0.2} rootMargin="-50px" />
                  <SplitText text="Front End Developer" className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[var(--color-accent-2)]" delay={75} animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }} animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }} threshold={0.2} rootMargin="-50px" />
                </div>
                <BlurText text="Membangun website modern, cepat, dan fungsional. Menggabungkan skill coding, desain elegan, dan pengalaman real project untuk menciptakan solusi digital yang kuat dan profesional." delay={75} animateBy="words" direction="top" className="text-base md:text-xl max-w-2xl mx-auto md:mx-0 text-[var(--color-text-soft)]" />
                <div className="flex justify-center md:justify-start">
                  <a href="#contact">
                    <GradientText colors={["var(--color-accent-1)", "var(--color-accent-2)", "var(--color-accent-1)", "var(--color-accent-2)", "var(--color-accent-1)"]} animationSpeed={3} showBorder={false} className="px-8 py-4 rounded-lg border text-lg font-semibold cursor-pointer">
                      Hubungi Saya
                    </GradientText>
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:col-span-5 lg:col-span-6 relative h-64 sm:h-80 md:h-full mb-20 md:mb-0">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} /> 
            </div>
          </div>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection id="about">
          <div className="min-h-[70vh] flex items-center justify-center">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-12 items-start px-4">
              <div className="lg:col-span-2 bg-white/5 border border-[#F3CB51]/20 rounded-xl p-6 backdrop-blur-sm flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F72FB8]/20 to-[#A020F0]/20 flex items-center justify-center">
                    <Image src="/assets/avatar.jpeg" alt="Dhino Rifandi" width={56} height={56} className="rounded-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Dhino Rifandi</h3>
                    <p className="text-sm text-white/70">Front End Developer</p>
                  </div>
                </div>
                <div className="border-t border-white/10"></div>
                <ul className="flex flex-col gap-4 text-white/90">
                  <li className="flex items-center gap-3"><FaCode className="text-lg text-[#A020F0]" style={{filter: 'drop-shadow(0 0 4px #A020F0)'}} /><span><span className="font-semibold">Pengalaman:</span> 1+ Tahun (Proyek)</span></li>
                  <li className="flex items-center gap-3"><VscCode className="text-lg text-[#A020F0]" style={{filter: 'drop-shadow(0 0 4px #A020F0)'}} /><span><span className="font-semibold">Tech Stack:</span> React, Next.js, PHP</span></li>
                  <li className="flex items-center gap-3"><SiCanva className="text-lg text-[#A020F0]" style={{filter: 'drop-shadow(0 0 4px #A020F0)'}} /><span><span className="font-semibold">Lokasi:</span> Tangerang Selatan</span></li>
                  <li className="flex items-center gap-3"><FaWhatsapp className="text-lg text-[#A020F0]" style={{filter: 'drop-shadow(0 0 4px #A020F0)'}} /><span><span className="font-semibold">Status:</span> Open to Work</span></li>
                </ul>
                <a href="/" className="w-full">
                  <GradientText colors={["var(--color-accent-1)", "var(--color-accent-2)", "var(--color-accent-1)"]} animationSpeed={3} showBorder={false} className="px-6 py-3 text-base font-semibold w-full text-center transition-transform duration-300 group-hover:scale-105 rounded-lg">Download CV</GradientText>
                </a>
              </div>
              <div className="lg:col-span-3 flex flex-col gap-6">
                <div className="flex flex-col items-start">
                  <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{color: '#F72FB8'}}>About Me</h2>
                  <div className="w-24 h-0.5 bg-[#7F57FF]"></div>
                  <p className="mt-4 text-lg text-white/70 font-medium">Front End Developer & Computer Science Student</p>
                </div>
                <div className="text-white/80 text-base leading-relaxed flex flex-col gap-4">
                  <p>Saya adalah seorang Front-End Developer dan mahasiswa Teknik Informatika yang bersemangat dalam membangun antarmuka web yang intuitif dan dinamis. Keahlian utama saya meliputi HTML, CSS, JavaScript, dan PHP.</p>
                  <p>Saat ini, saya aktif mengerjakan berbagai proyek, mulai dari website sekolah, sistem absensi, hingga eksplorasi teknologi modern seperti Next.js dan kecerdasan buatan menggunakan Python.</p>
                  <p>Saya selalu mencari tantangan baru untuk mengasah kemampuan, berkolaborasi dalam tim, dan menciptakan solusi digital yang inovatif serta memberikan dampak positif.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection id="skills">
          <div className="flex flex-col items-center gap-16">
            <SplitText text="Skills & Tech Stack" className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-[var(--color-accent-2)]" delay={75} animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }} animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }} threshold={0.2} rootMargin="-50px" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center justify-center gap-2 p-6 aspect-square bg-[var(--color-primary)] border border-[var(--color-accent-1)] rounded-xl text-[var(--color-text-soft)] transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_-5px_var(--color-accent-2)] hover:border-[var(--color-accent-2)] hover:-translate-y-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  {skill.icon}
                  <span className="text-lg font-medium text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Tools Section */}
        <AnimatedSection id="tools" className="!py-12 md:!py-20">
          <div className="flex flex-col items-center gap-8 text-center">
            <SplitText text="Tools I Use" className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-[var(--color-accent-2)]" delay={75} animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }} animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }} threshold={0.2} rootMargin="-50px" />
            <BlurText text="Tools ini membantu saya membangun workflow pengembangan yang lebih cepat, rapi, dan efisien." delay={50} animateBy="words" direction="top" className="text-base md:text-xl max-w-3xl text-[var(--color-text-soft)]" />
          </div>
          <div className="relative w-full overflow-hidden mt-16 group [mask-image:_linear_gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex w-max animate-scroll group-hover:pause">
              {[...tools, ...tools].map((tool, i) => (
                <div key={i} className="flex-shrink-0 w-48 md:w-64 flex flex-col items-center justify-center gap-4 p-6 md:p-8 mx-3 md:mx-4 bg-transparent border border-[var(--color-text-soft)]/20 rounded-xl text-[var(--color-text-soft)] transition-all duration-300 hover:!border-[var(--color-accent-2)] hover:shadow-[0_0_20px_-5px_var(--color-accent-2)]">
                  {tool.icon}
                  <span className="text-lg font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection id="projects">
          <div className="flex flex-col items-center gap-16">
            <SplitText text="Featured Projects" className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-[var(--color-accent-2)]" delay={75} animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }} animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }} threshold={0.2} rootMargin="-50px" />
            <div className="w-full max-w-5xl flex flex-col gap-24">
              {projects.map((project, index) => (
                <ModernProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact">
          <div className="flex flex-col items-center gap-8 text-center">
            <SplitText text="Get In Touch" className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-[var(--color-accent-2)]" delay={75} animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }} animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }} threshold={0.2} rootMargin="-50px" />
            <BlurText text="Jika Anda membutuhkan website modern, aplikasi, atau ingin bekerja sama dalam sebuah project, silakan hubungi saya. Saya siap membantu Anda membangun solusi digital terbaik." delay={50} animateBy="words" direction="top" className="text-base md:text-xl max-w-3xl text-[var(--color-text-soft)]" />
            <div className="w-full max-w-lg mt-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required className="p-3 md:p-4 bg-transparent border border-[var(--color-accent-1)] rounded-lg text-base md:text-lg focus:outline-none focus:border-[var(--color-accent-2)] transition-all duration-300 hover:shadow-[0_0_15px_-5px_var(--color-accent-2)]" />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required className="p-3 md:p-4 bg-transparent border border-[var(--color-accent-1)] rounded-lg text-base md:text-lg focus:outline-none focus:border-[var(--color-accent-2)] transition-all duration-300 hover:shadow-[0_0_15px_-5px_var(--color-accent-2)]" />
                <textarea name="message" placeholder="Message" rows={5} value={formData.message} onChange={handleInputChange} required className="p-3 md:p-4 bg-transparent border border-[var(--color-accent-1)] rounded-lg text-base md:text-lg focus:outline-none focus:border-[var(--color-accent-2)] transition-all duration-300 hover:shadow-[0_0_15px_-5px_var(--color-accent-2)]"></textarea>
                <button type="submit" disabled={formStatus === 'Sending...'} className="w-full mt-4 bg-transparent border-none group disabled:opacity-50 disabled:cursor-not-allowed">
                  <GradientText colors={["var(--color-accent-1)", "var(--color-accent-2)", "var(--color-accent-1)", "var(--color-accent-2)", "var(--color-accent-1)"]} animationSpeed={3} showBorder={false} className="px-8 py-4 text-xl font-semibold w-full transition-transform duration-300 group-hover:scale-105">
                    {formStatus === 'Sending...' ? 'Sending...' : 'Send Message'}
                  </GradientText>
                </button>
                {formStatus && formStatus !== 'Sending...' && (
                  <p className="text-center text-lg text-[var(--color-accent-2)] mt-2">{formStatus}</p>
                )}
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}