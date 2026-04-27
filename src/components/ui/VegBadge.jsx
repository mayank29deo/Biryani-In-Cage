// FSSAI-style veg/non-veg dots used on every menu item.
export default function VegBadge({ veg }) {
  return (
    <span
      role="img"
      aria-label={veg ? 'Vegetarian' : 'Non-vegetarian'}
      className={veg ? 'veg-dot' : 'nonveg-dot'}
    />
  );
}
