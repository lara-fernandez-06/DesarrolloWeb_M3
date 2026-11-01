export default function SearchBar({ searchQuery, onSearchChange }) {
  
  return (
    <div className="filters-container">
      <input 
        className="rune-input"
        type="text" 
        placeholder="Searching for wisdom...?" 
        value={searchQuery} /*Asegura que se renderiza correctamente y que no queden restos sin limpiar*/
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}