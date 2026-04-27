// Menu data — transcribed directly from the printed menu cards.
// Pricing format: `price` is full plate; `priceHalf` is half plate where the
// menu offers it. `veg: true` shows the green dot, `false` shows red.
//
// IMPORTANT — Biryani section: the printed menu pages we captured do not list
// the biryani items individually (they're on a separate card we don't yet
// have). The items below are placeholders sized for a typical Deoghar
// biryani-house menu. Owner: confirm names/prices and replace.

const cat = (id, label, blurb) => ({ id, label, blurb });

export const CATEGORIES = [
  cat('biryani', 'Biryani', 'The hero. Long-grain basmati, slow-dum.'),
  cat('starter-veg', 'Veg Starters', 'Crispy, saucy, made for sharing.'),
  cat('starter-nonveg', 'Non-Veg Starters', 'Tandoor-fired and wok-tossed.'),
  cat('main-veg', 'Veg Main Course', 'Gravies that pair with everything.'),
  cat('main-nonveg', 'Non-Veg Main Course', 'House gravies, slow-built.'),
  cat('rice', 'Fried Rice', 'Wok-fired, restaurant-style.'),
  cat('noodles', 'Noodles', 'Indo-Chinese classics.'),
  cat('soup', 'Soups', 'A warm start.'),
  cat('bread', 'Breads', 'Tawa, tandoor, all of it.'),
  cat('beverage', 'Beverages & Desserts', 'Wash it down. Or finish sweet.'),
];

let _id = 0;
const item = (data) => ({ id: ++_id, ...data });

