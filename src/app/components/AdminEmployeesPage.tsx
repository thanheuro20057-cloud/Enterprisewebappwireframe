import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  ChevronDown,
  Plus,
  MessageSquare,
  MoreHorizontal,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { AdminSidebar } from './AdminSidebar';

const retirees = [
  { name: 'Robert Martinez', initials: 'RM', department: 'Engineering', title: 'Senior Engineer', retirementDate: 'Jun 30, 2025', successor: 'Emily Chen', progress: 65, status: 'In Progress', sessions: 4 },
  { name: 'Sarah Johnson', initials: 'SJ', department: 'Operations', title: 'Operations Manager', retirementDate: 'Jul 15, 2025', successor: 'Michael Park', progress: 40, status: 'In Progress', sessions: 2 },
  { name: 'James Wilson', initials: 'JW', department: 'Finance', title: 'Finance Director', retirementDate: 'Aug 1, 2025', successor: 'Lisa Anderson', progress: 100, status: 'Completed', sessions: 8 },
  { name: 'Patricia Brown', initials: 'PB', department: 'Marketing', title: 'VP Marketing', retirementDate: 'Sep 30, 2025', successor: 'David Kim', progress: 0, status: 'Scheduled', sessions: 0 },
  { name: 'Linda Davis', initials: 'LD', department: 'HR', title: 'HR Director', retirementDate: 'Oct 15, 2025', successor: 'John Smith', progress: 100, status: 'Completed', sessions: 6 },
  { name: 'Thomas Garcia', initials: 'TG', department: 'Engineering', title: 'Lead Architect', retirementDate: 'Nov 1, 2025', successor: 'Rachel White', progress: 80, status: 'In Progress', sessions: 5 },
];

const statusColors: Record<string, string> = {
  Completed: 'bg-[#4d8b31] text-white',
  'In Progress': 'bg-[#fff4d6] text-[#1e212b] border border-[#ffc800]',
  Scheduled: 'bg-[#fff3ec] text-[#ff8427] border border-[#ff8427]/40',
  'Not Started': 'bg-white text-[#9ea3b0] border border-[#d4d6db]',
};

type TabType = 'pairs' | 'retirees' | 'successors';

