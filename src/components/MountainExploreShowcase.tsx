"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mountain,
  Compass,
  Wind,
  Thermometer,
  ArrowRight,
  Sparkles,
  MapPin,
  Shield,
  Clock,
  Calendar,
  Eye,
  Info,
} from "lucide-react";
import Link from "next/link";
import TourDetailModal from "@/components/TourDetailModal";
import { TourPackage } from "@/data/rupkothaData";

interface MountainExpedition {
  id: string;
  number: string;
  name: string;
  elevation: string;
  range: string;
  coordinates: string;
  temperature: string;
  windSpeed: string;
  oxygenLevel: string;
  tagline: string;
  description: string;
  bgImage: string;
  accentColor: string;
  difficulty: "Extreme" | "Challenging" | "Moderate";
  // Full tour package payload for modal
  tourData: TourPackage;
}

const HIMALAYAN_EXPEDITIONS: MountainExpedition[] = [
  {
    id: "lahaul-spiti",
    number: "01",
    name: "Lahaul Spiti with Chandratal",
    elevation: "4,590 M (Kunzum La)",
    range: "Spiti & Lahaul / Himachal",
    coordinates: "32.2461° N, 78.0349° E",
    temperature: "-4°C to +12°C",
    windSpeed: "28 km/h NW",
    oxygenLevel: "62% Sea Level",
    tagline: "Chandra Taal, Ancient Monasteries & Kunzum Pass",
    description:
      "14 Nights & 15 Days overland adventure from Howrah to Kalka. Journey through Kinnaur Kailash, Sangla, Chitkul, Tabo, Kaza, Key Gompa, Chicham Bridge, and the turquoise waters of Chandra Taal.",
    bgImage:
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=2000&auto=format&fit=crop",
    accentColor: "#92FF5F",
    difficulty: "Challenging",
    tourData: {
      id: "lahaul-spiti",
      title: "Lahaul Spiti with Chandratal",
      type: "High-Altitude Expeditions",
      categoryType: 2,
      duration: "14 Nights & 15 Days",
      nightStay:
        "Sainj / Kumarsen (1 NT), Sarahan (1 NT), Sangla / Chitkul (1 NT), Kalpa (2 NT), Tabo (1 NT), Kaza (2 NT), Manali (2 NT)",
      doj: "06th October, 2027",
      allDates: ["06th October, 2027"],
      image:
        "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Spiti Valley Monastery and High Himalayan Pass",
      twinRate: 34500,
      extraRate: 29500,
      highlights: [
        "Palace of Raja Padam, Bhimakali Temple & Sangla (Baspa) Valley",
        "Chitkul - The Last Inhabited Indian Village near Indo-Tibet Border",
        "Majestic Sunrise on Kinnaur Kailash Peak & Nako Glacial Lake",
        "1,000-year-old Tabo Monastery & 500-year-old Giu Mummy Village",
        "Key Monastery, Dhankar Gompa, Langza Buddha, Kibber, Komic & Hikkim",
        "World's Highest Chicham Bridge, Kunzum La (4,590 M) & Chandra Taal",
        "Scenic Manali Valley, Rohtang / Atal Tunnel and Solang",
      ],
      coveringPlaces:
        "Howrah -> Kalka -> Sarahan -> Sangla -> Chitkul -> Kalpa -> Nako -> Tabo -> Giu -> Dhankar -> Kaza -> Key -> Langza -> Hikkim -> Chicham -> Kunzum La -> Chandra Taal -> Manali -> Kalka.",
      inclusions: [
        "Round-trip 3-Tier Sleeper Train Tickets (Howrah to Kalka / Chandigarh)",
        "Non-AC MUV (6-7 pers) / Tempo Traveller (10-15 pers) for entire tour",
        "Double Bedded Room in twin sharing basis with extra mattress for 3rd guest",
        "Bed tea, breakfast, 2 hot major meals (Veg/Non-Veg) & high tea daily",
        "Dedicated Station Porterage at Howrah and Kalka / Chandigarh",
      ],
      exclusions: [
        "Extra food/beverages, room heater charges, entry permits, guide fees",
        "Optional tours, camera fees, or emergency natural calamity deviations",
      ],
    },
  },
  {
    id: "ladakh-siachen",
    number: "02",
    name: "Ladakh with Turtuk & Siachen",
    elevation: "5,359 M (Khardung La)",
    range: "Ladakh & Karakoram / Nubra",
    coordinates: "34.1526° N, 77.5771° E",
    temperature: "-6°C to +15°C",
    windSpeed: "34 km/h N",
    oxygenLevel: "52% Sea Level",
    tagline: "Pangong Tso, Siachen Base & Balti Borderland",
    description:
      "13 Nights & 14 Days expedition from Srinagar across Zoji La to Kargil, Leh, Diskit, the remote Balti outpost of Turtuk, Siachen viewpoint, Pangong Tso, and high alpine Tsomoriri Lake.",
    bgImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop",
    accentColor: "#FF7036",
    difficulty: "Extreme",
    tourData: {
      id: "ladakh-siachen",
      title: "Ladakh with Turtuk & Siachen",
      type: "High-Altitude Expeditions",
      categoryType: 2,
      duration: "13 Nights & 14 Days",
      nightStay:
        "Srinagar (1 NT), Kargil (1 NT), Leh (3 NT), Pangong (1 NT), Sumoor (1 NT), Hunder / Diskit (2 NT), Korzok Tsomoriri (1 NT), Tsokar / Keylong (1 NT), Manali (2 NT)",
      doj: "13th June & 06th October, 2027",
      allDates: ["13th June, 2027", "06th October, 2027"],
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Ladakh Pangong Tso Lake and Karakoram Range",
      twinRate: 38900,
      extraRate: 33500,
      highlights: [
        "Sonamarg, Zoji La Pass, Tiger Hill Memorial & Drass War Zone",
        "Lamayuru Moonland, Indus-Zanskar Confluence & Magnetic Hill",
        "Khardung La Pass (5,359 M) & Hunder Sand Dunes Double-Humped Camels",
        "Historic Balti Village Turtuk & Siachen Glacier Border Viewpoint",
        "World-Renowned Turquoise Pangong Tso Lake (14,270 ft)",
        "High-Altitude Tsomoriri & Tsokar Salt Lakes via Chang La Pass",
        "Baralacha La, Suraj Tal, Zing-Zing Bar & Atal Tunnel Highway to Manali",
      ],
      coveringPlaces:
        "Srinagar -> Sonamarg -> Zoji La -> Kargil -> Leh -> Khardung La -> Nubra -> Turtuk -> Siachen -> Pangong -> Tsomoriri -> Keylong -> Manali -> Chandigarh.",
      inclusions: [
        "Non-AC Tempo Traveller / MUV (Scorpio / Xylo / Innova) throughout",
        "Double Bedded Room / Deluxe Swiss Tents on twin sharing",
        "Bed tea, breakfast, and 2 major meals daily (Veg & Non-Veg)",
        "Station & Airport Porter services from Srinagar to Chandigarh",
      ],
      exclusions: [
        "Air / Train tickets to Srinagar and from Chandigarh (available on request)",
        "Personal expenses, camel rides, monument entry fees & Inner Line Permits",
      ],
    },
  },
  {
    id: "odisha-debrigarh",
    number: "03",
    name: "Legacies of Odisha: Debrigarh & Satkosia",
    elevation: "220 M (Mahanadi Gorge)",
    range: "Eastern Ghats / Odisha Sanctuaries",
    coordinates: "20.5833° N, 84.8667° E",
    temperature: "+18°C to +28°C",
    windSpeed: "12 km/h E",
    oxygenLevel: "98% Sea Level",
    tagline: "Tiger Sanctuary, Hirakud Cruise & Jungle Safaris",
    description:
      "5 Nights & 6 Days immersive eco-wildlife journey from Howrah to Debrigarh Nature Camp and Satkosia Sand Resort with Mahanadi boat rides, Hirakud cruises, and deep jungle safaris.",
    bgImage:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop",
    accentColor: "#92FF5F",
    difficulty: "Moderate",
    tourData: {
      id: "odisha-debrigarh",
      title: "Legacies of Odisha: Debrigarh & Satkosia",
      type: "Eco-Forest Safari",
      categoryType: 3,
      duration: "5 Nights & 6 Days",
      nightStay: "Debrigarh Nature Camp (2 NT), Satkosia Sand Resort (2 NT)",
      doj: "22nd February, 2027",
      allDates: ["22nd February, 2027"],
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Debrigarh Wildlife and Satkosia Gorge River",
      twinRate: 19800,
      extraRate: 16500,
      highlights: [
        "1 Deep Core Jungle Safari in Debrigarh Wildlife Sanctuary",
        "Hirakud Dam, Scenic Cruise in Hirakud Reservoir & Nehru Minar",
        "Historic Maa Samaleswari Temple Darshan in Sambalpur",
        "Thrilling Boat Ride on the Mahanadi River Gorge at Satkosia",
        "Birding, Guided Eco-Jungle Treks & Evening Tribal Folk Dances",
      ],
      coveringPlaces:
        "Howrah/Shalimar -> Sambalpur -> Hirakud -> Debrigarh Nature Camp -> Satkosia Sand Resort -> Angul/Bhubaneswar -> Howrah.",
      inclusions: [
        "Round-trip Rail tickets from Howrah/Shalimar to Odisha by 3-Tier Sleeper / CC",
        "AC MUV (Sumo/Bolero) / Tempo Traveller for entire ground circuit",
        "AC Rooms at Debrigarh & Double Bedded eco-tents at Satkosia Sand Resort",
        "Bed tea, breakfast, 2 major meals and evening high tea daily",
        "Station porterage at Howrah/Shalimar and Sambalpur/Angul",
      ],
      exclusions: [
        "Optional cycling/trekking gear rentals, personal expenses, camera charges",
      ],
    },
  },
  {
    id: "kashmir-vaishnodevi",
    number: "04",
    name: "Kashmir with Sinthan Top & Vaishno Devi",
    elevation: "3,800 M (Sinthan Pass)",
    range: "Pir Panjal & Kashmir / Katra",
    coordinates: "34.0837° N, 74.7973° E",
    temperature: "+2°C to +16°C",
    windSpeed: "18 km/h NW",
    oxygenLevel: "75% Sea Level",
    tagline: "Paradise Valleys, Tulip Blooms & Holy Shrine Darshan",
    description:
      "12 Nights & 13 Days signature grand circuit covering Srinagar houseboats, Dal Lake Shikara rides, Gulmarg meadows, Sonamarg glaciers, Pahalgam valleys, Sinthan Top, and Maa Vaishno Devi darshan.",
    bgImage:
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=2000&auto=format&fit=crop",
    accentColor: "#E0A96D",
    difficulty: "Moderate",
    tourData: {
      id: "kashmir-vaishnodevi",
      title: "Kashmir with Sinthan Top & Vaishno Devi",
      type: "Cultural & Royal Heritage",
      categoryType: 1,
      duration: "12 Nights & 13 Days",
      nightStay: "Srinagar (4 NT), Pahalgam (2 NT), Katra (2 NT)",
      doj: "24th March & 01st April, 2027",
      allDates: ["24th March, 2027", "01st April, 2027"],
      image:
        "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Kashmir Dal Lake Shikara and Snowcapped Peaks",
      twinRate: 28500,
      extraRate: 24500,
      highlights: [
        "Mughal Gardens: Shalimar Bagh, Chashmeshahi, Nishat Bagh & Tulip Garden",
        "Hazratbal Shrine, Shankaracharya Temple & Dal Lake Shikara Ride",
        "Gulmarg Gondola Cable Car Ride to Khilanmarg Snowline",
        "Sonamarg Meadow of Gold, Sindh River & Thajiwas Glacier View",
        "Pahalgam: Lidder River, Aru Valley, Betaab Valley & Chandanwari",
        "Panoramic Offbeat Excursion to Sinthan Top & Daksum Valley",
        "Maa Vaishno Devi Holy Shrine Darshan at Katra with helicopter/pony support",
      ],
      coveringPlaces:
        "Howrah -> Jammu -> Katra -> Sinthan Top -> Pahalgam -> Srinagar -> Gulmarg -> Sonamarg -> Katra -> Howrah.",
      inclusions: [
        "Round-trip 3-Tier Sleeper Rail tickets from Howrah/Kolkata to Jammu/Katra",
        "Non-AC MUV / Tempo Traveller for entire valley sightseeing and transit",
        "Double Bedded Rooms on twin sharing basis in deluxe hotels",
        "Bed tea, breakfast, 2 major meals (Veg/Non-Veg) & high tea daily",
        "Station porterage at Howrah/Kolkata and Jammu/Katra stations",
      ],
      exclusions: [
        "Vaishno Devi helicopter/battery car/pony charges, Gulmarg Gondola tickets",
        "Optional Shikara adventure rides, entry passes, and personal expenses",
      ],
    },
  },
  {
    id: "zanskar-valley",
    number: "05",
    name: "Zanskar Valley & Shinku La Expedition",
    elevation: "5,091 M (Shinku La)",
    range: "Zanskar Trans-Himalayas / Ladakh",
    coordinates: "33.4736° N, 76.9734° E",
    temperature: "-8°C to +10°C",
    windSpeed: "36 km/h N",
    oxygenLevel: "54% Sea Level",
    tagline: "Drang-Drung Glacier, Phuktar Cliff Gompa & Gonbo Rangjon",
    description:
      "9 Nights & 10 Days off-grid trans-Himalayan overland tour from Srinagar through Suru Valley, Nun Kun peaks, Drang-Drung glacier, Padum, ancient cliff-hanging Phuktar Gompa, and across Shinku La pass to Manali.",
    bgImage:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop",
    accentColor: "#92FF5F",
    difficulty: "Extreme",
    tourData: {
      id: "zanskar-valley",
      title: "Zanskar Valley & Shinku La Expedition",
      type: "High-Altitude Expeditions",
      categoryType: 2,
      duration: "9 Nights & 10 Days",
      nightStay:
        "Srinagar (1 NT), Kargil (1 NT), Purtikchey / Panikhar (1 NT), Padum (2 NT), Purne (1 NT), Keylong (1 NT), Manali (1 NT)",
      doj: "27th May, 2027",
      allDates: ["27th May, 2027"],
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Zanskar Phuktar Monastery and Drang Drung Glacier",
      twinRate: 36900,
      extraRate: 31900,
      highlights: [
        "Hunderman Ancient Border Village & Giant Maitreya Buddha Rock Relief",
        "Towering Twin Massifs of Nun (7,135 M) and Kun (7,077 M)",
        "Parkachik Glacier, Penzila Pass & Massive Drang-Drung Glacial Ice River",
        "Karsha Gompa, Zangla Royal Fort & 1,000-year-old Dzongkul Cave Monastery",
        "Spectacular Trek to Cliff-Hanging Phuktar Monastery",
        "Sacred Monolith Peak Gonbo Rangjon & High Shinku La Pass (5,091 M)",
        "Confluence of Chandra-Bhaga Rivers, Sissu Waterfall & Atal Tunnel",
      ],
      coveringPlaces:
        "Srinagar -> Kargil -> Panikhar -> Purtikchey -> Padum -> Purne -> Phuktar -> Shinku La -> Keylong -> Manali -> Delhi.",
      inclusions: [
        "AC Volvo Semi-Sleeper Bus Ticket from Manali to Delhi",
        "Non-AC MUV (Scorpio / Xylo / Innova) for the entire rugged circuit",
        "Double Bedded Rooms & Alpine Camp Tents with mattresses",
        "All meals from lunch in Srinagar to packed dinner in Manali",
        "Dedicated porter services from Srinagar to Manali destination",
      ],
      exclusions: [
        "Train / Air tickets from Kolkata to Srinagar and Delhi to Kolkata",
        "Room heater charges, personal porterage for trekking, laundry & permits",
      ],
    },
  },
  {
    id: "tadoba-forest",
    number: "06",
    name: "Bagher Desh: Tadoba Tiger Reserve",
    elevation: "240 M (Chandrapur Forests)",
    range: "Tadoba-Andhari Reserve / Maharashtra",
    coordinates: "20.2458° N, 79.3012° E",
    temperature: "+20°C to +34°C",
    windSpeed: "10 km/h SW",
    oxygenLevel: "99% Sea Level",
    tagline: "3 Core Area Safaris & 1 Buffer Zone Open Gypsy Track",
    description:
      "5 Nights & 6 Days legendary tiger sanctuary expedition from Howrah to Nagpur with 3 core zone open-top 4x4 Gypsy game drives and 1 buffer safari in India's premier tiger reserve.",
    bgImage:
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=2000&auto=format&fit=crop",
    accentColor: "#FF7036",
    difficulty: "Moderate",
    tourData: {
      id: "tadoba-forest",
      title: "Bagher Desh: Tadoba Tiger Reserve",
      type: "Eco-Forest Safari",
      categoryType: 3,
      duration: "5 Nights & 6 Days",
      nightStay: "Moharli Jungle Resort (3 NT)",
      doj: "23rd March & 28th December, 2027",
      allDates: ["23rd March, 2027", "28th December, 2027"],
      image:
        "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Royal Bengal Tiger in Tadoba Core Jungle Moharli",
      twinRate: 21900,
      extraRate: 18500,
      highlights: [
        "3 Open-Top 4x4 Gypsy Safaris in the Core Area of Tadoba Reserve",
        "1 Safari in the High-Density Buffer Zone with Certified Naturalist",
        "3 Nights Deluxe Air-Conditioned Resort Stay at Moharli Gate",
        "Sightings of Royal Bengal Tigers, Leopards, Sloth Bears & Wild Dogs",
        "Birdwatching and Sunset Photography around Erai Water Reservoir",
      ],
      coveringPlaces:
        "Howrah/Santragachi -> Nagpur -> Moharli -> Tadoba Core Zones -> Buffer Forest -> Erai Lake -> Nagpur -> Howrah.",
      inclusions: [
        "Round-trip Rail tickets from Howrah to Nagpur in 3-Tier Sleeper Class",
        "AC Tempo Traveller / MUV for station pickup and dropping in Nagpur",
        "Exclusive 4x4 Gypsy Vehicles with forest department authorized guides",
        "AC Double Bedded Room in deluxe jungle resort on twin sharing basis",
        "Breakfast, 2 major meals (Veg/Non-Veg) & high tea daily",
        "Station porterage from Howrah/Santragachi to Nagpur terminal",
      ],
      exclusions: [
        "Extra optional safaris, camera lens fees, packaged drinks, tip to guides",
      ],
    },
  },
  {
    id: "arunachal-kaziranga",
    number: "07",
    name: "Arunachal Pradesh with Kaziranga Forest",
    elevation: "4,170 M (Sela Pass)",
    range: "Eastern Himalayas & Assam",
    coordinates: "27.5861° N, 91.8594° E",
    temperature: "-2°C to +18°C",
    windSpeed: "24 km/h NE",
    oxygenLevel: "65% Sea Level",
    tagline: "Sela Pass, Tawang Monastery & One-Horned Rhino Safari",
    description:
      "10 Nights & 11 Days majestic Northeast journey from Howrah to Guwahati. Cross frozen Paradise Lake at Sela Pass, explore 400-year-old Tawang Monastery, and take an open Gypsy rhino safari in Kaziranga National Park.",
    bgImage:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop",
    accentColor: "#92FF5F",
    difficulty: "Challenging",
    tourData: {
      id: "arunachal-kaziranga",
      title: "Arunachal Pradesh with Kaziranga Forest",
      type: "High-Altitude Expeditions",
      categoryType: 2,
      duration: "10 Nights & 11 Days",
      nightStay:
        "Kaziranga (1 NT), Guwahati (1 NT), Bhalukpong (2 NT), Tawang (3 NT), Dirang / Bomdila (1 NT)",
      doj: "15th Dec 2026, 22nd March & 20th April, 2027",
      allDates: [
        "15th December, 2026",
        "22nd March, 2027",
        "20th April, 2027",
      ],
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Tawang Monastery and Sela Pass Eastern Himalayas",
      twinRate: 29800,
      extraRate: 25800,
      highlights: [
        "Maa Kamakhya Temple Darshan in Guwahati on the Nilachal Hills",
        "Kaziranga National Park - 1 Open Gypsy Safari for Great One-Horned Rhinos",
        "Bhalukpong River Valley, Tipi Orchidarium & Lush Tenga Valley",
        "Bomdila Buddhist Monastery & Scenic Himalayan Apple Orchards",
        "Majestic Sela Pass (4,170 M), Paradise Lake & Jaswant Garh Memorial",
        "Spectacular Jang / Nuranang Waterfalls (100-meter drop)",
        "Asia's 2nd Largest 400-Year-Old Tawang Monastery & War Memorial",
      ],
      optional: [
        "P.T. Tso Lake, Sangestar (Madhuri) Lake & Indo-China Border Bum-La Pass",
      ],
      coveringPlaces:
        "Howrah -> Guwahati -> Kaziranga -> Bhalukpong -> Bomdila -> Sela Pass -> Tawang -> Dirang -> Guwahati -> Howrah.",
      inclusions: [
        "Round-trip 3-Tier Sleeper Rail tickets from Howrah/Sealdah to Guwahati",
        "Non-AC MUV (6-7 pers) / Tempo Traveller for entire mountain terrain",
        "Double Bedded Rooms on twin sharing basis with extra mattress for 3rd guest",
        "Bed tea, breakfast, 2 major meals (Veg & Non-Veg) & high tea daily",
        "Station porter service at Howrah/Sealdah and Guwahati terminal",
      ],
      exclusions: [
        "Inner Line Permit (ILP) fees, optional Bum-La / Madhuri Lake taxi charges",
        "Camera fees, entry passes, and personal expenses",
      ],
    },
  },
];

