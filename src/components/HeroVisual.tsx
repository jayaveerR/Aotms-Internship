import { motion } from "framer-motion";
import { Cloud, Cpu, Database, Code2, Braces, Server } from "lucide-react";

const floatingCards = [
  {
    icon: Cpu,
    label: "AI & ML",
    color: "text-primary",
    delay: 0,
    position: "top-0 right-0",
  },
  {
    icon: Cloud,
    label: "Cloud",
    color: "text-accent",
    delay: 0.5,
    position: "top-1/4 -right-4",
  },
  {
    icon: Database,
    label: "DevOps",
    color: "text-primary",
    delay: 1,
    position: "bottom-1/4 -right-2",
  },
  {
    icon: Code2,
    label: "Full Stack",
    color: "text-accent",
    delay: 1.5,
    position: "-left-4 top-1/3",
  },
  {
    icon: Braces,
    label: "DSA",
    color: "text-primary",
    delay: 2,
    position: "left-0 bottom-1/4",
  },
  {
    icon: Server,
    label: "Backend",
    color: "text-accent",
    delay: 0.8,
    position: "bottom-0 right-1/4",
  },
];

export const HeroVisual = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] perspective-1000">
      {/* Main 3D Container */}
      <motion.div
        initial={{ opacity: 0, rotateY: -15, rotateX: 5 }}
        animate={{ opacity: 1, rotateY: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Central Visual Element */}
        <motion.div
          className="absolute inset-8 md:inset-12 bg-secondary/50 rounded-3xl border border-border/50 overflow-hidden"
          animate={{ 
            rotateY: [0, 2, 0, -2, 0],
            rotateX: [0, 1, 0, -1, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          
          {/* Central Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-full flex items-center justify-center"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                  <Code2 className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
            <motion.circle
              cx="50%"
              cy="50%"
              r="100"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              strokeDasharray="10 5"
              opacity={0.2}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="150"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="1"
              strokeDasharray="15 10"
              opacity={0.15}
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
          </svg>
        </motion.div>

        {/* Floating Cards */}
        {floatingCards.map((card, index) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + card.delay * 0.2 }}
            className={`absolute ${card.position}`}
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{ 
                duration: 4 + index * 0.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: card.delay,
              }}
              className="float-card flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform"
            >
              <div className={`w-10 h-10 rounded-xl bg-secondary flex items-center justify-center ${card.color}`}>
                <card.icon className="w-5 h-5" />
              </div>
              <span className="font-medium text-sm text-foreground whitespace-nowrap">
                {card.label}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};
