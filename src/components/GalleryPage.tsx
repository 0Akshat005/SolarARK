/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import {
  MapPin,
  Film,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { GALLERY_ALBUMS } from '../data/solarData';
import { GalleryAlbum } from '../types';

interface GalleryPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onCtaClick,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeAlbum, setActiveAlbum] = useState<GalleryAlbum | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const categories = [
    'All',
    'Expos & Trade Fairs',
    'Team & Community',
    'Festive Events',
    'Customer Rewards',
    'Team & Culture',
  ];

  const galleryVideos = [
    {
      id: 'g-video-1',
      title: 'Sanskriti Mahotsav & Trade Fair Highlights',
      location: 'Nagpur & Vidarbha',
      videoUrl: 'https://www.thesolarark.com/static/media/s1.1c5313d3071bec24d6ce.mp4',
    },
    {
      id: 'g-video-2',
      title: 'Exhibition Pavilion & Live Demonstration',
      location: 'CREDAI Expo & Bharatcon',
      videoUrl: 'https://www.thesolarark.com/static/media/s2.90194067b95adf3e2789.mp4',
    },
    {
      id: 'g-video-3',
      title: 'Festive & Partner Felicitation Celebrations',
      location: 'SolarArk Head Office',
      videoUrl: 'https://www.thesolarark.com/static/media/s3.3164ee25f7ac0c1862c9.MOV',
    },
    {
      id: 'g-video-4',
      title: 'Operations & Team Orientation',
      location: 'Amravati Headquarters',
      videoUrl: 'https://www.thesolarark.com/static/media/earnwithus1.78f2135bd59c7e4125ab.mp4',
    },
  ];

  // ── Filtering ──
  const filteredAlbums = selectedCategory === 'All'
    ? GALLERY_ALBUMS
    : GALLERY_ALBUMS.filter(a =>
        a.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        selectedCategory.toLowerCase().includes(a.category.toLowerCase())
      );

  // ── Total counts for hero badge ──
  const totalPhotos = GALLERY_ALBUMS.reduce((sum, a) => sum + a.images.length, 0);

  // ── Lightbox handlers ──
  const handleOpenAlbum = (album: GalleryAlbum, index = 0) => {
    setActiveAlbum(album);
    setActivePhotoIndex(index);
  };

  const handleNextPhoto = useCallback(() => {
    if (!activeAlbum) return;
    setActivePhotoIndex((prev) => (prev + 1) % activeAlbum.images.length);
  }, [activeAlbum]);

  const handlePrevPhoto = useCallback(() => {
    if (!activeAlbum) return;
    setActivePhotoIndex((prev) => (prev - 1 + activeAlbum.images.length) % activeAlbum.images.length);
  }, [activeAlbum]);

  const handleCloseLightbox = useCallback(() => {
    setActiveAlbum(null);
    setActivePhotoIndex(0);
  }, []);

  // ── Keyboard navigation & scroll lock ──
  useEffect(() => {
    if (!activeAlbum) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNextPhoto();
      if (e.key === 'ArrowLeft') handlePrevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeAlbum, handleCloseLightbox, handleNextPhoto, handlePrevPhoto]);

  // ── Touch swipe state for mobile lightbox ──
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(deltaX) > 60) {
      if (deltaX < 0) handleNextPhoto();
      else handlePrevPhoto();
    }
    setTouchStartX(null);
  };

  // ── Hero mosaic images (3 strongest gallery photos) ──
  const heroImages = [
    { src: '/images/gallery/gallery1.jpg', alt: 'Suryamitra Annual Partner Conference', album: GALLERY_ALBUMS.find(a => a.id === 2) },
    { src: '/images/gallery/credai.jpg', alt: 'CREDAI Property Expo Pavilion', album: GALLERY_ALBUMS.find(a => a.id === 1) },
    { src: '/images/gallery/diwali1.jpg', alt: 'Diwali Customer Celebrations', album: GALLERY_ALBUMS.find(a => a.id === 5) },
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#151817] selection:bg-[#7A211D] selection:text-white pt-24 pb-6">


      {/* ── 1. VISUAL HERO MOSAIC ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">

          {/* Large hero image (A) */}
          <div
            className="lg:col-span-8 relative rounded-[4px] overflow-hidden border border-[#E6E3DD] cursor-pointer group"
            onClick={() => heroImages[0].album && handleOpenAlbum(heroImages[0].album)}
          >
            <div className="aspect-[3/2] sm:aspect-[16/9] lg:aspect-[3/2]">
              <img
                src={heroImages[0].src}
                alt={heroImages[0].alt}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

            {/* Overlay text — bottom-left */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <span className="text-[10px] font-medium text-white/70 uppercase tracking-[0.2em] font-body block mb-1.5">
                Gallery
              </span>
              <span className="text-xs sm:text-sm font-medium text-white/90 font-body">
                {totalPhotos} Photos · {galleryVideos.length} Videos
              </span>
            </div>
          </div>

          {/* Right column — stacked images B + C */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3">
            {heroImages.slice(1).map((img, idx) => (
              <div
                key={idx}
                className="relative rounded-[4px] overflow-hidden border border-[#E6E3DD] cursor-pointer group"
                onClick={() => img.album && handleOpenAlbum(img.album)}
              >
                <div className="aspect-[4/3] lg:aspect-[3/2]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3.5 right-3.5">
                  <span className="text-xs font-medium text-white font-body drop-shadow-sm">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── 2. STREAMLINED VIDEO REELS ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-14">
        <div className="bg-white text-[#151817] rounded-[4px] p-4 sm:p-5 lg:p-6 shadow-xs border border-[#E6E3DD] space-y-4">

          {/* Minimal section header */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-[4px] bg-[#7A211D]/10 text-[#7A211D] flex items-center justify-center shrink-0">
              <Film className="w-3.5 h-3.5" />
            </div>
            <h3 className="font-heading text-base sm:text-lg font-medium text-[#151817]">
              Event Highlights
            </h3>
          </div>

          {/* Video grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {galleryVideos.map((vid) => (
              <div
                key={vid.id}
                className="bg-[#FAF8F5] border border-[#E6E3DD] rounded-[4px] p-2.5 space-y-2.5"
              >
                <div className="relative rounded-[4px] overflow-hidden aspect-[4/3] bg-black border border-stone-200">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src={vid.videoUrl} type="video/mp4" />
                    <source src={vid.videoUrl} type="video/quicktime" />
                    Your browser does not support video playback.
                  </video>
                </div>

                <div className="px-0.5">
                  <span className="text-[10px] text-[#7A211D] font-medium uppercase tracking-[0.18em] font-body flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#7A211D]" /> {vid.location}
                  </span>
                  <h4 className="font-heading text-xs sm:text-sm font-medium text-[#151817] mt-1 leading-snug">
                    {vid.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── 3. STICKY CATEGORY BAR ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-8 sticky top-[72px] z-30 bg-[#F7F5F0]/95 backdrop-blur-md py-3">
        <div className="flex flex-wrap items-center gap-2 border-b border-[#E6E3DD] pb-3">
          <span className="text-[11px] font-medium text-stone-500 uppercase tracking-[0.18em] font-body mr-1">
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-[4px] text-xs font-medium font-body transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#7A211D] text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-50 border border-[#E6E3DD]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>


      {/* ── 4. IMAGE-DOMINANT ALBUM GRID ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAlbums.map((album) => (
            <div
              key={album.id}
              onClick={() => handleOpenAlbum(album)}
              className="relative rounded-[4px] overflow-hidden border border-[#E6E3DD] shadow-2xs hover:shadow-md hover:border-[#7A211D]/40 transition-all duration-300 cursor-pointer group"
            >
              {/* Full-bleed cover image */}
              <div className="aspect-[4/3] bg-stone-100 overflow-hidden">
                <img
                  src={album.coverImage}
                  alt={album.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Bottom gradient overlay with metadata */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-heading text-sm sm:text-base font-medium text-white leading-snug drop-shadow-sm">
                    {album.name}
                  </h3>
                  <span className="text-[10px] text-white/70 font-body flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-white/60" /> {album.location}
                  </span>
                </div>
                <span className="text-[10px] text-white/60 font-body font-medium shrink-0 ml-3">
                  {album.images.length} ⊞
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredAlbums.length === 0 && (
          <div className="text-center py-16 text-stone-500 text-sm font-body">
            No albums found for this category.
          </div>
        )}
      </section>


      {/* ── 5. IMMERSIVE LIGHTBOX ── */}
      {activeAlbum && (
        <div
          className="fixed inset-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm flex flex-col items-center justify-center"
          onClick={(e) => {
            // Backdrop click closes
            if (e.target === e.currentTarget) handleCloseLightbox();
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button — top right */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-[4px] bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-10 backdrop-blur-xs"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Main photo stage */}
          <div className="relative w-full max-w-6xl px-4 sm:px-12 flex-1 flex items-center justify-center min-h-0">
            <img
              src={activeAlbum.images[activePhotoIndex]}
              alt={`${activeAlbum.name} — photo ${activePhotoIndex + 1}`}
              className="max-w-full max-h-[75vh] object-contain rounded-[4px] select-none"
              draggable={false}
            />

            {/* Prev arrow */}
            {activeAlbum.images.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); handlePrevPhoto(); }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-[4px] bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer backdrop-blur-xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Next arrow */}
            {activeAlbum.images.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); handleNextPhoto(); }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-[4px] bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer backdrop-blur-xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Bottom bar: thumbnails + info */}
          <div
            className="w-full max-w-6xl px-4 sm:px-12 pb-4 sm:pb-6 pt-3 flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Thumbnail strip */}
            {activeAlbum.images.length > 1 && (
              <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-1">
                {activeAlbum.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`relative w-16 h-11 sm:w-20 sm:h-14 rounded-[4px] overflow-hidden shrink-0 border-2 cursor-pointer transition-all ${
                      activePhotoIndex === idx
                        ? 'border-white scale-105 shadow-sm'
                        : 'border-white/20 opacity-50 hover:opacity-80'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Info bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm font-body">
                <span className="font-medium text-white/90">{activeAlbum.name}</span>
                <span className="text-white/40">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-white/50" />
                  {activeAlbum.location}
                </span>
              </div>
              <span className="text-xs text-white/50 font-body font-medium">
                {activePhotoIndex + 1} of {activeAlbum.images.length}
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
