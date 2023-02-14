import React, {useState} from "react";

import SearchIcon from "../../../assets/icons/search.svg"


function Search({items}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [filteredItems, setFilteredItems] = useState(items);

    const handleChange = event => {
        setSearchTerm(event.target.value);
        setFilteredItems(
          items.filter(item => {
            if (selectedFilter === "all") {
              return item.toLowerCase().includes(event.target.value.toLowerCase());
            } else {
              return (
                item[selectedFilter] &&
                item[selectedFilter]
                  .toLowerCase()
                  .includes(event.target.value.toLowerCase())
              );
            }
          })
        );
      };

    return (
            <div className="flex justify-center items-center mt-3 px-5 pb-3">
                <div className="h-16 w-min flex justify-between border-2 border-mute shadow-md rounded-full">
                    <input
                    type="text"
                    className="border-none w-30 rounded-full focus:outline-none focus:shadow-none focus:bg-transparent"
                    placeholder="Search job, customer, trade person"
                    value={searchTerm}
                    onChange={handleChange}
                    />

                    <span className="bg-primary h-14 w-32 flex items-center justify-center content-center rounded-full text-white mt-0.5 mr-0.5 gap-3 px-6 py-2">
                        <img src={SearchIcon} className="w-5" alt="search" /> <span className="text-base">Search</span>
                    </span>
                </div>
            </div>
        )
}

export default Search;