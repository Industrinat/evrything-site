"use client";
import { useState, useEffect, useCallback } from "react";

/*
 * Evrything Freight Quote Component
 * Icons: Lucide-style outline SVGs (matching evrything.flowen.eu)
 * Maps: Sweden (default) + Europe toggle
 * Flow: From (Göteborg default) → To → Freight type → Speed → Contact
 */

// ── LUCIDE-STYLE SVG ICONS ──
const Icon = ({ d, size = 20, color = "currentColor", strokeWidth = 1.8 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
  </svg>
);

const Icons = {
  // Matches Lucide "Truck"
  truck: (p) => <Icon {...p} d={[
    "M1 3h15v13H1z", "M16 8h4l3 3v5h-7V8z", "M5.5 18.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
    "M18.5 18.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
  ]} />,
  // Matches Lucide "Globe"
  globe: (p) => <Icon {...p} d={[
    "M12 2a10 10 0 100 20 10 10 0 000-20z", "M2 12h20",
    "M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
  ]} />,
  // Pallet / Warehouse style
  pallet: (p) => <Icon {...p} d={[
    "M3 21h18", "M3 7v1a3 3 0 006 0V7", "M9 7v1a3 3 0 006 0V7",
    "M15 7v1a3 3 0 006 0V7", "M3 7h18", "M6 11v10", "M12 11v10", "M18 11v10"
  ]} />,
  // Matches Lucide "Package"
  package: (p) => <Icon {...p} d={[
    "M16.5 9.4l-9-5.19", "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z",
    "M3.27 6.96L12 12.01l8.73-5.05", "M12 22.08V12"
  ]} />,
  // Small box / Paket
  box: (p) => <Icon {...p} d={[
    "M21 8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16V8z",
    "M3.27 6.96L12 12.01l8.73-5.05", "M12 22.08V12"
  ]} />,
  // Matches Lucide "Zap"
  zap: (p) => <Icon {...p} d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" />,
  // Settings/wrench for "Övrigt"
  wrench: (p) => <Icon {...p} d={[
    "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
  ]} />,
  // Clock for express
  clock: (p) => <Icon {...p} d={["M12 2a10 10 0 100 20 10 10 0 000-20z", "M12 6v6l4 2"]} />,
  // Location pin (matches evrything SVG)
  pin: (p) => <Icon {...p} d={[
    "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
    "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
  ]} />,
  // Arrow down
  arrowDown: (p) => <Icon {...p} d={["M12 5v14", "M19 12l-7 7-7-7"]} />,
  // Check
  check: (p) => <Icon {...p} d="M20 6L9 17l-5-5" />,
  // Send
  send: (p) => <Icon {...p} d={["M22 2L11 13", "M22 2l-7 20-4-9-9-4 20-7z"]} />,
  // User
  user: (p) => <Icon {...p} d={["M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2", "M12 3a4 4 0 100 8 4 4 0 000-8z"]} />,
  // Mail
  mail: (p) => <Icon {...p} d={["M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z", "M22 6l-10 7L2 6"]} />,
  // Phone
  phone: (p) => <Icon {...p} d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />,
  // Building
  building: (p) => <Icon {...p} d={[
    "M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18z", "M6 12H4a2 2 0 00-2 2v6a2 2 0 002 2h2",
    "M18 9h2a2 2 0 012 2v9a2 2 0 01-2 2h-2", "M10 6h4", "M10 10h4", "M10 14h4", "M10 18h4"
  ]} />,
};

// ── CITY DATA ──
const SE_CITIES = [
  { name: "Stockholm", x: 160.1, y: 454.2 }, { name: "Göteborg", x: 30.0, y: 527.8 },
  { name: "Malmö", x: 52.0, y: 623.7 }, { name: "Uppsala", x: 151.0, y: 430.2 },
  { name: "Linköping", x: 108.1, y: 496.0 }, { name: "Västerås", x: 127.7, y: 441.5 },
  { name: "Örebro", x: 99.1, y: 457.0 }, { name: "Norrköping", x: 119.8, y: 487.9 },
  { name: "Helsingborg", x: 45.4, y: 603.2 }, { name: "Jönköping", x: 76.7, y: 524.7 },
  { name: "Umeå", x: 196.0, y: 249.8 }, { name: "Lund", x: 56.1, y: 619.1 },
  { name: "Borås", x: 50.7, y: 527.4 }, { name: "Sundsvall", x: 143.9, y: 315.2 },
  { name: "Gävle", x: 140.3, y: 393.4 }, { name: "Växjö", x: 90.6, y: 565.5 },
  { name: "Karlstad", x: 62.7, y: 452.0 }, { name: "Luleå", x: 247.1, y: 170.3 },
  { name: "Halmstad", x: 49.0, y: 575.1 }, { name: "Trollhättan", x: 36.9, y: 501.9 },
  { name: "Kalmar", x: 123.7, y: 575.5 }, { name: "Östersund", x: 87.0, y: 279.4 },
  { name: "Kiruna", x: 206.0, y: 66.8 }, { name: "Falun", x: 108.1, y: 396.1 },
  { name: "Skellefteå", x: 221.5, y: 208.0 },
  { name: "Karlskrona", x: 107.0, y: 598.3 }, { name: "Visby", x: 165.0, y: 531.1 },
  { name: "Kristianstad", x: 76.2, y: 604.2 }, { name: "Varberg", x: 35.5, y: 555.2 },
  { name: "Uddevalla", x: 28.7, y: 498.8 }, { name: "Nyköping", x: 137.4, y: 480.6 },
  { name: "Eskilstuna", x: 126.7, y: 452.5 }, { name: "Skövde", x: 69.8, y: 497.0 },
  { name: "Mora", x: 84.7, y: 378.4 }, { name: "Karlshamn", x: 91.4, y: 597.9 },
  { name: "Nässjö", x: 88.0, y: 530.6 }, { name: "Ljungby", x: 71.7, y: 567.9 },
  { name: "Mariestad", x: 69.1, y: 482.5 }, { name: "Lidköping", x: 55.0, y: 491.6 },
];

const SE_PATH = `M 290.0,159.4 L 280.0,139.5 L 285.7,114.5 L 280.4,84.0 L 276.8,63.1 L 273.6,57.7 L 260.4,42.7 L 245.4,38.6 L 236.7,29.1 L 227.7,23.2 L 220.7,19.5 L 215.1,10.0 L 201.9,11.8 L 198.7,41.8 L 172.1,34.5 L 160.8,35.9 L 158.4,34.5 L 152.9,60.0 L 132.4,60.0 L 118.3,92.2 L 114.5,99.9 L 107.2,133.1 L 106.4,143.1 L 95.5,144.5 L 89.5,145.4 L 84.6,145.4 L 83.8,159.9 L 79.7,172.2 L 65.9,215.8 L 75.7,220.8 L 71.6,221.7 L 64.2,239.8 L 51.6,239.8 L 43.1,238.9 L 30.5,275.3 L 35.2,287.1 L 29.2,281.6 L 29.4,342.0 L 37.1,345.7 L 44.1,365.2 L 33.9,376.6 L 37.1,418.4 L 19.4,449.7 L 27.1,458.3 L 23.2,473.8 L 18.5,469.7 L 10.0,475.6 L 12.6,478.8 L 13.2,482.0 L 14.7,485.6 L 16.8,489.7 L 19.0,494.7 L 22.2,501.0 L 23.9,504.7 L 25.6,508.8 L 26.4,516.5 L 26.2,522.4 L 26.2,529.2 L 26.0,536.5 L 26.2,540.1 L 28.6,546.9 L 30.5,554.6 L 34.1,563.3 L 38.6,572.3 L 41.6,580.5 L 44.1,587.3 L 44.1,591.4 L 47.7,595.5 L 48.8,599.1 L 49.9,603.2 L 53.1,607.8 L 54.1,613.2 L 52.0,617.8 L 50.7,622.8 L 50.5,626.4 L 51.2,630.9 L 54.6,633.7 L 58.2,635.0 L 62.7,635.5 L 66.7,633.7 L 69.1,630.9 L 73.3,632.8 L 75.5,632.3 L 77.6,625.9 L 79.7,626.4 L 80.6,624.1 L 82.5,620.5 L 85.5,618.2 L 87.6,605.5 L 88.7,598.2 L 91.0,597.8 L 94.4,596.9 L 98.1,598.2 L 103.2,600.5 L 107.2,599.6 L 110.9,598.2 L 113.4,601.0 L 115.8,596.9 L 118.1,592.8 L 119.8,585.5 L 120.9,580.1 L 123.0,575.5 L 123.9,570.1 L 124.1,563.3 L 124.5,556.9 L 126.6,550.1 L 127.7,541.0 L 128.1,532.4 L 129.4,524.7 L 131.6,518.3 L 133.7,506.0 L 131.3,495.1 L 129.4,488.3 L 127.9,482.0 L 132.6,475.1 L 133.7,471.1 L 139.2,466.1 L 144.6,460.6 L 150.7,460.6 L 155.9,456.1 L 160.1,454.2 L 166.1,450.6 L 170.6,444.7 L 172.3,439.7 L 172.1,433.4 L 169.9,429.3 L 165.0,426.1 L 161.6,422.4 L 157.4,417.5 L 155.0,415.2 L 153.5,410.2 L 152.0,402.9 L 147.1,395.2 L 144.6,390.7 L 140.3,383.4 L 138.8,373.8 L 139.9,362.9 L 141.8,355.2 L 144.6,347.5 L 147.3,341.1 L 149.5,336.6 L 153.7,328.0 L 155.4,320.2 L 157.6,312.5 L 157.1,307.5 L 155.9,298.9 L 153.1,294.8 L 156.1,289.8 L 162.9,284.4 L 168.4,279.4 L 171.0,275.3 L 175.3,267.1 L 172.1,263.5 L 181.7,257.6 L 185.1,252.6 L 190.6,249.4 L 195.3,244.4 L 198.3,239.8 L 201.3,235.3 L 204.5,227.6 L 206.6,220.3 L 214.1,211.7 L 221.5,208.0 L 223.9,204.9 L 226.5,201.7 L 229.9,196.7 L 234.3,190.3 L 235.2,184.4 L 235.4,178.5 L 241.4,170.3 L 247.8,164.0 L 252.5,161.7 L 265.7,166.3 L 277.6,164.4 L 290.0,159.4 Z`;
const SE_VB = "0 0 300 645";
const SE_GOTLAND = `M 161.8,517.0 L 174.2,519.3 L 182.1,527.4 L 185.3,537.4 L 178.9,544.3 L 176.1,552.4 L 170.3,555.6 L 162.9,552.0 L 161.1,541.1 L 159.0,530.6 L 160.7,521.5 Z`;
const SE_OLAND = `M 124.3,560.2 L 127.5,562.4 L 129.7,571.5 L 131.2,580.6 L 130.3,592.0 L 127.5,596.5 L 124.3,594.2 L 123.3,582.9 L 122.2,571.5 L 123.3,564.7 Z`;

const EU_CITIES = [
  { name: "Göteborg", x: 267.1, y: 161.9 }, { name: "Stockholm", x: 334.1, y: 132.1 },
  { name: "Malmö", x: 278.4, y: 198.8 }, { name: "Oslo", x: 253.7, y: 121.1 },
  { name: "Köpenhamn", x: 273.7, y: 197.4 }, { name: "Helsingfors", x: 409.5, y: 116.1 },
  { name: "Berlin", x: 282.9, y: 249.3 }, { name: "Hamburg", x: 245.4, y: 232.8 },
  { name: "Warszawa", x: 366.3, y: 253.8 }, { name: "Amsterdam", x: 189.5, y: 251.6 },
  { name: "Bryssel", x: 183.5, y: 275.1 }, { name: "London", x: 134.4, y: 265.0 },
  { name: "Paris", x: 161.5, y: 304.8 }, { name: "Prag", x: 294.0, y: 286.8 },
  { name: "Wien", x: 315.4, y: 314.2 }, { name: "Milano", x: 236.6, y: 352.9 },
  { name: "Barcelona", x: 159.5, y: 406.8 }, { name: "Madrid", x: 95.1, y: 419.1 },
  { name: "Rom", x: 272.9, y: 400.2 }, { name: "Zürich", x: 229.5, y: 326.1 },
  { name: "München", x: 262.8, y: 315.3 }, { name: "Riga", x: 400.4, y: 175.4 },
  { name: "Tallinn", x: 407.4, y: 130.0 }, { name: "Vilnius", x: 413.2, y: 214.1 },
  { name: "Dublin", x: 67.0, y: 236.0 }, { name: "Lyon", x: 188.7, y: 348.8 },
  { name: "Gdansk", x: 340.4, y: 219.7 }, { name: "Rotterdam", x: 184.9, y: 258.7 },
  { name: "Antwerpen", x: 184.0, y: 269.5 }, { name: "Kiel", x: 247.0, y: 220.2 },
  { name: "Frankfurt", x: 231.0, y: 286.3 }, { name: "Düsseldorf", x: 210.0, y: 269.3 },
  { name: "Stuttgart", x: 236.5, y: 306.0 }, { name: "Hannover", x: 242.5, y: 251.6 },
  { name: "Dresden", x: 286.5, y: 272.1 }, { name: "Leipzig", x: 271.5, y: 267.7 },
  { name: "Marseille", x: 194.7, y: 381.9 }, { name: "Toulouse", x: 151.5, y: 378.0 },
  { name: "Bordeaux", x: 129.4, y: 361.3 }, { name: "Strasbourg", x: 220.8, y: 309.0 },
  { name: "Genève", x: 203.1, y: 342.7 }, { name: "Torino", x: 220.1, y: 358.2 },
  { name: "Firenze", x: 259.2, y: 375.7 }, { name: "Napoli", x: 292.4, y: 413.7 },
  { name: "Bologna", x: 260.2, y: 366.1 }, { name: "Venezia", x: 271.2, y: 353.2 },
  { name: "Sevilla", x: 70.1, y: 456.5 }, { name: "Valencia", x: 131.6, y: 431.0 },
  { name: "Bilbao", x: 103.6, y: 382.5 }, { name: "Lisboa", x: 35.4, y: 440.1 },
  { name: "Porto", x: 41.2, y: 409.8 }, { name: "Edinburgh", x: 100.7, y: 192.8 },
  { name: "Manchester", x: 111.1, y: 233.9 }, { name: "Birmingham", x: 114.9, y: 249.7 },
  { name: "Liverpool", x: 103.0, y: 235.1 }, { name: "Glasgow", x: 89.1, y: 194.4 },
  { name: "Leeds", x: 118.7, y: 228.7 }, { name: "Bratislava", x: 323.5, y: 315.1 },
  { name: "Budapest", x: 344.7, y: 324.4 }, { name: "Zagreb", x: 311.1, y: 348.1 },
  { name: "Ljubljana", x: 295.0, y: 344.8 }, { name: "Kraków", x: 354.6, y: 287.1 },
  { name: "Wrocław", x: 322.8, y: 271.2 }, { name: "Poznań", x: 321.5, y: 251.0 },
  { name: "Szczecin", x: 295.4, y: 234.7 }, { name: "Linköping", x: 307.3, y: 149.2 },
  { name: "Jönköping", x: 291.1, y: 160.6 }, { name: "Sundsvall", x: 325.7, y: 71.6 },
  { name: "Umeå", x: 358.1, y: 41.0 }, { name: "Luleå", x: 378.8, y: 15.0 },
  { name: "Stavanger", x: 198.6, y: 138.8 }, { name: "Bergen", x: 194.1, y: 111.8 },
  { name: "Trondheim", x: 249.9, y: 49.7 }, { name: "Aarhus", x: 247.8, y: 189.4 },
  { name: "Aalborg", x: 244.6, y: 173.7 }, { name: "Odense", x: 249.8, y: 202.2 },
  { name: "Tampere", x: 396.5, y: 89.8 }, { name: "Turku", x: 380.2, y: 110.6 },
  { name: "Oulu", x: 415.3, y: 15.0 }, { name: "Nürnberg", x: 257.3, y: 296.1 },
  { name: "Köln", x: 212.1, y: 273.8 },
];
const EU_VB = "0 0 480 500";

// European country outlines (Mercator projection, Natural Earth coordinates)
const EU_PATHS = [
  "M 190.3,154.8 L 195.8,142.2 L 198.2,146.4 L 200.5,139.2 L 206.7,137.0 L 191.9,94.2 L 189.8,89.4 L 193.8,82.7 L 213.3,76.2 L 231.1,79.7 L 250.6,77.6 L 257.0,92.8 L 266.6,84.4 L 269.0,85.4 L 270.7,117.0 L 261.6,130.2 L 264.5,135.8 L 261.6,140.5 L 249.9,129.4 L 232.4,149.6 L 225.0,153.9 L 213.3,155.0 L 200.3,155.9 Z",
  "M 269.0,85.4 L 266.6,84.4 L 257.0,92.8 L 250.6,77.6 L 267.4,58.9 L 294.9,58.9 L 311.3,58.9 L 333.3,58.9 L 353.0,46.0 L 360.7,41.7 L 371.7,50.3 L 377.2,46.0 L 399.1,26.3 L 393.7,41.7 L 371.7,69.4 L 366.2,89.8 L 339.9,117.4 L 336.6,130.8 L 334.4,132.6 L 316.8,147.5 L 316.8,165.7 L 294.9,183.3 L 289.4,200.5 L 278.4,200.5 L 272.9,192.0 L 267.4,192.0 L 262.0,165.7 L 265.2,147.5 L 262.0,138.3 L 264.5,135.8 L 261.6,130.2 L 270.7,117.0 Z",
  "M 360.7,41.7 L 371.7,50.3 L 377.2,46.0 L 399.1,26.3 L 415.6,19.5 L 443.0,48.2 L 459.5,69.4 L 465.0,83.8 L 459.5,103.8 L 440.9,109.7 L 421.1,115.5 L 404.6,118.2 L 395.9,119.3 L 382.7,122.2 L 371.7,128.9 L 366.2,123.2 L 371.7,109.7 L 377.2,103.8 L 388.2,99.8 L 399.1,79.7 L 404.6,58.9 L 393.7,41.7 Z",
  "M 230.3,210.8 L 234.6,211.8 L 239.2,211.6 L 242.0,207.9 L 239.1,201.7 L 245.0,202.9 L 252.3,201.2 L 247.4,194.2 L 252.4,191.3 L 248.1,176.5 L 240.4,169.8 L 245.7,161.7 L 242.5,166.6 L 230.7,172.4 L 227.9,172.4 L 225.6,181.7 L 224.9,200.2 L 224.5,212.8 Z",
  "M 73.1,286.9 L 80.9,282.7 L 84.3,283.2 L 98.3,278.5 L 103.2,277.4 L 108.4,280.5 L 118.3,277.1 L 128.2,277.3 L 148.1,267.2 L 151.3,267.0 L 145.6,259.8 L 153.3,247.2 L 154.7,245.1 L 141.8,242.1 L 138.1,235.2 L 131.0,217.9 L 123.5,215.3 L 117.8,199.3 L 112.7,195.7 L 112.8,193.5 L 101.5,185.6 L 110.0,175.3 L 114.2,168.7 L 113.8,162.1 L 102.0,162.4 L 91.2,164.8 L 101.9,145.1 L 77.1,155.9 L 80.4,178.2 L 102.5,184.0 L 110.4,192.7 L 118.2,207.9 L 122.7,214.9 L 127.3,228.3 L 138.1,235.2 L 136.6,258.0 L 127.3,270.0 L 121.5,276.4 L 106.2,277.1 L 96.2,282.7 L 86.3,282.7 Z",
  "M 67.7,227.6 L 69.5,225.3 L 65.8,217.8 L 52.6,206.7 L 46.1,218.1 L 51.3,221.5 L 42.8,218.4 L 36.8,221.1 L 27.8,223.8 L 25.3,234.7 L 30.4,245.1 L 24.1,252.7 L 29.4,255.5 L 35.1,265.6 L 45.0,271.0 L 50.9,266.7 L 58.8,264.6 L 68.2,262.9 L 69.3,255.2 L 60.3,253.4 L 66.5,246.7 L 69.2,243.6 L 66.8,237.2 L 69.1,234.9 Z",
  "M 124.0,345.3 L 129.9,361.1 L 134.2,380.6 L 140.9,385.5 L 151.6,391.1 L 154.6,392.3 L 168.7,392.8 L 169.1,385.0 L 171.4,383.1 L 180.5,378.6 L 203.2,384.8 L 216.7,376.2 L 218.6,370.9 L 212.7,369.4 L 211.0,365.4 L 209.8,356.9 L 212.5,345.5 L 202.0,339.6 L 203.2,333.3 L 200.0,326.4 L 214.6,325.1 L 218.9,316.0 L 226.1,303.4 L 213.5,301.0 L 209.7,300.3 L 203.7,296.0 L 202.0,296.1 L 199.2,294.8 L 189.2,291.1 L 181.3,288.3 L 175.1,282.3 L 163.6,271.5 L 153.3,273.6 L 151.6,286.5 L 127.1,291.3 L 123.1,292.7 L 115.9,306.0 L 106.6,309.5 L 96.8,308.2 L 85.6,312.7 L 93.4,321.3 L 98.1,322.4 L 108.4,321.3 L 112.7,327.3 L 122.6,337.4 Z",
  "M 36.6,385.8 L 46.1,377.4 L 70.1,378.4 L 86.3,380.6 L 97.1,379.8 L 116.3,381.3 L 124.0,382.2 L 129.9,391.7 L 139.5,391.4 L 151.6,391.1 L 154.6,392.3 L 168.7,392.8 L 172.1,394.6 L 172.2,400.6 L 159.3,407.9 L 146.7,413.7 L 136.9,415.3 L 132.1,425.9 L 136.9,431.0 L 132.7,438.6 L 128.6,447.3 L 127.8,453.6 L 121.2,460.4 L 112.6,465.2 L 87.8,465.1 L 77.1,471.3 L 74.2,473.2 L 65.6,465.7 L 58.6,461.0 L 54.0,460.0 L 40.8,456.5 L 38.3,445.8 L 40.6,432.8 L 38.3,418.9 L 40.7,403.4 L 39.6,398.7 L 41.9,395.3 L 47.3,388.9 L 52.6,376.2 L 45.0,376.1 Z",
  "M 209.8,356.9 L 220.1,370.4 L 232.0,370.4 L 238.8,368.4 L 242.1,372.2 L 250.9,372.4 L 257.7,376.8 L 268.6,378.6 L 270.1,373.3 L 265.1,371.0 L 271.6,369.7 L 276.8,367.5 L 284.7,378.2 L 292.0,388.4 L 299.9,395.8 L 306.1,399.4 L 313.2,402.3 L 310.1,404.9 L 311.5,413.5 L 316.9,420.9 L 323.6,425.3 L 323.4,431.6 L 318.3,438.5 L 317.4,440.7 L 312.0,450.0 L 308.5,450.2 L 307.3,446.6 L 307.9,443.5 L 311.6,440.4 L 309.8,433.6 L 307.7,429.9 L 302.1,425.6 L 300.3,422.3 L 297.1,421.4 L 296.0,419.4 L 294.5,416.5 L 286.2,408.7 L 276.0,404.3 L 272.8,400.2 L 259.1,394.0 L 251.1,386.8 L 247.7,384.6 L 244.4,376.0 L 240.5,371.6 L 233.9,368.1 L 225.0,373.6 L 217.9,375.7 L 218.6,370.9 L 212.7,369.4 L 211.0,365.4 Z",
  "M 306.1,446.3 L 301.4,455.0 L 302.5,460.8 L 305.0,463.4 L 309.6,459.7 L 313.1,450.2 L 308.5,450.2 L 307.3,446.6 Z",
  "M 240.7,410.0 L 236.6,414.6 L 232.4,412.9 L 228.3,417.0 L 227.8,432.8 L 229.8,437.7 L 233.4,438.0 L 237.8,434.2 L 241.3,435.5 L 243.3,423.1 L 241.9,413.8 Z",
  "M 244.6,209.3 L 237.7,211.6 L 229.4,209.6 L 224.9,233.1 L 213.5,239.4 L 202.4,259.8 L 203.7,270.3 L 202.0,275.9 L 203.7,296.0 L 209.7,300.3 L 213.5,301.0 L 226.1,303.4 L 218.9,316.0 L 214.6,325.1 L 220.2,323.8 L 229.7,320.0 L 239.7,330.1 L 245.4,325.8 L 250.3,333.0 L 256.2,325.8 L 261.2,324.1 L 269.0,321.6 L 277.6,324.8 L 278.7,322.4 L 277.1,313.1 L 281.0,311.2 L 285.0,304.5 L 293.1,309.2 L 299.3,303.4 L 296.9,296.7 L 300.6,302.5 L 305.5,276.2 L 298.5,274.8 L 296.0,261.3 L 297.0,256.0 L 293.9,237.2 L 291.8,227.6 L 288.5,234.9 L 273.3,217.8 L 285.5,224.2 L 277.6,223.8 L 267.0,222.2 L 256.5,219.4 L 255.3,226.0 L 250.6,225.3 Z",
  "M 290.7,229.4 L 298.2,224.7 L 315.3,217.1 L 322.8,213.1 L 339.2,214.1 L 342.5,218.4 L 351.5,218.4 L 365.0,219.6 L 385.2,220.1 L 393.4,227.0 L 397.7,235.5 L 397.0,246.6 L 394.0,257.1 L 397.0,270.1 L 399.5,278.6 L 385.6,302.3 L 378.0,301.4 L 372.1,298.1 L 360.4,297.2 L 346.1,296.9 L 342.4,295.3 L 339.4,295.6 L 329.5,287.2 L 320.9,280.9 L 319.2,284.7 L 300.6,271.2 L 296.0,261.3 L 297.0,256.0 L 293.9,237.2 Z",
  "M 172.6,267.2 L 177.8,263.3 L 182.8,267.2 L 188.4,249.6 L 187.3,240.2 L 193.9,235.4 L 202.4,233.4 L 211.6,233.9 L 213.5,239.4 L 213.5,253.7 L 209.2,258.8 L 202.4,259.8 L 195.9,268.7 L 191.6,266.3 L 182.2,267.5 L 173.8,263.9 Z",
  "M 163.6,271.5 L 172.6,267.2 L 173.8,263.9 L 182.2,267.5 L 191.6,266.3 L 195.9,268.7 L 200.3,282.4 L 202.0,275.9 L 203.7,282.4 L 203.7,296.0 L 199.2,294.8 L 189.2,291.1 L 181.3,288.3 L 175.1,282.3 Z",
  "M 202.0,339.6 L 203.2,333.3 L 214.6,325.1 L 220.2,323.8 L 229.7,320.0 L 239.7,330.1 L 245.4,325.8 L 250.3,333.0 L 246.6,342.1 L 240.2,341.2 L 234.6,347.7 L 228.4,345.3 L 222.0,346.6 L 213.0,346.4 L 209.8,356.9 L 203.1,358.2 L 202.0,347.7 Z",
  "M 239.7,330.1 L 245.4,325.8 L 250.3,333.0 L 256.2,325.8 L 261.2,324.1 L 269.0,321.6 L 277.6,324.8 L 278.7,322.4 L 277.1,313.1 L 281.0,311.2 L 285.0,304.5 L 293.1,309.2 L 299.3,303.4 L 303.1,302.2 L 311.7,306.7 L 316.8,305.8 L 321.9,308.6 L 321.0,310.5 L 322.1,315.5 L 321.2,321.4 L 315.1,321.4 L 317.2,324.4 L 313.5,333.6 L 301.9,336.3 L 296.3,339.5 L 287.3,338.4 L 271.6,334.7 L 269.1,329.8 L 258.2,332.3 L 257.0,335.0 Z",
  "M 270.1,283.9 L 272.0,288.4 L 273.1,294.7 L 285.0,304.5 L 293.1,309.2 L 299.3,303.4 L 296.9,296.7 L 300.6,302.5 L 311.7,306.7 L 316.8,305.8 L 321.9,308.6 L 321.0,310.5 L 322.1,315.5 L 329.5,287.2 L 320.9,280.9 L 319.2,284.7 L 300.6,271.2 L 296.0,261.3 L 292.8,271.6 L 285.0,277.3 L 277.9,280.8 L 270.1,283.9 Z",
  "M 391.9,134.7 L 397.0,119.3 L 402.7,122.6 L 405.8,122.8 L 419.6,126.8 L 431.5,123.7 L 442.8,129.3 L 444.5,132.6 L 436.7,143.5 L 440.0,160.5 L 435.3,163.7 L 426.1,165.0 L 416.7,159.4 L 402.5,160.5 L 392.9,164.2 L 383.5,161.2 L 375.0,163.5 L 381.4,154.3 L 389.8,152.5 L 395.3,146.8 L 388.3,136.0 Z",
  "M 366.9,191.4 L 374.0,164.4 L 383.5,161.2 L 392.9,164.2 L 402.5,160.5 L 416.7,159.4 L 426.1,165.0 L 435.3,163.7 L 440.9,169.4 L 439.1,177.4 L 445.0,189.0 L 438.4,199.8 L 426.5,198.5 L 415.9,190.2 L 404.3,186.8 L 391.4,183.7 L 383.3,185.2 Z",
  "M 366.9,191.4 L 383.3,185.2 L 391.4,183.7 L 404.3,186.8 L 415.9,190.2 L 426.5,198.5 L 427.6,206.1 L 418.6,211.4 L 416.0,220.2 L 404.1,227.0 L 393.4,227.0 L 385.6,219.6 L 378.0,216.4 L 369.2,205.7 L 365.5,204.2 Z",
  "M 313.5,333.6 L 317.2,324.4 L 315.1,321.4 L 321.2,321.4 L 322.1,315.5 L 327.7,319.1 L 341.7,316.1 L 351.5,313.4 L 357.8,312.5 L 372.9,309.8 L 378.2,311.2 L 384.2,315.1 L 385.6,319.0 L 378.2,330.1 L 367.8,341.6 L 358.1,343.8 L 342.4,346.7 L 329.2,346.1 L 318.0,338.8 Z",
];

// ── COLORS (matching evrything blue theme + --accent: #facc15) ──
const C = {
  bg: "#0f2240", surface: "#152d54", surfaceHover: "#1a3a6b",
  border: "#1e4070", borderActive: "#facc15", accent: "#facc15",
  accentGlow: "rgba(250,204,21,0.15)", accentSoft: "rgba(250,204,21,0.08)",
  text: "#f1f5f9", textMuted: "#94a3b8", textDim: "#6b82a8",
  mapBg: "#0a1628", mapLand: "#1a3a6b", mapStroke: "#2a5090",
  dot: "#facc15", dotHover: "#fde047", white: "#fff",
  from: "#22d3ee", fromGlow: "rgba(34,211,238,0.2)", fromSoft: "rgba(34,211,238,0.1)",
};

// ── MAP COMPONENTS ──
const CityDot = ({ city, role, isHovered, onSelect, onHover, onLeave, vbW }) => {
  const isFrom = role === "from";
  const isTo = role === "to";
  const active = isFrom || isTo || isHovered;
  const color = isFrom ? C.from : isTo ? C.accent : isHovered ? C.dotHover : C.dot;
  const r = active ? 5 : 2.5;
  const labelW = city.name.length * 6.5 + 14;
  const labelX = city.x + labelW + 10 > vbW ? city.x - labelW - 6 : city.x + 8;

  return (
    <g style={{ cursor: "pointer" }} onClick={() => onSelect(city.name)}
      onMouseEnter={() => onHover(city.name)} onMouseLeave={onLeave}>
      {active && <circle cx={city.x} cy={city.y} r={r + 6}
        fill={isFrom ? C.fromGlow : C.accentGlow}
        style={{ animation: "pulse 2s ease-in-out infinite" }} />}
      <circle cx={city.x} cy={city.y} r={r} fill={color}
        stroke={active ? C.white : "none"} strokeWidth={active ? 1 : 0}
        style={{ transition: "all 0.2s", filter: active ? `drop-shadow(0 0 3px ${color})` : "none" }} />
      {active && (
        <g>
          <rect x={labelX} y={city.y - 9} width={labelW} height={18} rx={3}
            fill={C.surface} stroke={isFrom ? C.from : C.borderActive} strokeWidth={0.7} opacity={0.95} />
          <text x={labelX + 7} y={city.y + 3} fill={C.text} fontSize="8"
            fontFamily="'DM Sans',system-ui,sans-serif" fontWeight="500">{city.name}</text>
        </g>
      )}
    </g>
  );
};

const RouteLine = ({ from, to }) => {
  if (!from || !to) return null;
  const mx = (from.x + to.x) / 2;
  const my = Math.min(from.y, to.y) - 25;
  return (
    <path d={`M ${from.x},${from.y} Q ${mx},${my} ${to.x},${to.y}`}
      fill="none" stroke={C.accent} strokeWidth="1.2" strokeDasharray="4 3" opacity={0.5}
      style={{ filter: `drop-shadow(0 0 3px ${C.accent})` }} />
  );
};

const InteractiveMap = ({ mapMode, fromCity, toCity, onSelectFrom, onSelectTo, activeField }) => {
  const [hovered, setHovered] = useState(null);
  const isEU = mapMode === "europa";
  const cities = isEU ? EU_CITIES : SE_CITIES;
  const viewBox = isEU ? EU_VB : SE_VB;
  const vbW = parseInt(viewBox.split(" ")[2]);
  const fromObj = cities.find(c => c.name === fromCity);
  const toObj = cities.find(c => c.name === toCity);
  const handleSelect = (n) => activeField === "from" ? onSelectFrom(n) : onSelectTo(n);

  return (
    <svg viewBox={viewBox} style={{ width: "100%", height: "auto" }}>
      <defs>
        <radialGradient id="glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={C.accentSoft} /><stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <style>{`@keyframes pulse{0%,100%{opacity:.4}50%{opacity:.8}}`}</style>
      </defs>
      {!isEU && <>
        <ellipse cx="150" cy="340" rx="130" ry="320" fill="url(#glow)" />
        <path d={SE_PATH} fill={C.mapLand} stroke={C.mapStroke} strokeWidth="1.2"
          style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.3))" }} />
        <path d={SE_GOTLAND} fill={C.mapLand} stroke={C.mapStroke} strokeWidth="1" />
        <path d={SE_OLAND} fill={C.mapLand} stroke={C.mapStroke} strokeWidth="1" />
      </>}
      {isEU && <>
        <rect width="480" height="500" fill="transparent" />
        {EU_PATHS.map((d, i) => (
          <path key={i} d={d} fill={C.mapLand} stroke={C.mapStroke} strokeWidth="0.8"
            strokeLinejoin="round" opacity={0.85} />
        ))}
      </>}
      <RouteLine from={fromObj} to={toObj} />
      {cities.map(city => (
        <CityDot key={city.name} city={city} vbW={vbW}
          role={city.name === fromCity ? "from" : city.name === toCity ? "to" : null}
          isHovered={hovered === city.name} onSelect={handleSelect}
          onHover={setHovered} onLeave={() => setHovered(null)} />
      ))}
    </svg>
  );
};

