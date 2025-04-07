import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import HeroSection from '../components/sections/HeroSection'
import ExploreSection from '../components/sections/ExploreSection'
import BestSellerSection from '../components/sections/BestSellerSection'
import PackagesSection from '../components/sections/PackagesSection'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export default function HomePage() {
  const navigate = useNavigate()

  const handleFeaturedArtistClick = (id) => {
    navigate(`/concert-details/${id}`)
  }

  return (
    <div className="flex flex-col">
      <HeroSection />

      {/* Featured Events */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="container">
          <div className="text-center mb-12">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold mb-4"
            >
              Featured Events
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Discover the most anticipated concerts and performances of the season
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Rock Festival',
                date: 'March 15, 2024',
                image: '/YC (IMG)/cold.webp',
                category: 'Rock',
              },
              {
                title: 'Electronic Night',
                date: 'April 2, 2024',
                image: '/YC (IMG)/593532f2da6dde2b77402dcc.webp',
                category: 'Electronic',
              },
              {
                title: 'Jazz Evening',
                date: 'April 10, 2024',
                image: '/YC (IMG)/GettyImages-2149383523-3.webp',
                category: 'Jazz',
              },
            ].map((event, index) => (
              <motion.div
                key={event.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleFeaturedArtistClick(index + 1)}
              >
                <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="inline-block px-3 py-1 bg-festival-primary text-white text-sm rounded-full mb-2">
                      {event.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                    <p className="text-white/80">{event.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <BestSellerSection />
      <PackagesSection />

      {/* Newsletter Section */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-20 bg-festival-primary/5"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold mb-4"
            >
              Stay Updated
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 mb-8"
            >
              Subscribe to our newsletter for exclusive updates, early access to tickets, and special offers
            </motion.p>
            <motion.form
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-festival-primary focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-festival-primary text-white rounded-lg hover:bg-festival-primary-dark transition-colors"
              >
                Subscribe
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.section>

      <ExploreSection />

      {/* Call to Action */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-festival-primary to-festival-primary-dark text-white"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold mb-4"
            >
              Ready to Experience Live Music?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/80 mb-8"
            >
              Join thousands of music lovers and book your tickets today
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/explore')}
              className="px-8 py-3 bg-white text-festival-primary rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore Events
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  )
}