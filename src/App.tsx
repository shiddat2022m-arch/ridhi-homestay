import { useEffect, useState, type ReactNode } from 'react';
import {
  ArrowRight,
  Bath,
  BedDouble,
  Bike,
  Car,
  Check,
  Clock3,
  Coffee,
  ExternalLink,
  Flower2,
  Heart,
  House,
  Leaf,
  MapPin,
  Menu,
  Mountain,
  PawPrint,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  UtensilsCrossed,
  Users,
  Wifi,
  X,
} from 'lucide-react';

const whatsappMessage = 'Hello Riddhi Homestays, I would like to enquire about room availability and booking.';
const whatsappUrl = `https://wa.me/918626873060?text=${encodeURIComponent(whatsappMessage)}`;
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Riddhi+Homestays+Lawi+Khurd+Solan';

const IMG = {
  hero: 'https://images.pexels.com/photos/939715/pexels-photo-939715.jpeg?auto=compress&cs=tinysrgb&w=1920',
  heroAlt: 'Mountain homestay house with green roof against Himalayan peaks',
  exterior: 'https://images.pexels.com/photos/16172055/pexels-photo-16172055.jpeg?auto=compress&cs=tinysrgb&w=1920',
  exteriorAlt: 'Traditional mountain homestay in Himachal Pradesh',
  village: 'https://images.pexels.com/photos/13727745/pexels-photo-13727745.jpeg?auto=compress&cs=tinysrgb&w=1920',
  villageAlt: 'Mist-covered village nestled in Himachal Pradesh',
  lodge: 'https://images.pexels.com/photos/38071985/pexels-photo-38071985.jpeg?auto=compress&cs=tinysrgb&w=1920',
  lodgeAlt: 'Mountain lodge with prayer flags under snow-capped peaks',
  sunset: 'https://images.pexels.com/photos/32464426/pexels-photo-32464426.jpeg?auto=compress&cs=tinysrgb&w=1920',
  sunsetAlt: 'Himalayan mountains glowing at sunset in Himachal Pradesh',
  roomGarden: 'https://images.pexels.com/photos/30070551/pexels-photo-30070551.jpeg?auto=compress&cs=tinysrgb&w=940',
  roomGardenAlt: 'Warm wooden cabin bedroom with scenic mountain view',
  roomFamily: 'https://images.pexels.com/photos/8583811/pexels-photo-8583811.jpeg?auto=compress&cs=tinysrgb&w=940',
  roomFamilyAlt: 'Bright spacious family room with fireplace and large windows',
  roomView: 'https://images.pexels.com/photos/34838628/pexels-photo-34838628.jpeg?auto=compress&cs=tinysrgb&w=940',
  roomViewAlt: 'Tranquil bedroom with wooden bed and mountain view through floral curtains',
  roomRustic: 'https://images.pexels.com/photos/15456211/pexels-photo-15456211.jpeg?auto=compress&cs=tinysrgb&w=940',
  roomRusticAlt: 'Rustic bedroom interior with wooden elements and natural light',
  roomCozy: 'https://images.pexels.com/photos/7848968/pexels-photo-7848968.jpeg?auto=compress&cs=tinysrgb&w=940',
  roomCozyAlt: 'Cozy room with green mountain view through large windows',
  livingRoom: 'https://images.pexels.com/photos/10855258/pexels-photo-10855258.jpeg?auto=compress&cs=tinysrgb&w=940',
  livingRoomAlt: 'Cozy living room with wooden beams and warm furniture',
  food: 'https://images.pexels.com/photos/29148133/pexels-photo-29148133.jpeg?auto=compress&cs=tinysrgb&w=940',
  foodAlt: 'Indian vegetarian thali with naan, paneer curry and aromatic rice',
  food2: 'https://images.pexels.com/photos/35008222/pexels-photo-35008222.jpeg?auto=compress&cs=tinysrgb&w=940',
  food2Alt: 'Indian vegetarian thali with chapati, rice, dal and yogurt',
  garden: 'https://images.pexels.com/photos/8180453/pexels-photo-8180453.jpeg?auto=compress&cs=tinysrgb&w=940',
  gardenAlt: 'Serene garden with wooden bench and potted plants',
  garden2: 'https://images.pexels.com/photos/34109544/pexels-photo-34109544.jpeg?auto=compress&cs=tinysrgb&w=940',
  garden2Alt: 'Garden with wooden swing surrounded by lush greenery',
  windowView: 'https://images.pexels.com/photos/5910228/pexels-photo-5910228.jpeg?auto=compress&cs=tinysrgb&w=940',
  windowViewAlt: 'Spectacular mountain view from window in a hilly area home',
  mountains: 'https://images.pexels.com/photos/29404614/pexels-photo-29404614.jpeg?auto=compress&cs=tinysrgb&w=1920',
  mountainsAlt: 'Majestic Himalayan mountains under a clear blue sky',
  valley: 'https://images.pexels.com/photos/26184221/pexels-photo-26184221.jpeg?auto=compress&cs=tinysrgb&w=940',
  valleyAlt: 'Lush valley view in Dharamshala with distant mountains',
  terrace: 'https://images.pexels.com/photos/9580562/pexels-photo-9580562.jpeg?auto=compress&cs=tinysrgb&w=940',
  terraceAlt: 'Mountain view from a terrace in the Himalayas',
};

