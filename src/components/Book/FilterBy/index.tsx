import React from "react";

interface FilterByProps {
  name: string;
  title: string;
  data: string[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FilterBy: React.FC<FilterByProps> = ({
  name,
  title,
  data,
  handleChange,
}) => {
  return (
    <div>
      <label htmlFor="author">{title}</label>
      <select id="author" onChange={handleChange}>
        <option value="">All {name}</option>
        {data.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBy;
