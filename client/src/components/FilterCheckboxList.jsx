// FilterCheckboxList.jsx
import React from "react";
import Slider from "react-slider";
import CheckBoxGroup from "./CheckBoxGroup";

const airframes = ["2500", "5000", "7500"];
const uniqueCategories = [
  { name: "Acquired", slug: "acquired" },
  { name: "For Sale", slug: "for-sale" },
  { name: "Off Market", slug: "off-market" },
  { name: "Wanted", slug: "wanted" },
  { name: "Sold", slug: "sold" },
  { name: "Sale Pending", slug: "sale-pending" },
  { name: "Coming Soon", slug: "coming-soon" },
];
const engine = ["2665", "3517/3421", "220", "3710", "380/380"];

export default function FilterCheckboxList({
  selected,
  setSelected,
  range,
  setRange,
  minPrice,
  maxPrice,
  categories,
}) {
  const uniqueAirframes = [...new Set(airframes)];
  const uniqueEngine = [...new Set(engine)];

  const handleSelect = (value) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
    );
  };

  const safeRange =
    Array.isArray(range) && range.length === 2 ? range : [minPrice, maxPrice];

  return (
    <div className="p-6 rounded-2xl border border-[#ffffff48]">
      <h3 className="text-white font-medium mb-4">Filter Options</h3>

      <CheckBoxGroup
        title="Categories"
        items={uniqueCategories}
        selected={selected}
        onChange={handleSelect}
      />

      <CheckBoxGroup
        title="Airframes"
        items={uniqueAirframes}
        selected={selected}
        onChange={handleSelect}
      />

      <CheckBoxGroup
        title="Engine"
        items={uniqueEngine}
        selected={selected}
        onChange={handleSelect}
      />

      <div className="pt-8">
        <h3 className="text-sm font-semibold text-white mb-4">Price Range</h3>

        <div className="mb-2 text-gray-300 text-sm">
          ${safeRange[0]?.toLocaleString()} – ${safeRange[1]?.toLocaleString()}
        </div>

        <Slider
          className="slider"
          value={safeRange}
          onChange={setRange}
          min={minPrice}
          max={maxPrice}
          step={1000}
          renderTrack={(props, state) => (
            <div
              {...props}
              className={`slider-track ${
                state.index === 0 ? "track-0" : "track-1"
              }`}
            />
          )}
          renderThumb={(props) => <div {...props} className="slider-thumb" />}
        />
      </div>
    </div>
  );
}