export default function MountainExploreShowcase() {
  const [activePeakIndex, setActivePeakIndex] = useState(0);
  const [selectedTourModal, setSelectedTourModal] = useState<TourPackage | null>(
    null
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const activeExpedition = HIMALAYAN_EXPEDITIONS[activePeakIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <>
      <section
        id="himalayan-peaks"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative w-full min-h-screen bg-[#0F3B27] text-white overflow-hidden select-none pt-24 sm:pt-28 pb-8 sm:pb-10 flex flex-col justify-between"
      >
        {/* Background Atmosphere Image with 3D Parallax */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExpedition.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{
                opacity: 0.45,
                scale: 1.03,
                x: mousePos.x * -25,
                y: mousePos.y * -25,
              }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-cover bg-center filter brightness-90"
              style={{ backgroundImage: `url(${activeExpedition.bgImage})` }}
            />
          </AnimatePresence>

          {/* Ambient Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/40 to-[#081426]/80" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B192C]/60 to-[#081426]" />
        </div>

        {/* GIANT MONUMENTAL "EXPLORE" TYPOGRAPHY LAYER */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              x: mousePos.x * 40,
              y: mousePos.y * 20,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
            className="text-center w-full"
          >
            <span
              className="font-serif font-black tracking-[-0.04em] uppercase text-white/[0.07] block select-none"
              style={{
                fontSize: "clamp(6rem, 24vw, 26rem)",
                lineHeight: 0.85,
                WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.15)",
              }}
            >
              EXPLORE
            </span>
          </motion.div>
        </div>

        {/* Main Foreground Interactive Content with Comfortable Side Margins */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 flex flex-col justify-between flex-1 w-full">
          {/* Top Telemetry Header Bar & Mobile-Friendly Expedition Toggle Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-amber-500/20">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0B111E] border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-lg shrink-0">
                  <Mountain className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[8.5px] sm:text-[9px] font-mono font-bold uppercase tracking-widest text-amber-400 block">
                    HIMALAYAN &amp; NATURE EXPEDITIONS
                  </span>
                  <h2 className="font-serif text-sm sm:text-base md:text-lg font-bold text-white leading-none">
                    Sacred Peaks &amp; High Passes
                  </h2>
                </div>
              </div>

              {/* Mobile Prev / Next Quick Toggle Arrows */}
              <div className="flex md:hidden items-center gap-1.5 shrink-0">
                <button
                  onClick={() =>
                    setActivePeakIndex((prev) =>
                      prev === 0 ? HIMALAYAN_EXPEDITIONS.length - 1 : prev - 1
                    )
                  }
                  className="w-8 h-8 rounded-full bg-[#0B111E] border border-amber-500/30 text-amber-400 flex items-center justify-center active:scale-95 transition-all shadow-md"
                  aria-label="Previous Expedition"
                >
                  <span className="text-xs">‹</span>
                </button>
                <button
                  onClick={() =>
                    setActivePeakIndex((prev) =>
                      (prev + 1) % HIMALAYAN_EXPEDITIONS.length
                    )
                  }
                  className="w-8 h-8 rounded-full bg-[#0B111E] border border-amber-500/30 text-amber-400 flex items-center justify-center active:scale-95 transition-all shadow-md"
                  aria-label="Next Expedition"
                >
                  <span className="text-xs">›</span>
                </button>
              </div>
            </div>

            {/* Peak / Tour Selector Pills with Smooth Mobile Momentum Scrolling */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 sm:pb-0 scrollbar-none max-w-full -mx-3 px-3 sm:mx-0 sm:px-0">
              {HIMALAYAN_EXPEDITIONS.map((exp, idx) => (
                <button
                  key={exp.id}
                  onClick={() => setActivePeakIndex(idx)}
                  className={`px-3 py-1.5 sm:py-1 rounded-full text-xs font-mono font-bold transition-all border whitespace-nowrap cursor-pointer shrink-0 touch-manipulation ${
                    idx === activePeakIndex
                      ? "bg-gradient-to-r from-amber-400 to-amber-500 text-[#0B192C] border-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.4)] scale-102"
                      : "bg-[#0B111E]/80 text-white/70 border-white/10 hover:border-amber-500/40 hover:text-white active:bg-white/10"
                  }`}
                >
                  {exp.number}. {exp.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Central Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-3 sm:my-4">
            {/* Left Column: Peak Typography & Narrative Dossier */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExpedition.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-3"
                >
                  {/* Tag & Elevation Badges */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FF7036] text-white text-[10px] font-black uppercase tracking-wider shadow-md">
                      Expedition {activeExpedition.number} / 07
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0B111E] border border-amber-500/40 text-amber-300 text-[11px] font-mono font-bold">
                      ELEVATION: {activeExpedition.elevation}
                    </span>
                    <span className="text-[11px] font-mono text-white/60">
                      {activeExpedition.range}
                    </span>
                  </div>

                  {/* Monumental Peak Name */}
                  <div>
                    <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.05]">
                      {activeExpedition.name}
                    </h1>
                    <p className="mt-1 text-sm sm:text-base font-medium text-amber-300">
                      {activeExpedition.tagline}
                    </p>
                  </div>

                  {/* Narrative Paragraph */}
                  <p className="text-xs sm:text-sm text-white/80 max-w-2xl font-normal leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {activeExpedition.description}
                  </p>

                  {/* Live Expedition Telemetry HUD Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    <div className="p-2.5 rounded-xl bg-[#0B111E]/80 backdrop-blur-md border border-amber-500/20">
                      <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase text-amber-400 mb-0.5">
                        <Thermometer className="w-3 h-3" />
                        <span>TEMP RANGE</span>
                      </div>
                      <span className="text-sm font-mono font-bold text-white">
                        {activeExpedition.temperature}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#0B111E]/80 backdrop-blur-md border border-amber-500/20">
                      <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase text-[#FF7036] mb-0.5">
                        <Wind className="w-3 h-3" />
                        <span>WIND GALE</span>
                      </div>
                      <span className="text-sm font-mono font-bold text-white">
                        {activeExpedition.windSpeed}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#0B111E]/80 backdrop-blur-md border border-amber-500/20">
                      <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase text-amber-400 mb-0.5">
                        <Compass className="w-3 h-3" />
                        <span>COORDINATES</span>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-white truncate block">
                        {activeExpedition.coordinates.split(",")[0]}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#0B111E]/80 backdrop-blur-md border border-amber-500/20">
                      <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase text-yellow-300 mb-0.5">
                        <Shield className="w-3 h-3" />
                        <span>DIFFICULTY</span>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-white">
                        {activeExpedition.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Action CTAs: Booking and View Details */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Link
                      href={`/booking?package=${encodeURIComponent(
                        activeExpedition.name
                      )}`}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#0B192C] font-black text-xs uppercase tracking-wider hover:from-amber-300 hover:to-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.35)] group"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      onClick={() =>
                        setSelectedTourModal(activeExpedition.tourData)
                      }
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>View Details</span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Layered Mountain Viewport Card */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                animate={{
                  rotateX: mousePos.y * -10,
                  rotateY: mousePos.x * 10,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full max-w-sm h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden border border-amber-500/20 shadow-[0_20px_40px_rgba(0,0,0,0.7)] group cursor-pointer"
                onClick={() => setSelectedTourModal(activeExpedition.tourData)}
              >
                <img
                  src={activeExpedition.bgImage}
                  alt={activeExpedition.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-transparent opacity-85" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0B192C]/90 backdrop-blur-md text-amber-300 text-[11px] font-mono font-bold border border-amber-500/30">
                    {activeExpedition.coordinates}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-[#0B192C] text-[11px] font-black">
                    {activeExpedition.elevation}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-amber-400 block">
                    EXPEDITION DOSSIER • CLICK FOR DETAILS
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                    {activeExpedition.name}
                  </h3>
                  <p className="text-[11px] text-white/70 line-clamp-2">
                    {activeExpedition.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Pagination & Expedition Tracker */}
          <div className="pt-3 border-t border-amber-500/15 flex flex-wrap items-center justify-between gap-2 text-[11px] text-white/50 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="hidden sm:inline">Interactive 3D Himalayan Ridge &amp; Expedition Explorer</span>
              <span className="sm:hidden">Himalayan Ridge Explorer</span>
            </div>

            <div className="flex items-center gap-3">
              {/* Dots for mobile */}
              <div className="flex items-center gap-1">
                {HIMALAYAN_EXPEDITIONS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActivePeakIndex(dotIdx)}
                    aria-label={`Go to expedition ${dotIdx + 1}`}
                    className={`transition-all rounded-full ${
                      dotIdx === activePeakIndex
                        ? "w-4 h-1.5 bg-amber-400"
                        : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1">
                <span className="text-amber-400 font-bold">EXPEDITION {activeExpedition.number}</span>
                <span className="text-white/20">/</span>
                <span>07</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Tour Details Modal on Click */}
      {selectedTourModal && (
        <TourDetailModal
          tour={selectedTourModal}
          onClose={() => setSelectedTourModal(null)}
        />
      )}
    </>
  );
}