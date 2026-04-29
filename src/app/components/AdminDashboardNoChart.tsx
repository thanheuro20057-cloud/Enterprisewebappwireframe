import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Users, FileText, Settings, BarChart3, LogOut, Search, ChevronDown } from 'lucide-react';

const employees = [
  { name: 'Robert Martinez', department: 'Engineering', successor: 'Emily Chen', progress: 100 },
  { name: 'Sarah Johnson', department: 'Operations', successor: 'Michael Park', progress: 65 },
  { name: 'James Wilson', department: 'Finance', successor: 'Lisa Anderson', progress: 40 },
  { name: 'Patricia Brown', department: 'Marketing', successor: 'David Kim', progress: 15 },
  { name: 'Linda Davis', department: 'HR', successor: 'John Smith', progress: 100 },
  { name: 'Thomas Garcia', department: 'Engineering', successor: 'Rachel White', progress: 80 },
  { name: 'Barbara Rodriguez', department: 'Operations', successor: 'Chris Lee', progress: 55 },
  { name: 'Christopher Lee', department: 'Sales', successor: 'Anna Martinez', progress: 30 },
  { name: 'Jessica Taylor', department: 'Marketing', successor: 'Tom Brown', progress: 90 },
  { name: 'Daniel Anderson', department: 'Finance', successor: 'Sophie Turner', progress: 20 },
];

export function AdminDashboardNoChart() {
  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('All Departments');
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
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-[#7f7f7f] hover:bg-[#f2f2f2] hover:text-[#595959]"
            >
              <Home className="w-5 h-5" />
              Dashboard
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-md bg-[#f2f2f2] text-[#595959] font-medium">
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
          <h2 className="text-3xl font-semibold text-[#595959] mb-8">Employee Transfers</h2>

          {/* Search and Filter Bar */}
          <div className="bg-white rounded-lg border border-[#cccccc] p-6 mb-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7f7f7f]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search employees..."
                  className="w-full pl-10 pr-4 py-2 border border-[#cccccc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#595959] focus:border-transparent text-[#595959]"
                />
              </div>
              <div className="relative">
                <select
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="appearance-none px-4 py-2 pr-10 border border-[#cccccc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#595959] focus:border-transparent text-[#595959] bg-white"
                >
                  <option>All Departments</option>
                  <option>Engineering</option>
                  <option>Operations</option>
                  <option>Finance</option>
                  <option>Marketing</option>
                  <option>HR</option>
                  <option>Sales</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7f7f7f] pointer-events-none" />
              </div>
              <div className="relative">
                <select className="appearance-none px-4 py-2 pr-10 border border-[#cccccc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#595959] focus:border-transparent text-[#595959] bg-white">
                  <option>All Status</option>
                  <option>Completed</option>
                  <option>In Progress</option>
                  <option>Not Started</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7f7f7f] pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Expanded Table with Progress Bars */}
          <div className="bg-white rounded-lg border border-[#cccccc] p-6">
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
                      Progress
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, idx) => (
                    <tr key={idx} className="border-b border-[#cccccc] last:border-0">
                      <td className="py-4 px-4 text-[#595959] font-medium">{employee.name}</td>
                      <td className="py-4 px-4 text-[#7f7f7f]">{employee.department}</td>
                      <td className="py-4 px-4 text-[#7f7f7f]">{employee.successor}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-[#f2f2f2] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#595959] rounded-full transition-all duration-300"
                              style={{ width: `${employee.progress}%` }}
                            />
                          </div>
                          <span className="text-sm text-[#7f7f7f] font-medium w-12 text-right">
                            {employee.progress}%
                          </span>
                        </div>
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
