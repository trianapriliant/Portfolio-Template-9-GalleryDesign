import { motion } from 'framer-motion'
import { Download, Award, Users, Coffee, Palette, Code, Zap } from 'lucide-react'
import ScrollFadeIn from '../components/ScrollFadeIn'

const About = () => {
  const skills = [
    { name: 'Adobe Creative Suite', level: 95, icon: Palette },
    { name: 'Figma & Sketch', level: 90, icon: Code },
    { name: 'UI/UX Design', level: 88, icon: Zap },
    { name: 'Brand Identity', level: 92, icon: Award },
    { name: 'Print Design', level: 85, icon: Users },
    { name: 'Web Design', level: 82, icon: Coffee }
  ]

  const experience = [
    {
      year: '2021 - Sekarang',
      title: 'Senior Visual Designer',
      company: 'Creative Studio Indonesia',
      description: 'Memimpin tim desain dalam mengembangkan identitas brand untuk klien enterprise dan startup.'
    },
    {
      year: '2019 - 2021',
      title: 'UI/UX Designer',
      company: 'Digital Agency Jakarta',
      description: 'Fokus pada pengembangan antarmuka aplikasi mobile dan web dengan pendekatan user-centered design.'
    },
    {
      year: '2017 - 2019',
      title: 'Graphic Designer',
      company: 'Freelance',
      description: 'Memberikan solusi desain untuk berbagai klien mulai dari UMKM hingga perusahaan multinasional.'
    }
  ]

  const stats = [
    { number: '50+', label: 'Proyek Selesai' },
    { number: '30+', label: 'Klien Puas' },
    { number: '5+', label: 'Tahun Pengalaman' },
    { number: '15+', label: 'Penghargaan' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <ScrollFadeIn direction="left">
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl font-bold text-gray-900"
                >
                  Halo, Saya Alex
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl text-gray-600 leading-relaxed"
                >
                  Seorang desainer visual yang bersemangat menciptakan pengalaman 
                  digital yang bermakna. Dengan lebih dari 5 tahun pengalaman dalam 
                  industri kreatif, saya mengkhususkan diri dalam branding, UI/UX design, 
                  dan visual communication.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg text-gray-600 leading-relaxed"
                >
                  Saya percaya bahwa desain yang baik bukan hanya tentang estetika, 
                  tetapi juga tentang memecahkan masalah dan menciptakan koneksi 
                  emosional antara brand dan audiensnya.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="h-5 w-5" />
                    <span>Download CV</span>
                  </motion.button>
                </motion.div>
              </div>
            </ScrollFadeIn>

            {/* Profile Image */}
            <ScrollFadeIn direction="right">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative z-10"
                >
                  <img
                    src="/images/profile-avatar.jpg"
                    alt="Alex Designer"
                    className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                  />
                </motion.div>
                
                {/* Decorative Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full z-0"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-200 rounded-full z-0"
                />
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Keahlian & Tools
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Menguasai berbagai tools dan teknologi untuk menghasilkan 
                karya desain yang berkualitas tinggi.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <ScrollFadeIn key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 p-3 rounded-lg mr-4">
                      <skill.icon className="h-6 w-6 text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                      <div className="text-sm text-gray-600">{skill.level}%</div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gray-900 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pengalaman Profesional
              </h2>
              <p className="text-xl text-gray-600">
                Perjalanan karir dalam dunia desain visual dan kreatif.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <ScrollFadeIn key={index} delay={index * 0.2}>
                <motion.div
                  className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-gray-500 font-medium mt-2 md:mt-0">
                      {exp.year}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Filosofi Desain
              </h2>
              <motion.blockquote
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-light italic leading-relaxed"
              >
                "Desain yang baik adalah desain yang tidak terlihat. 
                Ketika pengguna dapat berinteraksi dengan produk secara 
                intuitif tanpa harus memikirkan bagaimana cara menggunakannya, 
                itulah saat desain berhasil mencapai tujuannya."
              </motion.blockquote>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </motion.div>
  )
}

export default About