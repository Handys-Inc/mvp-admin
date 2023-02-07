import React from "react";

import { BiSearch } from "react-icons/bi";
import { FiSettings } from "react-icons/fi"

const numOfRecords = 10

function TableHeader() {
    return (
        <div className="flex justify-between items-center">
            <p className="my-4">10 records found</p>
            <div className="ml-auto flex items-center gap-3">
              <BiSearch size={20} className="inline text-center"/>
              <div className="text-faintGray">
                <hr />
              </div>
              <FiSettings size={20} className="inline text-center"/>
            </div>
          </div>
    )
}

export default TableHeader;