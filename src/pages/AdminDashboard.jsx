import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import TableProjects from "../components/TableProjects";

export default function AdminDashboard() {
  return (
    <>
      <div className="flex flex-col space-y-6 z-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full h-[400px]">
            <LineChart />
          </div>
          <div className="w-full h-[400px]">
            <PieChart />
          </div>
        </div>
      </div>
      <TableProjects />
    </>
  );
}
