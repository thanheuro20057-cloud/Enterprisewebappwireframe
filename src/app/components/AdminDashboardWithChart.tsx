import { useNavigate } from 'react-router-dom';
import { Home, Users, FileText, Settings, BarChart3, LogOut } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { day: 'Day 1', transfers: 12 },
  { day: 'Day 5', transfers: 19 },
  { day: 'Day 10', transfers: 28 },
  { day: 'Day 15', transfers: 35 },
  { day: 'Day 20', transfers: 48 },
  { day: 'Day 25', transfers: 62 },
  { day: 'Day 30', transfers: 78 },
];

const employees = [
  { name: 'Robert Martinez', department: 'Engineering', successor: 'Emily Chen', status: 'Completed', progress: 100 },
  { name: 'Sarah Johnson', department: 'Operations', successor: 'Michael Park', status: 'In Progress', progress: 65 },
  { name: 'James Wilson', department: 'Finance', successor: 'Lisa Anderson', status: 'In Progress', progress: 40 },
  { name: 'Patricia Brown', department: 'Marketing', successor: 'David Kim', status: 'Scheduled', progress: 0 },
  { name: 'Linda Davis', department: 'HR', successor: 'John Smith', status: 'Completed', progress: 100 },
];

export function AdminDashboardWithChart() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-[#f2f2f2]">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-[#cccccc] flex flex-col">
        <div className="p-6 border-b border-[#cccccc]">
          <h1 className="text-xl font-semibold text-[#595959]">ExitWise</h1>
        </div>

        <nav className="flex-1 p-4">
          <div className="space-y-1">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-md bg-[#f2f2f2] text-[#595959] font-medium">
              <Home className="w-5 h-5" />
              Dashboard
            </button>
            <button
              onClick={() => navigate('/admin/dashboard-alt')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-[#7f7f7f] hover:bg-[#f2f2f2] hover:text-[#595959]"
            >
              <BarChart3 className="w-5 h-5" />
              Dashboard Alt
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-[#7f7f7f] hover:bg-[#f2f2f2] hover:text-[#595959]">
              <Users className="w-5 h-5" />
              Employees
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-[#7f7f7f] hover:bg-[#f2f2f2] hover:text-[#595959]">
              <FileText className="w-5 h-5" />
              Knowledge Base
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-[#7f7f7f] hover:bg-[#f2f2f2] hover:text-[#595959]">
              <Settings className="w-5 h-5" />
              Settings
            </button>
          </div>
        </nav>

        <div className="p-4 border-t border-[#cccccc]">
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-[#7f7f7f] hover:bg-[#f2f2f2] hover:text-[#595959]"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-[#595959] mb-8">Dashboard Overview</h2>

          {/* Metric Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg border border-[#cccccc] p-6">
              <div className="text-sm text-[#7f7f7f] mb-1">Active Transfers</div>
              <div className="text-3xl font-semibold text-[#595959]">24</div>
              <div className="text-sm text-[#7f7f7f] mt-2">+8% from last month</div>
            </div>
            <div className="bg-white rounded-lg border border-[#cccccc] p-6">
              <div className="text-sm text-[#7f7f7f] mb-1">Completed Transfers</div>
              <div className="text-3xl font-semibold text-[#595959]">78</div>
              <div className="text-sm text-[#7f7f7f] mt-2">+15% from last month</div>
            </div>
            <div className="bg-white rounded-lg border border-[#cccccc] p-6">
              <div className="text-sm text-[#7f7f7f] mb-1">Completion Rate</div>
              <div className="text-3xl font-semibold text-[#595959]">87%</div>
              <div className="text-sm text-[#7f7f7f] mt-2">+3% from last month</div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-white rounded-lg border border-[#cccccc] p-6 mb-8">
            <h3 className="text-lg font-semibold text-[#595959] mb-6">
              Knowledge Transfer Progress (30 Days)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#cccccc" />
                <XAxis dataKey="day" stroke="#7f7f7f" style={{ fontSize: '12px' }} />
                <YAxis stroke="#7f7f7f" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #cccccc',
                    borderRadius: '6px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="transfers"
                  stroke="#595959"
                  strokeWidth={2}
                  dot={{ fill: '#595959', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-lg border border-[#cccccc] p-6">
            <h3 className="text-lg font-semibold text-[#595959] mb-6">Recent Transfers</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#cccccc]">
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#595959]">
                      Employee
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#595959]">
                      Department
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#595959]">
                      Successor
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#595959]">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, idx) => (
                    <tr key={idx} className="border-b border-[#cccccc] last:border-0">
                      <td className="py-3 px-4 text-[#595959]">{employee.name}</td>
                      <td className="py-3 px-4 text-[#7f7f7f]">{employee.department}</td>
                      <td className="py-3 px-4 text-[#7f7f7f]">{employee.successor}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            employee.status === 'Completed'
                              ? 'bg-[#595959] text-white'
                              : employee.status === 'In Progress'
                              ? 'bg-[#f2f2f2] text-[#595959] border border-[#cccccc]'
                              : 'bg-white text-[#7f7f7f] border border-[#cccccc]'
                          }`}
                        >
                          {employee.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
