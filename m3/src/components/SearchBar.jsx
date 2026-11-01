export default function SearchBar({ searchQuery, onSearchChange }) {
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // e.target es el input. .value es lo que el usuario escribió en ese instante.
      onSearchChange(e.target.value);
    }
  };

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