/**
 * Search input + Browse button – molecule for hero.
 */

import { Input } from '../atoms/Input.jsx';
import { Button } from '../atoms/Button.jsx';

export function SearchBox({
  value,
  onChange,
  placeholder = 'Search for sellers, products, categories...',
  onBrowse,
}) {
  return (
    <div className="search-container">
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <Input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
      <Button variant="browse" onClick={onBrowse}>
        Browse Sellers →
      </Button>
    </div>
  );
}
