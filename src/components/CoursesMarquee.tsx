import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Cpu, 
  Palette,
  Terminal,
  Globe,
  BarChart3,
  Smartphone
} from "lucide-react";

const courses = [
  { name: "Full Stack", icon: Code },
  { name: "Python", icon: Terminal },
  { name: "Data Science", icon: BarChart3 },
  { name: "Java", icon: Cpu },
  { name: "Cloud Computing", icon: Cloud },
  { name: "DevOps", icon: Database },
  { name: "Machine Learning", icon: Cpu },
  { name: "Cyber Security", icon: Shield },
  { name: "UI/UX Design", icon: Palette },
  { name: "Web Development", icon: Globe },
  { name: "Mobile Apps", icon: Smartphone },
];

export const CoursesMarquee = () => {
  return (
    <section className="py-16 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              Our Courses
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
              Industry-Ready <span className="text-primary">Training Programs</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Explore our comprehensive range of IT courses designed to make you job-ready with real-world skills.
            </p>
          </motion.div>

          {/* Right Marquee */}
          <div className="lg:col-span-8 relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/20 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/20 to-transparent z-10" />
            
            <div className="overflow-hidden">
              <motion.div
                className="flex items-center gap-12"
                animate={{
                  x: [0, -1500],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {/* Triple the items for seamless infinite loop */}
                {[...courses, ...courses, ...courses].map((course, index) => {
                  const IconComponent = course.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 whitespace-nowrap opacity-50 hover:opacity-80 transition-opacity duration-300"
                    >
                      <IconComponent className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                      <span className="text-base font-medium text-muted-foreground tracking-wide">
                        {course.name}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
