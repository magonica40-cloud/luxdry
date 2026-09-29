export const site = {
  name: 'LuxeDry',
  tagline: 'Premium Laundry, Steam Iron & Dry Cleaning',
  description:
    'LuxeDry provides professional laundry, steam ironing and dry cleaning with convenient doorstep pickup and delivery for homes and businesses.',
  email: 'info@luxedry.in',
  phone: '+91 91802 47261',
  phoneHref: '+919180247261',
  whatsapp: 'https://wa.me/919180247261',
  instagram: 'https://www.instagram.com/luxedry_/',
  address: {
    line1: '40/3, Devalapura Village',
    line2: 'Anugondanahalli Hobli, Hoskote Taluk',
    line3: 'Bengaluru Rural - 560067',
  },
  hours: 'Mon-Sun, 8am - 8pm',
} as const;

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Branches', href: '/#branches' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'FAQs', href: '/#faqs' },
  { name: 'Contact', href: '/contact' },
] as const;

export type Branch = {
  slug: string;
  name: string;
  area: string;
  address: string;
  pincode: string;
  /** PIN codes this branch collects from and delivers to. Keep in sync with real routes. */
  pincodes: string[];
  hours: string;
  image: string;
  blurb: string;
  coverage: string[];
  highlights: string[];
  pickupSlot: string;
  turnaround: string;
  /** Position of the pin on the stylised coverage map, in % of the panel. */
  marker: { x: number; y: number };
};

export const branches: Branch[] = [
  {
    slug: 'nagarabhavi',
    name: 'Nagarabhavi',
    area: 'West Bengaluru',
    address: 'Nagarabhavi 2nd Stage, Bengaluru',
    pincode: '560021',
    pincodes: ['560021', '560010', '560024', '560003', '560001'],
    hours: 'Mon–Sun, 8am – 8pm',
    image: '/branches/nagarabhavi.jpg',
    blurb:
      'Our west-city counter, built for pg hostels, independent clinics and the dense residential lanes around Nagarabhavi and Rajajinagar.',
    coverage: ['Nagarabhavi', 'Rajajinagar', 'Vijayanagar', 'Malleshwaram', 'Seshadripuram'],
    highlights: ['Same-day express washing', 'Cycle pickup twice daily', 'Kannada & English support'],
    pickupSlot: '7:30am – 10:30am',
    turnaround: '24 – 48 hrs',
    marker: { x: 26, y: 38 },
  },
  {
    slug: 'electronic-city',
    name: 'Electronic City',
    area: 'South Bengaluru',
    address: 'Electronic City Phase 1, Bommasandra, Bengaluru',
    pincode: '560100',
    pincodes: ['560100', '560103', '560102', '560076', '560105'],
    hours: 'Mon–Sat, 8am – 9pm',
    image: '/branches/electronic-city.jpg',
    blurb:
      'Corporate-heavy belt, so this branch runs scheduled overnight batches for offices, tech campuses and serviced apartments.',
    coverage: ['Electronic City', 'Bommasandra', 'HSR Layout', 'Bannerghatta Road', 'Jigani'],
    highlights: ['Overnight corporate batches', 'Uniform & workwear line', 'Volume SLA reporting'],
    pickupSlot: '6:30pm – 10:00pm',
    turnaround: '12 – 24 hrs',
    marker: { x: 62, y: 78 },
  },
  {
    slug: 'koramangala',
    name: 'Koramangala',
    area: 'Central Bengaluru',
    address: '5th Block, Koramangala, Bengaluru',
    pincode: '560095',
    pincodes: ['560095', '560034', '560038', '560068', '560076'],
    hours: 'Mon–Sun, 8am – 9pm',
    image: '/branches/koramangala.jpg',
    blurb:
      'Our busiest walk-in counter — salons, gyms, restaurants and households that want their garments back the very next morning.',
    coverage: ['Koramangala', 'Indiranagar', 'BTM Layout', 'HSR Layout', 'Ejipura'],
    highlights: ['Walk-in drop counter', 'Premium garment dry cleaning', 'Next-morning delivery'],
    pickupSlot: '8:00am – 11:30am',
    turnaround: '18 – 36 hrs',
    marker: { x: 58, y: 58 },
  },
  {
    slug: 'kr-puram',
    name: 'KR Puram',
    area: 'East Bengaluru',
    address: 'KR Puram Main Road, Bengaluru',
    pincode: '560036',
    pincodes: ['560036', '560067', '560066', '560048', '560049'],
    hours: 'Mon–Sun, 7am – 8pm',
    image: '/branches/kr-puram.jpg',
    blurb:
      'Sits closest to our Hoskote plant, so it also acts as the eastern linen hub for hotels, hostels and logistics parks.',
    coverage: ['KR Puram', 'Hoskote', 'Kadugodi', 'Whitefield', 'Battarahalli'],
    highlights: ['Plant-adjacent express lane', 'Hotel & hostel bulk linen', 'Heavy-bag collection crew'],
    pickupSlot: '7:00am – 10:00am',
    turnaround: '24 – 48 hrs',
    marker: { x: 78, y: 30 },
  },
];

