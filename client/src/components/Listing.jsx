import React, { useState } from "react";
import { useEffect } from "react";
import FilterCheckboxList from "./FilterCheckboxList";
import Card from "./Card";
import Tabs from "./Tabs";
import Pagination from "./Pagination";
import { GoFilter } from "react-icons/go";
import FilterSideBar from "./FilterSideBar";

const airplanes = [
  {
    _id: "94827342a",
    title: "Airplane 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image:
      "https://static.wixstatic.com/media/04f737_f598ad67899742db9937d4c158e83fde~mv2.jpg/v1/fill/w_461,h_326,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-empty-state.jpg",
    price: 100000,
    airframe: "2500",
    engine: "2665",
    category: "acquired",
    propeller: "2352",
  },
  {
    _id: "dafda4353",
    title: "Airplane 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image:
      "https://static.wixstatic.com/media/04f737_05ff25e3a18b4d6c9b11e1c5acd59c4a~mv2.jpg/v1/fill/w_461,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-empty-state.jpg",
    price: 100000,
    airframe: "2500",
    engine: "2665",
    category: "for-sale",
    propeller: "2352",
  },
  {
    _id: "948affad23127342a",
    title: "Airplane 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image:
      "https://static.wixstatic.com/media/04f737_1c39fe2f88ed45528ce4adbaf6fcb7db~mv2.jpg/v1/fill/w_475,h_317,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-empty-state.jpg",
    price: 100000,
    airframe: "2500",
    engine: "2665",
    category: "for-sale",
    propeller: "2352",
  },
  {
    _id: "aasfa241",
    title: "Airplane 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image:
      "https://static.wixstatic.com/media/04f737_ac3a5ea4fa314ee2a69820004b466adc~mv2.jpg/v1/fill/w_476,h_317,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-empty-state.jpg",
    price: 175000,
    airframe: "2500",
    engine: "2665",
    category: "off-market",
    propeller: "2352",
  },
  {
    _id: "fada2341",
    title: "Airplane 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image:
      "https://static.wixstatic.com/media/04f737_cd6176e2909246568c3e1e28bc53a5e6~mv2.png/v1/fill/w_494,h_317,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-empty-state.png",
    price: 175000,
    airframe: "2500",
    engine: "2665",
    category: "wanted",
    propeller: "2352",
  },
  {
    _id: "342561",
    title: "Airplane 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image:
      "https://static.wixstatic.com/media/04f737_fd0a17988c874abba73d71133474396d~mv2.jpg/v1/fill/w_476,h_317,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-empty-state.jpg",
    price: 379000,
    airframe: "5000",
    engine: "2665",
    category: "sold",
    propeller: "2352",
  },
  {
    _id: "252571",
    title: "Airplane 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image:
      "https://static.wixstatic.com/media/04f737_e52f694a355b4486b572f20d7b9cadef~mv2.jpg/v1/fill/w_461,h_321,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-empty-state.jpg",
    price: 100000,
    airframe: "2500",
    engine: "2665",
    category: "sale-pending",
    propeller: "2352",
  },
  {
    _id: "adad2413414",
    title: "Airplane 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image:
      "https://static.wixstatic.com/media/04f737_6e0dc7c677f5437d829b057ea12c2819~mv2.jpg/v1/fill/w_476,h_317,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-empty-state.jpg",
    price: 100000,
    airframe: "2500",
    engine: "2665",
    category: "coming-soon",
    propeller: "2352",
  },
  {
    _id: "24342342",
    title: "Airplane 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image:
      "https://static.wixstatic.com/media/04f737_52a32d56f9714148904f44208f37a15c~mv2.jpg/v1/fill/w_476,h_317,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-empty-state.jpg",
    price: 100000,
    airframe: "5000",
    engine: "2665",
    category: "for-sale",
    propeller: "2352",
  },
  {
    _id: "25545426fgdafa",
    title: "Airplane 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image:
      "https://static.wixstatic.com/media/04f737_5f0dce2365ab4f4ca18a4aa8a1a89c87~mv2.jpg/v1/fill/w_475,h_317,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-empty-state.jpg",
    price: 100000,
    airframe: "5000",
    engine: "2665",
    category: "for-sale",
    propeller: "2352",
  },
];

const categories = [
  { name: "Acquired", slug: "acquired" },
  { name: "For Sale", slug: "for-sale" },
  { name: "Off Market", slug: "off-market" },
  { name: "Wanted", slug: "wanted" },
  { name: "Sold", slug: "sold" },
  { name: "Sale Pending", slug: "sale-pending" },
  { name: "Coming Soon", slug: "coming-soon" },
];

const Listing = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const allPrices = airplanes.map((a) => a.price);
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const airplaneMatchesFilters = (airplane) => {
    const matchesPrice =
      airplane.price >= priceRange[0] && airplane.price <= priceRange[1];

    const matchesCategory =
      activeTab === "all" ? true : airplane.category === activeTab;

    if (selectedFilters.length === 0) return matchesCategory && matchesPrice;

    const filters = [
      airplane.category,
      airplane.airframe,
      airplane.engine,
      airplane.propeller,
    ];

    const matchesCheckbox = selectedFilters.some((f) => filters.includes(f));

    return matchesCheckbox && matchesCategory && matchesPrice;
  };

  const filteredAirplanes = airplanes.filter(airplaneMatchesFilters);

  const totalPages = Math.ceil(filteredAirplanes.length / itemsPerPage);

  const paginatedAirplanes = filteredAirplanes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to page 1 when filters or tab change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilters, priceRange, activeTab]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="showroom" className="py-20">
      <div className="container px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-white pt-10">
            Explore Our Aircraft Collection
          </h1>
          <p className="text-white text-base max-w-3xl mx-auto mt-2">
            Browse a curated inventory of premium aircraft tailored for diverse
            missions and budgets. Filter your search by category, airframe
            hours, engine specs, and more to find the perfect match for your
            aviation needs.
          </p>
        </div>

        {/* Tabs */}
        <div className="lg:block hidden animated-tabs mb-12">
          <Tabs
            categories={categories}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        <div className="filter mb-4 lg:hidden flex justify-end">
          <GoFilter onClick={() => setIsOpen(!isOpen)} className="text-white cursor-pointer" size={36} />
        </div>

        <div className="flex">
          <div className="lg:block hidden w-[20%]">
            <FilterCheckboxList
              selected={selectedFilters}
              setSelected={setSelectedFilters}
              range={priceRange}
              setRange={setPriceRange}
              minPrice={minPrice}
              maxPrice={maxPrice}
              categories={categories}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>

          <div className="block">
          <FilterSideBar
  selectedFilters={selectedFilters}
  setSelectedFilters={setSelectedFilters}
  priceRange={priceRange}
  setPriceRange={setPriceRange}
  minPrice={minPrice}
  maxPrice={maxPrice}
  categories={categories}
  isOpen={isOpen}
  setIsOpen={setIsOpen}
/>
          </div>

          <div className="w-full lg:w-[75%] lg:ms-[5%]">
            {filteredAirplanes.length === 0 ? (
              <div className="flex justify-center items-center">
                <p className="text-white text-lg">No data found.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedAirplanes.map((airplane) => (
                    <Card key={airplane._id} detail={airplane} />
                  ))}
                </div>

                <div className="flex justify-center mt-10">
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={(e, value) => setCurrentPage(value)}
                    color="primary"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
