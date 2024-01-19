import React from "react";

function DropdownLi({dropdownLink, dropdownText}) {
  return (
    <li>
      <a class="dropdown-item" href={dropdownLink}>
        {dropdownText}
      </a>
    </li>
  );
}

export default DropdownLi;
