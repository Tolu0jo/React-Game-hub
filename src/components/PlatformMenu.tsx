import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronBarDown, BsChevronDown } from "react-icons/bs";
import { Platform } from "../Hooks/useGames";
import usePlatforms from "../Hooks/usePlatform";

interface Props {
  onSelectPlatForm: (platform: Platform) => void;
  selectedPlatform:Platform  | null
}
const PlatformMenu = ({ onSelectPlatForm,selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatForm(platform)}
            key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformMenu;
