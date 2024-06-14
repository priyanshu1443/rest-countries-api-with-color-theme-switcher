import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search({ theme, setSearch }) {
    return (
        <>
            <label
                htmlFor='country_name'
                className={`w-[300px] h-10 flex items-center justify-start px-4 gap-4 ${theme ? "bg-transparent shadow-[0_0_3px_-1px_hsl(0,_0%,_52%)]" : "bg-dark_blue shadow-[0_0_3px_-1px_hsl(200,_15%,_8%)]"} rounded-md `}
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: theme ? "hsl(200, 15%, 8%)" : "#ffffff" }} />

                <input
                    className={`border-none outline-none text-sm bg-transparent ${theme ? "text-dark_gray" : "text-white"} font-medium placeholder:text-sm placeholder:font-semibold`}
                    type="text"
                    id="country_name"
                    placeholder='Search for a country ...'
                    onChange={(e) => setSearch(e.target.value)}
                />
            </label>
        </>
    )
}

Search.propTypes = {
    theme: PropTypes.bool.isRequired,
    setSearch: PropTypes.func.isRequired,
};

export default Search
