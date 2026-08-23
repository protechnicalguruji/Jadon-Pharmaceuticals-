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
    imageUrls: ['/certificates/DL%2020B%20(JADON%20PHARMACEUTICALS%20INDIA%20PRIVATE%20LIMITED).jpg']
  },
  {
    id: 'dl-21b',
    title: 'Drug License 21B',
    issuer: 'Food & Drugs Administration',
    description: 'Wholesale license to sell, stock or exhibit or offer for sale, or distribute drugs specified in Schedules C and C(1).',
    icon: ShieldCheck,
    color: 'from-blue-500 to-indigo-500',
    date: 'Active',
    imageUrls: ['/certificates/DL%2021B%20(JADON%20PHARMACEUTICALS%20INDIA%20PRIVATE%20LIMITED).jpg']
  },
  {
    id: 'dl-cover-letter',
    title: 'Drug License Cover Letter',
    issuer: 'Food & Drugs Administration',
    description: 'Official cover letter accompanying the wholesale drug licenses from the state FDA.',
    icon: FileText,
    color: 'from-harmony-turquoise to-harmony-teal',
    date: 'Active',
    imageUrls: ['/certificates/DL%20COVER%20LETTER%20(JADON%20PHARMACEUTICALS%20INDIA%20PRIVATE%20LIMITED).jpg']
  },
  {
    id: 'fssai',
    title: 'FSSAI Registration',
    issuer: 'Food Safety and Standards Authority of India',
    description: 'Registration certificate confirming compliance with food safety and standard regulations for relevant products.',
    icon: Award,
    color: 'from-orange-500 to-amber-500',
    date: 'Active',
    imageUrls: [
      '/certificates/FSSAI%20(Registration%20Certificate)-images-0.jpg',
      '/certificates/FSSAI%20(Registration%20Certificate)-images-1.jpg',
      '/certificates/FSSAI%20(Registration%20Certificate)-images-2.jpg',
      '/certificates/FSSAI%20(Registration%20Certificate)-images-3.jpg',
      '/certificates/FSSAI%20(Registration%20Certificate)-images-4.jpg'
    ]
  },
  {
    id: 'gst',
    title: 'GST Registration',
    issuer: 'Government of India',
    description: 'Goods and Services Tax Registration certificate verifying our status as a registered and compliant business entity.',
    icon: Building2,
    color: 'from-purple-500 to-pink-500',
    date: 'Active',
    imageUrls: [
      '/certificates/GST%20Registration-images-0.jpg',
      '/certificates/GST%20Registration-images-1.jpg',
      '/certificates/GST%20Registration-images-2.jpg'
    ]
  },
  {
    id: 'tan',
    title: 'TAN Registration',
    issuer: 'Income Tax Department',
    description: 'Tax Deduction and Collection Account Number (TAN) issued by the Income Tax Department.',
    icon: BadgeCheck,
    color: 'from-slate-500 to-slate-700',
    date: 'Active',
    imageUrls: []
  },
  {
    id: 'udyam',
    title: 'Udyam Registration',
    issuer: 'Ministry of MSME',
    description: 'Official Udyam Registration Certificate recognizing us as a registered enterprise under the Ministry of MSME.',
    icon: CheckCircle2,
    color: 'from-sky-500 to-blue-600',
    date: 'Active',
    imageUrls: [
      '/certificates/UDYAM%20REGISTRATION%20CERTIFICATE-images-0.jpg',
      '/certificates/UDYAM%20REGISTRATION%20CERTIFICATE-images-1.jpg',
      '/certificates/UDYAM%20REGISTRATION%20CERTIFICATE-images-2.jpg'
    ]
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

      {/* Certificates Gallery */}
      <div className="bg-grid-pattern py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {certificates.filter(cert => cert.imageUrls && cert.imageUrls.length > 0).map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col space-y-6"
              >
                <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl shadow-slate-200/60 border border-slate-200/60 hover:shadow-2xl hover:border-harmony-teal/30 transition-all duration-500 flex flex-col gap-4">
                  {cert.imageUrls.map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt={`${cert.title} Page ${i + 1}`}
                      className="w-full h-auto rounded-2xl object-contain border border-slate-100"
                      loading="lazy"
                    />
                  ))}
                </div>
                
                <div className="px-2 sm:px-4">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-extrabold text-harmony-dark font-display leading-tight">
                      {cert.title}
                    </h3>
                    <span className="shrink-0 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-harmony-turquoise uppercase tracking-wider mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-harmony-dark/80 text-base leading-relaxed font-normal">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
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
