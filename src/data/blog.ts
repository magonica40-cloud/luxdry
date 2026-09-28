export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  displayDate: string;
  readTime: string;
  author: string;
  image: string;
  featured?: boolean;
  body: BlogBlock[];
};

export const categories = [
  'Garment Care',
  'Commercial Solutions',
  'Sustainability',
  'Fabric Science',
  'Operations',
  'Careers & Culture',
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: 'extend-life-of-premium-fabrics',
    title: '5 Essential Tips to Extend the Life of Your Premium Fabrics',
    excerpt:
      'Learn how proper dry cleaning, wash temperatures, and fabric care techniques preserve delicate suit fibers, silks, and luxury linens for years.',
    category: 'Garment Care',
    date: '2026-09-24',
    displayDate: 'Sep 24, 2026',
    readTime: '5 min read',
    author: 'LuxeDry Care Team',
    image: '/premium_garments.jpg',
    featured: true,
    body: [
      {
        type: 'paragraph',
        text: 'A good wool suit should last a decade or more. A silk saree, handled carelessly, can be ruined in a single wash. The difference is almost never the quality of the garment — it is the quality of the decisions made after the garment leaves your house.',
      },
      { type: 'heading', text: '1. Read the care label, and believe it' },
      {
        type: 'paragraph',
        text: 'Almost every garment we handle arrives with a care label that the previous owner never read. The label is not a suggestion; it is the manufacturer telling you the one combination of temperature, solvent and agitation that will not destroy the fibres. If the label says dry clean only, dry cleaning is the only correct answer, even if a gentle machine wash seems like it would be quicker.',
      },
      {
        type: 'paragraph',
        text: 'Where labels have been lost, send the garment to a specialist rather than guessing. Guessing is how a ₹40,000 blazer becomes a ₹4,000 rag.',
      },
      { type: 'heading', text: '2. Rotate your wool and your washing frequency' },
      {
        type: 'paragraph',
        text: 'Wool and other natural fibres recover from a wash cycle. They need time to do it. A jacket worn every day with no rest between wears will start to develop shine at the shoulders, bag at the elbows and lose its shape at the seams — all long before the fabric actually wears through.',
      },
      {
        type: 'list',
        items: [
          'Give structured wool garments at least two wears in between washes.',
          'Empty and refashion the pockets between wears — a folded pocket leaves a permanent crease.',
          'Hang wool on a broad, padded hanger rather than a wire one.',
        ],
      },
      { type: 'heading', text: '3. Fold knits, do not hang them' },
      {
        type: 'paragraph',
        text: 'This is the most common error we see, and it is irreversible. A hanging knit stretches under its own weight, and the neckline distorts first. Cashmere in particular will never fully recover its original shape once it has been hung while damp.',
      },
      {
        type: 'list',
        items: [
          'Fold fine knits and store them flat, ideally with a layer of tissue between folds.',
          'De-pill gently with a comb or a fabric shaver rather than a razor.',
          'If a knit has stretched, wash it flat in cool water and dry it flat; never use a clothes dryer.',
        ],
      },
      { type: 'heading', text: '4. Never dry clean a garment with a loose or missing button' },
      {
        type: 'paragraph',
        text: 'Loose buttons and detached hardware do not simply come off during cleaning. They can snag, tear and be entirely lost. Before sending anything in, run your fingers over every button, buckle, hook and embellishment. If one is loose, sew it on properly or remove it and record that you did.',
      },
      { type: 'heading', text: '5. Store silks and satins away from light' },
      {
        type: 'paragraph',
        text: 'Natural silk and acetate fade with prolonged light exposure — not dramatically over one season, but noticeably over five. Store them inside garment bags rather than folded in an open drawer, and keep them away from windows and from direct light falling through a wardrobe gap.',
      },
      {
        type: 'quote',
        text: 'A garment is a textile before it is an item of clothing. Treat the textile first and the silhouette takes care of itself.',
      },
      {
        type: 'paragraph',
        text: 'None of this requires expensive products or complicated routines. It requires consistency and a process that does not vary depending on how busy the week was. That is precisely what a scheduled laundry service is for.',
      },
    ],
  },
  {
    slug: 'why-hotels-outsource-laundry',
    title: 'Why Commercial Hotels & Restaurants Outsource Linen Laundry',
    excerpt:
      'Discover how outsourcing to specialized B2B laundry providers cuts operational costs, enhances fabric hygiene, and boosts guest satisfaction.',
    category: 'Commercial Solutions',
    date: '2026-09-18',
    displayDate: 'Sep 18, 2026',
    readTime: '7 min read',
    author: 'Commercial Operations',
    image: '/hotel_laundry.jpg',
    featured: true,
    body: [
      {
        type: 'paragraph',
        text: 'In-house laundry looks economical on a spreadsheet. In practice, most hotel and restaurant operators underestimate three costs that have nothing to do with the wash itself: the space, the people, and the risk.',
      },
      { type: 'heading', text: 'The space problem' },
      {
        type: 'paragraph',
        text: 'A 100-room hotel generates roughly 400–500 kg of soiled linen a day. Processing that volume requires industrial washers, dryers, flatliners and pressing equipment, plus the racks and holding area to move it. That is easily 400–500 square metres of plant room that could not be anything else. In a market where prime floor area is the scarcest resource a hotel has, giving up half a floor plate to a laundry operation is a real cost — even when the plant itself is capital.',
      },
      { type: 'heading', text: 'The people problem' },
      {
        type: 'paragraph',
        text: 'Running laundry requires a small specialist team: washers, ironers, finishers, a supervisor. In a tight labour market, those are difficult roles to fill and harder to keep. The moment your best presser leaves, your linen quality drops visibly within a single shift, and that drop is what your guests actually notice.',
      },
      { type: 'heading', text: 'The risk problem' },
      {
        type: 'paragraph',
        text: 'This is the one most operators underestimate. Your reputation is a function of what happens in the room your guests never see. A stain that comes back, a duvet that smells faintly of the wash, a pillowcase with a press mark — none of these generate a formal complaint, but collectively they show up as reviews that say the place was "fine but not quite".',
      },
      { type: 'quote',
        text: 'Guests do not compliment a laundry service. They simply stop mentioning the problems, which is the highest praise a hotel can receive.',
      },
      { type: 'heading', text: 'What outsourcing actually changes' },
      {
        type: 'list',
        items: [
          'Predictable per-kilogram cost instead of fluctuating payroll, utilities and maintenance.',
          'Linens come back pressed to a consistent standard, because the pressing is not done by whoever is on shift.',
          'Fabric lifespan extends, because commercial machines use calibrated water and heat profiles rather than domestic cycles.',
          'Your team is freed up to do the work that generates revenue rather than wash laundry.',
          'Peak-season volume stops being a staffing crisis.',
        ],
      },
      { type: 'heading', text: 'What to ask a provider before you sign' },
      {
        type: 'list',
        items: [
          'What is the turnaround time, and what happens when a load is late?',
          'How are garments and linen segregated by fabric, colour and client?',
          'What is the escalation path when something goes wrong on a 400-room property?',
          'Do you carry professional indemnity and public liability cover?',
          'Can you handle a linen inventory audit before the first pickup?',
        ],
      },
      {
        type: 'paragraph',
        text: 'The honest summary is that outsourcing converts a fixed, unpredictable, capital-heavy cost into a variable and predictable one — and, more importantly, converts it into a service level your operations team can actually manage.',
      },
    ],
  },
  {
    slug: 'science-behind-eco-friendly-laundry',
    title: 'The Science Behind Eco-Friendly & Hygienic Dry Cleaning',
    excerpt:
      'Explore how non-toxic solvents, controlled steam pressing and high-temperature washing sterilise garments while protecting skin and the environment.',
    category: 'Sustainability',
    date: '2026-09-10',
    displayDate: 'Sep 10, 2026',
    readTime: '6 min read',
    author: 'Eco Tech Team',
    image: '/b2b_laundry.jpg',
    featured: true,
    body: [
      {
        type: 'paragraph',
        text: '"Eco-friendly" is used loosely enough in the laundry industry to mean almost anything. Here is what actually matters, in the order that it matters.',
      },
      { type: 'heading', text: 'Heat and time are the real sterilants' },
      {
        type: 'paragraph',
        text: 'The single most effective way to kill bacteria, dust-mite allergens and viral contamination on fabric is not a chemical. It is holding the textile at a sufficiently high temperature for a sufficient length of time. A domestic wash cycle sits around 40°C; commercial and healthcare laundering runs at 60–71°C for extended dwell times. That gap is the whole reason institutional laundry is epidemiologically different from doing your own laundry at home.',
      },
      {
        type: 'list',
        items: [
          'Below 50°C: many common allergens and bacteria survive comfortably.',
          '60°C with a long dwell: substantially reduces dust-mite populations and vegetative bacteria.',
          '70°C and above, with the right chemistry: the standard for healthcare linen.',
        ],
      },
      { type: 'heading', text: 'Solvent choice, in plain terms' },
      {
        type: 'paragraph',
        text: 'Perchloroethylene — historically known as PCE — is effective but it is a persistent, volatile solvent with well-documented occupational and environmental downsides. The modern alternative is a fluorocarbon or a hydrocarbon process that works at a lower temperature, recovers the solvent for reuse, and does not require the same ventilation and handling regime.',
      },
      {
        type: 'quote',
        text: 'A genuinely better solvent is one that is closed-loop, recovered at a high rate, and has no odour in the finished garment.',
      },
      { type: 'heading', text: 'Water, detergent and the microplastic problem' },
      {
        type: 'paragraph',
        text: 'Water consumption is usually the largest environmental cost of a commercial laundry operation, not energy. Modern machines use water-per-kilogram as a published specification, and the meaningful improvements come from load sizing — running a 60 kg machine at 40 kg wastes roughly a third of the water per kilogram.',
      },
      {
        type: 'paragraph',
        text: 'Detergent choice is where most facilities quietly get it wrong. HEPA-grade filters on the extraction system, correctly dosed low-temperature detergents, and a ban on fabric softener in healthcare linen all reduce the chemical load discharged to the drain.',
      },
      { type: 'heading', text: 'Measuring it rather than claiming it' },
      {
        type: 'paragraph',
        text: 'If a provider cannot tell you their litres of water per kilogram, or their solvent recovery rate, they are not measuring. Ask for the numbers, and ask what they were a year ago. Improvement that is not tracked is not improvement.',
      },
    ],
  },
  {
    slug: 'spot-stain-removal-guide',
    title: 'The Homeowner’s Guide to Spot Stain Removal: What to Act On Fast',
    excerpt:
      'Oil, wine, coffee, blood, ink and grass behave very differently. Here is what actually removes each one, and which mistakes set the stain permanently.',
    category: 'Garment Care',
    date: '2026-09-02',
    displayDate: 'Sep 2, 2026',
    readTime: '6 min read',
    author: 'LuxeDry Care Team',
    image: '/everyday_laundry.jpg',
    body: [
      {
        type: 'paragraph',
        text: 'Every stain has a chemistry, and time is the one variable that works against you on all of them. The single most important rule is this: blot, never rub, and treat the stain before it dries.',
      },
      { type: 'heading', text: 'The mistakes that set a stain permanently' },
      {
        type: 'list',
        items: [
          'Rubbing — it spreads the stain into surrounding fibres and abrades the surface.',
          'Washing and drying a stained garment — heat sets protein and tannin stains permanently.',
          'Using hot water on protein stains — it denatures the protein and locks it into the fibre.',
          'Applying a household bleach to anything other than a genuine white cotton.',
        ],
      },
      { type: 'heading', text: 'Oil and grease' },
      {
        type: 'paragraph',
        text: 'Fresh oil is straightforward: absorb with a paper towel, then work a small amount of liquid detergent directly into the mark from the outside inward. Let it sit for fifteen minutes, then rinse with cool water. If the garment is dry-clean-only, resist the urge to improvise — the solvent blend used in dry cleaning is what lifts set-in oil without ring marks.',
      },
      { type: 'heading', text: 'Red wine and coffee' },
      {
        type: 'paragraph',
        text: 'Tannin-based stains respond to alkalinity. While the stain is still wet, cover it with a thick layer of ordinary table salt, which draws the liquid out of the fabric. Rinse with cold water, then treat with a mild alkaline solution. Never add hot water and never use soap on silk — silk is protein and hot alkaline water will set a tannin mark permanently.',
      },
      { type: 'heading', text: 'Blood' },
      {
        type: 'paragraph',
        text: 'Blood is a protein, so it must never see heat or strong alkali. Use cold water only. Blot from the outside in, work in a solution of hydrogen peroxide diluted in cool water, and change the water frequently as you flush. If the fabric is white, a cold-water soak with a biological detergent enzyme works well. Once the blood has dried and oxidised, it becomes genuinely difficult, which is why the cold-water rule matters so much.',
      },
      { type: 'heading', text: 'Ink and ballpoint' },
      {
        type: 'paragraph',
        text: 'Place a paper towel beneath the stain, then apply rubbing alcohol from the back of the fabric so the ink moves out rather than in. Rinse with cool water, repeat until the ink stops transferring, then launder as normal. Water-based ink on a cotton shirt may come out with a simple detergent pass; permanent marker and ballpoint need the alcohol step first.',
      },
      { type: 'heading', text: 'When to stop and hand it over' },
      {
        type: 'paragraph',
        text: 'Silk, wool, viscose, acetate and anything with a dry-clean-only label should be handled by a professional. Heat-setting a delicate stain is a permanent outcome, and no household product gives that risk back. If a valuable garment is sitting in a drawer with a mark on it, send it in rather than experimenting.',
      },
    ],
  },
  {
    slug: 'hotel-linen-lifecycle-cost',
    title: 'The Real Cost of a Hotel Sheet: Lifecycle Economics Most Operators Miss',
    excerpt:
      'The purchase price of a sheet is the smallest number in the calculation. Fabric lifecycle, replacement cycles and lost revenue tell the real story.',
    category: 'Operations',
    date: '2026-08-25',
    displayDate: 'Aug 25, 2026',
    readTime: '6 min read',
    author: 'Commercial Operations',
    image: '/hotel_laundry.jpg',
    body: [
      {
        type: 'paragraph',
        text: 'Buying linen is easy. Buying linen that still works after eighteen months of commercial washing is the actual problem, and it is a problem that shows up in the replacement budget rather than the laundry budget.',
      },
      { type: 'heading', text: 'Purchase price is the least interesting number' },
      {
        type: 'paragraph',
        text: 'A 100% long-staple cotton sheet costing more per unit up front routinely costs less per year than a cheaper sheet, because laundering damages fibres. Every wash cycle abrades the fibre and removes a small amount of tensile strength. Fabric that begins closer to the top of its strength curve keeps its structure longer, and a sheet that fails at eighteen months instead of twenty-four replaces roughly fifty percent more often.',
      },
      { type: 'quote',
        text: 'The cheapest sheet is the one that never has to be replaced — and the most expensive is the one that keeps failing after two hundred washes.',
      },
      { type: 'heading', text: 'What actually destroys linen in a commercial wash' },
      {
        type: 'list',
        items: [
          'Overloading the washer. An overloaded drum cannot fall through the water, so soil stays in the fabric and abrasion rises sharply.',
          'Excessive detergent. Residue embeds in the fibre and accelerates yellowing and degradation.',
          'Fabric softener. It leaves a hydrophobic film that holds odours and reduces absorbency over time.',
          'High-temperature drying without tumbling control. This is the single biggest driver of fibre loss.',
          'Mixed loads. A towel in a sheet load does not care, but the sheet does.',
        ],
      },
      { type: 'heading', text: 'The hidden cost is downtime, not the sheet' },
      {
        type: 'paragraph',
        text: 'When linen fails, you do not lose a sheet — you lose a room. If a property holds only a 1.2:1 linen ratio, a 40-room deep clean and an unexpected burst of replacements during a peak weekend can put housekeeping under immediate pressure, and the pressure shows up as slower room turnovers.',
      },
      { type: 'heading', text: 'How to actually manage the lifecycle' },
      {
        type: 'list',
        items: [
          'Inventory by purchase date, and retire stock in batches rather than piece by piece.',
          'Track a control sample of one or two sheets per room against each batch so degradation is visible early.',
          'Target roughly a 1.5:1 sheet-to-room ratio so peak demand is not covered by panic buying.',
          'Insist your laundry provider reports wash temperature and detergent dosing — these determine your lifespan.',
        ],
      },
      {
        type: 'paragraph',
        text: 'None of this is glamorous, and none of it appears in the standard linen spreadsheet. It is, however, the difference between a linen budget that is predictable and one that surprises you every quarter.',
      },
    ],
  },
  {
    slug: 'how-to-identify-quality-laundry-service',
    title: 'How to Tell a Quality Laundry Service From a Cheap One',
    excerpt:
      'Before you commit to a provider, run these eleven checks. The answers separate commercial-grade operations from a laundry that washes clothes.',
    category: 'Commercial Solutions',
    date: '2026-08-14',
    displayDate: 'Aug 14, 2026',
    readTime: '6 min read',
    author: 'LuxeDry Care Team',
    image: '/corporate_laundry.jpg',
    body: [
      {
        type: 'paragraph',
        text: 'Anyone can wash clothes. The difference between a laundry service and a laundry operation shows up in details that are easy to check before you sign anything.',
      },
      { type: 'heading', text: '1. Ask how they segregate' },
      {
        type: 'paragraph',
        text: 'Any credible provider separates by fabric, colour, temperature and client. If your hospital linen and a restaurant tablecloth go into the same drum, walk away.',
      },
      { type: 'heading', text: '2. Ask what temperature they wash at' },
      {
        type: 'paragraph',
        text: 'A vague answer is a bad sign. You want specific numbers, and you want them to differ between healthcare linen, hotel bed linen and dark garments.',
      },
      { type: 'heading', text: '3. Inspect a returned item closely' },
      {
        type: 'list',
        items: [
          'Check the collar and cuff line for creases that should have been pressed out.',
          'Look for starch residue on dark cotton — a sign of over-dosing.',
          'Check for odour, which means the item was dried without a full rinse.',
          'Check for a mark where a button or zip was removed.',
        ],
      },
      { type: 'heading', text: '4. Count everything, every time' },
      {
        type: 'paragraph',
        text: 'Garment counts are the foundation of a commercial laundry operation. If your provider cannot produce a bag count that matches what went out, you have a shrinkage problem you will discover later at a much worse price.',
      },
      { type: 'heading', text: '5. Ask about damaged-item protocol' },
      {
        type: 'paragraph',
        text: 'There should be a documented process: quarantine, photograph, notify the client, hold for a period, then return or dispose. A provider with no protocol is a provider who will quietly return the item and hope you do not notice.',
      },
      { type: 'heading', text: '6–11. The rest of the checklist' },
      {
        type: 'list',
        items: [
          'Do they have public liability and professional indemnity cover?',
          'Do they measure water per kilogram, or do they just say "eco-friendly"?',
          'Is the collection and delivery schedule fixed and written down?',
          'Do they hold backup stock of your linen types for emergency replacement?',
          'Is there a named person who handles your account escalations?',
          'Can they show you a second facility, or have they never heard of one?',
        ],
      },
      {
        type: 'paragraph',
        text: 'A provider who answers all eleven directly and does not need to be prompted is rare. That is the entire selection process.',
      },
    ],
  },
  {
    slug: 'steam-ironing-technology',
    title: 'Steam Ironing: The Technology Behind a Hotel-Perfect Finish',
    excerpt:
      'How commercial steam presses deliver a crisp crease in a single pass, and why finish quality is really a function of equipment plus process.',
    category: 'Fabric Science',
    date: '2026-08-05',
    displayDate: 'Aug 5, 2026',
    readTime: '5 min read',
    author: 'LuxeDry Care Team',
    image: '/uniform_laundry.jpg',
    body: [
      {
        type: 'paragraph',
        text: 'A sharp crease is a physical achievement, not a matter of pressing harder. The steam does the work; heat and pressure only set it.',
      },
      { type: 'heading', text: 'How a crease actually forms' },
      {
        type: 'paragraph',
        text: 'Steam penetrates the fibre and plasticises the hydrogen bonds inside it, temporarily making the fibre pliable. Pressure folds the fabric along the intended line. As the item cools, those bonds re-form in their new position, and the crease holds. The critical variable is the gap between the last pass and the point at which the fabric is packed away — a crease pressed hot and folded immediately will not hold.',
      },
      {
        type: 'quote',
        text: 'The difference between a crease and a fold is about four seconds of cooling time.',
      },
      { type: 'heading', text: 'Why a domestic iron is not enough' },
      {
        type: 'list',
        items: [
          'A domestic iron delivers steam at the tip only, so the crease is set unevenly along its length.',
          'Commercial presses have a suspended soleplate, so you can reposition fabric without lifting the machine.',
          'Programmable temperature and pressure profiles let one machine handle silk, wool and heavy cotton.',
          'A larger steam chamber means the whole item is conditioned, not just the line you pressed.',
        ],
      },
      { type: 'heading', text: 'The process matters as much as the machine' },
      {
        type: 'paragraph',
        text: 'Excellent presses produce poor results when the incoming garment is still damp, or when it is folded straight off the machine. Finishing quality comes from drying to the correct residual moisture, pressing at the correct profile, then hanging to cool fully before sorting. Any step skipped shows up as a crease that drops out by the time the garment reaches the hanger.',
      },
      { type: 'heading', text: 'Fabric-specific settings that matter' },
      {
        type: 'list',
        items: [
          'Silk and acetate: low temperature, high steam, no pressure. Scorch marks are permanent.',
          'Wool and wool blends: steam generously, press lightly, and never crush the nap.',
          'Cotton poplin and oxford: high temperature and firm pressure, then allow a full cooling period.',
          'Dark denim and technical synthetics: check the label, because a coated surface can glaze permanently.',
        ],
      },
      {
        type: 'paragraph',
        text: 'When a garment arrives at a guest with a sharp, consistent crease, it is usually noticed subconsciously — as the impression of a hotel that handles detail. That impression is built one pass at a time.',
      },
    ],
  },
  {
    slug: 'working-at-luxedry',
    title: 'What It Is Actually Like to Work at a Laundry Operation',
    excerpt:
      'An honest look at the hours, the pace, the heat and the progression paths inside a commercial laundry business — from an operator’s point of view.',
    category: 'Careers & Culture',
    date: '2026-07-22',
    displayDate: 'Jul 22, 2026',
    readTime: '5 min read',
    author: 'LuxeDry Operations',
    image: '/hostel_laundry.jpg',
    body: [
      {
        type: 'paragraph',
        text: 'Laundry work is physical, warm, fast and repetitive. It is also one of the most reliable sources of steady employment in the service sector, with a clear skill ladder underneath it. This is an honest description of both.',
      },
      { type: 'heading', text: 'The reality of the environment' },
      {
        type: 'paragraph',
        text: 'A working laundry floor is hot. Steam presses generate genuine ambient heat, and in the Indian summer that is not symbolic. You will be on your feet for most of a shift, handling bagged linen that can weigh 15–20 kg. If you are considering this work, factor that in honestly rather than discovering it on day one.',
      },
      { type: 'heading', text: 'What the job actually involves' },
      {
        type: 'list',
        items: [
          'Sorting incoming loads by fabric, colour and care label — this is where accuracy is built.',
          'Operating industrial washers and dryers, monitoring cycles, and unloading on time.',
          'Steam pressing and hand-finishing to specification.',
          'Counting, tagging and recording every item, because the counts are what protect the client and your pay.',
          'Keeping the area clean and the hygiene checks signed off.',
        ],
      },
      { type: 'heading', text: 'The progression is real' },
      {
        type: 'paragraph',
        text: 'The roles we hire for sit on a genuine ladder. A technician who becomes accurate and dependable moves to machine operator, then to shift supervisor, then into quality control or client-facing account work. The operations that promote from within produce supervisors who understand why a stain came back, and that is worth more than a supervisor hired from outside with no floor experience.',
      },
      {
        type: 'quote',
        text: 'We promote the person who knows why the load failed, not the person who never gets asked.',
      },
      { type: 'heading', text: 'Who does well here' },
      {
        type: 'list',
        items: [
          'People who are consistent. In laundry, a person who is reliably the same every day is worth more than someone who is brilliant twice a week.',
          'People who notice. Spotted mould, a torn hem, a bag that is not tagged — catching that early is genuinely valued.',
          'People who can follow a process without needing to be told twice.',
        ],
      },
      { type: 'heading', text: 'How to apply' },
      {
        type: 'paragraph',
        text: 'Send a short note to our email address with the role you are interested in and your experience. Tell us plainly what you have worked with before. We would rather read an honest application from someone with two years of relevant experience than a padded one from someone with none.',
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeatured(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}

export function getRelated(slug: string, count = 3): BlogPost[] {
  const current = getPost(slug);
  if (!current) return blogPosts.slice(0, count);
  const sameCategory = blogPosts.filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const rest = blogPosts.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, count);
}
