'use client'

import { useIntl } from 'react-intl'

import { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

type Photo = {
  src: string;
  alt: string;
  caption: string;
};

const photos: Photo[] = [
  {
    src: '/galeri/rkz1.webp',
    alt: 'Indonesian Sisters Praying.',
    caption: 'Indonesian Sisters Praying',
  },
  {
    src: '/galeri/rkz2.webp',
    alt: 'Indonesian Sisters.',
    caption: 'Indonesian Sisters',
  },
  {
    src: '/galeri/rkzmisa.webp',
    alt: 'Mass in Chapel in Indonesia.',
    caption: 'Mass in Chapel in Indonesia',
  },
  {
    src: '/galeri/natal2025.webp',
    alt: '2025 Christmas Celebration.',
    caption: '2025 Christmas Celebration',
  },
  {
    src: '/galeri/retret.webp',
    alt: 'Spiritual Retreat.',
    caption: 'Spiritual Retreat',
  },
  {
    src: '/galeri/hidup-membiara.webp',
    alt: 'Jubilee of Religious Life.',
    caption: 'Jubilee of Religious Life',
  },
];

export default function GalleryPage() {
  const intl = useIntl()

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? prev : (prev - 1 + photos.length) % photos.length
    );
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % photos.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/bg-galeri.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30" />
        <div className="relative z-10 flex h-full flex-col items-start justify-start px-20 pt-12 text-left sm:px-24 md:px-30 md:pt-16">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            {intl.formatMessage({ id: 'pages.gallery.title', defaultMessage: 'Gallery' })}
          </h1>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setLightboxIndex(index)}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-xl shadow-sm ring-1 ring-border/50 transition-all duration-300 hover:shadow-xl hover:ring-border focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-medium text-white drop-shadow-sm">
                  {photo.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 sm:left-8"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image */}
          <figure
            className="relative max-h-[85vh] max-w-4xl px-14"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt}
              className="mx-auto max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/80">
              {photos[lightboxIndex].caption}
              <span className="ml-2 text-white/40">
                {lightboxIndex + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 sm:right-8"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </main>
  );
}
