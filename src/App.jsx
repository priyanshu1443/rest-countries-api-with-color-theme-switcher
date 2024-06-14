import Navigation from "./components/Navigation"
import { useState, useEffect } from "react"
import Search from "./components/Search"
import Filter from "./components/Filter"
import CountryData from "./json/data.json"
import Card from "./components/Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Countrydetail from "./components/Countrydetail"

function App() {
  const [theme, settheme] = useState(true)
  const [regions, setRegions] = useState([])
  const [detailCountry, setDetailCountry] = useState(null)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("")

  const getRegions = () => {
    let uniqueRegion = []
    CountryData.forEach(country => {
      if (!uniqueRegion.includes(country.region)) {
        uniqueRegion.push(country.region)
      }
    });
    setRegions(uniqueRegion)
  }

  useEffect(() => {
    getRegions()
  }, [])

  const handleClick = (data) => {
    setDetailCountry(data)
  }

  return (
    <>
      <Navigation theme={theme} settheme={settheme} />
      <section className={`max-w-full ${theme ? "bg-very_light_gray" : "bg-very_dark_blue_dark"} flex justify-center overflow-hidden overflow-y-auto`} style={{ height: "calc(100vh - 80px)" }}>
        <div className=" px-4 w-[1440px] mt-12">
          <div className=" flex items-center justify-between flex-wrap">
            {
              detailCountry === null ?
                <>
                  <div className="my-3">
                    <Search theme={theme} setSearch={setSearch} />
                  </div>
                  <div className="my-3">
                    <Filter theme={theme} regions={regions} setFilter={setFilter} />
                  </div>
                </> :
                <>
                  <div
                    onClick={() => setDetailCountry(null)}
                    className={` py-2 px-6 border-none rounded-md flex items-center justify-between gap-3 ${theme ? "bg-transparent shadow-[0_0_3px_-1px_hsl(0,_0%,_52%)]" : "bg-dark_blue shadow-[0_0_3px_-1px_hsl(200,_15%,_8%)]"}`}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} style={{ color: theme ? "hsl(200, 15%, 8%)" : "#ffffff" }} />
                    <p className={`${theme ? "text-very_dark_blue_light" : "text-white"} cursor-default`}>Back</p>
                  </div>
                </>
            }
          </div>
          <div className={`mt-4 w-full h-auto flex flex-wrap gap-[68.5px] justify-center ${theme ? "bg-very_light_gray" : "bg-very_dark_blue_dark"}`}>
            {
              detailCountry === null ?
                <>
                  {
                    CountryData
                      .filter(country => search !== "" ? country.name.toLowerCase().includes(search.toLowerCase()) : country)
                      .filter(country => filter !== "" ? country.region === filter : country)
                      .map(country =>
                        <Card
                          key={country.name}
                          country={country}
                          theme={theme}
                          handleClick={handleClick}
                        />)
                  }
                </> :
                <>
                  <Countrydetail theme={theme} country={detailCountry} />
                </>
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default App
