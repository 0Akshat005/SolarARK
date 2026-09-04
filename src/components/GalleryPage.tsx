/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Home as HomeIcon,
  MapPin,
  Sparkles,
  Image as ImageIcon,
  Film,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  Calendar,
  Layers,
  Award,
  Users,
  Building,
  Heart
} from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';
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
    'Partner Community',
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
      description: 'Engaging with thousands of enthusiastic visitors and demonstrating real-time solar generation models.',
    },
    {
      id: 'g-video-2',
      title: 'Exhibition Pavilion & Live Demonstration',
      location: 'CREDAI Expo & Bharatcon',
      videoUrl: 'https://www.thesolarark.com/static/media/s2.90194067b95adf3e2789.mp4',
      description: 'SolarArk engineers explaining Tier-1 N-Type TOPCon panels and PM Surya Ghar ₹78,000 subsidy claims.',
    },
    {
      id: 'g-video-3',
      title: 'Festive & Partner Felicitation Celebrations',
      location: 'SolarArk Head Office',
      videoUrl: 'https://www.thesolarark.com/static/media/s3.3164ee25f7ac0c1862c9.MOV',
      description: 'Celebrating high-performing Surya Mitra partners, customer rewards, and cultural festivities.',
    },
  ];

  const filteredAlbums = selectedCategory === 'All'
    ? GALLERY_ALBUMS
    : GALLERY_ALBUMS.filter(a => a.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(a.category.toLowerCase()));

  const handleOpenAlbum = (album: GalleryAlbum, index = 0) => {
    setActiveAlbum(album);
    setActivePhotoIndex(index);
  };

  const handleNextPhoto = () => {
    if (!activeAlbum) return;
    setActivePhotoIndex((prev) => (prev + 1) % activeAlbum.images.length);
  };

  const handlePrevPhoto = () => {
    if (!activeAlbum) return;
    setActivePhotoIndex((prev) => (prev - 1 + activeAlbum.images.length) % activeAlbum.images.length);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 selection:bg-[#8B1E1E] selection:text-white pt-24 pb-6">
      


      {/* ── 2. HERO SHOWCASE HEADER ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-8">
        <div className="space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200/80 shadow-2xs text-[11px] font-bold text-stone-700 tracking-wider uppercase font-heading">
            <Sparkles className="w-3.5 h-3.5 text-stone-600" />
            <span>SOLARARK IN ACTION • COMMUNITY &amp; EXPOS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0B1730] font-heading tracking-tight leading-[1.14]">
                SolarArk Gallery &amp; <br className="hidden sm:inline" />
                <span className="text-accent-light">Community Moments</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
                Explore highlights from our presence at CREDAI property expos, Bharatcon exhibitions, annual Surya Mitra partner meets, festive celebrations, and customer appreciation events across Maharashtra.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
              <PrimaryButton
                onClick={onCtaClick}
                size="md"
              >
                Join Our Partner Network
              </PrimaryButton>
              <span className="text-[11px] text-stone-500 font-medium">
                Over 10,000+ attendees engaged across our events
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. EVENT HIGHLIGHT VIDEO REELS ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-16">
        <div className="bg-gradient-to-br from-white via-[#FCFAF7] to-amber-50/40 text-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-md border border-stone-200/90 relative overflow-hidden space-y-6">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between border-b border-stone-200/80 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#8B1E1E]/10 text-[#8B1E1E] border border-[#8B1E1E]/20 flex items-center justify-center">
                <Film className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0B1730]">
                  Event Highlights &amp; Video Moments
                </h3>
                <p className="text-xs text-stone-600 font-normal">
                  Live atmosphere from our exhibition pavilions and celebrations
                </p>
              </div>
            </div>
            <span className="text-xs text-[#8B1E1E] font-bold font-heading bg-white border border-stone-200 px-3 py-1 rounded-xl shadow-2xs hidden sm:inline">
              3 Featured Reels
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
            {galleryVideos.map((vid) => (
              <div
                key={vid.id}
                className="bg-white border border-stone-200/90 rounded-2xl p-4 flex flex-col justify-between shadow-2xs hover:border-[#8B1E1E]/40 hover:shadow-md transition-all space-y-3"
              >
                <div className="space-y-3">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 border border-stone-200 shadow-inner flex items-center justify-center">
                    <video
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      onLoadedMetadata={(e) => {
                        e.currentTarget.muted = true;
                        e.currentTarget.play().catch(() => {});
                      }}
                      className="w-full h-full object-cover"
                    >
                      <source src={vid.videoUrl} type="video/mp4" />
                      <source src={vid.videoUrl} type="video/quicktime" />
                      Your browser does not support video playback.
                    </video>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#8B1E1E] font-bold uppercase tracking-wider font-heading flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#8B1E1E]" /> {vid.location}
                    </span>
                    <h4 className="font-heading text-sm font-bold text-slate-900 mt-1 leading-snug">
                      {vid.title}
                    </h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed line-clamp-2">
                      {vid.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. CATEGORY FILTER CHIPS ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-10 sticky top-[72px] z-30 bg-[#FAF9F6]/95 backdrop-blur-md py-3">
        <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
          <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider font-heading mr-1">
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-heading transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#8B1E1E] text-white shadow-sm shadow-[#8B1E1E]/25'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── 5. PHOTO ALBUMS GRID ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-6 sm:mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAlbums.map((album) => (
            <div
              key={album.id}
              onClick={() => handleOpenAlbum(album)}
              className="bg-white border border-stone-200/90 rounded-3xl overflow-hidden shadow-2xs hover:shadow-lg hover:border-[#8B1E1E]/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Album Cover Photo */}
                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                  <img
                    src={album.coverImage}
                    alt={album.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <ImageIcon className="w-3 h-3 text-amber-300" />
                    <span>{album.images.length} Photos</span>
                  </div>

                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#8B1E1E] px-2 py-0.5 rounded text-white font-heading">
                      {album.category}
                    </span>
                    <span className="text-xs font-bold font-heading flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-300" />
                      <span>{album.location}</span>
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-heading text-base font-bold text-slate-900 group-hover:text-[#8B1E1E] transition-colors leading-snug">
                    {album.name}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal line-clamp-2">
                    {album.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#8B1E1E]">
                  <span>Open Photo Album</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. FULLSCREEN INTERACTIVE PHOTO LIGHTBOX MODAL ── */}
      {activeAlbum && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <div>
                <span className="text-[10px] font-bold text-[#8B1E1E] uppercase tracking-wider font-heading block">
                  {activeAlbum.category} • {activeAlbum.location}
                </span>
                <h3 className="text-base sm:text-xl font-bold font-heading text-slate-900">
                  {activeAlbum.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveAlbum(null)}
                className="w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Active Photo View with Next/Prev Arrows */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-stone-950 aspect-[16/10] sm:aspect-[16/9] shadow-inner flex items-center justify-center group">
                <img
                  src={activeAlbum.images[activePhotoIndex]}
                  alt={`${activeAlbum.name} photograph ${activePhotoIndex + 1}`}
                  className="w-full h-full object-contain"
                />

                {/* Left Arrow */}
                {activeAlbum.images.length > 1 && (
                  <button
                    onClick={handlePrevPhoto}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer shadow-md"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}

                {/* Right Arrow */}
                {activeAlbum.images.length > 1 && (
                  <button
                    onClick={handleNextPhoto}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer shadow-md"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}

                {/* Photo Index Counter */}
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-white text-xs px-3 py-1 rounded-full font-heading font-medium">
                  {activePhotoIndex + 1} of {activeAlbum.images.length}
                </div>
              </div>

              {/* Thumbnails Row */}
              {activeAlbum.images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto py-2">
                  {activeAlbum.images.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 cursor-pointer transition-all ${
                        activePhotoIndex === idx
                          ? 'border-[#8B1E1E] scale-105 shadow-sm'
                          : 'border-stone-200 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt="thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Context Description */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed bg-[#FAF8F5] p-4 rounded-2xl border border-stone-200/80">
                {activeAlbum.description}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
              <span className="text-xs text-stone-500 font-medium">
                High-Resolution Photographs from SolarArk Archives
              </span>
              <PrimaryButton
                onClick={onCtaClick}
                size="sm"
              >
                Connect With SolarArk Team
              </PrimaryButton>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
