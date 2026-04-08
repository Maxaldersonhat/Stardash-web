export const STEPS = [
  {
    icon: '✨',
    q: 'What type of cleaning service do you need?',
    sub: 'Pick the one that fits best',
    type: 'options',
    key: 'service',
    cols: 2,
    options: ['Regular Clean', 'Deep Clean', 'Move In/Out', 'Office Clean', 'Post-Reno', 'Carpet Clean'],
  },
  {
    icon: '🏠',
    q: 'What type of space are we cleaning?',
    type: 'options',
    key: 'space',
    cols: 2,
    options: ['Studio', '1 Bedroom', '2 Bedrooms', '3+ Bedrooms', 'Office', 'Commercial'],
  },
  {
    icon: '📅',
    q: 'When would you like us to come?',
    sub: 'Preferred day or date',
    type: 'text',
    key: 'date',
    placeholder: 'e.g. Saturday morning, 5 Jan...',
  },
  {
    icon: '📍',
    q: 'Where is the location?',
    sub: 'Area / Estate / Town',
    type: 'text',
    key: 'location',
    placeholder: 'e.g. Westlands, Nairobi...',
  },
  {
    icon: '📞',
    q: "What's the best way to reach you?",
    sub: 'Name and phone / email',
    type: 'text',
    key: 'contact',
    placeholder: 'e.g. Jane Wanjiru, 0712 345 678',
  },
];

export const STEP_LABELS = {
  service: 'Service',
  space: 'Space',
  date: 'When',
  location: 'Location',
  contact: 'Contact',
};