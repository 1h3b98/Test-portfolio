import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import projects from '../data/projects.json';
import skills from '../data/skills.json';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Your Name | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Professional portfolio of Your Name, a Full Stack Developer building fast, modern, user-centric web applications."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, Next.js, React, Tailwind CSS, Web Developer Portfolio"
        />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Your Name | Full Stack Developer Portfolio" />
        <meta
          property="og:description"
          content="Explore projects, technical skills, and contact details for Your Name, Full Stack Developer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourportfolio.com" />
        <meta property="og:image" content="https://yourportfolio.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Name | Full Stack Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Professional portfolio website built with Next.js and Tailwind CSS."
        />
        <meta name="twitter:image" content="https://yourportfolio.com/og-image.png" />
        <link rel="canonical" href="https://yourportfolio.com" />
      </Head>
      <main>
        <Hero />
        <About />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
