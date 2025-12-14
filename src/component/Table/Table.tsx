import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";

export interface AppTableProps<T> {
  columns: ColumnsType<T>;
  data: T[];
  rowKey: string;
  loading?: boolean;
  pagination?: TableProps<T>["pagination"];
}

function AppTable<T extends object>({
  columns,
  data,
  rowKey,
  loading = false,
  pagination
}: AppTableProps<T>) {
  return (
    <Table<T>
      columns={columns}
      dataSource={data}
      rowKey={rowKey}
      loading={loading}
      pagination={pagination ? pagination : {current: 1,pageSize: 10,total: 10,}}
      size="large"
      onRow={(record) => {
        return {
          onClick: () => {
            console.log(record);
          },
        };
      }}
    />
  );
}

export default AppTable;
