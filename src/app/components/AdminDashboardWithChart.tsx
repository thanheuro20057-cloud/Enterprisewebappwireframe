import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { AdminSidebar } from './AdminSidebar';

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

function SimpleLineChart({ data }: { data: { day: string; transfers: number }[] }) {
  const [tooltip, setTooltip] = useState<{ x: number; y: number; value: number; label: string } | null>(null);

  const width = 600;
  const height = 260;
  const paddingLeft = 48;
  const paddingRight = 24;
  const paddingTop = 16;
  const paddingBottom = 40;

  const chartW = width - paddingLeft - paddingRight;
  const chartH = height - paddingTop - paddingBottom;

  const maxVal = Math.max(...data.map((d) => d.transfers));
  const minVal = 0;
  const range = maxVal - minVal || 1;

  const toX = (i: number) => paddingLeft + (i / (data.length - 1)) * chartW;
  const toY = (v: number) => paddingTop + chartH - ((v - minVal) / range) * chartH;

  const points = data.map((d, i) => ({ x: toX(i), y: toY(d.transfers), ...d }));
  const polyline = points.map((p) => `${p.x},${p.y}`).join(' ');

  const yTicks = [0, Math.round(maxVal * 0.25), Math.round(maxVal * 0.5), Math.round(maxVal * 0.75), maxVal];

  return (
    <div className="relative w-full" style={{ height }}>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} preserveAspectRatio="xMidYMid meet">
        {yTicks.map((tick, i) => {
          const y = toY(tick);
          return (
            <g key={`ytick-${i}`}>
              <line x1={paddingLeft} y1={y} x2={width - paddingRight} y2={y} stroke="#d4d6db" strokeWidth={1} strokeDasharray="3 3" />
              <text x={paddingLeft - 8} y={y + 4} textAnchor="end" fontSize={11} fill="#5c6270">{tick}</text>
            </g>
          );
        })}
        {points.map((p, i) => (
          <text key={`xlabel-${i}`} x={p.x} y={height - 8} textAnchor="middle" fontSize={11} fill="#5c6270">{p.day}</text>
        ))}
        <polyline points={polyline} fill="none" stroke="#4d8b31" strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />
        {points.map((p, i) => (
          <circle
            key={`dot-${i}`}
            cx={p.x} cy={p.y} r={4}
            fill="#4d8b31" stroke="white" strokeWidth={2}
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => setTooltip({ x: p.x, y: p.y, value: p.transfers, label: p.day })}
            onMouseLeave={() => setTooltip(null)}
          />
        ))}
      </svg>
      {tooltip && (
        <div
          className="absolute pointer-events-none bg-white border border-[#d4d6db] rounded-md px-3 py-2 text-sm text-[#1e212b] shadow-sm"
          style={{ left: `${(tooltip.x / width) * 100}%`, top: tooltip.y - 48, transform: 'translateX(-50%)' }}
        >
          <div className="text-[#5c6270] text-xs">{tooltip.label}</div>
          <div className="font-medium">{tooltip.value} transfers</div>
        </div>
      )}
    </div>
  );
}

export function AdminDashboardWithChart({ userType = 'retiree' }: { userType?: 'retiree' | 'successor' }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const chatPath = userType === 'successor' ? '/successor/chatbox' : '/retiree/interview';
  const bubbleText = userType === 'retiree'
    ? "Let's transfer your knowledge"
    : "Let's get to know what your predecessor left behind";

  return (
    <div className="flex h-screen bg-[#eef0f4]">
      <AdminSidebar userType={userType} />

      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-[#1e212b] mb-8">Dashboard Overview</h2>

          {/* Metric Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg border border-[#d4d6db] p-6">
              <div className="text-sm text-[#5c6270] mb-1">Active Transfers</div>
              <div className="text-3xl font-semibold text-[#1e212b]">24</div>
              <div className="text-sm text-[#5c6270] mt-2">+8% from last month</div>
            </div>
            <div className="bg-white rounded-lg border border-[#d4d6db] p-6">
              <div className="text-sm text-[#5c6270] mb-1">Completed Transfers</div>
              <div className="text-3xl font-semibold text-[#1e212b]">78</div>
              <div className="text-sm text-[#5c6270] mt-2">+15% from last month</div>
            </div>
            <div className="bg-white rounded-lg border border-[#d4d6db] p-6">
              <div className="text-sm text-[#5c6270] mb-1">Completion Rate</div>
              <div className="text-3xl font-semibold text-[#1e212b]">87%</div>
              <div className="text-sm text-[#5c6270] mt-2">+3% from last month</div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-white rounded-lg border border-[#d4d6db] p-6 mb-8">
            <h3 className="text-lg font-semibold text-[#1e212b] mb-6">
              Knowledge Transfer Progress (30 Days)
            </h3>
            <SimpleLineChart data={chartData} />
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-lg border border-[#d4d6db] p-6">
            <h3 className="text-lg font-semibold text-[#1e212b] mb-6">Recent Transfers</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#d4d6db]">
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#1e212b]">Employee</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#1e212b]">Department</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#1e212b]">Successor</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#1e212b]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee.name} className="border-b border-[#d4d6db] last:border-0">
                      <td className="py-3 px-4 text-[#1e212b]">{employee.name}</td>
                      <td className="py-3 px-4 text-[#5c6270]">{employee.department}</td>
                      <td className="py-3 px-4 text-[#5c6270]">{employee.successor}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          employee.status === 'Completed'
                            ? 'bg-[#4d8b31] text-white'
                            : employee.status === 'In Progress'
                            ? 'bg-[#fff4d6] text-[#1e212b] border border-[#ffc800]'
                            : 'bg-[#fff3ec] text-[#ff8427] border border-[#ff8427]/40'
                        }`}>
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
