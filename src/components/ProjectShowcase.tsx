
import { ThreeDMarquee } from './ui/3d-marquee';

const ProjectShowcase = () => {
  // Project images with correct paths from public directory
  const projectImages = [
    '/projects/aitools.png',
    '/projects/grayjays.png',
    '/projects/qiurin.png',
    '/projects/travel.png',
    '/projects/gmc.png',
    '/projects/youth.png',
    '/projects/p1.png',
    '/projects/p2.png',
    '/projects/p3.png',
    '/projects/p4.png',
    '/projects/p5.png',
    '/projects/p6.png',
  ];

  return (
    <div className="py-20 relative" data-scroll data-scroll-speed="0.3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-poppins">Featured Projects</h2>
          <p className="text-white/60 max-w-2xl mx-auto font-poppins">
            Explore some of my recent work and creative endeavors
          </p>
        </div>
        <div className="overflow-hidden h-[600px] md:h-[700px] relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />
          <ThreeDMarquee 
            images={projectImages} 
            className=" backdrop-blur-sm rounded-lg border border-white/10"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase; 