export const MENU = [
  // ─────────────────────────────────────────────────────────────────────
  // BIRYANI — placeholders. Owner: confirm with the live menu card.
  // ─────────────────────────────────────────────────────────────────────
  item({ category: 'biryani', name: 'Cage Special Chicken Biryani', desc: "House biryani — long-grain basmati, slow dum, our masala blend.", price: 280, veg: false, popular: true, hero: true }),
  item({ category: 'biryani', name: 'Hyderabadi Chicken Dum Biryani', desc: 'Kacchi-style dum, sealed pot, fragrant saffron strands.', price: 290, veg: false, popular: true }),
  item({ category: 'biryani', name: 'Lucknowi Chicken Biryani', desc: 'Awadhi-style — gentler spice, deeper aroma.', price: 290, veg: false }),
  item({ category: 'biryani', name: 'Mutton Dum Biryani', desc: 'Slow-cooked mutton, fall-apart tender, layered with rice.', price: 360, veg: false, popular: true }),
  item({ category: 'biryani', name: 'Egg Biryani', desc: 'For when you want biryani without the wait.', price: 200, veg: false }),
  item({ category: 'biryani', name: 'Prawn Biryani', desc: 'Coastal twist — succulent prawns, biryani masala.', price: 320, veg: false }),
  item({ category: 'biryani', name: 'Veg Cage Biryani', desc: "Loaded with vegetables, paneer cubes, basmati, dum-finished.", price: 220, veg: true, popular: true }),
  item({ category: 'biryani', name: 'Paneer Tikka Biryani', desc: 'Tandoor-charred paneer tikka folded into biryani rice.', price: 240, veg: true }),

  // ─────────────────────────────────────────────────────────────────────
  // VEG STARTERS  (transcribed from menu page 1)
  // ─────────────────────────────────────────────────────────────────────
  item({ category: 'starter-veg', name: 'Veg Manchurian (8 Pcs)', price: 210, priceHalf: 130, veg: true, popular: true }),
  item({ category: 'starter-veg', name: 'Crispy Veg', price: 220, veg: true }),
  item({ category: 'starter-veg', name: 'Gobi 65', price: 220, veg: true }),
  item({ category: 'starter-veg', name: 'Chilli Gobi', price: 220, veg: true }),
  item({ category: 'starter-veg', name: 'Gobi Manchurian', price: 240, veg: true }),
  item({ category: 'starter-veg', name: 'Paneer 65', price: 240, veg: true, popular: true }),
  item({ category: 'starter-veg', name: 'Paneer Manchurian', price: 240, priceHalf: 140, veg: true }),
  item({ category: 'starter-veg', name: 'Chilli Paneer (Dry / Gravy)', price: 230, priceHalf: 130, veg: true, popular: true }),
  item({ category: 'starter-veg', name: 'Paneer Majestic', price: 250, veg: true }),
  item({ category: 'starter-veg', name: 'Paneer 555 Garlic', price: 260, veg: true }),
  item({ category: 'starter-veg', name: 'Pepper Paneer', price: 240, veg: true }),
  item({ category: 'starter-veg', name: 'Baby Corn Manchurian', price: 230, veg: true }),
  item({ category: 'starter-veg', name: 'Chilli Baby Corn', price: 230, veg: true }),
  item({ category: 'starter-veg', name: 'Crispy Baby Corn', price: 230, veg: true }),
  item({ category: 'starter-veg', name: 'Baby Corn Golden Fry', price: 230, veg: true }),
  item({ category: 'starter-veg', name: 'Mushroom 65', price: 240, veg: true }),
  item({ category: 'starter-veg', name: 'Mushroom Manchurian', price: 240, veg: true }),
  item({ category: 'starter-veg', name: 'Mushroom Chilli', price: 230, priceHalf: 130, veg: true }),
  item({ category: 'starter-veg', name: 'Paneer Pakora', price: 180, veg: true }),
  item({ category: 'starter-veg', name: 'Soya Chap 65', price: 250, veg: true }),
  item({ category: 'starter-veg', name: 'Soya Chap Chilli (Dry)', price: 250, veg: true }),

  // ─────────────────────────────────────────────────────────────────────
  // NON-VEG STARTERS — placeholders. Owner: confirm with the live menu.
  // ─────────────────────────────────────────────────────────────────────
  item({ category: 'starter-nonveg', name: 'Chicken 65', price: 230, veg: false, popular: true }),
  item({ category: 'starter-nonveg', name: 'Chilli Chicken (Dry / Gravy)', price: 240, priceHalf: 140, veg: false, popular: true }),
  item({ category: 'starter-nonveg', name: 'Chicken Manchurian', price: 240, veg: false }),
  item({ category: 'starter-nonveg', name: 'Chicken Lollipop (6 Pcs)', price: 280, veg: false }),
  item({ category: 'starter-nonveg', name: 'Drums of Heaven', price: 290, veg: false }),
  item({ category: 'starter-nonveg', name: 'Chicken Tikka', price: 280, veg: false }),
  item({ category: 'starter-nonveg', name: 'Tandoori Chicken (Half / Full)', price: 380, priceHalf: 220, veg: false }),
  item({ category: 'starter-nonveg', name: 'Fish Tikka', price: 320, veg: false }),
  item({ category: 'starter-nonveg', name: 'Chilli Prawn', price: 320, veg: false }),

  // ─────────────────────────────────────────────────────────────────────
  // VEG MAIN COURSE  (transcribed from menu page 2)
  // ─────────────────────────────────────────────────────────────────────
  item({ category: 'main-veg', name: 'Paneer Butter Masala', price: 230, priceHalf: 130, veg: true, popular: true }),
  item({ category: 'main-veg', name: 'Paneer Masala', price: 230, priceHalf: 130, veg: true }),
  item({ category: 'main-veg', name: 'Sahi Paneer', price: 260, priceHalf: 150, veg: true }),
  item({ category: 'main-veg', name: 'Creamy Mix Veg', price: 210, priceHalf: 130, veg: true }),
  item({ category: 'main-veg', name: 'Paneer Jail Masala', price: 240, priceHalf: 140, veg: true, popular: true }),
  item({ category: 'main-veg', name: 'Paneer Do Pyaza', price: 250, priceHalf: 140, veg: true }),
  item({ category: 'main-veg', name: 'Paneer Kadhai', price: 240, priceHalf: 140, veg: true }),
  item({ category: 'main-veg', name: 'Paneer Korma', price: 250, veg: true }),
  item({ category: 'main-veg', name: 'Kaju Paneer (Sweet / Spicy)', price: 260, veg: true }),
  item({ category: 'main-veg', name: 'Mushroom Do Pyaza', price: 250, priceHalf: 140, veg: true }),
  item({ category: 'main-veg', name: 'Mushroom Jail Masala', price: 250, priceHalf: 140, veg: true }),
  item({ category: 'main-veg', name: 'Mushroom Kadhai', price: 240, priceHalf: 140, veg: true }),
  item({ category: 'main-veg', name: 'Mushroom Butter Masala', price: 230, priceHalf: 130, veg: true }),
  item({ category: 'main-veg', name: 'Mushroom Masala', price: 230, priceHalf: 130, veg: true }),
  item({ category: 'main-veg', name: 'Baby Corn Kadhai', price: 250, veg: true }),
  item({ category: 'main-veg', name: 'Veg Chatpat', price: 240, veg: true }),
  item({ category: 'main-veg', name: 'Paneer Malai Kofta', price: 270, veg: true }),
  item({ category: 'main-veg', name: 'Soya Chap Masala', price: 250, veg: true }),
  item({ category: 'main-veg', name: 'Finger Paneer Masala (6 Pcs)', price: 260, veg: true }),
  item({ category: 'main-veg', name: 'Paneer Tikka Masala (8 Pcs)', price: 300, veg: true }),
  item({ category: 'main-veg', name: 'Paneer Kolhapuri', price: 280, veg: true }),

  // ─────────────────────────────────────────────────────────────────────
  // NON-VEG MAIN COURSE — placeholders. Owner: confirm with the live menu.
  // ─────────────────────────────────────────────────────────────────────
  item({ category: 'main-nonveg', name: 'Butter Chicken', price: 290, priceHalf: 170, veg: false, popular: true }),
  item({ category: 'main-nonveg', name: 'Chicken Masala', price: 270, priceHalf: 160, veg: false }),
  item({ category: 'main-nonveg', name: 'Chicken Kadhai', price: 280, priceHalf: 160, veg: false }),
  item({ category: 'main-nonveg', name: 'Chicken Do Pyaza', price: 290, priceHalf: 170, veg: false }),
  item({ category: 'main-nonveg', name: 'Mutton Masala', price: 360, veg: false }),
  item({ category: 'main-nonveg', name: 'Mutton Kadhai', price: 380, veg: false }),
  item({ category: 'main-nonveg', name: 'Egg Curry', price: 180, veg: false }),
  item({ category: 'main-nonveg', name: 'Prawn Curry', price: 320, veg: false }),

  // ─────────────────────────────────────────────────────────────────────
  // FRIED RICE
  // ─────────────────────────────────────────────────────────────────────
  item({ category: 'rice', name: 'Plain Rice (Steam) — Half / Full', price: 80, priceHalf: 40, veg: true }),
  item({ category: 'rice', name: 'Veg Fried Rice', price: 140, veg: true }),
  item({ category: 'rice', name: 'Jeera Rice', price: 140, veg: true }),
  item({ category: 'rice', name: 'Paneer Fried Rice', price: 150, veg: true }),
  item({ category: 'rice', name: 'Mix Veg Fried Rice', price: 170, veg: true }),
  item({ category: 'rice', name: 'Mushroom Fried Rice', price: 150, veg: true }),
  item({ category: 'rice', name: 'Chicken Fried Rice', price: 170, veg: false, popular: true }),
  item({ category: 'rice', name: 'Egg Fried Rice', price: 160, veg: false }),
  item({ category: 'rice', name: 'Prawn Fried Rice', price: 200, veg: false }),
  item({ category: 'rice', name: 'Chilli Garlic Fried Rice (Veg)', price: 180, veg: true }),
  item({ category: 'rice', name: 'Chilli Garlic Fried Rice (Non-Veg)', price: 220, veg: false }),

  // ─────────────────────────────────────────────────────────────────────
  // NOODLES
  // ─────────────────────────────────────────────────────────────────────
  item({ category: 'noodles', name: 'Veg Hakka Noodles', price: 120, veg: true, popular: true }),
  item({ category: 'noodles', name: 'Mushroom Noodles', price: 130, veg: true }),
  item({ category: 'noodles', name: 'Paneer Noodles', price: 130, veg: true }),
  item({ category: 'noodles', name: 'Sezawan Noodles', price: 130, veg: true }),
  item({ category: 'noodles', name: 'Paneer Sezawan Noodles', price: 140, veg: true }),
  item({ category: 'noodles', name: 'Chicken Hakka Noodles', price: 160, veg: false, popular: true }),
  item({ category: 'noodles', name: 'Egg Hakka Noodles', price: 150, veg: false }),
  item({ category: 'noodles', name: 'Chilli Garlic Noodles', price: 140, veg: true }),
  item({ category: 'noodles', name: 'Chicken Sezawan Noodles', price: 180, veg: false }),
  item({ category: 'noodles', name: 'Mix Noodles (Veg)', price: 160, veg: true }),
  item({ category: 'noodles', name: 'Chicken Chopsy', price: 200, veg: false }),
  item({ category: 'noodles', name: 'Veg Chopsy', price: 170, veg: true }),
  item({ category: 'noodles', name: 'Prawn Mix Noodles', price: 220, veg: false }),

  // ─────────────────────────────────────────────────────────────────────
  // SOUP
  // ─────────────────────────────────────────────────────────────────────
  item({ category: 'soup', name: 'Veg Hot & Sour Soup', price: 100, veg: true }),
  item({ category: 'soup', name: 'Veg Clear Soup', price: 100, veg: true }),
  item({ category: 'soup', name: 'Veg Manchow Soup', price: 120, veg: true }),
  item({ category: 'soup', name: 'Chicken Hot & Sour Soup', price: 130, veg: false }),
  item({ category: 'soup', name: 'Chicken Manchow Soup', price: 140, veg: false, popular: true }),
  item({ category: 'soup', name: 'Chicken Dragon Soup', price: 150, veg: false }),

  // ─────────────────────────────────────────────────────────────────────
  // BREADS
  // ─────────────────────────────────────────────────────────────────────
  item({ category: 'bread', name: 'Tawa Roti', price: 10, veg: true }),
  item({ category: 'bread', name: 'Tawa Ghee Roti', price: 15, veg: true }),
  item({ category: 'bread', name: 'Tandoori Laccha Paratha (Plain / Butter)', price: 35, priceHalf: 30, veg: true }),
  item({ category: 'bread', name: 'Atta Tandoori Roti (Plain / Butter)', price: 25, priceHalf: 20, veg: true }),
  item({ category: 'bread', name: 'Naan (Plain / Butter)', price: 45, priceHalf: 40, veg: true }),
  item({ category: 'bread', name: 'Pudina Paratha (Butter)', price: 40, veg: true }),
  item({ category: 'bread', name: 'Garlic Naan', price: 70, veg: true }),
  item({ category: 'bread', name: 'Chilli Garlic Naan', price: 80, veg: true, popular: true }),
  item({ category: 'bread', name: 'Paneer Kulcha', price: 80, veg: true }),

  // ─────────────────────────────────────────────────────────────────────
  // BEVERAGES & DESSERTS
  // ─────────────────────────────────────────────────────────────────────
  item({ category: 'beverage', name: 'Masala Cold Drink', price: 30, veg: true }),
  item({ category: 'beverage', name: 'Plain Cold Drink', price: 40, veg: true }),
  item({ category: 'beverage', name: 'Rabri with 2 Gulab Jamun', price: 70, veg: true, popular: true }),
];

// ─────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────

export const getByCategory = (categoryId) =>
  MENU.filter((m) => m.category === categoryId);

export const getPopular = (limit = 8) =>
  MENU.filter((m) => m.popular).slice(0, limit);

export const getCategoryLabel = (id) =>
  CATEGORIES.find((c) => c.id === id)?.label ?? id;

export const searchMenu = (query) => {
  const q = query.trim().toLowerCase();
  if (!q) return MENU;
  return MENU.filter(
    (m) =>
      m.name.toLowerCase().includes(q) ||
      (m.desc && m.desc.toLowerCase().includes(q)) ||
      getCategoryLabel(m.category).toLowerCase().includes(q),
  );
};

// Curated featured biryanis for the home Signature section.
export const SIGNATURE_BIRYANIS = MENU.filter((m) => m.category === 'biryani' && m.popular);
