import { Menu } from "antd";
import type { MenuProps } from "antd";
import { type AppMenuItem } from "../Types";
import KimLong from "@img/KimLong.png";
import styles from "./styles.module.scss";
interface AppMenuProps {
  items: AppMenuItem[];
  defaultSelectedKeys?: string[];
  className?: string
}

const AppMenu = ({ items, defaultSelectedKeys}: AppMenuProps) => {
  const menuItems: MenuProps["items"] = items;

  const {img, menu, menuWrapper} = styles;

  return (
   
    <div>
      <img className={img} src={KimLong} alt="" />
      <div className={menuWrapper}>
        <Menu
            theme="dark"
            defaultSelectedKeys={defaultSelectedKeys}
            mode="inline"
            items={menuItems}
            className={menu}
        />
      </div>
    </div>
  );
};

export default AppMenu;