// ── FORM COMPONENTS ──
const Autocomplete = ({ value, onChange, onSelect, placeholder, cities, color = C.accent }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [idx, setIdx] = useState(-1);
  useEffect(() => {
    if (value.length >= 1) {
      const m = cities.filter(c => c.name.toLowerCase().startsWith(value.toLowerCase())).slice(0, 6);
      setSuggestions(m); setIsOpen(m.length > 0); setIdx(-1);
    } else { setSuggestions([]); setIsOpen(false); }
  }, [value, cities]);
  const onKey = (e) => {
    if (!isOpen) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setIdx(i => Math.min(i + 1, suggestions.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setIdx(i => Math.max(i - 1, 0)); }
    else if (e.key === "Enter" && idx >= 0) { e.preventDefault(); onSelect(suggestions[idx].name); setIsOpen(false); }
    else if (e.key === "Escape") setIsOpen(false);
  };
  const bc = color === C.from ? C.from : C.borderActive;
  const glow = color === C.from ? C.fromGlow : C.accentGlow;
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "relative" }}>
        <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: C.textDim }}>
          {Icons.pin({ size: 16 })}
        </span>
        <input type="text" value={value} onChange={e => onChange(e.target.value)} onKeyDown={onKey}
          onFocus={() => value.length >= 1 && suggestions.length > 0 && setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)} placeholder={placeholder}
          style={{ width: "100%", padding: "12px 14px 12px 38px", background: C.surface,
            border: `1.5px solid ${C.border}`, borderRadius: 10, color: C.text, fontSize: 14,
            outline: "none", boxSizing: "border-box", fontFamily: "'DM Sans',system-ui,sans-serif" }}
          onFocusCapture={e => { e.target.style.borderColor = bc; e.target.style.boxShadow = `0 0 0 3px ${glow}`; }}
          onBlurCapture={e => { e.target.style.borderColor = C.border; e.target.style.boxShadow = "none"; }} />
      </div>
      {isOpen && (
        <ul style={{ position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, background: C.surface,
          border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden", zIndex: 50,
          listStyle: "none", margin: 0, padding: "4px 0", boxShadow: "0 12px 32px rgba(0,0,0,0.5)" }}>
          {suggestions.map((city, i) => (
            <li key={city.name} onMouseDown={e => { e.preventDefault(); onSelect(city.name); setIsOpen(false); }}
              onMouseEnter={() => setIdx(i)}
              style={{ padding: "9px 14px", cursor: "pointer", fontSize: 13,
                background: i === idx ? C.surfaceHover : "transparent",
                color: i === idx ? color : C.text, fontWeight: i === idx ? 600 : 400,
                display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color, opacity: 0.7 }}>{Icons.pin({ size: 14 })}</span> {city.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const FreightBtn = ({ label, selected, onClick, icon }) => (
  <button onClick={onClick} style={{ flex: 1, padding: "14px 6px",
    background: selected ? C.accentGlow : C.surface,
    border: `1.5px solid ${selected ? C.borderActive : C.border}`, borderRadius: 10,
    color: selected ? C.accent : C.textMuted, fontSize: 12, fontWeight: selected ? 600 : 400,
    cursor: "pointer", transition: "all 0.2s", display: "flex", flexDirection: "column",
    alignItems: "center", gap: 6, fontFamily: "'DM Sans',system-ui,sans-serif" }}>
    <span style={{ color: selected ? C.accent : C.textDim }}>{icon}</span>
    <span>{label}</span>
  </button>
);

const SpeedToggle = ({ value, onChange }) => (
  <div style={{ display: "flex", background: C.surface, borderRadius: 10, border: `1.5px solid ${C.border}`, padding: 3, gap: 2 }}>
    {[
      { v: "express", icon: Icons.zap({ size: 16 }), l: "Express", d: "1-2 dagar" },
      { v: "ekonomi", icon: Icons.clock({ size: 16 }), l: "Ekonomi", d: "3-5 dagar" },
    ].map(o => (
      <button key={o.v} onClick={() => onChange(o.v)} style={{ flex: 1, padding: "11px 8px",
        background: value === o.v ? C.accentGlow : "transparent",
        border: value === o.v ? `1px solid ${C.borderActive}` : "1px solid transparent",
        borderRadius: 8, color: value === o.v ? C.accent : C.textMuted, fontSize: 13,
        fontWeight: value === o.v ? 600 : 400, cursor: "pointer", fontFamily: "'DM Sans',system-ui,sans-serif",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ color: value === o.v ? C.accent : C.textDim }}>{o.icon}</span> {o.l}
        </span>
        <span style={{ fontSize: 11, opacity: 0.6 }}>{o.d}</span>
      </button>
    ))}
  </div>
);

const Field = ({ label, type, value, onChange, required, placeholder, icon }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
    <label style={{ fontSize: 11, fontWeight: 500, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.05em",
      display: "flex", alignItems: "center", gap: 4 }}>
      <span style={{ color: C.textDim }}>{icon}</span>
      {label}{!required && <span style={{ color: C.textDim, fontWeight: 400, textTransform: "none" }}> (valfritt)</span>}
    </label>
    <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
      style={{ padding: "11px 12px", background: C.surface, border: `1.5px solid ${C.border}`, borderRadius: 10,
        color: C.text, fontSize: 14, outline: "none", fontFamily: "'DM Sans',system-ui,sans-serif" }}
      onFocus={e => { e.target.style.borderColor = C.borderActive; e.target.style.boxShadow = `0 0 0 3px ${C.accentGlow}`; }}
      onBlur={e => { e.target.style.borderColor = C.border; e.target.style.boxShadow = "none"; }} />
  </div>
);

const Step = ({ n, label, done, icon }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
    <span style={{ width: 26, height: 26, borderRadius: "50%",
      background: done ? C.accent : C.surface, border: `1.5px solid ${done ? C.accent : C.border}`,
      display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700,
      color: done ? C.bg : C.textDim, transition: "all 0.3s" }}>
      {done ? <span>{Icons.check({ size: 14, color: C.bg })}</span> : n}
    </span>
    <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600 }}>
      <span style={{ color: C.textDim }}>{icon}</span> {label}
    </span>
  </div>
);

// ── MAIN ──
export default function EvrythingFreightQuote() {
  const [mapMode, setMapMode] = useState("sverige");
  const [activeField, setActiveField] = useState("to");
  const [fromText, setFromText] = useState("Göteborg");
  const [fromCity, setFromCity] = useState("Göteborg");
  const [toText, setToText] = useState("");
  const [toCity, setToCity] = useState(null);
  const [freightType, setFreightType] = useState(null);
  const [speed, setSpeed] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const cities = mapMode === "europa" ? EU_CITIES : SE_CITIES;
  const handleFromSelect = useCallback((n) => { setFromText(n); setFromCity(n); }, []);
  const handleToSelect = useCallback((n) => { setToText(n); setToCity(n); }, []);
  const isValid = fromCity && toCity && freightType && speed && name && email && phone && gdprConsent;

  const handleSubmit = () => {
    if (!isValid) return;
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1200);
  };

  const reset = () => {
    setSubmitted(false); setToText(""); setToCity(null); setFreightType(null);
    setSpeed(null); setName(""); setEmail(""); setPhone(""); setCompany(""); setGdprConsent(false);
  };

  if (submitted) {
    return (
      <section id="stader" style={{ background: C.bg, display: "flex", alignItems: "center",
        justifyContent: "center", fontFamily: "'DM Sans',system-ui,sans-serif", padding: "96px 24px" }}>
        <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}`}</style>
        <div style={{ textAlign: "center", maxWidth: 480, animation: "fadeIn 0.5s ease" }}>
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(34,197,94,0.12)",
            display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px",
            border: "2px solid rgba(34,197,94,0.3)" }}>
            {Icons.check({ size: 32, color: "#22c55e" })}
          </div>
          <h2 style={{ color: C.text, fontSize: 28, fontWeight: 700, margin: "0 0 12px" }}>Tack, {name}!</h2>
          <p style={{ color: C.textMuted, fontSize: 16, lineHeight: 1.6, margin: 0 }}>
            Vi har tagit emot din förfrågan om {speed === "express" ? "express" : "ekonomi"}frakt
            av <strong>{freightType}</strong> från <strong style={{ color: C.from }}>{fromCity}</strong> till{" "}
            <strong style={{ color: C.accent }}>{toCity}</strong>. Vi återkommer inom kort!
          </p>
          <button onClick={reset} style={{ marginTop: 32, padding: "12px 28px", background: "transparent",
            border: `1.5px solid ${C.border}`, borderRadius: 10, color: C.textMuted, fontSize: 14,
            cursor: "pointer", fontFamily: "'DM Sans',system-ui,sans-serif" }}>Ny förfrågan</button>
        </div>
      </section>
    );
  }

  return (
    <section id="stader" style={{ background: C.bg, fontFamily: "'DM Sans',system-ui,sans-serif", color: C.text, padding: "96px 0" }}>
      <style>{`
        @keyframes fadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes spin{to{transform:rotate(360deg)}}
        .freight-section input::placeholder{color:${C.textDim}}
      `}</style>

      <div className="freight-section" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48, animation: "fadeIn 0.6s ease" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 16px",
            background: C.accentSoft, borderRadius: 100, marginBottom: 20, border: "1px solid rgba(249,115,22,0.15)" }}>
            <span style={{ color: C.accent }}>{Icons.truck({ size: 16 })}</span>
            <span style={{ fontSize: 13, color: C.accent, fontWeight: 600 }}>Frakt i Sverige & Europa</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 700, lineHeight: 1.15, margin: "0 0 12px", letterSpacing: "-0.02em" }}>
            Varifrån och vart ska din<span style={{ color: C.accent }}> leverans</span>?
          </h1>
          <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: C.textMuted, maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
            Välj avsändare och destination — på kartan eller via sökning.
          </p>
        </div>

        {/* Main layout */}
        <div style={{ display: "grid", gridTemplateColumns: "minmax(240px, 380px) minmax(340px, 520px)",
          gap: 40, alignItems: "start", justifyContent: "center", animation: "slideUp 0.7s ease" }}>

          {/* Left: Map */}
          <div>
            <div style={{ display: "flex", background: C.surface, borderRadius: 10, border: `1.5px solid ${C.border}`,
              padding: 3, marginBottom: 12, gap: 2 }}>
              {[{ v: "sverige", l: "Sverige", flag: "🇸🇪" }, { v: "europa", l: "Europa", flag: "🇪🇺" }].map(o => (
                <button key={o.v} onClick={() => setMapMode(o.v)} style={{ flex: 1, padding: "8px 10px",
                  background: mapMode === o.v ? C.accentGlow : "transparent",
                  border: mapMode === o.v ? `1px solid ${C.borderActive}` : "1px solid transparent",
                  borderRadius: 7, color: mapMode === o.v ? C.accent : C.textMuted, fontSize: 13,
                  fontWeight: mapMode === o.v ? 600 : 400, cursor: "pointer",
                  fontFamily: "'DM Sans',system-ui,sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                  <span>{o.flag}</span> {o.l}
                </button>
              ))}
            </div>

            <div style={{ background: C.mapBg, borderRadius: 16, border: `1px solid ${C.border}`,
              padding: mapMode === "europa" ? "16px 12px" : "16px 8px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1,
                background: `linear-gradient(90deg, transparent, ${C.accent}40, transparent)` }} />
              <InteractiveMap mapMode={mapMode} fromCity={fromCity} toCity={toCity}
                onSelectFrom={handleFromSelect} onSelectTo={handleToSelect} activeField={activeField} />
              <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 10, fontSize: 11, color: C.textDim }}>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.from, display: "inline-block" }} /> Från
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.accent, display: "inline-block" }} /> Till
                </span>
              </div>
              <p style={{ textAlign: "center", fontSize: 11, color: C.textDim, marginTop: 6, marginBottom: 0 }}>
                Klicka stad = {activeField === "from" ? "välj avsändare" : "välj destination"}
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Step 1: Route */}
            <div>
              <Step n="1" label="Rutt" done={fromCity && toCity} icon={Icons.globe({ size: 16 })} />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: C.from, textTransform: "uppercase",
                    letterSpacing: "0.06em", marginBottom: 4, display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.from }} /> Från (avsändare)
                  </div>
                  <div onFocus={() => setActiveField("from")}>
                    <Autocomplete value={fromText} onChange={v => { setFromText(v); if (!v) setFromCity(null); }}
                      onSelect={handleFromSelect} placeholder="Göteborg (standard)..." cities={cities} color={C.from} />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", padding: "2px 0", color: C.textDim }}>
                  {Icons.arrowDown({ size: 18 })}
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: C.accent, textTransform: "uppercase",
                    letterSpacing: "0.06em", marginBottom: 4, display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.accent }} /> Till (destination)
                  </div>
                  <div onFocus={() => setActiveField("to")}>
                    <Autocomplete value={toText} onChange={v => { setToText(v); if (!v) setToCity(null); }}
                      onSelect={handleToSelect} placeholder="Sök destination..." cities={cities} color={C.accent} />
                  </div>
                </div>
              </div>
              {fromCity && toCity && (
                <div style={{ marginTop: 8, padding: "7px 12px", background: C.accentSoft, borderRadius: 8,
                  fontSize: 12, color: C.textMuted, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: C.from, fontWeight: 600 }}>{fromCity}</span>
                  <span style={{ color: C.textDim }}>→</span>
                  <span style={{ color: C.accent, fontWeight: 600 }}>{toCity}</span>
                </div>
              )}
            </div>

            {/* Step 2: Freight type */}
            <div>
              <Step n="2" label="Typ av gods" done={!!freightType} icon={Icons.package({ size: 16 })} />
              <div style={{ display: "flex", gap: 8 }}>
                <FreightBtn label="Pall" icon={Icons.pallet({ size: 22 })} selected={freightType === "pall"} onClick={() => setFreightType("pall")} />
                <FreightBtn label="Parti" icon={Icons.package({ size: 22 })} selected={freightType === "parti"} onClick={() => setFreightType("parti")} />
                <FreightBtn label="Paket" icon={Icons.box({ size: 22 })} selected={freightType === "paket"} onClick={() => setFreightType("paket")} />
                <FreightBtn label="Övrigt" icon={Icons.wrench({ size: 22 })} selected={freightType === "övrigt"} onClick={() => setFreightType("övrigt")} />
              </div>
            </div>

            {/* Step 3: Speed */}
            <div>
              <Step n="3" label="Fraktsätt" done={!!speed} icon={Icons.zap({ size: 16 })} />
              <SpeedToggle value={speed} onChange={setSpeed} />
            </div>

            <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${C.border}, transparent)` }} />

            {/* Step 4: Contact */}
            <div>
              <Step n="4" label="Kontaktuppgifter" done={name && email && phone} icon={Icons.user({ size: 16 })} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <Field label="Namn" type="text" value={name} onChange={setName} required placeholder="Ditt namn" icon={Icons.user({ size: 12 })} />
                <Field label="E-post" type="email" value={email} onChange={setEmail} required placeholder="din@epost.se" icon={Icons.mail({ size: 12 })} />
                <Field label="Telefon" type="tel" value={phone} onChange={setPhone} required placeholder="070-123 45 67" icon={Icons.phone({ size: 12 })} />
                <Field label="Företag" type="text" value={company} onChange={setCompany} required={false} placeholder="Ditt företag" icon={Icons.building({ size: 12 })} />
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginTop: 8 }}>
              <input type="checkbox" checked={gdprConsent} onChange={(e) => setGdprConsent(e.target.checked)}
                style={{ marginTop: 3, width: 18, height: 18, accentColor: C.accent, cursor: "pointer", flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.5 }}>
                Jag godkänner att Evrything AB lagrar mina uppgifter för att hantera min förfrågan. Läs vår{" "}
                <a href="/integritetspolicy" target="_blank" rel="noopener noreferrer"
                  style={{ color: C.accent, textDecoration: "underline" }}>integritetspolicy</a>.
              </span>
            </div>

            <button onClick={handleSubmit} disabled={!isValid || submitting}
              style={{ width: "100%", padding: "15px 24px",
                background: isValid ? `linear-gradient(135deg, ${C.accent}, #ea580c)` : C.surface,
                border: isValid ? "none" : `1.5px solid ${C.border}`, borderRadius: 12,
                color: isValid ? C.white : C.textDim, fontSize: 16, fontWeight: 700,
                cursor: isValid ? "pointer" : "not-allowed", transition: "all 0.3s",
                fontFamily: "'DM Sans',system-ui,sans-serif",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                boxShadow: isValid ? "0 4px 20px rgba(249,115,22,0.35)" : "none" }}>
              {submitting ? (
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                  <span style={{ width: 18, height: 18, border: "2px solid rgba(255,255,255,0.3)",
                    borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                  Skickar...
                </span>
              ) : <>
                {Icons.send({ size: 18, color: isValid ? C.white : C.textDim })}
                Skicka förfrågan
              </>}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
