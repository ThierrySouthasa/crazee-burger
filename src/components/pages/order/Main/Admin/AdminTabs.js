import React, { useContext } from 'react';
import styled from 'styled-components';
import Tab from '../../../../../assets/Tab';
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import { theme } from '../../../../../assets/theme';
import OrderContext from '../../../../../context/OrderContext';

const AdminTabs = () => {
  const { isCollapsed, setIsCollapsed, isAddSelected, setisAddSelected, isEditSelected, setisEditSelected } = useContext(OrderContext)

  const handleClick = () => {
    setIsCollapsed(!isCollapsed)
  }

  const selectEditTab = () => {
    setIsCollapsed(true)
    setisEditSelected(true)
    setisAddSelected(false)
  }

  const selectAddTab = () => {
    setIsCollapsed(true)
    setisAddSelected(true)
    setisEditSelected(false)

  }

  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        onClick={handleClick}
        className={isCollapsed ? "" : "isActive"} label="" />
      <Tab
        Icon={<AiOutlinePlus />}
        onClick={selectAddTab}
        className={isAddSelected ? "isActive" : ""} label="Ajouter un produit" />
      <Tab
        Icon={<MdModeEditOutline />}
        onClick={selectEditTab}
        className={isEditSelected ? "isActive" : ""} label="Modifier un produit" />
    </AdminTabsStyled>
  );
};

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;

  .isActive {
    background-color: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`;

export default AdminTabs;