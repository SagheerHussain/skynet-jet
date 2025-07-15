import React, { useState } from "react";
import FilterCheckboxList from "./FilterCheckboxList";
import Card from "./Card";

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

const filteredAirplanesPrices = airplanes.filter((a) => a.price >= 100000);
const uniquePrice = [...new Set(filteredAirplanesPrices.map((a) => a.price))];

const Listing = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const allPrices = airplanes.map((a) => a.price);
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);

  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  console.log(priceRange);

  const airplaneMatchesFilters = (airplane) => {
    const matchesPrice =
      airplane.price >= priceRange[0] && airplane.price <= priceRange[1];

    if (selectedFilters.length === 0) return matchesPrice;

    const filters = [
      airplane.category,
      airplane.airframe,
      airplane.engine,
      airplane.propeller,
    ];

    const matchesCheckbox = selectedFilters.some((f) => filters.includes(f));

    return matchesCheckbox && matchesPrice;
  };

  const filteredAirplanes = airplanes.filter(airplaneMatchesFilters);

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

        <div className="flex">
          <div className="w-[20%]">
            <FilterCheckboxList
              selected={selectedFilters}
              setSelected={setSelectedFilters}
              range={priceRange}
              setRange={setPriceRange}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
          </div>
          <div className="w-[75%] ms-[5%]">
            {filteredAirplanes.length === 0 && (
              <div className="flex justify-center items-center">
                <p className="text-white text-lg">No airplanes found.</p>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAirplanes.map((airplane) => (
                <Card key={airplane._id} detail={airplane} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
