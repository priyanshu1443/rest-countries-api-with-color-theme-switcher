import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Filter({ theme, regions, setFilter }) {
    const [viewRegion, setViewRegion] = useState(false)

    return (
        <>
            <div
                className={`w-[180px] h-10 flex items-center justify-between px-4 ${theme ? "bg-transparent shadow-[0_0_3px_-1px_hsl(0,_0%,_52%)]" : "bg-dark_blue shadow-[0_0_3px_-1px_hsl(200,_15%,_8%)]"} rounded-md relative`}
                onClick={() => setViewRegion(!viewRegion)}
            >
                <p className={`${theme ? "text-very_dark_blue_light" : "text-white"} font-nunito_sans font-semibold text-sm cursor-default`}>Filter by Region</p>
                <FontAwesomeIcon icon={faAngleRight} rotation={90} style={{ color: theme ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)" }} />
                <div className={` w-full h-auto px-4 py-2 absolute top-12 left-0 ${theme ? "bg-white shadow-[0_0_3px_-1px_hsl(0,_0%,_52%)]" : "bg-dark_blue shadow-[0_0_3px_-1px_hsl(200,_15%,_8%)]"} border-none rounded-md ${viewRegion ? "block" : "hidden"} `}>
                    <ul>
                        {
                            regions.map((region, index) =>
                                <li
                                    className={`${theme ? "text-very_dark_blue_light" : "text-white"} font-nunito_sans text-sm font-semibold my-2.5 cursor-default`}
                                    key={index}
                                    onClick={() => setFilter(region)}
                                >
                                    {region}
                                </li>)
                        }
                        <li
                            className={`${theme ? "text-very_dark_blue_light" : "text-white"} font-nunito_sans text-sm font-semibold my-2.5 cursor-default`}
                            onClick={() => setFilter("")}
                        >
                            All Region
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

Filter.propTypes = {
    theme: PropTypes.bool.isRequired,
    regions: PropTypes.array.isRequired,
    setFilter: PropTypes.func.isRequired,
};

export default Filter
