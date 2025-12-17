"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  Menu,
  X,
  MapPin,
  Phone,
  Award,
  GraduationCap,
  Briefcase,
  Brain,
  Code,
  Code2,
  Database,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Portfolio() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "experience", "achievements", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  const projects = [
    {
      title: "Accident Report System",
      description:
        "ISTN Hackathon winning project - Emergency response system that enables users to quickly report accidents to nearby ambulances, hospitals, and police stations in Kathmandu Valley. Real-time location tracking and automated alert distribution for rapid emergency response.",
      tech: ["Python", "Real-time Location", "Emergency Services", "API Integration", "Geolocation"],
      github: "https://github.com/saxonmahar/ISTN_Hackathon",
      demo: "https://istn-hackathon-mu.vercel.app/",
      highlight: true,
      icon: "🚨",
    },
    {
      title: "Face Emotion Detection",
      description:
        "Real-time facial expression recognition system that identifies emotions like happy, sad, and angry using computer vision and machine learning. Built with OpenCV, dlib/MediaPipe for face detection and feature extraction.",
      tech: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "dlib"],
      github: "https://github.com/saxonmahar",
      demo: "https://github.com/saxonmahar",
      highlight: false,
      icon: "😊",
    },
    {
      title: "Handwritten Digit Recognition",
      description:
        "Machine learning system that accurately identifies digits (0-9) from handwritten images. Implemented using MNIST dataset with advanced preprocessing and feature extraction techniques.",
      tech: ["Python", "TensorFlow", "Keras", "MNIST", "NumPy"],
      github: "https://github.com/saxonmahar/Hand_written_digit_recoginization",
      demo: "https://github.com/saxonmahar/Hand_written_digit_recoginization",
      highlight: false,
      icon: "✍️",
    },
    {
      title: "Movie Recommendation System",
      description:
        "Personalized movie recommendation engine that analyzes user preferences and behavior to suggest relevant films. Implements collaborative filtering and content-based recommendation algorithms.",
      tech: ["Python", "Pandas", "Scikit-learn", "Data Analysis"],
      github: "https://github.com/saxonmahar/Movie_Recommandation_System",
      demo: "https://github.com/saxonmahar/Movie_Recommandation_System",
      highlight: false,
      icon: "🎬",
    },
    {
      title: "Yoga Posture Detection & Diet Recommendation",
      description:
        "Currently developing an AI-powered wellness system that analyzes yoga postures using computer vision to provide corrective feedback, combined with personalized diet recommendations based on health parameters.",
      tech: ["Python", "MediaPipe", "OpenCV", "Machine Learning", "Health Tech"],
      github: "https://github.com/saxonmahar/Yoga_posture_detection_diet_ai",
      demo: "https://github.com/saxonmahar/Yoga_posture_detection_diet_ai",
      highlight: true,
      icon: "🧘",
    },
  ]

  const skills = {
    Programming: ["Python", "JavaScript", "HTML", "CSS", "PHP"],
    "AI & ML": ["TensorFlow", "Keras", "Scikit-learn", "Computer Vision", "OpenCV"],
    "Data Science": ["NumPy", "Pandas", "Jupyter Notebook", "Data Analysis"],
    "Tools & Technologies": ["Git", "MySQL", "VS Code", "dlib", "MediaPipe"],
  }

  const skillIcons = {
    Programming: Code2,
    "AI & ML": Brain,
    "Data Science": Database,
    "Tools & Technologies": Wrench,
  }

  const experiences = [
    {
      role: "Python & Git Trainer",
      organization: "Cosmos College of Management And Technology",
      period: "Jun 2025",
      description:
        "Trained 100+ students in Python and Git through a comprehensive one-week training program. Designed course curriculum specifically for early semester students.",
      achievements: ["Trained 100+ students", "Designed specialized curriculum"],
    },
    {
      role: "Mentor",
      organization: "Cosmos +2 Level Hackathon",
      period: "2025",
      description:
        "Guided and supported participants during the hackathon, providing technical advice, project development insights, and mentorship to help students successfully execute their projects.",
      achievements: ["Technical mentorship", "Project guidance"],
    },
  ]

  const achievements = [
    {
      title: "ISTN Hackathon - First Place",
      description:
        "Awarded first place for developing an innovative Accident Report project. Recognized for teamwork, problem-solving, and effective implementation under time constraints.",
      year: "2025",
    },
    {
      title: "Cosmos Hackathon Participant",
      description:
        "Collaborated with team to develop innovative solutions within tight timeframes, gaining hands-on experience in rapid project development.",
      year: "2025",
    },
    {
      title: "100 Days Data Science Challenge",
      description:
        "Completed intensive 100-day challenge focusing on Data Science and Machine Learning concepts and practical implementations.",
      year: "2025",
    },
  ]

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-lg font-semibold hover:text-muted-foreground transition-colors"
            >
              SM
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
              <img
                src="/images/8cf6e503-a0f1-456f-b259-c00be285d1e9.jpg"
                alt="Sanjay Mahar"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-4 animate-fade-in">
            <p className="text-muted-foreground text-sm tracking-wider uppercase">Computer Engineering Student</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Sanjay Mahar</h1>
            <p className="text-xl md:text-2xl text-primary font-semibold text-balance">
              AI Engineer & Data Science Practitioner
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Building intelligent systems with machine learning, computer vision, and data science. Passionate about
            solving real-world problems through innovative AI solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="group">
              View Projects
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="/SanjayMaharCV.pdf" download="Sanjay_Mahar_CV.pdf">
              <Button size="lg" variant="outline" className="group bg-transparent">
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="group bg-transparent"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="https://github.com/saxonmahar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjay-mahar-4b9817339/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:sanjaymahar2058@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              I'm a Computer Engineering student at Pokhara University with a strong passion for artificial
              intelligence, machine learning, and data science. My journey in technology is driven by a desire to create
              practical solutions that make a real difference in people's lives.
            </p>

            <p className="text-lg">
              Throughout my academic career, I've developed multiple AI-powered projects including emotion detection
              systems, recommendation engines, and health-focused applications. I believe in learning by doing, which is
              why I've completed intensive challenges like the 100 Days Data Science program and actively participate in
              hackathons.
            </p>

            <p className="text-lg">
              Beyond coding, I'm passionate about sharing knowledge. I've trained over 100 students in Python and Git,
              mentored participants in hackathons, and continuously work on improving my skills to stay at the forefront
              of AI and machine learning technologies.
            </p>

            <div className="pt-8 grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <CardTitle>Education</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Bachelor of Computer Engineering</h4>
                    <p className="text-sm text-muted-foreground">Pokhara University</p>
                    <p className="text-sm text-muted-foreground">2021 - Present</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">+2 Science</h4>
                    <p className="text-sm text-muted-foreground">Xavier International School</p>
                    <p className="text-sm text-muted-foreground">2018 - 2020 | CGPA: 3.58</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <CardTitle>Certifications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Brain className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Python for Data Analysis</h4>
                      <p className="text-sm text-muted-foreground">Udemy, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Python Essentials</h4>
                      <p className="text-sm text-muted-foreground">Cisco Networking Academy, 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => {
              const IconComponent = skillIcons[category as keyof typeof skillIcons]
              return (
                <Card key={category} className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      {IconComponent && (
                        <div className="p-2 rounded-lg bg-primary/10">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                      )}
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="px-3 py-1 text-sm hover:bg-accent transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A selection of projects demonstrating expertise in machine learning, computer vision, and data science
          </p>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`border-border/50 hover:border-primary/50 transition-all duration-300 group ${
                  index === 0 ? "md:col-span-2 border-primary/30" : ""
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <span className="text-3xl">{project.icon}</span>
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base mt-3">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full group bg-primary hover:bg-primary/90 text-primary-foreground">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Live Demo
                      </Button>
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/10 bg-transparent">
                        <Github className="mr-2 h-5 w-5" />
                        View Code
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground text-lg">Building expertise through hands-on training and mentorship</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-lg shadow-primary/50" />

                  {/* Content Card */}
                  <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col gap-3">
                          <div
                            className={`flex items-center gap-3 ${index % 2 === 0 ? "md:flex-row-reverse md:justify-start" : "md:flex-row"}`}
                          >
                            <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Briefcase className="w-5 h-5 text-primary" />
                            </div>
                            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                              {exp.period}
                            </Badge>
                          </div>
                          <div>
                            <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                              {exp.role}
                            </CardTitle>
                            <p className="text-base text-primary/80 font-medium">{exp.organization}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed text-base">{exp.description}</p>
                        <div className="pt-2">
                          <p className="text-sm font-medium mb-3 text-foreground/80">Key Highlights:</p>
                          <div
                            className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                          >
                            {exp.achievements.map((achievement, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="text-sm px-3 py-1 bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-colors"
                              >
                                <svg
                                  className="w-3.5 h-3.5 mr-1.5 text-primary"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                {achievement}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Achievements & Recognition</h3>
              <p className="text-muted-foreground">Milestones that shaped my journey</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group relative overflow-hidden"
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full group-hover:scale-150 transition-transform duration-500" />

                  <CardHeader className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 text-xs">
                        {achievement.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact</h2>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:sanjaymahar2058@gmail.com"
                      className="text-foreground hover:text-primary transition-colors text-sm"
                    >
                      sanjaymahar2058@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a
                      href="tel:+9779865918308"
                      className="text-foreground hover:text-primary transition-colors text-sm"
                    >
                      +977 986-5918308
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="text-foreground text-sm">Tokha Jhor, Kathmandu, Nepal</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/sanjay-mahar-4b9817339"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors text-sm"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Sanjay Mahar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
