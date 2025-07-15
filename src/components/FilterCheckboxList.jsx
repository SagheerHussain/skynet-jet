import React from "react";
import Slider from "react-slider";
import CheckBoxGroup from "./CheckBoxGroup";

const categories = [
  "acquired",
  "coming-soon",
  "for-sale",
  "off-market",
  "sale-pending",
  "sold",
  "wanted",
];
const airframes = ["2500", "5000", "7500"];
const engine = ["2665", "3517/3421", "220", "3710", "380/380"];
const prices = [100000, 175000, 379000, 919900, 379000];

export default function FilterCheckboxList({
  selected,
  setSelected,
  range,
  setRange,
}) {
  const uniqueCategories = [...new Set(categories)];
  const uniqueAirframes = [...new Set(airframes)];
  const uniqueEngine = [...new Set(engine)];

  const handleSelect = (value) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
    );
  };

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return (
    <div className="p-6 rounded-2xl border border-[#ffffff48]">
      <h3 className="text-white font-medium mb-4">Filter Options</h3>

      <CheckBoxGroup
        title="Category"
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
          ${range[0].toLocaleString()} – ${range[1].toLocaleString()}
        </div>

        <Slider
          className="slider"
          value={range}
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
