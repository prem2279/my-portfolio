import DisableRightClick from '@/src/components/DisableRightClick';
import Header from '@/src/components/Header';
import Hero from '@/src/components/Hero';
import About from '@/src/components/About';
import Skills from '@/src/components/Skills';
import Experience from '@/src/components/Experience';
import Projects from '@/src/components/Projects';
import Certifications from '@/src/components/Certifications';
import Education from '@/src/components/Education';
import Contact from '@/src/components/Contact';
import Cursor from '@/src/components/Cursor';

export default function Home() {
  return (
    <DisableRightClick>
      <main>
        <Cursor />
        <Header />
        <div className="px-5 py-5">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Education />
          <Contact />
        </div>
      </main>
    </DisableRightClick>
  );
}