import { motion } from 'framer-motion'
import { Heart, Instagram, Dribbble, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { 
      icon: Instagram, 
      href: '#', 
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    { 
      icon: Dribbble, 
      href: '#', 
      label: 'Dribbble',
      color: 'hover:text-pink-400'
    },
    { 
      icon: Linkedin, 
      href: '#', 
      label: 'LinkedIn',
      color: 'hover:text-blue-500'
    },
    { 
      icon: Mail, 
      href: 'mailto:alex@designer.com', 
      label: 'Email',
      color: 'hover:text-green-500'
    }
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Alex Designer</h3>
            <p className="text-gray-600 leading-relaxed">
              Menciptakan pengalaman visual yang bermakna melalui desain yang 
              bersih, fungsional, dan menginspirasi.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Navigasi</h4>
            <ul className="space-y-2">
              {['Beranda', 'Tentang', 'Karya', 'Kontak'].map((item, index) => (
                <li key={index}>
                  <motion.a
                    href={`/${item.toLowerCase().replace('beranda', '').replace('tentang', 'about').replace('karya', 'projects').replace('kontak', 'contact')}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 relative group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item}
                    <motion.div
                      className="absolute -bottom-0.5 left-0 h-0.5 bg-gray-900"
                      initial={{ width: '0%' }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Terhubung</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`p-3 rounded-full bg-gray-100 text-gray-600 transition-all duration-200 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Siap berkolaborasi dalam proyek yang menantang
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2024 Alex Designer. Semua hak dilindungi.
            </p>
            <motion.p 
              className="text-gray-500 text-sm flex items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Dibuat dengan
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ['#6B7280', '#EF4444', '#6B7280']
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
                className="mx-1"
              >
                <Heart className="h-4 w-4 fill-current" />
              </motion.span>
              dan kopi ☕
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer