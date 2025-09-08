"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconCode, IconDatabase, IconTool, IconCloud, IconShield, IconChartBar, IconBrandReact } from '@tabler/icons-react';

interface TechSkill {
  name: string;
  icon: string;
  description: string;
  codeSnippet?: string;
  projects?: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

interface TechCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: TechSkill[];
  description: string;
}

const techCategories: TechCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: <IconCode className="w-8 h-8" />,
    color: 'from-cyan-400 to-blue-500',
    description: 'Core programming languages I master',
    skills: [
      {
        name: 'Python',
        icon: '/logo/python.webp',
        description: 'Backend development and data analysis',
        codeSnippet: `def analyze_data(dataset):
    return dataset.groupby('category').agg({
        'value': ['mean', 'sum', 'count']
    })`,
        projects: ['AgriTech Web App', 'Data Analytics'],
        level: 'Expert'
      },
      {
        name: 'JavaScript',
        icon: '/logo/javascript.webp',
        description: 'Modern ES6+ JavaScript for web development',
        codeSnippet: `const fetchData = async () => {
  const response = await fetch('/api/data');
  return response.json();
};`,
        projects: ['FitOS Dashboard', 'Task Flow', 'Quantum Calendar'],
        level: 'Expert'
      },
      {
        name: 'Java',
        icon: '/logo/java.webp',
        description: 'Enterprise applications and Android development',
        codeSnippet: `public class DataProcessor {
    public Stream<Result> process(List<Data> input) {
        return input.stream()
            .filter(Data::isValid)
            .map(this::transform);
    }
}`,
        projects: ['Enterprise Systems'],
        level: 'Advanced'
      },
      {
        name: 'C++',
        icon: '/logo/cpp.webp',
        description: 'System programming and performance-critical applications',
        level: 'Intermediate'
      },
      {
        name: 'HTML',
        icon: '/logo/html.webp',
        description: 'Semantic markup and web structure',
        level: 'Expert'
      },
      {
        name: 'CSS',
        icon: '/logo/css.webp',
        description: 'Modern styling and responsive design',
        level: 'Expert'
      }
    ]
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    icon: <IconBrandReact className="w-8 h-8" />,
    color: 'from-purple-400 to-pink-500',
    description: 'Modern frameworks for scalable applications',
    skills: [
      {
        name: 'React',
        icon: '/logo/react.webp',
        description: 'Component-based UI development',
        projects: ['FitOS Dashboard', 'Task Flow', 'Portfolio'],
        level: 'Expert'
      },
      {
        name: 'Node.js',
        icon: '/logo/nodejs.webp',
        description: 'Server-side JavaScript runtime',
        projects: ['API Development', 'Real-time Applications'],
        level: 'Advanced'
      },
      {
        name: 'MERN Stack',
        icon: '/logo/mern.webp',
        description: 'MongoDB, Express, React, Node.js full-stack',
        projects: ['Full-stack Applications'],
        level: 'Advanced'
      }
    ]
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: <IconDatabase className="w-8 h-8" />,
    color: 'from-green-400 to-emerald-500',
    description: 'Data storage and management systems',
    skills: [
      {
        name: 'MongoDB',
        icon: '/logo/mongodb.webp',
        description: 'NoSQL document database',
        projects: ['Real-time Chat App', 'Content Management'],
        level: 'Advanced'
      },
      {
        name: 'SQL',
        icon: '/logo/mysql.webp',
        description: 'Structured Query Language',
        projects: ['AgriTech Web App', 'User Management Systems'],
        level: 'Advanced'
      },
      {
        name: 'PostgreSQL',
        icon: '/logo/postgresql.webp',
        description: 'Advanced relational database',
        projects: ['Analytics Platform', 'Enterprise Applications'],
        level: 'Intermediate'
      },
      {
        name: 'Firebase',
        icon: '/logo/firebase.webp',
        description: 'Real-time database and backend services',
        projects: ['Real-time Applications'],
        level: 'Intermediate'
      }
    ]
  },
   {
    id: 'others',
    title: 'Data & Analytics',
    icon: <IconChartBar className="w-8 h-8" />,
    color: 'from-yellow-400 to-orange-500',
    description: 'Data visualization and analysis tools',
    skills: [
      {
        name: 'Excel',
        icon: '/logo/excel.webp',
        description: 'Advanced spreadsheet analysis',
        level: 'Advanced'
      },
      {
        name: 'Tableau',
        icon: '/logo/tableau.webp',
        description: 'Business intelligence and data visualization',
        level: 'Intermediate'
      },
      {
        name: 'Data Visualization',
        icon: '/logo/data-viz.webp',
        description: 'Creating insightful charts and dashboards',
        level: 'Advanced'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: <IconShield className="w-8 h-8" />,
    color: 'from-red-400 to-pink-500',
    description: 'Security tools and practices',
    skills: [
      {
        name: 'Network Security',
        icon: '/logo/network-security.webp',
        description: 'Network monitoring and protection',
        level: 'Intermediate'
      },
      {
        name: 'Web Security',
        icon: '/logo/web-security.webp',
        description: 'Application security and vulnerability assessment',
        level: 'Intermediate'
      },
      {
        name: 'Log Analysis',
        icon: '/logo/log-analysis.webp',
        description: 'Security log monitoring and analysis',
        level: 'Intermediate'
      }
    ]
 },
  {
    id: 'tools',
    title: 'Development Tools',
    icon: <IconTool className="w-8 h-8" />,
    color: 'from-indigo-400 to-purple-500',
    description: 'Essential development and productivity tools',
    skills: [
      {
        name: 'Git',
        icon: '/logo/git.webp',
        description: 'Version control and collaboration',
        level: 'Expert'
      },
      {
        name: 'GitHub',
        icon: '/logo/github.webp',
        description: 'Code hosting and collaboration platform',
        level: 'Expert'
      },
      {
        name: 'Docker',
        icon: '/logo/docker.webp',
        description: 'Containerization and deployment',
        level: 'Intermediate'
      },
      {
        name: 'Postman',
        icon: '/logo/postman.webp',
        description: 'API testing and development',
        level: 'Advanced'
      },
      {
        name: 'Vercel',
        icon: '/logo/vercel.webp',
        description: 'Frontend deployment platform',
        level: 'Advanced'
      },
      {
        name: 'Windsurf',
        icon: '/logo/windsurf.webp',
        description: 'AI-powered development environment',
        level: 'Advanced'
      },
      {
        name: 'Cursor',
        icon: '/logo/cursor.webp',
        description: 'AI code editor',
        level: 'Advanced'
      },
      {
        name: 'npm',
        icon: '/logo/npm.webp',
        description: 'Node package manager',
        level: 'Expert'
      },
      {
        name: 'Yarn',
        icon: '/logo/yarn.webp',
        description: 'Fast package manager',
        level: 'Advanced'
      }
    ]
  },
];

const ParticleEffect = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {isActive && Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          initial={{ 
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            opacity: 0,
            scale: 0
          }}
          animate={{ 
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{ 
            duration: 2,
            delay: i * 0.1,
            repeat: Infinity,
            repeatDelay: 3
          }}
        />
      ))}
    </div>
  );
};

