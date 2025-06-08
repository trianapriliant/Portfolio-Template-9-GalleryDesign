import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Instagram, Dribbble, Linkedin, MessageCircle } from 'lucide-react'
import ScrollFadeIn from '../components/ScrollFadeIn'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex@designer.com',
      href: 'mailto:alex@designer.com',
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      label: 'Telepon',
      value: '+62 812-3456-7890',
      href: 'tel:+6281234567890',
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      label: 'Lokasi',
      value: 'Jakarta, Indonesia',
      href: '#',
      color: 'text-red-600'
    },
    {
      icon: Clock,
      label: 'Jam Kerja',
      value: 'Sen-Jum 9:00-17:00',
      href: '#',
      color: 'text-purple-600'
    }
  ]

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      href: '#',
      color: 'hover:text-pink-500',
      username: '@alexdesigner'
    },
    {
      icon: Dribbble,
      name: 'Dribbble',
      href: '#',
      color: 'hover:text-pink-400',
      username: 'alexdesigner'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: '#',
      color: 'hover:text-blue-500',
      username: 'Alex Designer'
    }
  ]

  const services = [
    'Brand Identity Design',
    'UI/UX Design',
    'Print Design',
    'Digital Illustration',
    'Web Design',
    'Creative Consultation'
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-gray-900 text-white rounded-full px-4 py-2 mb-6"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm font-medium">Mari Terhubung</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Hubungi Saya
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 max-w-2xl mx-auto"
              >
                Ada ide proyek yang menarik? Mari diskusikan bagaimana 
                saya dapat membantu mewujudkan visi kreatif Anda.
              </motion.p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollFadeIn direction="left">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Kirim Pesan
                </h2>
                <ContactForm />
              </div>
            </ScrollFadeIn>

            {/* Contact Info */}
            <ScrollFadeIn direction="right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Informasi Kontak
                  </h2>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center group"
                      >
                        <div className={`p-3 rounded-lg bg-gray-100 mr-4 group-hover:bg-gray-200 transition-colors duration-200`}>
                          <info.icon className={`h-6 w-6 ${info.color}`} />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">{info.label}</div>
                          <a
                            href={info.href}
                            className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Layanan yang Tersedia
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      >
                        {service}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Ikuti Saya
                  </h3>
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex items-center text-gray-600 transition-colors duration-200 group ${social.color}`}
                        whileHover={{ x: 5 }}
                      >
                        <div className="p-2 rounded-lg bg-gray-100 mr-3 group-hover:bg-gray-200 transition-colors duration-200">
                          <social.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">{social.name}</div>
                          <div className="text-sm text-gray-500">{social.username}</div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="text-xl text-gray-600">
                Beberapa pertanyaan umum dari klien tentang proses dan layanan desain.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="space-y-6">
            {[
              {
                question: "Berapa lama proses desain biasanya memakan waktu?",
                answer: "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Untuk logo design 3-5 hari kerja, brand identity 1-2 minggu, dan UI/UX design 2-4 minggu."
              },
              {
                question: "Apakah ada revisi yang disediakan?",
                answer: "Ya, saya menyediakan 3 kali revisi untuk setiap tahap desain. Revisi tambahan dapat diatur dengan biaya terpisah jika diperlukan."
              },
              {
                question: "Bagaimana proses pembayaran?",
                answer: "Pembayaran dilakukan secara bertahap: 50% di awal proyek sebagai down payment, dan 50% sisanya setelah proyek selesai dan disetujui."
              },
              {
                question: "Apakah file sumber disediakan?",
                answer: "Ya, setelah pembayaran lunas, Anda akan menerima semua file sumber (AI, PSD, Figma) beserta file final dalam berbagai format yang dibutuhkan."
              }
            ].map((faq, index) => (
              <ScrollFadeIn key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                  whileHover={{ y: -2 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollFadeIn>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Siap Memulai Proyek Baru?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Jangan ragu untuk menghubungi saya. Saya selalu excited untuk 
              bekerja pada proyek-proyek yang menantang dan bermakna.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="mailto:alex@designer.com"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5" />
                <span>Kirim Email</span>
              </motion.a>
              
              <motion.a
                href="tel:+6281234567890"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5" />
                <span>Telepon</span>
              </motion.a>
            </motion.div>
          </ScrollFadeIn>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact