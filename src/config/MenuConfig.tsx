import {
  AppstoreOutlined,
  BarChartOutlined,
  FileTextOutlined,
  HddOutlined,
  InfoCircleOutlined,
  SettingOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { type AppMenuItem } from "../component/Types";

export const menuItems: AppMenuItem[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <AppstoreOutlined />,
  },
  {
    key: "factory-info",
    label: "Thông tin nhà máy",
    icon: <BarChartOutlined />,
    children: [
      {
        key: "factory-chart",
        label: "Biểu đồ",
        icon: <BarChartOutlined />,
      },
      {
        key: "factory-detail",
        label: "Chi tiết",
        icon: <FileTextOutlined />,
      },
    ],
  },
  {
    key: "warning",
    label: "Cảnh báo",
    icon: <WarningOutlined />,
  },
  {
    key: "settings",
    label: "Cài đặt",
    icon: <SettingOutlined />,
    children: [
      {
        key: "settings-info",
        label: "Thông tin",
        icon: <InfoCircleOutlined />,
      },
      {
        key: "settings-hardware",
        label: "Phần cứng",
        icon: <HddOutlined />,
      },
    ],
  },
];
