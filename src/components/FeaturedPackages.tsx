"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Train,
  Hotel,
  Utensils,
  ArrowRight,
  FileText,
  Sparkles,
  Award,
  ShieldCheck,
} from "lucide-react";

export interface TourPackage {
  id: string;
  title: string;
  region: string;
  duration: string;
  nightStay: string;
  countries: string;
  nextDeparture: string;
  allDates: string[];
  price: string;
  twinRate: number;
  extraRate: number;
  childRate?: number;
  childAgeLimit?: string;
  image: string;
  badge?: string;
  coveringPlaces: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: string; title: string; desc: string }[];
}

export const TOURS_DATA: TourPackage[] = [
  {
    id: "tadoba-safari",
    title: "Tadoba Andhari Tiger Reserve Safari",
    region: "Wildlife & Tiger Safaris",
    duration: "05 NT & 06 DY",
    nightStay: "Moharli — 3 NT",
    countries: "Maharashtra (Tadoba-Andhari Tiger Reserve)",
    nextDeparture: "Dec 21, 2026",
    allDates: ["Dec 21, 2026"],
    price: "₹20,900",
    twinRate: 20900,
    extraRate: 17500,
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
    badge: "3 Core + 1 Buffer Safari",
    coveringPlaces: "Moharli, Tadoba Andhari Core Tiger Reserve (3 Gypsy Safaris), Buffer Zone Safari, Erai Lake, Jungle Waterholes.",
    highlights: [
      "3 Open-Top 4x4 Gypsy Safaris in Core Zone",
      "1 Exclusive Safari in Buffer Zone with expert naturalist",
      "Moharli 3 Nights stay with all meals & tea",
      "Confirmed Train tickets from/to Kolkata (HWH/SDAH)",
    ],
    inclusions: [
      "Rail tickets from/to Howrah / Sealdah in 3-Tier Sleeper / Chair Car",
      "Double Bedded Non-AC Rooms / Tents with attached modern bath",
      "Bed Tea, Breakfast, Lunch, High Tea & Dinner (Bengali & Indian meals)",
      "Dedicated Bengali Tour Manager & Porter service from Kolkata",
      "All Safari Entry Permits, Vehicle & Guide charges included",
    ],
    exclusions: [
      "Camera fees, personal laundry, mineral water, personal tipping",
      "AC train / car upgrades (available on demand)",
      "5% GST",
    ],
    itinerary: [
      { day: "Day 01", title: "Departure from Kolkata", desc: "Board train from Howrah / Sealdah with our dedicated Bengali tour escort." },
      { day: "Day 02", title: "Arrival & Check-in at Moharli", desc: "Reach resort at Moharli gate, welcome lunch, evening forest orientation, and night high-tea." },
      { day: "Day 03", title: "Core Area Safaris (Morning & Afternoon)", desc: "Two exhilarating open-gypsy safaris deep inside Tadoba Core to track tigers, leopards, and sloth bears." },
      { day: "Day 04", title: "Core & Buffer Zone Safaris", desc: "Early morning Core safari followed by an afternoon Buffer safari along the scenic waterholes." },
      { day: "Day 05-06", title: "Return Journey to Kolkata", desc: "Morning breakfast, transfer to railhead, board return train, and arrive in Kolkata with cherished memories." },
    ],
  },
  {
    id: "rajasthan-grand",
    title: "Royal Rajasthan Heritage & Thar Desert",
    region: "Heritage & Culture",
    duration: "12 NT & 13 DY",
    nightStay: "Jaipur- 2 NT, Pushkar/Ajmer- 1 NT, Udaipur- 2 NT, Mt. Abu- 1 NT, Jodhpur- 1 NT, Bikaner- 1 NT, Jaisalmer- 2 NT",
    countries: "Rajasthan (Jaipur • Udaipur • Jaisalmer • Jodhpur • Mt. Abu)",
    nextDeparture: "Dec 18, 2026",
    allDates: ["Dec 18, 2026"],
    price: "₹29,900",
    twinRate: 29900,
    extraRate: 25900,
    childRate: 16900,
    childAgeLimit: "6 to 11 Years",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    badge: "Grand 7-City Circuit",
    coveringPlaces: "City Palace, Jantar Mantar, Hawa Mahal, Amer Fort, Ajmer Sharif Dargah, Pushkar Brahma Temple, Chittorgarh Fort, Lake Pichola & Lake Palace, Haldighati, Nakki Lake & Dilwara Temple, Mehrangarh Fort, Jaswant Thada, Junagarh Fort, Karni Mata Temple, Golden Fort (Sonar Kella), Sam Sand Dunes (Thar Desert).",
    highlights: [
      "Sam Sand Dunes Sunset Camel Safari & Desert Cultural Gala",
      "Satyajit Ray's legendary 'Sonar Kella' (Golden Fort) exploration",
      "Lake Pichola Udaipur Sunset Boat Cruise",
      "Mount Abu Dilwara Marble Temples & Nakki Lake",
    ],
    inclusions: [
      "Rail tickets from/to Kolkata in Sleeper Class",
      "Quality Hotel stays across all 7 cities + Desert Swiss Camp",
      "Daily Bed Tea, Breakfast, Bengali Lunch, Evening Tea & Dinners",
      "Comfortable MUV / Tempo Traveller / Coach transfers throughout",
      "Tour Manager escort from Kolkata & complete luggage portage",
    ],
    exclusions: [
      "Monument entry fees, camel/jeep ride tickets, personal expenses",
      "5% GST",
    ],
    itinerary: [
      { day: "Day 01-03", title: "Kolkata to Jaipur (Pink City)", desc: "Train journey to Jaipur. Visit Amer Fort, City Palace, Hawa Mahal, and Jantar Mantar." },
      { day: "Day 04-05", title: "Ajmer Sharif, Pushkar & Chittorgarh", desc: "Dargah Sharif, sacred Brahma Lake, Chittorgarh Fort (Rana Kumbha & Rani Padmini palace)." },
      { day: "Day 06-07", title: "Udaipur & Mount Abu", desc: "City of Lakes, Lake Pichola boat cruise, Saheliyon-ki-Bari, Haldighati, and Nakki Lake in Mt. Abu." },
      { day: "Day 08-10", title: "Jodhpur to Jaisalmer (Sonar Kella)", desc: "Mehrangarh Fort, Jaswant Thada, Jaisalmer Golden Fort, Patwon ki Haveli, and Sam Sand Dunes desert stay." },
      { day: "Day 11-13", title: "Bikaner to Kolkata", desc: "Junagarh Fort, Karni Mata Temple, board return train to Kolkata." },
    ],
  },
  {
    id: "spiti-chandratal",
    title: "Lahaul Spiti Valley with Chandratal Lake",
    region: "Himalayan & High Altitude",
    duration: "14 NT & 15 DY",
    nightStay: "Sainj/Kumarsen- 1 NT, Sarahan- 1 NT, Sangla/Chitkul- 1 NT, Kalpa- 2 NT, Tabo- 1 NT, Kaza- 2 NT, Manali- 2 NT",
    countries: "Himachal Pradesh (Kinnaur • Spiti • Lahaul • Manali)",
    nextDeparture: "Oct 02, 2026",
    allDates: ["Oct 02, 2026", "Oct 18, 2026"],
    price: "₹41,900",
    twinRate: 41900,
    extraRate: 34500,
    childRate: 26500,
    childAgeLimit: "Below 08 Years",
    image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=1200&q=80",
    badge: "Autumn Golden Foliage",
    coveringPlaces: "Palace of Raja Padam, Bhimakali Temple, Sangla (Baspa) Valley, Chitkul (India's last village), Kinnaur Kailash View, Roghi Apple Orchards, Nako Lake, Tabo Monastery (Ajanta of the Himalayas), Giu Village 500-yr Mummy, Dhankar & Key Monastery, Kaza, Langza, Hikkim, Komic, Chicham Bridge, Chandratal (Moon Lake), Atal Tunnel, Manali.",
    highlights: [
      "Overnight near ethereal Chandratal Lake & Kunzum Pass",
      "World's Highest Post Office at Hikkim & World's Highest Village at Komic",
      "500-year-old self-mummified monk at Giu Village",
      "Kinnaur Kailash sunset views from Kalpa apple orchards",
    ],
    inclusions: [
      "Kolkata to Kalka/Chandigarh train journey & return",
      "Sturdy 4x4 / Mountain-ready Tempo Traveller or SUV",
      "Double Bedded accommodation in scenic homestays & mountain lodges",
      "Hot Bengali & North Indian meals throughout",
      "Experienced high-altitude tour manager & oxygen cylinder backup",
    ],
    exclusions: ["Personal horse/yak rides, monastery donations, 5% GST"],
    itinerary: [
      { day: "Day 01-03", title: "Kolkata to Shimla & Sarahan", desc: "Train to Kalka/Chandigarh, drive through apple valleys to Sarahan. Visit sacred Bhimakali temple." },
      { day: "Day 04-06", title: "Sangla, Chitkul & Kalpa", desc: "Baspa river, India's last inhabited village Chitkul, Roghi suicide point, Kinnaur Kailash sunset." },
      { day: "Day 07-09", title: "Nako, Giu & Kaza (Spiti Heart)", desc: "Nako Lake, 500-year-old mummy at Giu, Tabo & Dhankar cliff monasteries, check-in at Kaza." },
      { day: "Day 10-12", title: "Key Monastery, Hikkim & Chandratal", desc: "Key Gompa, highest post office Hikkim, Komic, Chicham Bridge, Kunzum Pass & Chandratal Lake." },
      { day: "Day 13-15", title: "Manali, Atal Tunnel & Kolkata", desc: "Drive through Atal Tunnel to Manali, explore local bazaar, board train for Kolkata arrival." },
    ],
  },
  {
    id: "ladakh-siachen",
    title: "Grand Ladakh, Siachen Glacier & Tsomoriri",
    region: "Himalayan & High Altitude",
    duration: "13 NT & 14 DY",
    nightStay: "Srinagar- 1 NT, Kargil- 1 NT, Leh- 3 NT, Pangong- 1 NT, Hunder/Diskit- 2 NT, Sumoor- 1 NT, Korzok (Tsomoriri)- 1 NT, Keylong/Thukje- 1 NT, Manali- 2 NT",
    countries: "Ladakh & Jammu & Kashmir (Leh • Nubra • Pangong • Siachen)",
    nextDeparture: "Aug 16, 2026",
    allDates: ["Aug 16, 2026", "Sep 19, 2026"],
    price: "₹49,300",
    twinRate: 49300,
    extraRate: 39500,
    childRate: 30000,
    childAgeLimit: "Below 08 Years",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    badge: "Full Trans-Himalayan Circuit",
    coveringPlaces: "Sonamarg, Zoji La, Tiger Hill Point, Drass War Memorial, Kargil, Namika La, Fotu La, Lamayuru Monastery & Moonland, Indus-Zanskar Sangam, Leh Palace, Shanti Stupa, Hemis & Thiksey Gompa, Chang La, Pangong Tso Lake, Khardung La, Diskit Giant Buddha, Hunder Sand Dunes, Turtuk Village (Balti Frontier), Siachen Glacier View Point, Tsomoriri Lake, Tsokar Lake, Baralacha La, Suraj Tal, Manali.",
    highlights: [
      "Siachen Glacier Base Camp viewpoint & remote Balti village of Turtuk",
      "Pangong Tso & turquoise high-altitude Tsomoriri Lake stays",
      "Double-humped Bactrian camel safari across white sand dunes of Hunder",
      "Crossing Khardung La, Chang La, Zoji La, and Baralacha La passes",
    ],
    inclusions: [
      "High-grade SUV (Crysta / Innova / Zylo) or Tempo Traveller",
      "Double Bedded Rooms / Deluxe Alpine Tents on MAP (Breakfast + Dinner)",
      "Inner Line Permits & Environmental fees handled by Kolkata desk",
      "Experienced local drivers and 24/7 on-ground assistance in Leh",
    ],
    exclusions: ["Air tickets to Srinagar / from Delhi, camel rides, 5% GST"],
    itinerary: [
      { day: "Day 01-02", title: "Arrival Srinagar to Kargil", desc: "Assemble at Srinagar, drive via Sonamarg, cross Zoji La pass, visit Drass War Memorial and Tiger Hill." },
      { day: "Day 03-05", title: "Kargil to Leh via Lamayuru", desc: "Fotu La, Lamayuru Moonland, Magnetic Hill, Indus-Zanskar Sangam, Leh Palace and Shanti Stupa." },
      { day: "Day 06-08", title: "Khardung La, Nubra, Turtuk & Siachen", desc: "Cross Khardung La to Nubra Valley. Visit Diskit Monastery, Hunder dunes, Turtuk & Siachen viewpoint." },
      { day: "Day 09-11", title: "Pangong Tso & Tsomoriri Lake", desc: "Shyok river route to Pangong Tso. Next day drive to pristine Korzok village at Tsomoriri Lake." },
      { day: "Day 12-14", title: "Tsokar, Sarchu, Baralacha La to Manali", desc: "Traverse More Plains, Baralacha La, Suraj Tal, Atal Tunnel to Manali, onwards to Delhi." },
    ],
  },
  {
    id: "arunachal-kaziranga",
    title: "Arunachal Pradesh with Kaziranga Forest",
    region: "North East & Tribal",
    duration: "10 NT & 11 DY",
    nightStay: "Kaziranga- 1 NT, Guwahati- 1 NT, Bhalukpong- 2 NT, Tawang- 3 NT, Dirang/Bomdila- 1 NT",
    countries: "Assam & Arunachal Pradesh (Tawang • Sela Pass • Kaziranga)",
    nextDeparture: "Oct 17, 2026",
    allDates: ["Oct 17, 2026", "Oct 27, 2026", "Dec 15, 2026"],
    price: "₹32,900",
    twinRate: 32900,
    extraRate: 27900,
    childRate: 20900,
    childAgeLimit: "Below 08 Years",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    badge: "1 Jungle Safari Included",
    coveringPlaces: "Kamakhya Temple, Eastern Himalayan ranges, Bomdila Monastery, Jaswant Garh War Memorial, Sela Pass (13,700 ft) & Sela Lake, Tenga, Tipi Orchidarium, Paradise Lake, Nuranang / Jang Falls, 400-year-old Tawang Monastery, Urgelling Monastery, Kaziranga National Park Gypsy Safari.",
    highlights: [
      "1 Open Gypsy Safari in Kaziranga tracking the One-Horned Rhinoceros",
      "Snow-clad Sela Pass & frozen Paradise Lake crossing",
      "Asia's second-largest Tawang Monastery & War Memorial light show",
      "Spectacular multi-tiered Jang (Nuranang) Waterfalls",
    ],
    inclusions: [
      "Rail tickets from/to Kolkata (HWH/SDAH) in Sleeper Class",
      "Dedicated MUV / Tempo Traveller for Arunachal & Assam hills",
      "Double Bedded accommodation with attached baths",
      "All daily meals (Bed Tea, Breakfast, Bengali Lunch, Tea & Dinner)",
      "Inner Line Permits (ILP) for Arunachal Pradesh included",
    ],
    exclusions: ["Optional excursions (Bum-La Pass, Madhuri Lake), 5% GST"],
    itinerary: [
      { day: "Day 01-02", title: "Kolkata to Guwahati & Bhalukpong", desc: "Train to Guwahati, Kamakhya temple darshan, scenic drive into Arunachal foothill resort at Bhalukpong." },
      { day: "Day 03-05", title: "Dirang, Sela Pass to Tawang", desc: "Tipi Orchidarium, Jaswant Garh, crossing snowy Sela Pass to Tawang. Explore Tawang Monastery & War Memorial." },
      { day: "Day 06-07", title: "Tawang to Bomdila & Kaziranga", desc: "Witness roaring Jang Falls, drive via Bomdila Monastery down into the lush tea estates of Kaziranga." },
      { day: "Day 08-11", title: "Kaziranga Safari & Return", desc: "Early morning Gypsy Safari in Kaziranga tracking rhinos, return drive to Guwahati for train back to Kolkata." },
    ],
  },
  {
    id: "madhya-pradesh-jyotirlinga",
    title: "Madhya Pradesh Heritage & Twin Jyotirlinga",
    region: "Heritage & Culture",
    duration: "11 NT & 12 DY",
    nightStay: "Gwalior- 2 NT, Orchha- 1 NT, Chanderi- 1 NT, Bhopal- 2 NT, Ujjain- 2 NT, Omkareshwar- 1 NT",
    countries: "Madhya Pradesh (Gwalior • Orchha • Sanchi • Ujjain • Mandu)",
    nextDeparture: "Dec 02, 2026",
    allDates: ["Dec 02, 2026"],
    price: "₹39,900",
    twinRate: 39900,
    extraRate: 32900,
    childRate: 25900,
    childAgeLimit: "Below 06 Years",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    badge: "Mahakal & Omkareshwar Darshan",
    coveringPlaces: "Gwalior Fort, Tomb of Tansen, Sun Temple, Jhansi Fort, Orchha Fort, Ram Raja Temple, Chanderi Fort & Silk Weaving Cluster, Upper Lake Bhopal, UNESCO Sanchi Stupa, Bhimbetka Prehistoric Rock Shelters, Mahakaleshwar Jyotirlinga, Harsiddhi Shaktipeeth, Kal Bhairav, Shipra River Ram Ghat, Omkareshwar Jyotirlinga on River Narmada, Jahaz Mahal & Rani Roopmati Pavilion.",
    highlights: [
      "Darshan at Mahakaleshwar & Omkareshwar Sacred Jyotirlingas",
      "UNESCO World Heritage sites: Sanchi Stupa & Bhimbetka Caves",
      "Medieval palace grandeur of Orchha & Jahaz Mahal at Mandu",
      "Handloom silk masterclass at historic Chanderi weaving clusters",
    ],
    inclusions: [
      "Train tickets from/to Kolkata (Howrah / Sealdah)",
      "Double Bedded AC / Non-AC accommodation in prime locations",
      "All meals (Bed Tea, Breakfast, Bengali Lunch, Evening Snacks & Dinner)",
      "Dedicated MUV / Coach throughout the state tour",
      "Tour escort managing all temple queues and sightseeing logistics",
    ],
    exclusions: ["Bhasma Aarti / VIP temple special line tickets, 5% GST"],
    itinerary: [
      { day: "Day 01-03", title: "Kolkata to Gwalior & Jhansi", desc: "Train to Gwalior. Visit impregnable Gwalior Fort, Scindia Palace museum, and Tomb of Tansen." },
      { day: "Day 04-06", title: "Orchha, Chanderi & Bhopal", desc: "Orchha riverbank chattris, Ram Raja Temple, Chanderi fort & silk looms, Sanchi Great Stupa." },
      { day: "Day 07-09", title: "Bhimbetka, Ujjain Mahakal & Shipra", desc: "Paleolithic Bhimbetka caves, Mahakaleshwar Jyotirlinga, Harsiddhi temple, evening Shipra Aarti." },
      { day: "Day 10-12", title: "Omkareshwar, Mandu to Kolkata", desc: "Narmada island temple Omkareshwar, romantic ruins of Mandu, return train to Kolkata." },
    ],
  },
  {
    id: "kerala-backwaters",
    title: "Kerala Backwaters, Munnar & Triveni Sangam",
    region: "Coastal & Islands",
    duration: "12 NT & 13 DY",
    nightStay: "Ernakulam- 1 NT, Munnar- 2 NT, Thekkady/Kumily- 2 NT, Alleppey- 1 NT, Kovalam- 1 NT, Kanyakumari- 1 NT",
    countries: "Kerala & Tamil Nadu (Cochin • Munnar • Alleppey • Kanyakumari)",
    nextDeparture: "Nov 15, 2026",
    allDates: ["Nov 15, 2026"],
    price: "₹29,500",
    twinRate: 29500,
    extraRate: 24900,
    childRate: 18900,
    childAgeLimit: "Below 08 Years",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    badge: "God's Own Country",
    coveringPlaces: "Vembanad Lake, Chinese Fishing Nets, Mattancherry Dutch Palace, Jewish Synagogue, Cochin Shipyard, Mattupetty Dam, Echo Point, Tata Tea Plantations, Rajamalai (Eravikulam Forest), Thekkady Spice Plantations, Periyar Lake Boat Safari, Alleppey Backwaters, Padmanabhaswamy Temple, Kovalam Lighthouse Beach, Suchindram Temple, Vivekananda Rock Memorial & Triveni Sangam.",
    highlights: [
      "Serene backwater cruise along the palm-fringed canals of Alleppey",
      "Sunset & Sunrise at Kanyakumari Triveni Sangam (confluence of 3 oceans)",
      "Periyar Wildlife Sanctuary boat cruise spotting wild elephants",
      "Lush rolling tea estates and cool misty peaks of Munnar",
    ],
    inclusions: [
      "Rail tickets from/to Howrah in Sleeper Class",
      "Comfortable Hotel stays with private attached bathrooms",
      "Daily Bed Tea, Breakfast, Bengali Lunch, Evening Tea & Dinners",
      "Dedicated Air-Conditioned Coach / Tempo Traveller in Kerala",
      "Kolkata Tour Director managing luggage portage and sightseeing",
    ],
    exclusions: ["Boating tickets, spice garden entrance, 5% GST"],
    itinerary: [
      { day: "Day 01-03", title: "Kolkata to Cochin & Munnar", desc: "Train to Ernakulam. Visit Chinese Fishing Nets, Dutch Palace, scenic drive up to Munnar tea hills." },
      { day: "Day 04-06", title: "Munnar Tea Hills to Thekkady", desc: "Mattupetty Dam, Echo Point, Rajamalai forest, drive to Thekkady spice plantations & Periyar lake." },
      { day: "Day 07-09", title: "Alleppey Backwaters & Kovalam", desc: "Idyllic backwater journey in Alleppey, Padmanabhaswamy temple darshan, sunset at Kovalam beach." },
      { day: "Day 10-13", title: "Kanyakumari & Return to Kolkata", desc: "Vivekananda Rock Memorial, Thiruvalluvar Statue, Triveni Sangam sunrise, board return train." },
    ],
  },
  {
    id: "koraput-chitrakote",
    title: "Koraput with Chitrakote Falls & Jagdalpur",
    region: "Heritage & Culture",
    duration: "07 NT & 08 DY",
    nightStay: "Koraput- 2 NT, Chitrakote- 2 NT, Jagdalpur- 1 NT",
    countries: "Odisha & Chhattisgarh (Koraput • Chitrakote • Bastar)",
    nextDeparture: "Sep 20, 2026",
    allDates: ["Sep 20, 2026", "Nov 22, 2026"],
    price: "₹23,900",
    twinRate: 23900,
    extraRate: 19500,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    badge: "Niagara of India",
    coveringPlaces: "Deomali Highest Peak, Gupteswar Cave Temple, Kolab Dam & Reservoir, Duduma Waterfall, Coffee Gardens, Chitrakote Waterfall (Horse-shoe falls), Tamda Ghumar Waterfall, Mendri Ghumar Waterfall, Satdhara Waterfall, Barsur Battisa Temple, Mama-Bhanjaa Temple, Chandraditya Temple, Tirathgarh Waterfall, Bastar Royal Palace, Dalpat Sagar, Danteshwari Temple.",
    highlights: [
      "Roaring Chitrakote Waterfall — the stunning 'Niagara of India'",
      "Deomali Peak (highest point in Odisha) & mysterious Gupteswar caves",
      "1,000-year-old Nagavanshi architectural wonders at Barsur",
      "Authentic tribal art, bell metal craft, and Bastar cultural markets",
    ],
    inclusions: [
      "Rail tickets from/to Howrah / Sealdah in Sleeper Class",
      "Quality Resort & Hotel stays near waterfalls and hill stations",
      "Daily Bed Tea, Breakfast, Bengali Lunch, Evening Snacks & Dinner",
      "Dedicated MUV / Tempo Traveller throughout",
      "Tour Escort and full luggage assistance from Kolkata",
    ],
    exclusions: ["Personal boating tickets, camera charges, 5% GST"],
    itinerary: [
      { day: "Day 01-02", title: "Kolkata to Koraput Hills", desc: "Overnight train to Koraput. Check in to resort, visit Kolab Dam and tribal museum." },
      { day: "Day 03-04", title: "Deomali Peak, Duduma & Gupteswar", desc: "Climb Odisha's highest peak Deomali, witness 175m Duduma falls, explore Gupteswar cave." },
      { day: "Day 05-06", title: "Chitrakote Falls & Bastar Temples", desc: "Magnificent Chitrakote Falls, Tamda Ghumar, historic Barsur Battisa & Mama-Bhanjaa temples." },
      { day: "Day 07-08", title: "Tirathgarh & Return to Kolkata", desc: "Tirathgarh tiered cascade, Danteshwari Temple, Bastar Palace, board train to Kolkata." },
    ],
  },
  {
    id: "zanskar-valley",
    title: "Zanskar Valley & Suru Glacier Expedition",
    region: "Himalayan & High Altitude",
    duration: "09 NT & 10 DY",
    nightStay: "Padum- 2 NT, Purne- 1 NT, Panikhar/Purtikchey- 1 NT, Kargil- 1 NT, Keylong- 1 NT, Manali- 1 NT",
    countries: "Ladakh (Suru Valley • Padum • Phuktal • Shinku La)",
    nextDeparture: "Sep 20, 2026",
    allDates: ["Sep 20, 2026", "Oct 17, 2026"],
    price: "₹39,900",
    twinRate: 39900,
    extraRate: 33900,
    childRate: 27900,
    childAgeLimit: "Below 06 Years",
    image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80",
    badge: "Virgin Himalayan Frontier",
    coveringPlaces: "Suru Valley, Nun Kun Twin Peaks, Parkachik Glacier viewpoint, Drang-Drung Glacier, Pensi La Pass, Dzongkul Monastery, Sani Village & Lake, Karsha Gompa, Zangla Fort, Phuktal Cliff Monastery, Shinku La Pass, Gonbo Rangjon sacred monolith, Confluence of Chandra & Bhaga, Atal Tunnel, Sissu Lake & Falls.",
    highlights: [
      "Iconic hanging Phuktal Monastery built into sheer limestone cliffs",
      "Massive Drang-Drung Glacier & sacred standalone mountain Gonbo Rangjon",
      "Crossing freshly opened Shinku La Pass connecting Ladakh with Lahaul",
      "Ancient Buddhist kingdom palaces of Zangla and Karsha",
    ],
    inclusions: [
      "Sturdy 4x4 Mountain SUV (Scorpio / Innova) for rugged terrain",
      "Double Bedded Homestays & Adventure Camps on MAP (Breakfast + Dinner)",
      "Inner line permits, environmental clearance, and oxygen support",
      "Expert mountain drivers and dedicated expedition guide",
    ],
    exclusions: ["Airfare to Srinagar / from Delhi, personal porter, 5% GST"],
    itinerary: [
      { day: "Day 01-02", title: "Srinagar to Suru Valley (Panikhar)", desc: "Assemble at Srinagar, drive past Kargil into breathtaking Suru Valley facing Nun Kun." },
      { day: "Day 03-05", title: "Pensi La, Drang-Drung to Padum", desc: "Cross Pensi La pass, marvel at Drang-Drung glacier, explore Karsha, Sani Lake and Zangla Fort." },
      { day: "Day 06-07", title: "Purne, Phuktal & Gonbo Rangjon", desc: "Hike towards world-famous cliff-hanging Phuktal monastery, camp under Gonbo Rangjon rock." },
      { day: "Day 08-10", title: "Shinku La, Keylong, Atal Tunnel to Delhi", desc: "Cross Shinku La into Lahaul, Sissu waterfall, Atal Tunnel, Manali, and drop at Delhi." },
    ],
  },
  {
    id: "hornbill-festival",
    title: "Hornbill Festival & Nagaland Heritage",
    region: "North East & Tribal",
    duration: "04 NT & 05 DY",
    nightStay: "Viswema / Kohima — 4 NT",
    countries: "Nagaland (Kohima • Kisama • Khonoma)",
    nextDeparture: "Nov 30, 2026",
    allDates: ["Nov 30, 2026"],
    price: "₹26,900",
    twinRate: 26900,
    extraRate: 23900,
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    badge: "Festival of Festivals",
    coveringPlaces: "Kisama Heritage Village (Hornbill Festival traditional dances, indigenous games, Naga warrior chants, music & food), Khonoma Green Village (Angami Naga anti-colonial fortress village), Kohima World War II Cemetery, Mary Help of Christians Cathedral. Optional: Dzukou Valley Trek.",
    highlights: [
      "VIP access to all 17 Naga tribal morungs & cultural performances",
      "Khonoma Green Village heritage walk learning ancient Angami traditions",
      "Historic Battle of Kohima WWII Memorial & giant Catholic Cathedral",
      "Optional high-altitude Dzukou Valley bamboo trail trek",
    ],
    inclusions: [
      "Pick-up and drop from Dimapur Railway Station / Airport",
      "Deluxe Home-stays / Hotels in Kohima/Viswema on MAP basis",
      "All festival entry permits and Inner Line Permits for Nagaland",
      "Dedicated local guide & cultural coordinator",
    ],
    exclusions: ["Airfare / Train to Dimapur, optional Dzukou trek fee, 5% GST"],
    itinerary: [
      { day: "Day 01", title: "Arrival at Dimapur to Kohima", desc: "Welcome at Dimapur, scenic drive up the Naga hills to Kohima/Viswema, evening campfire." },
      { day: "Day 02-03", title: "Hornbill Festival Extravaganza at Kisama", desc: "Full days at Kisama Heritage Village experiencing folk dances, archery, handlooms, and Naga music." },
      { day: "Day 04", title: "Khonoma Green Village & WWII Cemetery", desc: "Visit Asia's first green village Khonoma, Kohima war cemetery, and Cathedral." },
      { day: "Day 05", title: "Departure from Dimapur", desc: "Morning breakfast, transfer to Dimapur for return journey home." },
    ],
  },
  {
    id: "debrigarh-satkosia",
    title: "Debrigarh Sanctuary & Satkosia Sand Resort",
    region: "Wildlife & Tiger Safaris",
    duration: "05 NT & 06 DY",
    nightStay: "Debrigarh Nature Camp- 2 NT, Satkosia Sand Resort- 2 NT",
    countries: "Odisha (Hirakud • Debrigarh • Satkosia Gorge)",
    nextDeparture: "Dec 28, 2026",
    allDates: ["Dec 28, 2026"],
    price: "₹18,900",
    twinRate: 18900,
    extraRate: 14900,
    childRate: 12900,
    childAgeLimit: "Below 08 Years",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    badge: "Eco-Luxury Camping",
    coveringPlaces: "Debrigarh Wildlife Safari, Hirakud Dam, Scenic cruise in Hirakud Reservoir, Nehru Minar, Samaleswari Temple, Satkosia Mahanadi River Gorge boat ride, Bird Watching, Forest Treks, Jungle Cycling & eco-sports.",
    highlights: [
      "Luxury Swiss cottage tents right on the banks of Mahanadi river gorge",
      "Hirakud reservoir boat cruise spotting migratory waterbirds and gaur",
      "Jungle safari inside Debrigarh's dense sal and teak forests",
      "Evening bonfire, local folk music, and starlit barbecue dinners",
    ],
    inclusions: [
      "Train tickets from/to Howrah in Sleeper Class",
      "Eco-Resort / Luxury Nature Camp tented stays",
      "Daily Bed Tea, Breakfast, Bengali Lunch, Tea & Dinner",
      "Safari vehicle permits, boat cruise fees, and local naturalist",
      "Tour escort and luggage assistance throughout",
    ],
    exclusions: ["Optional cycling/water-sports, 5% GST"],
    itinerary: [
      { day: "Day 01-02", title: "Kolkata to Sambalpur & Debrigarh", desc: "Train to Sambalpur, check-in at Debrigarh Nature Camp, evening Hirakud reservoir cruise." },
      { day: "Day 03", title: "Debrigarh Safari & Samaleswari Temple", desc: "Morning jungle safari, Nehru Minar viewpoint, blessings at ancient Samaleswari temple." },
      { day: "Day 04-05", title: "Satkosia Gorge Eco-Camp", desc: "Drive to Satkosia gorge, stay in river sand resort, boating along the deep river canyon." },
      { day: "Day 06", title: "Return to Kolkata", desc: "Morning nature walk, transfer to station, train back to Howrah." },
    ],
  },
  {
    id: "sandakphu-trek",
    title: "Sandakphu & Singalila National Park",
    region: "Himalayan & High Altitude",
    duration: "06 NT & 07 DY",
    nightStay: "Manebhanjyang- 1 NT, Sandakphu- 2 NT, Tabakoshi/Batasia- 1 NT",
    countries: "West Bengal & Nepal Border (Singalila Ridge)",
    nextDeparture: "Nov 16, 2026",
    allDates: ["Nov 16, 2026"],
    price: "₹16,900",
    twinRate: 16900,
    extraRate: 16900,
    childRate: 14900,
    childAgeLimit: "Below 08 Years",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    badge: "Sleeping Buddha Panorama",
    coveringPlaces: "Panoramic 180° view of Kanchenjunga (Sleeping Buddha), Mt. Everest, Lhotse, Makalu, Frey, Pandim, Goechala peaks, Meghma monastery, Tumling, Tonglu, Kalipokhri sacred lake, Sandakphu Summit (11,930 ft), Singalila National Park, Tabakoshi tea estate.",
    highlights: [
      "Witness sunrise hitting the world's 4 highest peaks simultaneously",
      "Vintage 4x4 Land Rover climb along the historic Singalila ridge",
      "Overnight stay at the highest point of West Bengal (Sandakphu)",
      "Peaceful retreat in the lush organic tea gardens of Tabakoshi",
    ],
    inclusions: [
      "Train tickets from/to Sealdah/Howrah to NJP in Sleeper Class",
      "Dedicated Land Rover / 4x4 Bolero for mountain ridge sectors",
      "Comfortable mountain lodge / homestay rooms",
      "Hot Bengali meals, soup, tea, and warm hospitality",
      "Singalila National Park entry permits and guide",
    ],
    exclusions: ["Personal thermal gear, camera permits, 5% GST"],
    itinerary: [
      { day: "Day 01-02", title: "Kolkata to NJP & Manebhanjyang", desc: "Overnight train to NJP. Drive through Kurseong tea hills to base camp at Manebhanjyang." },
      { day: "Day 03-04", title: "Land Rover Ascent to Sandakphu", desc: "Ride via Chitrey, Meghma, Tumling, Kalipokhri to Sandakphu summit. Behold the golden Sleeping Buddha sunrise." },
      { day: "Day 05-07", title: "Tabakoshi Tea Valley to Kolkata", desc: "Descend into peaceful Tabakoshi valley, visit tea factories, transfer to NJP for train to Kolkata." },
    ],
  },
  {
    id: "sundarban-mangrove",
    title: "Sundarban Mangrove Cruise & Tiger Safari",
    region: "Wildlife & Tiger Safaris",
    duration: "02 NT & 03 DY",
    nightStay: "Sonagaon / Pakhiralay — 2 NT",
    countries: "West Bengal (Sundarban UNESCO Biosphere)",
    nextDeparture: "Dec 18, 2026",
    allDates: ["Dec 18, 2026", "Jan 23, 2027"],
    price: "₹5,900",
    twinRate: 5900,
    extraRate: 5900,
    childRate: 4900,
    childAgeLimit: "Below 07 Years",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    badge: "All-Inclusive Weekend Escape",
    coveringPlaces: "Sajnekhali Watch Tower & Museum, Sudhanyakhali Watch Tower, Dobanki Canopy Walk, Sarakkhali 1 & 2 creeks, Jatirampur, Bonbibi Bharani deep mangrove forest, Pirkhali, Panchamukhani 5-river confluence.",
    highlights: [
      "Full 3-day private motorized boat cruise through UNESCO mangrove creeks",
      "Dobanki aerial canopy walk and Sudhanyakhali freshwater sweet pond",
      "Authentic village cultural dance (Jhumur / Bonbibi Pala) around evening bonfire",
      "Sumptuous feast of fresh Hilsa, Prawn, Bhetki and Bengali delicacies",
    ],
    inclusions: [
      "AC Coach transfer from Kolkata (Science City / Esplanade) and return",
      "Exclusive Motorized Cruise Boat with upper deck observation",
      "Double Bedded Resort stay in Sonagaon / Pakhiralay",
      "All Meals: Breakfast, 5-course Bengali Lunch, Snacks & Dinners",
      "Forest department permits, guide fees, and camera permissions",
    ],
    exclusions: ["Personal tipping, packaged water, 5% GST"],
    itinerary: [
      { day: "Day 01", title: "Kolkata to Godkhali & Sajnekhali", desc: "Morning coach from Kolkata to Godkhali ghat. Board boat, cruise into Sajnekhali watch tower, evening cultural show." },
      { day: "Day 02", title: "Deep Mangrove Safari & Dobanki Canopy", desc: "Full day boat safari through narrow creeks of Pirkhali, Sudhanyakhali and Dobanki canopy walk." },
      { day: "Day 03", title: "Panchamukhani to Kolkata", desc: "Cruise through Sarakkhali and 5-river confluence, disembark at Godkhali, evening return to Kolkata." },
    ],
  },
  {
    id: "andaman-islands",
    title: "Andaman Islands Paradise (Havelock & Neil)",
    region: "Coastal & Islands",
    duration: "06 NT & 07 DY",
    nightStay: "Port Blair- 3 NT, Havelock- 2 NT, Neil- 1 NT",
    countries: "Andaman & Nicobar Islands (Port Blair • Havelock • Neil)",
    nextDeparture: "Year-Round (Oct-May)",
    allDates: ["Nov 10, 2026", "Dec 15, 2026", "Jan 12, 2027", "Feb 18, 2027"],
    price: "₹34,500",
    twinRate: 34500,
    extraRate: 28900,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    badge: "5 Custom Programs (5N to 9N)",
    coveringPlaces: "Cellular Jail (Light & Sound Show), Carbyn's Cove Beach, Ross Island & North Bay (Coral Island), Havelock Radhanagar Beach (Asia's Best Beach), Elephant Beach water sports, Neil Island (Bharatpur, Laxmanpur & natural rock bridge), Baratang Limestone Caves & Mud Volcano.",
    highlights: [
      "High-speed luxury catamaran cruise (Makruzz / Nautika) between islands",
      "World-famous Radhanagar Beach sunset & snorkeling at Elephant Beach",
      "Historic Cellular Jail sound & light show honoring freedom fighters",
      "Natural coral rock bridge formation and pristine white sand lagoons",
    ],
    inclusions: [
      "Double Bedded AC Rooms in 3★ / 4★ Beach Resorts (CP/MAP Plan)",
      "AC SUV / Tempo Traveller for all harbor and beach transfers",
      "Inter-island luxury ferry tickets (Port Blair - Havelock - Neil)",
      "All entry tickets, boat tickets, permits and tour coordinator",
    ],
    exclusions: ["Airfare from Kolkata, scuba diving / water sports charges, 5% GST"],
    itinerary: [
      { day: "Day 01-02", title: "Port Blair, Cellular Jail & Ross Island", desc: "Arrival at Port Blair, visit Cellular Jail, Ross Island colonial ruins, and Light & Sound show." },
      { day: "Day 03-04", title: "Havelock & Radhanagar Beach", desc: "Cruise to Havelock on Makruzz. Relax at Radhanagar Beach and enjoy snorkeling at Elephant Beach." },
      { day: "Day 05-07", title: "Neil Island & Return Flight", desc: "Ferry to Neil Island, visit Laxmanpur natural bridge, return to Port Blair for flight to Kolkata." },
    ],
  },
];

