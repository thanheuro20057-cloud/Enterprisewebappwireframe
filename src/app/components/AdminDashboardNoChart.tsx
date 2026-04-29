import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronDown, MessageCircle } from 'lucide-react';
import { AdminSidebar } from './AdminSidebar';

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

export function AdminDashboardNoChart({ userType = 'retiree' }: { userType?: 'retiree' | 'successor' }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('All Departments');
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const chatPath = userType === 'successor' ? '/successor/chatbox' : '/retiree/interview';
  const bubbleText = userType === 'retiree'
    ? "Let's transfer your knowledge"
    : "Let's get to know what your predecessor left behind";

  return (
    <div className="flex h-screen bg-[#eef0f4]">
      <AdminSidebar userType={userType} />

      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-[#1e212b] mb-8">Employee Transfers</h2>

          {/* Search and Filter Bar */}
          <div className="bg-white rounded-lg border border-[#d4d6db] p-6 mb-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5c6270]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search employees..."
                  className="w-full pl-10 pr-4 py-2 border border-[#d4d6db] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4d8b31] focus:border-transparent text-[#1e212b]"
                />
              </div>
              <div className="relative">
                <select
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="appearance-none px-4 py-2 pr-10 border border-[#d4d6db] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4d8b31] focus:border-transparent text-[#1e212b] bg-white"
                >
                  <option>All Departments</option>
                  <option>Engineering</option>
                  <option>Operations</option>
                  <option>Finance</option>
                  <option>Marketing</option>
                  <option>HR</option>
                  <option>Sales</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5c6270] pointer-events-none" />
              </div>
              <div className="relative">
                <select className="appearance-none px-4 py-2 pr-10 border border-[#d4d6db] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4d8b31] focus:border-transparent text-[#1e212b] bg-white">
                  <option>All Status</option>
                  <option>Completed</option>
                  <option>In Progress</option>
                  <option>Not Started</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5c6270] pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Expanded Table with Progress Bars */}
          <div className="bg-white rounded-lg border border-[#d4d6db] p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#d4d6db]">
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#1e212b]">Employee</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#1e212b]">Department</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#1e212b]">Successor</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#1e212b]">Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, idx) => (
                    <tr key={idx} className="border-b border-[#d4d6db] last:border-0">
                      <td className="py-4 px-4 text-[#1e212b] font-medium">{employee.name}</td>
                      <td className="py-4 px-4 text-[#5c6270]">{employee.department}</td>
                      <td className="py-4 px-4 text-[#5c6270]">{employee.successor}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-[#eef0f4] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#4d8b31] rounded-full transition-all duration-300"
                              style={{ width: `${employee.progress}%` }}
                            />
                          </div>
                          <span className="text-sm text-[#5c6270] font-medium w-12 text-right">
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

        {/* Floating Bubble */}
        <div
          className="fixed bottom-8 right-8 z-50"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            onClick={() => navigate(chatPath)}
            className={`flex items-center gap-3 bg-[#4d8b31] text-white rounded-full shadow-lg transition-all duration-300 ease-in-out ${isHovered ? 'px-6 py-4' : 'p-4'} hover:bg-[#3d7026]`}
          >
            <MessageCircle className="w-6 h-6 flex-shrink-0" />
            <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isHovered ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'}`}>
              {bubbleText}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
