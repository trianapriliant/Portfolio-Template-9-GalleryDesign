import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Calendar, User, Settings, Lightbulb, ExternalLink } from 'lucide-react'
import ScrollFadeIn from '../components/ScrollFadeIn'
import { getProjectById, projects } from '../lib/projects-data'

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  
  const project = slug ? getProjectById(slug) : null
  
  if (!project) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Proyek Tidak Ditemukan</h1>
          <Link to="/projects" className="text-blue-600 hover:text-blue-800">
            Kembali ke Proyek
          </Link>
        </div>
      </div>
    )
  }

  const currentIndex = projects.findIndex(p => p.id === project.id)
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]

  const categoryColors = {
    'Branding': 'bg-blue-100 text-blue-800',
    'UI/UX': 'bg-purple-100 text-purple-800', 
    'Print': 'bg-green-100 text-green-800',
    'Digital Art': 'bg-pink-100 text-pink-800',
    'Web Design': 'bg-orange-100 text-orange-800'
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      {/* Back Button */}
      <div className="fixed top-20 left-4 z-50">
        <motion.button
          onClick={() => navigate('/projects')}
          className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowLeft className="h-5 w-5 text-gray-700" />
        </motion.button>
      </div>

      {/* Hero Image */}
      <section className="relative h-screen">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white space-y-4"
            >
              <span className={`inline-block px-4 py-2 text-sm font-medium rounded-full ${categoryColors[project.category]}`}>
                {project.category}
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-200 max-w-2xl">
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Project Info */}
              <ScrollFadeIn>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Tentang Proyek
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Lightbulb className="h-6 w-6 text-yellow-500 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">Insight</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {project.insights}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>

              {/* Gallery */}
              {project.gallery && project.gallery.length > 1 && (
                <ScrollFadeIn delay={0.2}>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                      Galeri
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.gallery.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="group relative overflow-hidden rounded-xl bg-gray-100"
                        >
                          <img
                            src={image}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </ScrollFadeIn>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <ScrollFadeIn direction="right">
                {/* Project Meta */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Detail Proyek
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                      <div>
                        <div className="text-sm text-gray-500">Tahun</div>
                        <div className="font-medium text-gray-900">{project.year}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-gray-500 mr-3" />
                      <div>
                        <div className="text-sm text-gray-500">Klien</div>
                        <div className="font-medium text-gray-900">{project.client}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn direction="right" delay={0.2}>
                {/* Tools Used */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Settings className="h-5 w-5 text-gray-500 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Tools Digunakan
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn direction="right" delay={0.4}>
                {/* CTA */}
                <div className="bg-gray-900 p-6 rounded-xl text-white">
                  <h3 className="text-xl font-semibold mb-4">
                    Tertarik dengan Proyek Serupa?
                  </h3>
                  <p className="text-gray-300 mb-6 text-sm">
                    Mari diskusikan bagaimana saya dapat membantu 
                    mewujudkan visi kreatif Anda.
                  </p>
                  <Link to="/contact">
                    <motion.button
                      className="w-full bg-white text-gray-900 py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Hubungi Saya</span>
                      <ExternalLink className="h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Other Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Proyek Lainnya
            </h2>
          </ScrollFadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Previous Project */}
            <ScrollFadeIn direction="left">
              <Link to={`/projects/${prevProject.id}`}>
                <motion.div
                  className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={prevProject.image}
                      alt={prevProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 mb-2">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      <span className="text-sm">Proyek Sebelumnya</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {prevProject.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            </ScrollFadeIn>

            {/* Next Project */}
            <ScrollFadeIn direction="right">
              <Link to={`/projects/${nextProject.id}`}>
                <motion.div
                  className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={nextProject.image}
                      alt={nextProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-end text-gray-500 mb-2">
                      <span className="text-sm">Proyek Selanjutnya</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors text-right">
                      {nextProject.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default ProjectDetail