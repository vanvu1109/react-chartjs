import DoughnutChart from "../Chart/Chart"
import styles from "./styles.module.scss";
import AppTable from "../Table/Table";
import type { ColumnsType } from "antd/es/table";
import { type User } from "../Types";



const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: ["red", "blue", "yellow"],
      borderColor: ["red", "blue", "yellow"],
      borderWidth: 1,
    },
  ],
}



const userColumns: ColumnsType<User> = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Tên",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Vai trò",
    dataIndex: "role",
  },
];

const dataUser: User[] = [
  {
    id: 1,
    name: "John Brown",
    email: "123@123",
    role: "admin",
  },
  {
    id: 2,
    name: "John Brown",
    email: "123@123",
    role: "admin",
  },
  {
    id: 3,
    name: "John Brown",
    email: "123@123",
    role: "admin",
  },
  {
    id: 4,
    name: "John Brown",
    email: "123@123",
    role: "admin",
  },
  {
    id: 6,
    name: "John Brown",
    email: "123@123",
    role: "admin",
  },
  {
    id: 7,
    name: "John Brown",
    email: "123@123",
    role: "admin",
  },
  {
    id: 8,
    name: "John Brown",
    email: "123@123",
    role: "admin",
  },
  {
    id: 9,
    name: "John Brown",
    email: "123@123",
    role: "admin",
  },
  {
    id: 10,
    name: "John Brown",
    email: "123@123",
    role: "admin",
  },
  {
    id: 11,
    name: "John Brown",
    email: "123@123",
    role: "admin",
  },
  {
    id: 12,
    name: "John Brown",
    email: "123@123",
    role: "admin",
  },
  {
    id: 13,
    name: "John Brown",
    email: "123@123",
    role: "admin",
  },
];
export default function AppContent() {
  const {contianer_chart_table} = styles
     
  return (
    <div> 
     <div className={contianer_chart_table}>
       <DoughnutChart data={data} />
       <AppTable columns={userColumns} data={dataUser} rowKey={"id"} loading={false} />
     </div>
    </div>
  )
}
