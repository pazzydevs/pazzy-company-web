import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Clients } from "@/components/Clients";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { prisma } from "@/lib/prisma";

async function getProjects() {
    let projects = await prisma.project.findMany({ orderBy: { createdAt: "desc" } });
    if (projects.length === 0) {
        await prisma.project.createMany({
            data: [
                { name: "Nexus SaaS", description: "An AI-powered project management tool for large enterprise teams.", tech: "Next.js, OpenAI, Prisma", status: "In Progress", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" },
                { name: "QuantFlow", description: "Automated trading platform with real-time data analysis and execution.", tech: "Python, React, AWS", status: "Completed", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80" },
                { name: "EcoTrack", description: "IoT suite for monitoring industrial carbon footprints in real-time.", tech: "TypeScript, Rust, MQTT", status: "Completed", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80" },
                { name: "AlphaCore AI", description: "Neural network framework for high-speed edge computing devices.", tech: "C++, PyTorch, GCP", status: "In Progress", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80" },
            ]
        });
        projects = await prisma.project.findMany({ orderBy: { createdAt: "desc" } });
    }
    return projects;
}

async function getClients() {
    let clients = await prisma.client.findMany({ orderBy: { createdAt: "desc" } });
    if (clients.length === 0) {
        const defaultClients = ["TECHFLOW", "NEXUS AI", "QUANTUM", "VELOCITY", "ELEVATE", "SYNERGY", "HORIZON", "PULSE", "ZENITH", "VORTEX"];
        await prisma.client.createMany({ data: defaultClients.map(name => ({ name })) });
        clients = await prisma.client.findMany({ orderBy: { createdAt: "desc" } });
    }
    return clients;
}

async function getServices() {
    let services = await prisma.service.findMany({ orderBy: { createdAt: "asc" } });
    if (services.length === 0) {
        await prisma.service.createMany({
            data: [
                { title: "Custom AI Solutions", description: "Tailored neural networks and LLM implementations for complex business logic.", iconName: "Brain", gradient: "from-primary/20 via-primary/5 to-transparent" },
                { title: "Scalable Web Apps", description: "High-performance enterprise applications built with Next.js and high-end tech.", iconName: "Code", gradient: "from-primary/20 via-primary/5 to-transparent" },
                { title: "Data Analytics", description: "Transforming raw data into actionable business intelligence with real-time dashboards.", iconName: "BarChart", gradient: "from-primary/20 via-primary/5 to-transparent" },
                { title: "Cloud Architecture", description: "Robust and secure infrastructure design on AWS, Azure, and Google Cloud.", iconName: "Cloud", gradient: "from-primary/20 via-primary/5 to-transparent" },
            ]
        });
        services = await prisma.service.findMany({ orderBy: { createdAt: "asc" } });
    }
    return services;
}

async function getTestimonials() {
    let testimonials = await prisma.testimonial.findMany({ orderBy: { createdAt: "desc" } });
    if (testimonials.length === 0) {
        await prisma.testimonial.createMany({
            data: [
                { name: "Sarah Jenkins", company: "CTO at TechFlow", text: "Pazzy Solutions transformed our legacy systems into a high-speed AI engine. Their expertise is unmatched." },
                { name: "Michael Chen", company: "Product Head, Nexus", text: "The attention to detail in the UI/UX design is world-class. Our user engagement tripled after the redesign." },
                { name: "Elena Rodriguez", company: "CEO, EcoTrack", text: "A truly professional team that understands both business goals and technical limitations perfectly." },
            ]
        });
        testimonials = await prisma.testimonial.findMany({ orderBy: { createdAt: "desc" } });
    }
    return testimonials;
}

export default async function Home() {
  const [projects, clients, services, testimonials] = await Promise.all([
    getProjects(),
    getClients(),
    getServices(),
    getTestimonials(),
  ]);

  return (
    <main className="relative">
      <Hero />
      <Clients initialClients={clients} />
      <About />
      <Services initialServices={services} />
      <Projects initialProjects={projects} />
      <Testimonials initialTestimonials={testimonials} />
      <Contact />
    </main>
  );
}
