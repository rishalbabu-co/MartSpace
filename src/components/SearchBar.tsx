import { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Loader } from 'lucide-react';
import { searchAll, SearchResult, findNearbyProducts } from '../services/SearchService';
import useDebounce from '../hooks/useDebounce';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [setUserLocation] = useState<GeolocationCoordinates | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const performSearch = async () => {
      if (debouncedQuery.length < 2) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const searchResults = await searchAll(debouncedQuery);
        setResults(searchResults);
        setShowResults(true);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setLoading(false);
      }
    };

    performSearch();
  }, [debouncedQuery]);

  const handleLocationSearch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setUserLocation(position.coords);
          try {
            const nearbyProducts = await findNearbyProducts(
              position.coords.latitude,
              position.coords.longitude
            );
            // Handle nearby products display
            console.log(nearbyProducts);
          } catch (error) {
            console.error('Error finding nearby products:', error);
          }
        },
        (error) => {
          console.error('Geolocation error:', error);
        }
      );
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search products, industries, or businesses..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowResults(true)}
          />
          {loading && (
            <div className="absolute right-3 top-3">
              <Loader className="h-5 w-5 text-gray-400 animate-spin" />
            </div>
          )}
        </div>
        <button
          onClick={handleLocationSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
        >
          <MapPin className="h-5 w-5 mr-2" />
          Nearby
        </button>
      </div>

      {showResults && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
          {results.map((result) => (
            <div
              key={`${result.type}-${result.id}`}
              className="p-4 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
            >
              <div className="flex items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{result.name}</h3>
                  {result.description && (
                    <p className="text-sm text-gray-500 mt-1">{result.description}</p>
                  )}
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <span className="capitalize bg-gray-100 px-2 py-1 rounded">
                      {result.type}
                    </span>
                    {result.category && (
                      <span className="ml-2">in {result.category}</span>
                    )}
                    {result.location && (
                      <span className="ml-2">• {result.location}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}