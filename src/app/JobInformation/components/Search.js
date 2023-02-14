import React, {Fragment,useState} from "react";

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

      const handleFilterChange = event => {
        setSelectedFilter(event.target.value);
        setFilteredItems(
          items.filter(item => {
            if (event.target.value === "all") {
              return item.toLowerCase().includes(searchTerm.toLowerCase());
            } else {
              return (
                item[event.target.value] &&
                item[event.target.value]
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              );
            }
          })
        );
      };

    return (
            <div className="flex justify-center items-center mt-3 px-5 pb-3">
                <div className="h-16 w-2/4 flex justify-between border-2 border-mute shadow-md rounded-full">
                    <input
                    type="text"
                    className="border-none w-30 rounded-full focus:outline-none focus:shadow-none focus:bg-transparent"
                    placeholder="Search job"
                    value={searchTerm}
                    onChange={handleChange}
                    />
                    <hr/>

                    <select
                    //className="border-none focus:outline-none focus:shadow-none focus:bg-transparent"
                    value={selectedFilter}
                    onChange={handleFilterChange}
                    >
                        <option value="all">All Jobs</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                        <option value="pending">Cancelled</option>
                    </select>

                    <span className="bg-primary h-14 w-32 flex items-center justify-center content-center rounded-full text-white mt-0.5 mr-0.5 gap-3 px-6 py-2">
                        <img src={SearchIcon} className="w-5" alt="search" /> <span className="text-base">Search</span>
                    </span>
                </div>
            </div>
        )
}

export default Search;