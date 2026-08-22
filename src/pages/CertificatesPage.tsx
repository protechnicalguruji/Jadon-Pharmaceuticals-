import { motion } from 'motion/react';
import { Award, ShieldCheck, FileCheck, CheckCircle2, FileText, BadgeCheck, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const certificates = [
  {
    id: 'dl-20b',
    title: 'Drug License 20B',
    issuer: 'Food & Drugs Administration',
    description: 'Wholesale license to sell, stock or exhibit or offer for sale, or distribute drugs other than those specified in Schedules C, C(1) and X.',
    icon: FileCheck,
    color: 'from-emerald-500 to-teal-500',
    date: 'Active',
    imageUrl: '/certificates/dl-20b.jpg',
    pdfUrl: '/certificates/dl-20b.pdf'
  },
  {
    id: 'dl-21b',
    title: 'Drug License 21B',
    issuer: 'Food & Drugs Administration',
    description: 'Wholesale license to sell, stock or exhibit or offer for sale, or distribute drugs specified in Schedules C and C(1).',
    icon: ShieldCheck,
    color: 'from-blue-500 to-indigo-500',
    date: 'Active',
    imageUrl: '/certificates/dl-21b.jpg',
    pdfUrl: '/certificates/dl-21b.pdf'
  },
  {
    id: 'dl-cover-letter',
    title: 'Drug License Cover Letter',
    issuer: 'Food & Drugs Administration',
    description: 'Official cover letter accompanying the wholesale drug licenses from the state FDA.',
    icon: FileText,
    color: 'from-harmony-turquoise to-harmony-teal',
    date: 'Active',
    imageUrl: '/certificates/dl-cover-letter.jpg',
    pdfUrl: '/certificates/dl-cover-letter.pdf'
  },
  {
    id: 'fssai',
    title: 'FSSAI Registration',
    issuer: 'Food Safety and Standards Authority of India',
    description: 'Registration certificate confirming compliance with food safety and standard regulations for relevant products.',
    icon: Award,
    color: 'from-orange-500 to-amber-500',
    date: 'Active',
    imageUrl: '/certificates/fssai-registration.jpg',
    pdfUrl: '/certificates/fssai-registration.pdf'
  },
  {
    id: 'gst',
    title: 'GST Registration',
    issuer: 'Government of India',
    description: 'Goods and Services Tax Registration certificate verifying our status as a registered and compliant business entity.',
    icon: Building2,
    color: 'from-purple-500 to-pink-500',
    date: 'Active',
    imageUrl: '/certificates/gst-registration.jpg',
    pdfUrl: '/certificates/gst-registration.pdf'
  },
  {
    id: 'tan',
    title: 'TAN Registration',
    issuer: 'Income Tax Department',
    description: 'Tax Deduction and Collection Account Number (TAN) issued by the Income Tax Department.',
    icon: BadgeCheck,
    color: 'from-slate-500 to-slate-700',
    date: 'Active',
    imageUrl: null,
    pdfUrl: '/certificates/tan-no.pdf'
  },
  {
    id: 'udyam',
    title: 'Udyam Registration',
    issuer: 'Ministry of MSME',
    description: 'Official Udyam Registration Certificate recognizing us as a registered enterprise under the Ministry of MSME.',
    icon: CheckCircle2,
    color: 'from-sky-500 to-blue-600',
    date: 'Active',
    imageUrl: '/certificates/udyam-registration.jpg',
    pdfUrl: '/certificates/udyam-registration.pdf'
  }
];

export function CertificatesPage() {
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
                  className="bg-harmony-card rounded-3xl border border-harmony-teal/20 p-6 shadow-sm hover:shadow-xl hover:border-harmony-teal/40 transition-all duration-300 flex flex-col relative overflow-hidden group"
                >
                  <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${cert.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10`} />
                  
                  {/* Thumbnail Image or Icon Fallback */}
                  <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/50 group-hover:border-harmony-teal/30 transition-colors flex items-center justify-center">
                    {cert.imageUrl ? (
                      <img 
                        src={cert.imageUrl} 
                        alt={cert.title} 
                        className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" 
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 text-slate-300 group-hover:text-primary/40 transition-colors">
                        <Icon className="w-16 h-16 mb-2" />
                        <span className="text-xs font-semibold uppercase tracking-widest">Protected Document</span>
                      </div>
                    )}
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-emerald-700 border border-emerald-100 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        {cert.date}
                      </span>
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                        <div className={`p-2.5 rounded-full bg-gradient-to-br ${cert.color} text-white shadow-inner`}>
                            <Icon className="w-5 h-5" />
                        </div>
                    </div>
                  </div>

                  <div className="space-y-3 flex-grow mt-2">
                    <h3 className="text-xl font-extrabold text-harmony-dark font-display leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-bold text-harmony-turquoise uppercase tracking-wider">
                      {cert.issuer}
                    </p>
                    <p className="text-harmony-dark/80 text-sm leading-relaxed font-normal pt-1">
                      {cert.description}
                    </p>
                  </div>
                  
                  <div className="pt-5 mt-5 border-t border-harmony-teal/10">
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-primary/5 hover:bg-primary text-primary hover:text-white rounded-xl text-sm font-bold transition-all duration-300 group/link"
                    >
                      <span>Open PDF Document</span>
                      <FileText className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                    </a>
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

    </motion.div>
  );
}