const navItems: [string, string][] = [
  ['Home', '/'], ['Rooms', '/rooms'], ['About', '/about'], ['Amenities', '/amenities'],
  ['Gallery', '/gallery'], ['Location', '/location'], ['Contact', '/contact'],
];

const amenities = [
  { icon: Bath, title: 'Private bathroom', text: 'Fresh, spotless spaces with 24-hour hot water.' },
  { icon: Mountain, title: 'Mountain views', text: 'Wake up to the green hills of Solan every morning.' },
  { icon: House, title: 'Balcony & terrace', text: 'A quiet corner for tea and long, restful views.' },
  { icon: Flower2, title: 'Garden', text: 'Greenery and fresh mountain air all around the property.' },
  { icon: Car, title: 'Free parking', text: 'Easy, secure parking right at the homestay.' },
  { icon: Sparkles, title: 'Laundry', text: 'Convenient laundry service for longer stays.' },
  { icon: Bike, title: 'Bike hire', text: 'Explore Solan and nearby hills at your own pace.' },
  { icon: Car, title: 'Car rental', text: 'Local travel and sightseeing made easy on request.' },
  { icon: UtensilsCrossed, title: 'Pure vegetarian food', text: 'Wholesome homemade Himachali meals prepared fresh.' },
  { icon: PawPrint, title: 'Pet friendly', text: 'Your four-legged family members are welcome.' },
  { icon: Heart, title: 'Family friendly', text: 'Comfortable, calm and made for guests of all ages.' },
  { icon: ShieldCheck, title: 'Private check-in', text: 'A smooth, easy arrival and departure experience.' },
];

const attractions: [string, string][] = [
  ['ISBT / New Bus Stand Solan', 'A convenient starting point for the city'],
  ['Scandal Point', 'A classic Shimla landmark for an afternoon out'],
  ['Jakholi Temple', 'Peaceful local culture and mountain air'],
  ['Mushroom Chowk', 'Solan\'s distinctive local landmark'],
  ['Dagshai Jail Museum', 'A fascinating heritage day trip'],
  ['Tara Devi Mandir', 'A serene temple above the valley'],
  ['Shimla Victory Tunnel', 'A landmark gateway into the Queen of Hills'],
];

const stats = [
  { value: '₹690', label: 'Starting price per night' },
  { value: '12:00', label: 'Check-in time (PM)' },
  { value: '11:00', label: 'Check-out time (AM)' },
  { value: '4.9', label: 'Guest rating out of 5' },
];

const whyChooseUs = [
  { icon: Mountain, title: 'Quiet mountain setting', text: 'Breathe a little deeper with lush views and the gentle rhythm of the hills surrounding you.' },
  { icon: Heart, title: 'Warm, personal care', text: 'We look after the small things so your time here feels effortless and genuinely restful.' },
  { icon: UtensilsCrossed, title: 'Food that feels like home', text: 'Enjoy pure vegetarian meals prepared fresh each day, just the way you like them.' },
  { icon: Users, title: 'Family-friendly space', text: 'Comfortable rooms and common areas designed for guests of every age to feel at ease.' },
  { icon: Leaf, title: 'Garden & open spaces', text: 'Step outside into greenery, fresh air and quiet corners for reading, tea or conversation.' },
  { icon: ShieldCheck, title: 'Safe & private', text: 'Private entrances, secure parking and a peaceful neighbourhood for complete peace of mind.' },
];

