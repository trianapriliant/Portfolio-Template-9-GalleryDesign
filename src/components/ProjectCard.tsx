import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Calendar, User } from 'lucide-react'
import { Project } from '../lib/projects-data'

interface ProjectCardProps {
  project: Project
  index?: number
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const categoryColors = {
    'Branding': 'bg-blue-100 text-blue-800',
    'UI/UX': 'bg-purple-100 text-purple-800', 
    'Print': 'bg-green-100 text-green-800',
    'Digital Art': 'bg-pink-100 text-pink-800',
    'Web Design': 'bg-orange-100 text-orange-800'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.25, 0, 1]
      }}
      viewport={{ once: true }}
      className="group relative"
    >
      <Link to={`/projects/${project.id}`}>
        <motion.div
          className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
          whileHover={{ 
            y: -8,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          {/* Image Container */}
          <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.6, ease: "easeOut" }
              }}
              loading="lazy"
            />
            
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.div
                className="bg-white rounded-full p-3"
                initial={{ scale: 0.8, rotate: -90 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight className="h-6 w-6 text-gray-900" />
              </motion.div>
            </motion.div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${categoryColors[project.category]}`}>
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200 line-clamp-2">
                {project.title}
              </h3>
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
              {project.description}
            </p>

            {/* Meta Information */}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {project.year}
                </div>
                <div className="flex items-center">
                  <User className="h-3 w-3 mr-1" />
                  {project.client}
                </div>
              </div>
              
              <motion.span
                className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200"
                whileHover={{ x: 3 }}
              >
                Lihat Detail →
              </motion.span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default ProjectCard