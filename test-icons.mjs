import * as Lucide from 'lucide-react';

const usedIcons = [
  'CalendarCheck', 'ShieldCheck', 'Truck', 'Sparkles',
  'Droplets', 'Wind', 'Sun',
  'Star',
  'ArrowRight',
  'Phone', 'Mail', 'MapPin', 'Instagram', 'Facebook', 'Twitter',
  'Menu', 'X',
  'Check',
  'Search', 'CheckCircle',
  'Shirt', 'WashingMachine', 'Box', 'Footprints', 'Scroll', 'Sofa', 'Package', 'Cat', 'Crown',
  'ChevronDown'
];

let failed = false;
for (const icon of usedIcons) {
  if (Lucide[icon] === undefined) {
    console.error(`ERROR: Icon '${icon}' is undefined in lucide-react!`);
    failed = true;
  }
}

if (!failed) {
  console.log("All icons are valid!");
}