const SkillPopup = ({ skill, isOpen, onClose }: { skill: TechSkill; isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 100, rotateX: -15 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 100, rotateX: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-2xl w-full bg-black/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(20,20,40,0.95) 100%)',
              boxShadow: '0 0 80px rgba(0, 255, 255, 0.5), inset 0 0 50px rgba(255, 0, 255, 0.2), 0 25px 50px rgba(0,0,0,0.8)'
            }}
          >
            {/* Enhanced holographic border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 animate-pulse" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-45 from-transparent via-cyan-400/10 to-transparent animate-ping" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    skill.level === 'Expert' ? 'bg-green-500/20 text-green-400' :
                    skill.level === 'Advanced' ? 'bg-blue-500/20 text-blue-400' :
                    skill.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {skill.level}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{skill.description}</p>
              
              {skill.codeSnippet && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Code Example</h4>
                  <pre className="bg-black/50 border border-cyan-500/30 rounded-lg p-4 overflow-x-auto">
                    <code className="text-green-400 text-sm">{skill.codeSnippet}</code>
                  </pre>
                </div>
              )}
              
              {skill.projects && skill.projects.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Projects</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.projects.map((project, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export function FuturisticSlideDeck() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<TechSkill | null>(null);
  const [isDescriptionHovered, setIsDescriptionHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!selectedCategory) {
        setCurrentSlide((prev) => (prev + 1) % techCategories.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedCategory]);

  const handleCategoryHover = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden z-50" id="skills">
      {/* Simplified black background to match certifications */}
      <div className="absolute inset-0 bg-black" />

      {/* Main container */}
      <div className="relative z-50 py-20 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-4 pointer-events-none"
              animate={{
                opacity: isDescriptionHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Top left corner */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-yellow-400 shadow-lg shadow-yellow-400/50" 
                   style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 0, 0.8))' }} />
              {/* Top right corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-yellow-400 shadow-lg shadow-yellow-400/50" 
                   style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 0, 0.8))' }} />
              {/* Bottom left corner */}
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-yellow-400 shadow-lg shadow-yellow-400/50" 
                   style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 0, 0.8))' }} />
              {/* Bottom right corner */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-yellow-400 shadow-lg shadow-yellow-400/50" 
                   style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 0, 0.8))' }} />
            </motion.div>
            <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              ⚡ Tech Arsenal
            </h2>
          </div>
          <p 
            className="text-gray-300 text-xl max-w-3xl mx-auto cursor-pointer"
            onMouseEnter={() => setIsDescriptionHovered(true)}
            onMouseLeave={() => setIsDescriptionHovered(false)}
          >
            Explore my technical expertise across different domains with interactive skill showcases
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-60">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onMouseEnter={() => handleCategoryHover(category.id)}
              onMouseLeave={handleCategoryLeave}
            >
              {/* Breathing neon border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl opacity-50 blur-sm animate-pulse group-hover:opacity-80 transition-opacity duration-300`} />
              
              {/* Main card */}
              <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-64 flex flex-col items-center justify-center text-center group-hover:border-white/30 transition-all duration-300">
                {/* Particle effects */}
                <ParticleEffect isActive={activeCategory === category.id} />
                
                {/* Icon with electric outline */}
                <motion.div
                  className={`mb-4 p-4 rounded-full bg-gradient-to-r ${category.color} text-white shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.5))'
                  }}
                >
                  {category.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm">{category.description}</p>
                
                {/* Skill count badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${category.color} text-white`}>
                    {category.skills.length}
                  </span>
                </div>
              </div>

              {/* Compact skills display */}
              <AnimatePresence>
                {activeCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-cyan-500/40 rounded-xl p-4 z-30 shadow-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(20,20,40,0.95) 100%)',
                      boxShadow: '0 0 40px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(255, 0, 255, 0.1)'
                    }}
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: skillIndex * 0.05 }}
                          className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/15 transition-all cursor-pointer group/skill border border-transparent hover:border-cyan-500/30"
                          onMouseEnter={(e) => {
                            e.stopPropagation();
                            setSelectedSkill(skill);
                          }}
                          onMouseLeave={() => setSelectedSkill(null)}
                        >
                          <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain group-hover/skill:scale-110 transition-transform" />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white font-medium text-sm truncate">{skill.name}</h4>
                            <span className={`text-xs px-1 py-0.5 rounded ${
                              skill.level === 'Expert' ? 'bg-green-500/20 text-green-400' :
                              skill.level === 'Advanced' ? 'bg-blue-500/20 text-blue-400' :
                              skill.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {skill.level}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skill detail popup */}
      <SkillPopup
        skill={selectedSkill!}
        isOpen={!!selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />
    </div>
  );
}