interface FeaturedPackagesProps {
  selectedRegion: string;
  onOpenDetails: (pkg: TourPackage) => void;
  onOpenEnquiry: (packageTitle?: string) => void;
}

export default function FeaturedPackages({
  selectedRegion,
  onOpenDetails,
  onOpenEnquiry,
}: FeaturedPackagesProps) {
  const filteredTours =
    selectedRegion === "All Destinations" || selectedRegion === "All Regions"
      ? TOURS_DATA
      : TOURS_DATA.filter((t) => t.region === selectedRegion);

  return (
    <section id="packages" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E0A96D] tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Brochure Departures 2026-2027</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Curated Signature Tours from Kolkata
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base mt-2 max-w-3xl font-light">
            Every itinerary is fully managed by Rupkotha Travels with confirmed train/flight sectors from Kolkata, dedicated Bengali tour directors, hot homely meals, and comprehensive on-ground vehicle support.
          </p>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3E62]/40 border border-[#C5A880]/30 text-xs text-[#C5A880]">
            <Award className="w-4 h-4 text-[#E0A96D]" />
            <span>100% Escorted from Kolkata</span>
          </div>
        </div>
      </div>

      {/* Grid of Tour Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTours.map((pkg) => (
          <div
            key={pkg.id}
            className="group bg-[#0B192C]/80 border border-[#C5A880]/20 rounded-2xl overflow-hidden hover:border-[#C5A880]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C5A880]/10 flex flex-col justify-between"
          >
            {/* Image Header with Badge */}
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-black/50" />

              {pkg.badge && (
                <span className="absolute top-4 left-4 z-10 text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-[#C5A880] text-[#0B192C] shadow-md">
                  {pkg.badge}
                </span>
              )}

              <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-xs text-white/90">
                <span className="flex items-center gap-1 bg-[#060D17]/85 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#E0A96D]" />
                  {pkg.duration}
                </span>
                <span className="flex items-center gap-1 bg-[#060D17]/85 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10 font-medium text-[#E0A96D]">
                  <Calendar className="w-3.5 h-3.5" />
                  {pkg.nextDeparture}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-[#E0A96D] font-medium mb-1.5">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span className="line-clamp-1">{pkg.countries}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#C5A880] transition-colors leading-snug mb-2">
                  {pkg.title}
                </h3>

                <p className="text-[11px] text-[#94A3B8] line-clamp-1 font-mono mb-3 bg-[#060D17]/60 p-1.5 rounded border border-white/5">
                  🏨 {pkg.nightStay}
                </p>

                {/* Inclusions Icon Row */}
                <div className="flex items-center gap-4 text-xs text-[#94A3B8] pb-3 mb-3 border-b border-white/10">
                  <span className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-[#C5A880]" /> Rail/Coach
                  </span>
                  <span className="flex items-center gap-1">
                    <Hotel className="w-3.5 h-3.5 text-[#C5A880]" /> Stays
                  </span>
                  <span className="flex items-center gap-1">
                    <Utensils className="w-3.5 h-3.5 text-[#C5A880]" /> Bengali Meals
                  </span>
                </div>

                {/* Highlights List */}
                <ul className="space-y-1.5 mb-6">
                  {pkg.highlights.slice(0, 3).map((hl, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-white/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E0A96D] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Action Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#94A3B8] uppercase tracking-wider">Twin Sharing</span>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#E0A96D]">
                    {pkg.price}
                    <span className="text-xs font-sans font-normal text-white/60"> / person</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenDetails(pkg)}
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all text-xs font-medium flex items-center gap-1"
                    title="View Day-by-Day Itinerary"
                  >
                    <FileText className="w-4 h-4 text-[#C5A880]" />
                    <span className="hidden sm:inline">Details</span>
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(pkg.title)}
                    className="px-4 py-2.5 rounded-full bg-gradient-to-r from-[#F5E6CA] via-[#C5A880] to-[#E0A96D] text-[#0B192C] font-semibold text-xs flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all shadow-md shadow-[#C5A880]/20"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