export const branchDirectionsUrl = (branch: Branch) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `LuxeDry ${branch.name} ${branch.address} ${branch.pincode}`
  )}`;

/** Every area any branch collects from, de-duplicated — used by the availability checker. */
export const serviceableAreas = Array.from(new Set(branches.flatMap((b) => b.coverage))).sort();

/** Every PIN code currently on a collection route. */
export const serviceablePincodes = Array.from(
  new Set(branches.flatMap((b) => [b.pincode, ...b.pincodes]))
).sort();

const normalise = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '');

/**
 * Resolve a customer-entered PIN code or area name to the branch that serves it.
 * Returns `undefined` when nothing matches, so the UI can say so honestly instead of
 * guessing from a `56*` prefix.
 */
export function findCoverage(query: string): Branch | undefined {
  const trimmed = query.trim();
  if (!trimmed) return undefined;

  const digits = trimmed.replace(/\D/g, '');
  if (digits.length === 6) {
    return branches.find((b) => b.pincode === digits || b.pincodes.includes(digits));
  }

  const needle = normalise(trimmed);
  if (needle.length < 3) return undefined;

  return branches.find(
    (b) =>
      normalise(b.name).includes(needle) ||
      needle.includes(normalise(b.name)) ||
      b.coverage.some((area) => {
        const current = normalise(area);
        return current.includes(needle) || needle.includes(current);
      })
  );
}

/** wa.me link with the message pre-filled, so every enquiry arrives in one tap. */
export const whatsappLink = (message: string) =>
  `${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const services = [
  {
    id: 'b2b-hotel',
    icon: 'Building',
    name: 'Hotel & Hospitality Laundry',
    short: 'Hotels & Hospitality',
    desc: 'Keep guest rooms and common areas fresh with professional cleaning for bedsheets, towels, pillow covers, duvet covers, uniforms, table linen, and other hospitality textiles.',
    image: '/hotel_laundry.jpg',
  },
  {
    id: 'b2b-hospital',
    icon: 'Plus',
    name: 'Hospital & Healthcare Laundry',
    short: 'Healthcare',
    desc: 'Professional laundry processing for healthcare facilities, including bedsheets, patient garments, towels, uniforms, and other approved textile items, with a strong focus on hygienic handling.',
    image: '/hospital_laundry.jpg',
  },
  {
    id: 'b2b-restaurant',
    icon: 'Utensils',
    name: 'Restaurant & Food Service Laundry',
    short: 'Restaurants',
    desc: 'Maintain a clean and professional dining environment with cleaning services for tablecloths, napkins, kitchen linen, chef uniforms, aprons, and other restaurant textiles.',
    image: '/restaurant_laundry.jpg',
  },
  {
    id: 'b2b-corporate',
    icon: 'Briefcase',
    name: 'Corporate & Office Laundry',
    short: 'Corporate',
    desc: 'Keep your workplace looking professional with laundry and garment-care solutions for employee uniforms, housekeeping textiles, curtains, and other business requirements.',
    image: '/corporate_laundry.jpg',
  },
  {
    id: 'b2b-gym',
    icon: 'Dumbbell',
    name: 'Gym & Fitness Laundry',
    short: 'Gym & Fitness',
    desc: 'Fresh and clean towels, uniforms, workout textiles, and other washable items for gyms, fitness centers, spas, and wellness facilities.',
    image: '/gym_laundry.jpg',
  },
  {
    id: 'b2b-hostel',
    icon: 'Home',
    name: 'Hostel & PG Laundry',
    short: 'Hostel & PG',
    desc: 'High-volume laundry solutions for hostels, PGs, student accommodations, and co-living spaces, including bedsheets, pillow covers, towels, blankets, and resident laundry.',
    image: '/hostel_laundry.jpg',
  },
  {
    id: 'b2b-salon',
    icon: 'Scissors',
    name: 'Salon & Spa Laundry',
    short: 'Salon & Spa',
    desc: 'Professional cleaning for towels, robes, uniforms, sheets, and other salon and spa textiles, helping maintain a clean and comfortable customer environment.',
    image: '/salon_laundry.jpg',
  },
  {
    id: 'b2b-uniform',
    icon: 'UserCheck',
    name: 'Uniform & Workwear Laundry',
    short: 'Uniforms',
    desc: 'Keep staff uniforms and workwear clean, fresh, and professionally finished with scheduled commercial laundry services.',
    image: '/uniform_laundry.jpg',
  },
] as const;

export const deliveryOptions = [
  {
    id: 'express',
    icon: 'Zap',
    name: 'Express Delivery',
    turnaround: '24 - 48 hours',
    summary:
      'Priority processing on a dedicated fast-track line, for linen and garments you need back the same working week.',
    bestFor: 'Urgent requirements, guest-facing linen and time-critical stock.',
    includes: [
      'Priority sorting and a reserved wash slot',
      'Accelerated wash and dry cycles',
      'Express steam pressing and hand finishing',
      'First-out dispatch on the next scheduled route',
    ],
  },
  {
    id: 'normal',
    icon: 'Clock',
    name: 'Normal Delivery',
    turnaround: '72 hours',
    summary:
      'Our standard commercial turnaround, giving every batch the full wash, dry and finish cycle at the best rate.',
    bestFor: 'Routine weekly volumes and scheduled account collections.',
    includes: [
      'Standard sorting by fabric and care label',
      'Full commercial wash, dry and finish cycle',
      'Complete batch processing before dispatch',
      'Delivery on your agreed collection schedule',
    ],
  },
] as const;

export const jobs = [
  {
    title: 'Commercial Laundry Technician',
    type: 'Full Time',
    location: 'Bengaluru Rural, Karnataka',
    department: 'Operations',
    summary:
      'Operate industrial washing, drying and pressing equipment for our commercial B2B laundry lines, and make sure every batch comes out to specification.',
    responsibilities: [
      'Run commercial washers, dryers, flatliners and steam presses to process high-volume textile loads.',
      'Sort, inspect and tag incoming linen by fabric type, colour and care label before processing.',
      'Identify and quarantine damaged or incorrectly tagged items before they re-enter the wash cycle.',
      'Maintain cleaning records and follow the hygiene protocol for every shift.',
      'Flag recurring fabric issues to the supervisor so we can improve client instructions.',
    ],
    requirements: [
      'Minimum one year in commercial laundry, hotel housekeeping, or industrial textile processing.',
      'Comfortable reading care labels and understanding fabric types and wash temperatures.',
      'Physically able to stand, walk and assist with heavy bagged linen during collection runs.',
      'Basic understanding of hygiene and safe chemical handling practices.',
    ],
  },
  {
    title: 'Collection & Delivery Driver',
    type: 'Full Time',
    location: 'Bengaluru Rural, Karnataka',
    department: 'Logistics',
    summary:
      'Run scheduled pickup and delivery routes for our hotel, healthcare and residential accounts across the Bengaluru Rural belt.',
    responsibilities: [
      'Collect sealed, tagged laundry bags from client locations on the assigned route schedule.',
      'Verify bag counts and paperwork against the client manifest before loading.',
      'Deliver finished, folded or garment-hung laundry back on the agreed schedule.',
      'Maintain vehicle cleanliness and keep delivery records accurate and up to date.',
      'Report route delays to the coordinator so the client can be informed early.',
    ],
    requirements: [
      'Valid commercial driving licence and a clean driving record.',
      'At least one year of last-mile delivery or logistics experience.',
      'Professional manner when interacting with hotel, hospital and front-desk staff.',
      'Able to manage a physically active route with multiple stops each day.',
    ],
  },
  {
    title: 'Ironing & Finishing Specialist',
    type: 'Full Time',
    location: 'Bengaluru Rural, Karnataka',
    department: 'Finishing',
    summary:
      'Hand-finish and steam-press garments to a hotel-grade standard, from uniforms and table linen to premium guest wearables.',
    responsibilities: [
      'Steam press and hand-finish garments, uniforms, table linen and bed linen to specification.',
      'Apply crease settings correctly for each fabric and garment type.',
      'Spot-clean and re-press items that do not meet inspection standards.',
      'Work safely with hot steam presses and irons, following the equipment safety checklist.',
      'Support finishing quality checks during peak volume periods.',
    ],
    requirements: [
      'One or more years in ironing, pressing, tailoring or hotel housekeeping.',
      'Good eye for fabric — you should be able to tell a delicate silk from a cotton blend on sight.',
      'Steady hand and attention to detail under deadline pressure.',
      'Comfortable working in a warm production environment.',
    ],
  },
  {
    title: 'Client Relationship Executive',
    type: 'Full Time',
    location: 'Bengaluru Rural, Karnataka',
    department: 'Sales',
    summary:
      'Own a portfolio of commercial accounts end to end — onboarding, service reviews, renewals and account growth.',
    responsibilities: [
      'Onboard new B2B accounts, from site survey and linen inventory through to the first pickup.',
      'Run regular service reviews with account managers and document agreed action points.',
      'Prepare and present quotations for new prospects and existing clients.',
      'Coordinate internally with operations so client commitments are realistic and kept.',
      'Handle service escalations quickly and keep the client informed throughout.',
    ],
    requirements: [
      'Two or more years in B2B sales, hospitality operations or account management.',
      'Confident speaking with hotel, hospital and corporate decision makers.',
      'Strong written communication for quotations and service reports.',
      'Experience with a CRM or similar account-tracking tool is a plus.',
    ],
  },
] as const;

export const jobApplicationSubject = (title: string) =>
  `Application: ${title} — ${site.name}`;
