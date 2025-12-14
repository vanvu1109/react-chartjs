import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { type AppMenuItem } from "../component/Types";

export const menuItems: AppMenuItem[] = [
  {
    key: "1",
    label: "Dash Board",
    icon: <UserOutlined />,
  },
  {
    key: "2",
    label: "Thông tin nhà máy",
    icon: <VideoCameraOutlined />,
    children: [
      {
        key: "2-1",
        label: "Biểu đồ",
      },
      {
        key: "2-2",
        label: "Nhà máy 2",
      },
      {
        key: "2-3",
        label: "Nhà máy 3",
      },
    ],
  },
  {
    key: "3",
    label: "Upload",
    icon: <UploadOutlined />,
  },
];

