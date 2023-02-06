import SurFace from "~/src/ui/SurFace";
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
    name: "Chức vụ",
    sort: true,
    key: "role",
  },
  {
    name: "Học vấn",
    sort: true,
    key: "hv",
  },
  {
    name: "Lương",
    sort: true,
    key: "luong",
  },
  {
    name: "Ngày sinh",
    sort: false,
    key: "dob",
  },
  {
    name: "Ngày vào",
    sort: false,
    key: "date",
  },
  {
    name: "Giới tính",
    sort: true,
    key: "gender",
  },
  {
    name: "Ngày tạo",
    sort: false,
    key: "createAt",
  },
];

const dataSource = [
  {
    id: "1",
    name: "A",
    department: "PTSA",
    position: "DEv",
    role: "Team lead",
    hv: "Đại học",
    luong: "7000000",
    dob: "11/11/2000",
    date: "12/10/2022",
    gender: "male",
    createAt: "12/12/2022",
  },
  {
    id: "2",
    name: "A",
    department: "PTSP",
    position: "DEv",
    role: "Team lead",
    hv: "Đại học",
    luong: "7000000",
    dob: "11/11/2000",
    date: "12/10/2022",
    gender: "male",
    createAt: "12/12/2022",
  },
];
export default function Employee() {
  return (
    <div className="container mx-auto w-full mt-6">
      <SurFace>
        <Table
          title="Danh sách nhân sự"
          columns={columns}
          dataSource={dataSource}
        />
      </SurFace>
    </div>
  );
}
