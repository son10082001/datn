import Table from "~/src/ui/Table";

const columns = [
  {
    name: "Mã NS",
    sort: false,
    key: "id",
  },
  {
    name: "Họ và tên",
    sort: false,
    key: "name",
  },
  {
    name: "Phòng ban",
    sort: true,
    key: "department",
  },
  {
    name: "Vị trí",
    sort: true,
    key: "position",
  },
  {
    name: "Thời gian",
    sort: false,
    key: "dob",
  },
  {
    name: "Nghỉ phép",
    sort: false,
    key: "a",
  },
];

const dataSource = [
  {
    id: "1",
    name: "A",
    department: "PTSP",
    position: "DEv",
    dob: "11/11/2000",
    a: "Đã duyệt",
  },
  {
    id: "2",
    name: "A",
    department: "PTSP",
    position: "DEv",
    dob: "11/11/2000",
    a: "Đã duyệt",
  },
];
export default function Request() {
  return (
    <Table
      title="Báo cáo chấm công"
      columns={columns}
      dataSource={dataSource}
    />
  );
}