const foodItems = [
  { meal: 'Breakfast', time: '7:00 – 10:00 AM', items: 'Aloo paratha, poha, fresh fruit, tea & coffee, seasonal juice' },
  { meal: 'Lunch', time: '12:30 – 2:30 PM', items: 'Rice, dal, seasonal sabzi, roti, salad, homemade pickle' },
  { meal: 'Dinner', time: '7:30 – 9:30 PM', items: 'Hot sabzi, dal, rice, roti, dessert on weekends' },
];

function WhatsAppButton({ children = 'Book on WhatsApp', outline = false, full = false }: { children?: ReactNode; outline?: boolean; full?: boolean }) {
  return <a className={`button ${outline ? 'button-outline' : ''} ${full ? 'button-full' : ''}`} href={whatsappUrl} target="_blank" rel="noreferrer">{children}<ArrowRight size={16} /></a>;
}

function PageShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  useEffect(() => { window.scrollTo(0, 0); setMenuOpen(false); }, [path]);
  return <>
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Riddhi Homestays home"><span className="brand-mark"><Mountain size={22} /></span><span><strong>Riddhi</strong><small>HOMESTAYS · SOLAN</small></span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>{navItems.map(([label, href]) => <a className={path === href ? 'active' : ''} href={href} key={href}>{label}</a>)}<WhatsAppButton>Enquire now</WhatsAppButton></nav>
      </div>
    </header>
    {children}
    <Footer />
  </>;
}

function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-intro"><div className="container narrow"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="intro-text">{text}</p></div></section>;
}