export function AdminEmployeesPage({ userType = 'retiree' }: { userType?: 'retiree' | 'successor' }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('pairs');
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('All Departments');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [isHovered, setIsHovered] = useState(false);

  const chatPath = userType === 'successor' ? '/successor/chatbox' : '/retiree/interview';
  const bubbleText = userType === 'retiree' ? "Let's transfer your knowledge" : "Let's get to know what your predecessor left behind";

  const filtered = retirees.filter((e) => {
    const matchSearch =
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.successor.toLowerCase().includes(search.toLowerCase());
    const matchDept = deptFilter === 'All Departments' || e.department === deptFilter;
    const matchStatus = statusFilter === 'All Status' || e.status === statusFilter;
    return matchSearch && matchDept && matchStatus;
  });

  return (
    <div className="flex h-screen bg-[#eef0f4]">
      <AdminSidebar userType={userType} />

      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-semibold text-[#1e212b]">Employees</h2>
              <p className="text-sm text-[#5c6270] mt-1">Manage transfer pairs, retirees, and successors</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#4d8b31] text-white rounded-md hover:bg-[#3d7026] transition-colors text-sm">
              <Plus className="w-4 h-4" />
              Add Employee
            </button>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Pairs', value: '6', sub: '2 new this month' },
              { label: 'Active Transfers', value: '3', sub: 'In progress' },
              { label: 'Completed', value: '2', sub: 'This quarter' },
              { label: 'Avg. Progress', value: '64%', sub: 'Across all pairs' },
            ].map((card) => (
              <div key={card.label} className="bg-white rounded-lg border border-[#d4d6db] p-5">
                <div className="text-sm text-[#5c6270] mb-1">{card.label}</div>
                <div className="text-2xl font-semibold text-[#1e212b]">{card.value}</div>
                <div className="text-xs text-[#9ea3b0] mt-1">{card.sub}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-6 bg-white border border-[#d4d6db] rounded-lg p-1 w-fit">
            {(['pairs', 'retirees', 'successors'] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-md text-sm capitalize transition-colors ${
                  activeTab === tab ? 'bg-[#4d8b31] text-white' : 'text-[#5c6270] hover:text-[#1e212b]'
                }`}
              >
                {tab === 'pairs' ? 'Transfer Pairs' : tab}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg border border-[#d4d6db] p-4 mb-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5c6270]" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search employees..."
                  className="w-full pl-9 pr-4 py-2 border border-[#d4d6db] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#4d8b31] focus:border-transparent text-[#1e212b]"
                />
              </div>
              <div className="relative">
                <select
                  value={deptFilter}
                  onChange={(e) => setDeptFilter(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 border border-[#d4d6db] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#4d8b31] text-[#1e212b] bg-white"
                >
                  <option>All Departments</option>
                  <option>Engineering</option>
                  <option>Operations</option>
                  <option>Finance</option>
                  <option>Marketing</option>
                  <option>HR</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5c6270] pointer-events-none" />
              </div>
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 border border-[#d4d6db] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#4d8b31] text-[#1e212b] bg-white"
                >
                  <option>All Status</option>
                  <option>Completed</option>
                  <option>In Progress</option>
                  <option>Scheduled</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5c6270] pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Transfer Pairs Table */}
          {activeTab === 'pairs' && (
            <div className="bg-white rounded-lg border border-[#d4d6db]">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#d4d6db]">
                      <th className="text-left py-4 px-6 text-sm font-medium text-[#1e212b]">Retiree</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-[#1e212b]">Successor</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-[#1e212b]">Department</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-[#1e212b]">Retirement</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-[#1e212b]">Sessions</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-[#1e212b]">Progress</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-[#1e212b]">Status</th>
                      <th className="py-4 px-6"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((emp, idx) => (
                      <tr key={idx} className="border-b border-[#d4d6db] last:border-0 hover:bg-[#eef0f4]/50 transition-colors">
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#eef0f4] border border-[#d4d6db] flex items-center justify-center flex-shrink-0">
                              <span className="text-xs font-medium text-[#1e212b]">{emp.initials}</span>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-[#1e212b]">{emp.name}</div>
                              <div className="text-xs text-[#9ea3b0]">{emp.title}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2">
                            <ArrowRight className="w-3 h-3 text-[#d4d6db]" />
                            <span className="text-sm text-[#5c6270]">{emp.successor}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-sm text-[#5c6270]">{emp.department}</td>
                        <td className="py-4 px-6 text-sm text-[#5c6270]">{emp.retirementDate}</td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-1.5 text-sm text-[#5c6270]">
                            <MessageSquare className="w-3.5 h-3.5" />
                            {emp.sessions}
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3 w-32">
                            <div className="flex-1 h-1.5 bg-[#eef0f4] rounded-full overflow-hidden">
                              <div className="h-full bg-[#4d8b31] rounded-full" style={{ width: `${emp.progress}%` }} />
                            </div>
                            <span className="text-xs text-[#5c6270] w-8 text-right">{emp.progress}%</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[emp.status]}`}>
                            {emp.status}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <button className="p-1.5 rounded-md text-[#9ea3b0] hover:text-[#1e212b] hover:bg-[#eef0f4]">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Retirees Tab */}
          {activeTab === 'retirees' && (
            <div className="grid grid-cols-3 gap-4">
              {filtered.map((emp, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-[#d4d6db] p-5 hover:shadow-sm transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#eef0f4] border border-[#d4d6db] flex items-center justify-center">
                        <span className="text-sm font-medium text-[#1e212b]">{emp.initials}</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#1e212b]">{emp.name}</div>
                        <div className="text-xs text-[#9ea3b0]">{emp.title}</div>
                      </div>
                    </div>
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs ${statusColors[emp.status]}`}>{emp.status}</span>
                  </div>
                  <div className="space-y-2 text-xs text-[#5c6270]">
                    <div className="flex justify-between"><span>Department</span><span className="text-[#1e212b]">{emp.department}</span></div>
                    <div className="flex justify-between"><span>Retirement</span><span className="text-[#1e212b]">{emp.retirementDate}</span></div>
                    <div className="flex justify-between"><span>Sessions</span><span className="text-[#1e212b]">{emp.sessions} completed</span></div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-[#5c6270]">Knowledge Transfer</span>
                      <span className="text-xs font-medium text-[#1e212b]">{emp.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-[#eef0f4] rounded-full overflow-hidden">
                      <div className="h-full bg-[#4d8b31] rounded-full" style={{ width: `${emp.progress}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Successors Tab */}
          {activeTab === 'successors' && (
            <div className="grid grid-cols-3 gap-4">
              {filtered.map((emp, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-[#d4d6db] p-5 hover:shadow-sm transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#eef0f4] border border-[#d4d6db] flex items-center justify-center">
                        <span className="text-sm font-medium text-[#1e212b]">
                          {emp.successor.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#1e212b]">{emp.successor}</div>
                        <div className="text-xs text-[#9ea3b0]">Successor</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-[#5c6270]">
                    <div className="flex justify-between"><span>Department</span><span className="text-[#1e212b]">{emp.department}</span></div>
                    <div className="flex justify-between"><span>Replacing</span><span className="text-[#1e212b]">{emp.name}</span></div>
                    <div className="flex justify-between"><span>Chat Sessions</span><span className="text-[#1e212b]">{Math.floor(emp.sessions * 0.6)} queries</span></div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-[#5c6270]">Onboarding Progress</span>
                      <span className="text-xs font-medium text-[#1e212b]">{emp.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-[#eef0f4] rounded-full overflow-hidden">
                      <div className="h-full bg-[#4d8b31] rounded-full" style={{ width: `${emp.progress}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Floating Chat Bubble */}
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
