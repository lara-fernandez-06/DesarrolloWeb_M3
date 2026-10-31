export default function SearchBar({ onSearchChange }) {
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // e.target es el input. .value es lo que el usuario escribió en ese instante.
      onSearchChange(e.target.value);
    }
  };

  return (
    <div className="search-container">
      <input 
        type="text" 
        placeholder="Escribe y presiona Enter..." 
        onKeyDown={handleKeyDown} 
      />
    </div>
  );
}