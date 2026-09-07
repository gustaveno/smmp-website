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
    src: 'https://images.pexels.com/photos/29422232/pexels-photo-29422232.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A large congregation listens to a speaker in a modern church setting.',
    caption: 'Sunday Worship Service',
  },
  {
    src: 'https://images.pexels.com/photos/39005127/pexels-photo-39005127.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A diverse group of people participating in a worship service, hands raised in devotion.',
    caption: 'Hands Raised in Worship',
  },
  {
    src: 'https://images.pexels.com/photos/38274945/pexels-photo-38274945.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A vibrant congregation gathers in a beautifully lit church for worship.',
    caption: 'Evening Prayer Gathering',
  },
  {
    src: 'https://images.pexels.com/photos/20173216/pexels-photo-20173216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Young woman standing with raised hand during a religious gathering indoors.',
    caption: 'Youth Fellowship',
  },
  {
    src: 'https://images.pexels.com/photos/34328510/pexels-photo-34328510.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Back view of people engaged in a vibrant religious service with colorful lighting.',
    caption: 'Praise and Celebration',
  },
  {
    src: 'https://images.pexels.com/photos/13899664/pexels-photo-13899664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A devotional gathering with people in prayer, expressing faith and unity.',
    caption: 'Community Prayer Circle',
  },
  {
    src: 'https://images.pexels.com/photos/6269056/pexels-photo-6269056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Woman carrying a child inside a church with people worshipping in the background.',
    caption: 'Family at Worship',
  },
  {
    src: 'https://images.pexels.com/photos/34680726/pexels-photo-34680726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A man raises his hand during a church service, signifying worship and prayer.',
    caption: 'Moment of Devotion',
  },
  {
    src: 'https://images.pexels.com/photos/8814950/pexels-photo-8814950.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A diverse group of people listens to a pastor in a well-lit church.',
    caption: 'Sunday Teaching',
  },
  {
    src: 'https://images.pexels.com/photos/12958129/pexels-photo-12958129.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A group of people participating in a worship event with hands raised.',
    caption: 'Worship Night',
  },
  {
    src: 'https://images.pexels.com/photos/33816295/pexels-photo-33816295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'An interior view of a church with a congregation attending a religious service.',
    caption: 'Inside Our Sanctuary',
  },
  {
    src: 'https://images.pexels.com/photos/16102722/pexels-photo-16102722.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A diverse community raising hands in prayer during a religious service.',
    caption: 'United in Prayer',
  },
  {
    src: 'https://images.pexels.com/photos/34504326/pexels-photo-34504326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A congregation stands in reverence in a church, facing a stage with a worship team.',
    caption: 'Worship Team Leading',
  },
  {
    src: 'https://images.pexels.com/photos/34680729/pexels-photo-34680729.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Senior woman singing during a church service with a diverse congregation.',
    caption: 'Voices in Song',
  },
  {
    src: 'https://images.pexels.com/photos/36425622/pexels-photo-36425622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A group of people with raised hands attending a lively worship service.',
    caption: 'Joyful Praise',
  },
  {
    src: 'https://images.pexels.com/photos/22046793/pexels-photo-22046793.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A young woman with eyes closed, praying during a religious gathering.',
    caption: 'Quiet Reflection',
  },
  {
    src: 'https://images.pexels.com/photos/13908967/pexels-photo-13908967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A congregation gathered indoors, raising hands and praying together.',
    caption: 'Gathered in Faith',
  },
  {
    src: 'https://images.pexels.com/photos/11296106/pexels-photo-11296106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A church service with people seated, colorful reflection on polished floor.',
    caption: 'Light in the Sanctuary',
  },
];

export default function GalleryPage() {
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
      <section className="relative h-[45vh] min-h-[340px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/34328505/pexels-photo-34328505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Moments of Faith
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            A visual journey through our congregation&apos;s worship, service,
            and community life.
          </p>
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
