import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronBarDown } from "react-icons/bs";

interface Props{
    onselectSort:(sortOrder:string)=>void
    sortOrder:string
}

const SortSelector = ({onselectSort,sortOrder}: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSort=sortOrders.find(sort=>sort.value ===sortOrder)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by: {currentSort?.label || "Relevance"}  
      </MenuButton>
      <MenuList>
        {sortOrders.map((sort) => (
          <MenuItem onClick={()=>onselectSort(sort.value)}key={sort.value} value={sort.value}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
