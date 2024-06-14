import PropTypes from "prop-types"

function Card({ country, theme, handleClick }) {
    return (
        <div
            className={`border-none rounded-md overflow-hidden w-[300px] h-96 ${theme ? "shadow-[0_0_2px_0px_hsl(0,_0%,_52%)] bg-transparent" : "shadow-[0_0_3px_-1px_hsl(200,_15%,_8%)] bg-dark_blue"}`}
            onClick={() => handleClick(country)}
        >
            <div className="w-[300px] h-[200px] overflow-hidden">
                <img src={country.flag} alt="Resized" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <h1 className={`my-2 font-nunito_sans font-extrabold cursor-default ${theme ? "text-very_dark_blue_light" : "text-white"}`}>{country.name}</h1>
                <ul>
                    <Listitem name={"Population"} value={country.population} theme={theme} />
                    <Listitem name={"Region"} value={country.region} theme={theme} />
                    <Listitem name={"Capital"} value={country.capital} theme={theme} />
                </ul>
            </div>
        </div>
    )
}

Card.propTypes = {
    country: PropTypes.object.isRequired,
    theme: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
}


const Listitem = ({ name, value, theme }) => {
    return (
        <>
            <li>
                <span className={`${theme ? "text-very_dark_blue_light" : "text-very_light_gray"} font-nunito_sans font-semibold text-sm cursor-default`}>{name} </span>
                <span className={`${theme ? "text-very_dark_blue_light" : "text-white"}  cursor-default`}>: </span>
                <span className={`${theme ? "text-very_dark_blue_light" : "text-very_light_gray"} font-nunito_sans font-light text-sm  cursor-default`}>{value}</span>
            </li>
        </>
    )
}

Listitem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    theme: PropTypes.bool.isRequired
}

export default Card
