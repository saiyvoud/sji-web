import React from "react";
// import { useCountries } from "use-react-countries";
import { Select, Option } from "@material-tailwind/react";

import flagLaos from "../assets/images/flag-laos.png";
import flagUs from "../assets/images/flag-us.png";

export default function SelectCountry() {
  // const { countries } = useCountries();
  const countries = [
    {
      name: "Laos",
      flag: flagLaos,
    },
    {
      name: "English",
      flag: flagUs,
    },
  ];
  return (
    <div className="w-72">
      <Select
        size="lg"
        label="Select Country"
        selected={(element) =>
          element &&
          React.cloneElement(element, {
            disabled: true,
            className:
              "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
          })
        }
      >
        {/* {countries.map(({ name, flags }) => (
                    <Option key={name} className="flex items-center gap-2">
                        <img
                            src={flags.svg}
                            alt={name}
                            className="h-5 w-5 rounded-full object-cover"
                        />
                        {name}
                    </Option>
                ))} */}
        {countries.map((item, index) => (
          <Option key={index} className="flex items-center gap-2">
            <img
              src={item.flag}
              alt={item.name}
              className="h-5 w-5 rounded-full object-cover"
            />
          </Option>
        ))}
      </Select>
    </div>
  );
}
