import React from 'react';
import './ServicesSection.css';

// ─── SVG Icon Components ───────────────────────────────────────────────
// Each icon is self-contained and accepts className + style props for easy editing.

const IconResidential = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1H5a1 1 0 01-1-1V10.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconOffice = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="1" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M3 9h18M9 3v18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M13 13h4M13 17h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const IconFumigation = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <ellipse cx="12" cy="14" rx="5" ry="6" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M9 8c0-1.657 1.343-3 3-3s3 1.343 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M7 14H4M17 14h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M8.5 10.5l-2-2M15.5 10.5l2-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="12" cy="14" r="1.5" fill="currentColor"/>
  </svg>
);

const IconSofaCarpet = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 13V9a1 1 0 011-1h16a1 1 0 011 1v4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M1 13h22v4a1 1 0 01-1 1H2a1 1 0 01-1-1v-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M5 18v2M19 18v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M3 13c0-1.105.895-2 2-2h14c1.105 0 2 .895 2 2" stroke="currentColor" strokeWidth="1.8"/>
  </svg>
);

const IconSnake = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 18c0-3 2-5 5-5s5-2 5-5-2-5-5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M4 18c0 1.657 1.343 3 3 3h.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M17 3l2 1-2 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="6.5" cy="4.5" r="0.8" fill="currentColor"/>
    <circle cx="9" cy="4.5" r="0.8" fill="currentColor"/>
  </svg>
);

const IconCockroach = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <ellipse cx="12" cy="13" rx="4" ry="5.5" stroke="currentColor" strokeWidth="1.8"/>
    <ellipse cx="12" cy="9" rx="2.5" ry="2" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M8 10L5 8M8 13L4 13M8 16L5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 10L19 8M16 13L20 13M16 16L19 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M11 7l-.5-2M13 7l.5-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconBedbug = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <ellipse cx="12" cy="13" rx="5" ry="4" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M7 11L4 9M7 13L3 13M7 15L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 11L20 9M17 13L21 13M17 15L20 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 6l-1-2M14 6l1-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconConstruction = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M2 20h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M4 20V10l8-7 8 7v10" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <rect x="9" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M15 4l4 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M15 4v3h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconWindow = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M17 6l1.5-1.5M17 8l2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconOven = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="2" y="4" width="20" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
    <rect x="6" y="9" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="7.5" cy="6.5" r="1" fill="currentColor"/>
    <circle cx="12" cy="6.5" r="1" fill="currentColor"/>
    <circle cx="16.5" cy="6.5" r="1" fill="currentColor"/>
    <path d="M9 13.5c1-1.5 2-1.5 3 0s2 1.5 3 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconVenue = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2L2 7v2h20V7L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M4 9v11M8 9v11M12 9v11M16 9v11M20 9v11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M2 20h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M12 2v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const IconMoveInOut = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="2" y="7" width="14" height="13" rx="1" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M16 10l5-3v10l-5-3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M6 13h6M9 10l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─── Services Data ─────────────────────────────────────────────────────

const services = [
  {
    Icon: IconResidential,
    title: 'Residential Cleaning',
    description: 'Complete house and apartment cleaning with top-tier sanitization handled from our BBS Mall hub.',
    features: ['Regular weekly/bi-weekly cleaning', 'Kitchen & bathroom deep clean', 'Dusting & vacuuming', 'Window cleaning'],
  },
  {
    Icon: IconOffice,
    title: 'Office Cleaning',
    description: 'Corporate office maintenance for a healthier workspace environment. Professional sanitization on your schedule.',
    features: ['Daily office maintenance', 'Conference room cleaning', 'Restroom sanitization', 'Trash removal & recycling'],
  },
  {
    Icon: IconFumigation,
    title: 'Fumigation & Pest Control',
    description: 'Expert treatment for cockroaches, bedbugs, termites, and more using eco-friendly products.',
    features: ['Cockroach & bedbug treatment', 'Termite control', 'Eco-friendly products', 'Residential & commercial'],
  },
  {
    Icon: IconSofaCarpet,
    title: 'Sofa & Carpet Cleaning',
    description: 'Deep extraction cleaning for sofas, carpets, and mattresses. Removes stubborn stains and allergens.',
    features: ['Deep extraction cleaning', 'Stain removal', 'Mattress sanitization', 'Allergen elimination'],
  },
  {
    Icon: IconSnake,
    title: 'Snake Control',
    description: 'Professional snake removal and prevention services for residential and commercial properties.',
    features: ['Safe snake removal', 'Property inspection', 'Prevention sealing', 'Residential & commercial'],
  },
  {
    Icon: IconCockroach,
    title: 'Cockroach Control',
    description: 'High-precision cockroach elimination using specialized gel bait and cabinet treatments.',
    features: ['Gel bait treatment', 'Cabinet & drain treatment', 'Follow-up inspection', 'Long-lasting results'],
  },
  {
    Icon: IconBedbug,
    title: 'Bedbug Eradication',
    description: 'High-intensity heat and chemical treatments to completely eliminate bedbug infestations permanently.',
    features: ['Heat treatment', 'Chemical treatment', 'Mattress inspection', 'Permanent elimination'],
  },
  {
    Icon: IconConstruction,
    title: 'Post-Construction Clean',
    description: 'Heavy-duty cleaning after building or renovation to move into a pristine home. Removes debris and dust.',
    features: ['Debris removal', 'Dust & paint clean-up', 'Window & floor polish', 'Move-in ready finish'],
  },
  {
    Icon: IconWindow,
    title: 'Window Exterior',
    description: 'High-rise exterior window cleaning using specialized high-reach equipment and non-streak solutions.',
    features: ['High-rise capable', 'Non-streak solution', 'High-reach equipment', 'Residential & commercial'],
  },
  {
    Icon: IconOven,
    title: 'Oven Deep Clean',
    description: 'Thorough oven degreasing and sanitization to restore hygiene and performance to like-new state.',
    features: ['Full degreasing', 'Interior sanitization', 'Rack & tray cleaning', 'Like-new finish'],
  },
  {
    Icon: IconVenue,
    title: 'Mosque & Venue Clean',
    description: 'Specialized large-venue hygiene for community spaces with high-standard precision and respect.',
    features: ['Large-area coverage', 'Respectful approach', 'High-standard hygiene', 'Flexible scheduling'],
  },
  {
    Icon: IconMoveInOut,
    title: 'Move In / Out Clean',
    description: 'Comprehensive deep cleaning for transitions. Every corner, shelf, and floor is perfectly sanitized.',
    features: ['Full property clean', 'Cupboards & shelving', 'Floor sanitization', 'Landlord-ready finish'],
  },
];

// ─── Component ─────────────────────────────────────────────────────────

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Our <span className="highlight">Services</span></h2>
        <p>From homes to offices, we deliver exceptional cleaning services tailored to your needs.</p>
      </div>

      <div className="services-cards">
        {services.map(({ Icon, title, description, features }) => (
          <div key={title} className="service-card">
            <div className="icon-wrapper">
              <div className="icon-inner">
                <Icon className="service-icon" />
              </div>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
              {features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}