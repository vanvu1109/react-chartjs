import KimLong from "@img/KimLong.png";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { type AppMenuItem } from "../Types";
import styles from "./styles.module.scss";

interface AppMenuProps {
  items: AppMenuItem[];
  defaultSelectedKeys?: string[];
  defaultOpenKeys?: string[];
  className?: string;
}

const AppMenu = ({
  items,
  defaultSelectedKeys = ["dashboard"],
  defaultOpenKeys = [],
}: AppMenuProps) => {
  const menuItems: MenuProps["items"] = items;

  const { img, menu, menuWrapper, menuContainer } = styles;

  return (
    <div className={menuContainer}>
      <img className={img} src={KimLong} alt="Logo" />
      <div className={menuWrapper}>
        <Menu
          theme="dark"
          defaultSelectedKeys={defaultSelectedKeys}
          defaultOpenKeys={defaultOpenKeys}
          mode="inline"
          items={menuItems}
          className={menu}
        />
      </div>
    </div>
  );
};

export default AppMenu;