function Home() {
  return <>
    <section className="hero" style={{ backgroundImage: `url("${IMG.hero}")` }}><div className="hero-shade" /><div className="container hero-content"><p className="eyebrow light">A quiet corner in the hills of Solan</p><h1>Stay closer to<br /><em>what matters.</em></h1><p className="hero-copy">A warm, peaceful homestay in Lawi Khurd, Solan where mountain mornings, homemade food and heartfelt hospitality come naturally.</p><div className="hero-actions"><WhatsAppButton>Book your stay</WhatsAppButton><a className="text-link light-link" href="/rooms">Explore rooms <ArrowRight size={16} /></a></div></div><div className="hero-caption"><span>Riddhi Homestays</span><span>Lawi Khurd · Solan, Himachal Pradesh</span></div></section>

    <section className="stats-strip"><div className="container stats-grid">{stats.map(({ value, label }) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>

    <section className="welcome section"><div className="container split"><div><p className="eyebrow">Welcome home</p><h2>A little more than a place to stay.</h2><p className="body-large">Set in the green folds of Solan, Riddhi Homestays is made for slow mornings, shared meals and the kind of rest you remember long after you leave.</p><p className="muted">Whether you are travelling with family, taking a quiet break from the city, or discovering Himachal for the first time, our doors are open with all the comforts of home. Every room is designed for rest, every meal is cooked with care, and every guest is treated as part of the family.</p><p className="muted">From the moment you arrive, you will feel the difference between a hotel and a homestay — the warmth of being welcomed by name, the smell of fresh food, and the peace of a quiet hillside setting.</p><div className="welcome-buttons"><WhatsAppButton>Book your stay</WhatsAppButton><a className="text-link" href="/about">Read our story <ArrowRight size={16} /></a></div></div><div className="welcome-images"><div className="welcome-image-main"><img src={IMG.exterior} alt={IMG.exteriorAlt} /></div><div className="welcome-image-side"><img src={IMG.garden} alt={IMG.gardenAlt} /></div></div></div></section>

    <RoomsPreview />

    <section className="dark-section section"><div className="container"><div className="section-head light-head"><div><p className="eyebrow light">The Riddhi difference</p><h2>Made for your kind<br />of getaway.</h2></div><p>Thoughtful details, quiet surroundings and genuine care in every single stay.</p></div><div className="feature-grid">{whyChooseUs.map(({ icon: Icon, title, text }, i) => <Feature key={title} number={`0${i + 1}`} icon={Icon} title={title} text={text} />)}</div></div></section>

    <section className="section amenities-home"><div className="container"><div className="section-head"><div><p className="eyebrow">Comfort, considered</p><h2>Everything you need.<br />Nothing you don't.</h2></div><a className="text-link" href="/amenities">View all amenities <ArrowRight size={16} /></a></div><div className="amenity-row">{amenities.slice(0, 6).map(({ icon: Icon, title }) => <div className="amenity-mini" key={title}><Icon size={22} /><span>{title}</span></div>)}</div></div></section>

    <section className="food-section section"><div className="container split image-split"><div className="image-frame"><img src={IMG.food} alt={IMG.foodAlt} /></div><div><p className="eyebrow">From our kitchen</p><h2>Pure vegetarian.<br /><em>Made with care.</em></h2><p className="body-large">Start your day with a warm breakfast, come home to a comforting lunch and end it with a freshly cooked dinner made just for you.</p><p className="muted">Our kitchen serves only pure vegetarian food, prepared with locally sourced ingredients and the flavours of home. Tell us what you love, what you cannot eat, and what you are craving — we will do our best to make every meal feel special.</p><div className="food-highlights"><div className="food-highlight"><Coffee size={20} /><span>Customisable breakfast</span></div><div className="food-highlight"><UtensilsCrossed size={20} /><span>Lunch & dinner on request</span></div><div className="food-highlight"><Leaf size={20} /><span>Locally sourced ingredients</span></div></div><a className="text-link" href="/contact">Ask about dining <ArrowRight size={16} /></a></div></div></section>

    <section className="section attractions"><div className="container split"><div><p className="eyebrow">Make a day of it</p><h2>Solan, at<br /><em>your doorstep.</em></h2><p className="muted">From heritage trails to temple visits and lively local corners, there is always another side of the hills to discover. Ask us for directions, timings and local tips — we are happy to help you plan your day out.</p><a className="text-link" href="/location">Explore the location <ArrowRight size={16} /></a></div><div className="attraction-list">{attractions.slice(0, 5).map(([title, text]) => <a href="/location" className="attraction" key={title}><span><strong>{title}</strong><small>{text}</small></span><ArrowRight size={18} /></a>)}</div></div></section>

    <section className="section testimonials"><div className="container"><div className="section-head centered"><div><p className="eyebrow">Kind words from guests</p><h2>What our guests say.</h2></div></div><div className="testimonial-grid"><Testimonial name="Amit Sharma" from="Delhi" text="One of the best homestays we have stayed at. The rooms were spotless, the food was delicious, and the mountain views from the balcony were breathtaking. The host treated us like family." /><Testimonial name="Priya Nair" from="Bangalore" text="A perfect weekend getaway from the city rush. The homemade vegetarian food was a highlight — simple, fresh and full of flavour. We will definitely come back." /><Testimonial name="Rohit & Neha" from="Chandigarh" text="We travelled with our two kids and felt completely at home. The garden, the quiet location and the warm hospitality made this a trip to remember." /></div></div></section>

    <CtaBanner />
  </>;
}

function RoomsPreview() {
  return <section className="section rooms-section"><div className="container"><div className="section-head"><div><p className="eyebrow">Stay a while</p><h2>Rooms with room<br />to breathe.</h2></div><a className="text-link" href="/rooms">See all rooms <ArrowRight size={16} /></a></div><div className="room-grid"><RoomCard image={IMG.roomGarden} imageAlt={IMG.roomGardenAlt} title="The Garden Room" text="A bright, comfortable double room with a private bathroom and a window looking into the green garden." /><RoomCard image={IMG.roomFamily} imageAlt={IMG.roomFamilyAlt} title="The Family Room" text="A spacious family-friendly stay with comfortable bedding, seating area and a private entrance." /><RoomCard image={IMG.roomView} imageAlt={IMG.roomViewAlt} title="The View Room" text="Settle in with a balcony, fresh mountain air and views across the Solan valley." /></div></div></section>;
}

function RoomCard({ image, imageAlt, title, text }: { image: string; imageAlt: string; title: string; text: string }) {
  return <article className="room-card"><div className="card-image"><img src={image} alt={imageAlt} /><span>From ₹690 / night</span></div><div className="card-body"><h3>{title}</h3><p>{text}</p><div className="card-meta"><span><BedDouble size={15} /> Comfortable bedding</span><span><Bath size={15} /> Private bath</span></div><WhatsAppButton outline full>Enquire about this room</WhatsAppButton></div></article>;
}

function Feature({ number, icon: Icon, title, text }: { number: string; icon: typeof Mountain; title: string; text: string }) {
  return <div className="feature"><span className="feature-number">{number}</span><Icon size={27} /><h3>{title}</h3><p>{text}</p></div>;
}

function Testimonial({ name, from, text }: { name: string; from: string; text: string }) {
  return <div className="testimonial"><div className="stars">{[...Array(5)].map((_, i) => <Star key={i} size={15} fill="currentColor" />)}</div><p>"{text}"</p><div className="testimonial-author"><strong>{name}</strong><small>{from}</small></div></div>;
}

function Attractions() {
  return <section className="section attractions"><div className="container split"><div><p className="eyebrow">Make a day of it</p><h2>Solan, at<br /><em>your doorstep.</em></h2><p className="muted">From heritage trails to temple visits and lively local corners, there is always another side of the hills to discover.</p><a className="text-link" href="/location">Explore the location <ArrowRight size={16} /></a></div><div className="attraction-list">{attractions.slice(0, 4).map(([title, text]) => <a href="/location" className="attraction" key={title}><span><strong>{title}</strong><small>{text}</small></span><ArrowRight size={18} /></a>)}</div></div></section>;
}

function CtaBanner() { return <section className="cta" style={{ backgroundImage: `url("${IMG.mountains}")` }}><div className="cta-shade" /><div className="container cta-content"><p className="eyebrow light">Come as guests. Leave as friends.</p><h2>Your peaceful Solan stay<br />starts here.</h2><p className="cta-text">Rooms from ₹690 per night. Quick replies on WhatsApp.</p><WhatsAppButton>Check availability</WhatsAppButton></div></section>; }

function Rooms() {
  const rooms = [
    { image: IMG.roomGarden, imageAlt: IMG.roomGardenAlt, title: 'The Garden Room', text: 'A restful double room with comfortable bedding, a private bathroom and a window looking into the green garden. Perfect for couples or solo travellers seeking a quiet retreat.', features: ['Private bathroom', 'Garden view', 'Double bed', 'Warm bedding'] },
    { image: IMG.roomFamily, imageAlt: IMG.roomFamilyAlt, title: 'The Family Room', text: 'A generous space for families with easy access, a private entrance, seating area and everything needed for a comfortable stay together. Roomy, bright and welcoming.', features: ['Private entrance', 'Family bedding', 'Seating area', 'Spacious layout'] },
    { image: IMG.roomView, imageAlt: IMG.roomViewAlt, title: 'The View Room', text: 'A bright room with mountain and valley views, a private bathroom and a private balcony for unhurried morning tea and evening sunsets over the hills.', features: ['Mountain view balcony', 'Private bathroom', 'Valley views', 'Natural light'] },
  ];
  return <><PageIntro eyebrow="Find your space" title="Rooms made for slow mornings." text="Simple, comfortable and cared for. Choose a room that feels right for your Himachal escape, with the warmth and privacy of a real home." /><section className="section"><div className="container"><div className="room-list">{rooms.map((room) => <RoomCardLarge key={room.title} {...room} />)}</div><div className="booking-strip"><div><p className="eyebrow">Good to know</p><h3>From ₹690 per night, depending on room and season.</h3></div><WhatsAppButton>Ask about dates</WhatsAppButton></div></div></section></>;
}

function RoomCardLarge({ image, imageAlt, title, text, features }: { image: string; imageAlt: string; title: string; text: string; features: string[] }) {
  return <article className="room-card-large"><div className="card-image-large"><img src={image} alt={imageAlt} /><span>From ₹690 / night</span></div><div className="card-body-large"><h3>{title}</h3><p>{text}</p><div className="feature-tags">{features.map((f) => <span key={f}><Check size={14} /> {f}</span>)}</div><WhatsAppButton outline full>Enquire about this room</WhatsAppButton></div></article>;
}

function About() { return <><PageIntro eyebrow="Our story" title="A homestay with a homely heart." text="Riddhi Homestays is a family-run place in Lawi Khurd, Solan — created for people who value calm surroundings, kind hospitality and the simple comforts of home." /><section className="section"><div className="container split image-split about-split"><div className="image-frame tall"><img src={IMG.village} alt={IMG.villageAlt} /></div><div><p className="eyebrow">The feeling we hope to share</p><h2>Come for the views.<br /><em>Stay for the warmth.</em></h2><p className="body-large">There is a certain comfort in being welcomed by name, having a cup of tea appear when you need it and knowing someone is nearby if you need a hand.</p><p className="muted">Our peaceful location in Lawi Khurd gives you space to slow down without taking you far from the best of Solan and Shimla. It is a friendly, family-first base for quiet holidays, work trips and mountain adventures alike.</p><p className="muted">We started Riddhi Homestays with a simple idea: that a stay should feel less like a transaction and more like visiting a friend who happens to live in a beautiful place. Every detail — from the fresh flowers in your room to the food on your plate — is an expression of that warmth.</p><div className="check-list"><span><Check size={17} /> Mountain views and fresh air</span><span><Check size={17} /> Family-friendly atmosphere</span><span><Check size={17} /> Personal, attentive hosting</span><span><Check size={17} /> Pure vegetarian homemade food</span><span><Check size={17} /> Quiet, safe neighbourhood</span></div></div></div></section><section className="quote-section"><div className="container narrow"><Star size={22} /><p>"A stay should leave you feeling lighter than when you arrived."</p><small>Riddhi Homestays</small></div></section></>; }

function Amenities() { return <><PageIntro eyebrow="The little comforts" title="Comfort comes naturally here." text="From the essentials that make a stay easy to the thoughtful extras that make it memorable, everything is designed around your comfort and peace of mind." /><section className="section"><div className="container"><div className="amenities-grid">{amenities.map(({ icon: Icon, title, text }) => <div className="amenity-card" key={title}><div className="icon-box"><Icon size={23} /></div><h3>{title}</h3><p>{text}</p></div>)}</div></div></section><section className="food-callout section"><div className="container split"><div><p className="eyebrow">And always, something good to eat</p><h2>Homemade meals,<br /><em>your way.</em></h2><p className="body-large">Breakfast, lunch and dinner are prepared fresh with pure vegetarian ingredients.</p></div><div className="food-callout-content"><p className="muted">Let us know what you like, what you cannot eat, and any dietary preferences. We will do our best to make every meal feel like home. All meals are optional and can be customised for your group.</p><div className="food-items-list">{foodItems.map((item) => <div className="food-item" key={item.meal}><div className="food-item-head"><strong>{item.meal}</strong><span><Clock3 size={13} /> {item.time}</span></div><p>{item.items}</p></div>)}</div></div></div></section></>; }

function Gallery() {
  const gallery: [string, string][] = [
    [IMG.hero, IMG.heroAlt],
    [IMG.roomGarden, IMG.roomGardenAlt],
    [IMG.mountains, IMG.mountainsAlt],
    [IMG.food, IMG.foodAlt],
    [IMG.garden, IMG.gardenAlt],
    [IMG.roomFamily, IMG.roomFamilyAlt],
    [IMG.windowView, IMG.windowViewAlt],
    [IMG.livingRoom, IMG.livingRoomAlt],
    [IMG.roomView, IMG.roomViewAlt],
    [IMG.valley, IMG.valleyAlt],
  ];
  const [selected, setSelected] = useState<string | null>(null);
  return <><PageIntro eyebrow="A glimpse of Riddhi" title="The good days are waiting." text="A few corners, views and details from your next peaceful stay in Solan. Tap any photo to see it full size." /><section className="section"><div className="container gallery-grid">{gallery.map(([image, alt], index) => <button className={`gallery-item gallery-${(index % 5) + 1}`} onClick={() => setSelected(image)} key={image + index}><img src={image} alt={alt} /><span>{alt}<ArrowRight size={16} /></span></button>)}</div></section>{selected && <div className="lightbox" onClick={() => setSelected(null)}><button aria-label="Close gallery"><X /></button><img src={selected} alt="Expanded gallery view" /></div>}</>;
}

function Location() { return <><PageIntro eyebrow="Find your way here" title="Close to Solan. Away from the rush." text="Riddhi Homestays is tucked into Lawi Khurd with easy access to Solan, Shimla and the quiet beauty of Himachal Pradesh." /><section className="section location-section"><div className="container location-grid"><div className="map-wrap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.099398222558!2d77.09732471084216!3d30.911845676848515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f870034657529%3A0x1d343efa149a7688!2sRiddhi%20Homestays!5e0!3m2!1sen!2sin!4v1787913695290!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" title="Map showing Riddhi Homestays" /></div><div className="address-card"><MapPin size={25} /><p className="eyebrow">Our address</p><h2>Riddhi Homestays</h2><p>W36X+PXJ, Lawi Khurd,<br />Solan, Himachal Pradesh 173212</p><a className="button" href={mapsUrl} target="_blank" rel="noreferrer">Get directions <ExternalLink size={15} /></a></div></div></section><section className="section nearby"><div className="container"><div className="section-head"><div><p className="eyebrow">Nearby places</p><h2>See a little more<br />of Himachal.</h2></div><p className="muted">Ask us for local tips, directions and the best time to visit each spot.</p></div><div className="nearby-grid">{attractions.map(([title, text], index) => <div className="nearby-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section></>; }

function Contact() { return <><PageIntro eyebrow="We would love to hear from you" title="Let's plan your stay." text="Have a question about rooms, dates, food or getting here? Send us a WhatsApp message or give us a call — we are happy to help." /><section className="section contact-section"><div className="container contact-grid"><div className="contact-card primary-contact"><p className="eyebrow light">Start a conversation</p><h2>Tell us when<br /><em>you're coming.</em></h2><p>We will help you find the right room and share everything you need for an easy arrival. Messages are answered quickly on WhatsApp.</p><WhatsAppButton>Message on WhatsApp</WhatsAppButton></div><div className="contact-details"><ContactDetail icon={Phone} title="Call us" text="+91 86268 73060" href="tel:+918626873060" /><ContactDetail icon={MapPin} title="Visit us" text="W36X+PXJ, Lawi Khurd, Solan, Himachal Pradesh 173212" href={mapsUrl} /><ContactDetail icon={Clock3} title="Check-in & check-out" text="Check-in 12:00 PM · Check-out 11:00 AM" /><ContactDetail icon={UtensilsCrossed} title="Food & dining" text="Pure vegetarian homemade breakfast, lunch and dinner." /></div></div></section><section className="section booking-info"><div className="container"><div className="section-head"><div><p className="eyebrow">Plan with ease</p><h2>Everything clear<br />before you arrive.</h2></div></div><div className="info-grid"><div><strong>Starting price</strong><span>From ₹690 / night</span></div><div><strong>Best for</strong><span>Families, couples & solo stays</span></div><div><strong>Booking</strong><span>Quick replies on WhatsApp</span></div></div></div></section></>; }

function ContactDetail({ icon: Icon, title, text, href }: { icon: typeof Phone; title: string; text: string; href?: string }) { const content = <><span className="detail-icon"><Icon size={20} /></span><span><strong>{title}</strong><small>{text}</small></span></>; return href ? <a className="contact-detail" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{content}</a> : <div className="contact-detail">{content}</div>; }

function Footer() { return <footer className="footer"><div className="container footer-grid"><div><a className="brand footer-brand" href="/"><span className="brand-mark"><Mountain size={22} /></span><span><strong>Riddhi</strong><small>HOMESTAYS · SOLAN</small></span></a><p className="footer-intro">A peaceful mountain-view homestay in Solan, Himachal Pradesh. Come slow down with us — warm rooms, homemade food and genuine care await.</p></div><div><p className="footer-label">Explore</p><div className="footer-links">{navItems.slice(1, 6).map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div></div><div><p className="footer-label">Get in touch</p><p className="footer-contact">W36X+PXJ, Lawi Khurd<br />Solan, Himachal Pradesh 173212</p><a className="footer-phone" href="tel:+918626873060"><Phone size={15} /> +91 86268 73060</a><a className="footer-phone" href={whatsappUrl} target="_blank" rel="noreferrer"><Sparkles size={15} /> WhatsApp us</a></div></div><div className="container footer-bottom"><span>© 2024 Riddhi Homestays · Homestay in Solan</span><span>Mountain air · Homemade care</span></div></footer>; }

function App() { const path = window.location.pathname.replace(/\/$/, '') || '/'; let page: ReactNode = <Home />; if (path === '/rooms') page = <Rooms />; if (path === '/about') page = <About />; if (path === '/amenities') page = <Amenities />; if (path === '/gallery') page = <Gallery />; if (path === '/location') page = <Location />; if (path === '/contact') page = <Contact />; return <PageShell>{page}</PageShell>; }

export default App;
