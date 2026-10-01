import * as React from "react";
import { cn } from "@/lib/utils";

export interface TravelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  imageAlt: string;
  logo?: React.ReactNode;
  title: string;
  location: string;
  overview: string;
  tag?: string;
}

const TravelCard = React.forwardRef<HTMLDivElement, TravelCardProps>(
  (
    {
      className,
      imageUrl,
      imageAlt,
      logo,
      title,
      location,
      overview,
      tag,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative w-full overflow-hidden rounded-2xl border border-[#0B192C]/15 bg-[#0B192C] shadow-lg",
          "transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-1.5 hover:border-[#F59E0B]/60",
          className
        )}
        {...props}
      >
        {/* Background Image with Zoom on Hover */}
        <img
          src={imageUrl}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-90 contrast-105"
        />

        {/* Cinematic Gradient Overlay in Dark Navy Blue */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/75 to-[#0B192C]/30" />

        {/* Content */}
        <div className="relative flex h-full flex-col justify-between p-4 sm:p-5 text-white z-10">
          {/* Top Row: Icon Badge & Optional Tag */}
          <div className="flex items-center justify-between">
            {logo && (
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-500/30 bg-[#0B192C]/85 backdrop-blur-md shadow-md group-hover:border-[#F59E0B] group-hover:bg-[#0B192C] transition-colors">
                {logo}
              </div>
            )}
            {tag && (
              <span className="px-2.5 py-0.5 rounded-full bg-[#0B192C]/90 border border-[#F59E0B]/40 text-[#F59E0B] text-[10px] font-mono font-bold tracking-wide backdrop-blur-md">
                {tag}
              </span>
            )}
          </div>

          {/* Bottom Area: Title, Location & Concise SEO Description */}
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F59E0B] block">
              {location}
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-black text-white group-hover:text-[#FDE68A] transition-colors leading-tight">
              {title}
            </h3>
            <p className="text-xs text-white/80 leading-relaxed line-clamp-2 pt-0.5 font-normal">
              {overview}
            </p>
          </div>
        </div>
      </div>
    );
  }
);
TravelCard.displayName = "TravelCard";

export { TravelCard };