import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Eye } from "lucide-react";

import Cert1 from "@/assets/certificates/CompStud.png";
import Cert2 from "@/assets/certificates/PUMA1.jpg";
import Cert3 from "@/assets/certificates/SetSail.png";
import Cert4 from "@/assets/certificates/SPVTemuAlumni.png";
import Cert5 from "@/assets/certificates/Compsphere.jpg";
import Cert6 from "@/assets/certificates/Compvis.jpg";
import Cert7 from "@/assets/certificates/Culfest.jpg";
import Cert8 from "@/assets/certificates/CyberLiteracy.jpg";
import Cert9 from "@/assets/certificates/ELLC-Cert.png";
import Cert10 from "@/assets/certificates/InterpreterWEF.jpg";
import Cert11 from "@/assets/certificates/PRTemuAlumni.png";
import Cert12 from "@/assets/certificates/SponsorTechX.png";
import Cert13 from "@/assets/certificates/CertificateKADA.jpg";

export const HallofFameSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollRef = useRef(null);
  const cardWidth = 360;

  const certifications = [
    { title: "Certificate of CompStud", image: Cert1 },
    { title: "Certificate of PUMA", image: Cert2 },
    { title: "Certificate of SetSail", image: Cert3 },
    { title: "Certificate of SPV Temu Alumni", image: Cert4 },
    { title: "Certificate of Compsphere", image: Cert5 },
    { title: "Certificate of Compvis", image: Cert6 },
    { title: "Certificate of Culfest", image: Cert7 },
    { title: "Certificate of Cyber Literacy", image: Cert8 },
    { title: "Certificate of ELLC", image: Cert9 },
    { title: "Certificate of Interpreter WEF", image: Cert10 },
    { title: "Certificate of PR Temu Alumni", image: Cert11 },
    { title: "Certificate of Sponsor TechX", image: Cert12 },
    { title: "Certificate of KADA", image: Cert13 },
  ];

  const scrollBy = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    const interval = setInterval(() => {
      if (!container) return;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const isAtEnd = container.scrollLeft + cardWidth >= maxScrollLeft;

      if (isAtEnd) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollBy(cardWidth);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="certification"
        className="py-24 px-4 bg-background text-center relative"
      >
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-primary">Hall Of</span> Fame
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            List of certifications and achievements I've earned
          </p>

          {/* Carousel navigation buttons */}
          <button
            onClick={() => scrollBy(-cardWidth)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-secondary p-2 rounded-full shadow hover:bg-primary hover:text-white transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scrollBy(cardWidth)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-secondary p-2 rounded-full shadow hover:bg-primary hover:text-white transition"
          >
            <ChevronRight />
          </button>

          {/* Scrollable carousel container */}
          <div ref={scrollRef} className="overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex gap-6 w-max px-6">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="min-w-[320px] md:min-w-[360px] max-w-[360px] bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
                >
                  <div
                    onClick={() => setSelectedImage(cert.image)}
                    className="relative group cursor-pointer"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden rounded">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                      />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Eye className="text-white w-8 h-8" />
                    </div>
                  </div>
                </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for full-screen preview */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="w-full max-w-xl h-auto relative flex flex-col justify-center">
            <img
              src={selectedImage}
              alt="Certificate Preview"
              className="max-h-full max-w-full mx-auto rounded object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-2xl font-bold bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-600 transition"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};