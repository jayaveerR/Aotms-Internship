import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Strong Fundamentals",
    description: "Industry-aligned concepts explained clearly from basics"
  },
  {
    number: "02",
    title: "Hands-On Practice",
    description: "Daily labs, tasks, and mentor-guided practice"
  },
  {
    number: "03",
    title: "Real-Time Projects",
    description: "Build resume-ready projects based on real scenarios"
  },
  {
    number: "04",
    title: "Career & Placement Support",
    description: "Mock interviews, resume help, and job assistance"
  }
];

export const LearningProcess = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-primary/70 mb-4"
          >
            Our Learning Model
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-4"
          >
            How Training Works Here
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-muted-foreground max-w-md mx-auto"
          >
            A structured, practical approach to make you job-ready
          </motion.p>
        </div>

        {/* Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 + index * 0.15,
                ease: "easeOut"
              }}
              className="group relative"
            >
              {/* Connector Line (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-border z-0">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                    className="h-full bg-primary/20 origin-left"
                  />
                  {/* Arrow */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-primary/30 rotate-45 -mr-1" />
                </div>
              )}

              {/* Step Card */}
              <div className="relative bg-background border border-border rounded-xl p-6 md:p-8 text-center hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="mb-5">
                  <span className="inline-block text-4xl md:text-5xl font-display font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-sm text-muted-foreground">
            Join today and follow this 
            <span className="text-primary font-medium"> structured path </span> 
            to your IT career
          </p>
        </motion.div>
      </div>
    </section>
  );
};
