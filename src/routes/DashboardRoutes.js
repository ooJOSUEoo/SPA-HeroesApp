import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { DCScreen } from "../components/dc/DCScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Hero, HeroScreen } from "../components/hero/HeroScreen";

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="marvel" element={<MarvelScreen />} />
            <Route path="dc" element={<DCScreen />} />

            <Route path="search" element={<SearchScreen />} />

            <Route path="hero" element={<HeroScreen />} />

            <Route path="/" element={<MarvelScreen />} />
        </Routes>
    </>
  )
}
