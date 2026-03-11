/**
 * Category chip list – active chip highlighted, click to select.
 */

export function CategoryChips({ categories, activeIndex, onSelect }) {
  return (
    <div className="category-scroller">
      {categories.map((cat, i) => (
        <button
          key={cat}
          type="button"
          className={`category-chip ${i === activeIndex ? 'active' : ''}`}
          onClick={() => onSelect(i)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
