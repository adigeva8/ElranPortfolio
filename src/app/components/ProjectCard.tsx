import { motion } from 'motion/react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  backgroundColor?: string;
  imagePosition?: 'left' | 'right';
  onClick?: () => void;
}

export function ProjectCard({
  title,
  description,
  imageSrc,
  backgroundColor = 'white',
  imagePosition = 'right',
  onClick,
}: ProjectCardProps) {
  return (
    <div
      className="h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 snap-start snap-always"
      style={{ backgroundColor }}
    >
      <div
        className={`flex flex-col-reverse ${
          imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } items-center justify-center gap-8 lg:gap-12 xl:gap-20 w-full max-w-7xl`}
      >
        {/* Content */}
        <motion.div
          className="flex flex-col gap-4 md:gap-6 w-full max-w-[508px] px-4 md:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-start p-2">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#4f799a] text-sm md:text-[16px] tracking-[1.6px] uppercase">
              {title}
            </p>
          </div>

          <div className="flex items-center justify-center p-2">
            <p className="font-['Poppins:ExtraLight',sans-serif] text-[#182730] leading-tight tracking-[-0.72px]" style={{ fontSize: '28px' }}>
              {description}
            </p>
          </div>

          <div className="flex flex-col items-start p-2 w-full max-w-[217px]">
            <button
              onClick={onClick}
              className="bg-[#0023a3] hover:bg-[#001a80] transition-colors w-full h-[57px] flex items-center justify-center px-8 py-6 rounded-lg"
            >
              <p className="font-['Poppins:Regular',sans-serif] text-white text-[16px]">
                Read case study
              </p>
            </button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative w-full max-w-[90%] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto object-contain max-h-[400px] md:max-h-[500px] lg:max-h-[700px]"
          />
        </motion.div>
      </div>
    </div>
  );
}
