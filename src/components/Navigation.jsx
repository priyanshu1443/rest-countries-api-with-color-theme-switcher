import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-regular-svg-icons"
import { faMoon as moon } from "@fortawesome/free-solid-svg-icons"
import PropTypes from 'prop-types'

function Navigation({ theme, settheme }) {
    return (
        <div className={` h-20  max-w-full flex items-center justify-center ${theme ? "bg-white" : "bg-dark_blue"}  `}>
            <div className={`h-full w-full ${theme ? "shadow-[0_1px_3px_-2px_hsl(0,_0%,_52%)]" : "shadow-[0_1px_3px_-2px_hsl(200,_15%,_8%)]"} flex items-center justify-center`}>
                <div className={`flex items-center justify-between w-[1440px] px-4  h-full `}>
                    <h1 className={`text-xl sm:text-2xl font-nunito_sans font-extrabold antialiased cursor-default ${theme ? "text-very_dark_blue_light" : "text-white"}`}>Where in the world?</h1>
                    <div
                        className="flex text-center items-center gap-2 cursor-default"
                        onClick={() => settheme(!theme)}
                    >
                        <FontAwesomeIcon icon={theme ? faMoon : moon} style={{ color: theme ? "#000000" : "#ffffff" }} />
                        <span className={`text-sm sm:text-md ${theme ? "text-very_dark_blue_light" : "text-white"} font-semibold`}>Dark Mode</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

Navigation.propTypes = {
    theme: PropTypes.bool.isRequired,
    settheme: PropTypes.func.isRequired,
};

export default Navigation
