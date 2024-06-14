import PropTypes from 'prop-types'
import countryData from "../json/data.json"

function Countrydetail({ theme, country }) {
    return (
        <div className=' w-full h-full flex flex-col md:flex-row gap-5 mt-5 pb-5 md:pb-0'>
            <div className='w-full  md:w-[50%]'>
                <img className=' w-full md:w-[90%] ' src={country.flag} alt="" />
            </div>
            <div className='md:w-[50%] w-full'>
                <h1 className={`${theme ? "text-very_dark_blue_light" : "text-white"} font-nunito_sans font-extrabold text-2xl my-5`}>{country.name}</h1>
                <div className='flex flex-col sm:flex-row mt-8 mb-14' >
                    <ul className='md:w-[50%] w-full'>
                        <li className='my-2'>
                            <span className={`${theme ? "text-very_dark_blue_light" : "text-white"} font-nunito_sans font-bold text-base`}>Native Name: </span>
                            <span className={`font-nunito_sans font-medium text-base ${theme ? "text-very_dark_blue_light" : "text-white"}`}>{country.nativeName}</span>
                        </li>
                        <li className='my-2'>
                            <span className={`${theme ? "text-very_dark_blue_light" : "text-white"} font-nunito_sans font-bold text-base`}>Population: </span>
                            <span className={`font-nunito_sans font-medium text-base ${theme ? "text-very_dark_blue_light" : "text-white"}`}>{country.population}</span>
                        </li>
                        <li className='my-2'>
                            <span className={`${theme ? "text-very_dark_blue_light" : "text-white"} font-nunito_sans font-bold text-base`}>Region: </span>
                            <span className={`font-nunito_sans font-medium text-base ${theme ? "text-very_dark_blue_light" : "text-white"}`}>{country.region}</span>
                        </li>
                        <li className='my-2'>
                            <span className={`${theme ? "text-very_dark_blue_light" : "text-white"} font-nunito_sans font-bold text-base`}>Sub Region: </span>
                            <span className={`font-nunito_sans font-medium text-base ${theme ? "text-very_dark_blue_light" : "text-white"}`}>{country.subregion}</span>
                        </li>
                        <li className='my-2'>
                            <span className={`${theme ? "text-very_dark_blue_light" : "text-white"} font-nunito_sans font-bold text-base`}>Capital: </span>
                            <span className={`font-nunito_sans font-medium text-base ${theme ? "text-very_dark_blue_light" : "text-white"}`}>{country.capital}</span>
                        </li>
                    </ul>
                    <ul className="w-full sm:w-[50%]">
                        <li className='my-2'>
                            <span className={`${theme ? "text-very_dark_blue_light" : "text-white"} font-nunito_sans font-bold text-base`}>Top Level Domain: </span>
                            <span className={`font-nunito_sans font-medium text-base ${theme ? "text-very_dark_blue_light" : "text-white"}`}>{country.topLevelDomain}</span>
                        </li>
                        <li className='my-2'>
                            <span className={`${theme ? "text-very_dark_blue_light" : "text-white"} font-nunito_sans font-bold text-base`}>Currencies: </span>
                            <span className={`font-nunito_sans font-medium text-base ${theme ? "text-very_dark_blue_light" : "text-white"}`}>{country.currencies[0].code}</span>
                        </li>
                        <li className='my-2'>
                            <span className={`${theme ? "text-very_dark_blue_light" : "text-white"} font-nunito_sans font-bold text-base`}>Languages: </span>
                            <span className={`font-nunito_sans font-medium text-base ${theme ? "text-very_dark_blue_light" : "text-white"}`}>
                                {
                                    country.languages.map((language, index) =>
                                        <span key={index}>
                                            {language.name}
                                            {country.languages.length - 1 === index ? " " : ","}
                                        </span>
                                    )
                                }
                            </span>
                        </li>
                    </ul>
                </div>
                {
                    country?.borders &&
                    <div className='flex items-start justify-start gap-1 sm:flex-row flex-col'>
                        <div className={`${theme ? "text-very_dark_blue_light" : "text-white"} font-nunito_sans font-bold text-base`}>Border country: </div>
                        <ul className='flex items-center flex-wrap gap-2' style={{ width: "calc(100% - 150px)" }}>
                            {
                                country?.borders?.map((border, index) => {
                                    const borderCountry = countryData.find(data => data.alpha3Code === border);
                                    return borderCountry ? (
                                        <li className={`font-nunito_sans font-medium text-base px-5 py-1  border-none rounded-md ${theme ? "text-very_dark_blue_light bg-transparent" : "text-white bg-dark_blue"}  ${theme ? " shadow-[0_0_3px_-1px_hsl(0,_0%,_52%)]" : "shadow-[0_0_3px_-1px_hsl(200,_15%,_8%)]"}`} key={index}>
                                            {borderCountry.name}
                                        </li>
                                    ) :
                                        null;
                                })
                            }
                        </ul>
                    </div>
                }
            </div>
        </div >
    )
}

Countrydetail.propTypes = {
    theme: PropTypes.bool.isRequired,
    country: PropTypes.object.isRequired
}

export default Countrydetail
