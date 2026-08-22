import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldCheck, FileCheck, CheckCircle2, FileText, BadgeCheck, Building2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const certificates = [
  {
    id: 'dl-20b',
    title: 'Drug License 20B',
    issuer: 'Food & Drugs Administration',
    description: 'Wholesale license to sell, stock or exhibit or offer for sale, or distribute drugs other than those specified in Schedules C, C(1) and X.',
    icon: FileCheck,
    color: 'from-emerald-500 to-teal-500',
    date: 'Active',
    imageUrl: '/certificates/dl-20b.jpg'
  },
  {
    id: 'dl-21b',
    title: 'Drug License 21B',
    issuer: 'Food & Drugs Administration',
    description: 'Wholesale license to sell, stock or exhibit or offer for sale, or distribute drugs specified in Schedules C and C(1).',
    icon: ShieldCheck,
    color: 'from-blue-500 to-indigo-500',
    date: 'Active',
    imageUrl: '/certificates/dl-21b.jpg'
  },
  {
    id: 'dl-cover-letter',
    title: 'Drug License Cover Letter',
    issuer: 'Food & Drugs Administration',
    description: 'Official cover letter accompanying the wholesale drug licenses from the state FDA.',
    icon: FileText,
    color: 'from-harmony-turquoise to-harmony-teal',
    date: 'Active',
    imageUrl: '/certificates/dl-cover-letter.jpg'
  },
  {
    id: 'fssai',
    title: 'FSSAI Registration',
    issuer: 'Food Safety and Standards Authority of India',
    description: 'Registration certificate confirming compliance with food safety and standard regulations for relevant products.',
    icon: Award,
    color: 'from-orange-500 to-amber-500',
    date: 'Active',
    imageUrl: '/certificates/fssai-registration.jpg'
  },
  {
    id: 'gst',
    title: 'GST Registration',
    issuer: 'Government of India',
    description: 'Goods and Services Tax Registration certificate verifying our status as a registered and compliant business entity.',
    icon: Building2,
    color: 'from-purple-500 to-pink-500',
    date: 'Active',
    imageUrl: '/certificates/gst-registration.jpg'
  },
  {
    id: 'tan',
    title: 'TAN Registration',
    issuer: 'Income Tax Department',
    description: 'Tax Deduction and Collection Account Number (TAN) issued by the Income Tax Department.',
    icon: BadgeCheck,
    color: 'from-slate-500 to-slate-700',
    date: 'Active',
    imageUrl: '/certificates/tan-no.pdf'
  },
  {
    id: 'udyam',
    title: 'Udyam Registration',
    issuer: 'Ministry of MSME',
    description: 'Official Udyam Registration Certificate recognizing us as a registered enterprise under the Ministry of MSME.',
    icon: CheckCircle2,
    color: 'from-sky-500 to-blue-600',
    date: 'Active',
    imageUrl: '/certificates/udyam-registration.jpg'
  }
];

export function CertificatesPage() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  return (
    <motion.div
      id="certificates-page-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-0"
    >
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-tr from-slate-950 via-harmony-dark to-harmony-teal text-white">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 bg-radial-gradient from-harmony-turquoise/30 via-transparent to-transparent pointer-events-none"
        />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-xs text-harmony-cream rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/5"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-harmony-turquoise" />
            <span>Compliance & Trust</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-display text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-harmony-cream"
          >
            Our Certificates & Accreditations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto"
          >
            We adhere strictly to international public health compliance standards, ensuring absolute safety, quality, and integrity in every shipment.
          </motion.p>
        </div>
      </section>

      {/* Certificates Grid */}
      <div className="bg-grid-pattern py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-harmony-card rounded-3xl border border-harmony-teal/20 p-8 shadow-sm hover:shadow-xl hover:border-harmony-teal/40 transition-all duration-300 flex flex-col relative overflow-hidden group"
                >
                  <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${cert.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3.5 bg-harmony-bg text-primary rounded-2xl border border-harmony-teal/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      {cert.date}
                    </span>
                  </div>

                  <div className="space-y-3 flex-grow">
                    <h3 className="text-xl font-extrabold text-harmony-dark font-display leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-bold text-harmony-turquoise uppercase tracking-wider">
                      {cert.issuer}
                    </p>
                    <p className="text-harmony-dark/80 text-sm leading-relaxed font-normal pt-2">
                      {cert.description}
                    </p>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-harmony-teal/10">
                    <button
                      onClick={() => setSelectedImage({ url: cert.imageUrl, title: cert.title })}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover group/link transition-colors cursor-pointer"
                    >
                      <span>View Certificate</span>
                      <FileText className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="floating-section-card p-8 sm:p-12 md:p-16 text-center max-w-5xl mx-auto my-12 md:my-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-harmony-dark font-display">
            Commitment to Quality
          </h3>
          <p className="text-harmony-dark/80 max-w-lg mx-auto text-base font-normal">
            Our quality assurance team is available to provide detailed audit reports and official certificate copies for your hospital procurement committee.
          </p>
          <div className="pt-2">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link to="/contact" className="inline-flex items-center gap-2.5 px-8 py-4.5 bg-gradient-to-r from-primary to-blue-600 hover:from-primary-hover hover:to-blue-700 text-white rounded-2xl font-bold shadow-md shadow-primary/20 transition-all duration-300 cursor-pointer">
                <FileText className="w-4 h-4" />
                <span>Contact QA Department</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Viewer Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                <h3 className="text-lg font-bold text-slate-800 font-display">
                  {selectedImage.title}
                </h3>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-200/50 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-grow bg-slate-100/50 p-4 overflow-y-auto flex items-center justify-center">
                {selectedImage.url.endsWith('.pdf') ? (
                  <iframe
                    src={`${selectedImage.url}#view=FitH`}
                    className="w-full h-[75vh] rounded-xl border border-slate-200 shadow-sm"
                    title={selectedImage.title}
                  />
                ) : (
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    className="max-w-full max-h-[75vh] object-contain rounded-xl border border-slate-200 shadow-sm"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
