import { AiOutlineSearch } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";

function Search({ func }) {
  return (
    <div className="search-box">
      <div className="search-icon">
        <AiOutlineSearch />
      </div>

      <div className="search-input">
        <input
          type="text"
          onKeyDown={function (e) {
            if (e.key === "Enter") func(e.target.value);
          }}
        />
      </div>

      <div className="location-icon">
        <BiCurrentLocation />
      </div>
    </div>
  );
}

export default Search;
