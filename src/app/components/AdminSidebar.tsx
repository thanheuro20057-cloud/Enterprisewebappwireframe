import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home,
  Users,
  FileText,
  Settings,
  BarChart3,
  LogOut,
  MessageSquare,
} from 'lucide-react';

interface AdminSidebarProps {
  userType?: 'retiree' | 'successor';
}

export function AdminSidebar({ userType = 'retiree' }: AdminSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const dashboardPath =
    userType === 'successor' ? '/successor/dashboard' : '/admin/dashboard';
  const dashboardAltPath =
    userType === 'successor' ? '/successor/dashboard-alt' : '/admin/dashboard-alt';
  const chatPath =
    userType === 'successor' ? '/successor/chatbox' : '/retiree/interview';
  const employeesPath =
    userType === 'successor' ? '/successor/employees' : '/admin/employees';
  const knowledgeBasePath =
    userType === 'successor' ? '/successor/knowledge-base' : '/admin/knowledge-base';
  const settingsPath =
    userType === 'successor' ? '/successor/settings' : '/admin/settings';

  const navItems = [
    { icon: Home, label: 'Dashboard', path: dashboardPath },
    { icon: BarChart3, label: 'Overview', path: dashboardAltPath },
    { icon: Users, label: 'Employees', path: employeesPath },
    { icon: FileText, label: 'Knowledge Base', path: knowledgeBasePath },
    { icon: MessageSquare, label: 'Chat', path: chatPath },
    { icon: Settings, label: 'Settings', path: settingsPath },
  ];

  return (
    <div className="w-64 bg-white border-r border-[#d4d6db] flex flex-col flex-shrink-0">
      {/* Logo */}
      <div className="p-6 border-b border-[#d4d6db]">
        <h1 className="text-xl font-semibold text-[#1e212b]">
          Exit<span className="text-[#4d8b31]">Wise</span>
        </h1>
        <p className="text-xs text-[#9ea3b0] mt-0.5">
          {userType === 'successor' ? 'Successor View' : 'Admin View'}
        </p>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 p-4 overflow-auto">
        <div className="space-y-1">
          {navItems.map(({ icon: Icon, label, path }) => {
            const active = location.pathname === path;
            return (
              <button
                key={label}
                onClick={() => navigate(path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm transition-colors ${
                  active
                    ? 'bg-[#4d8b31] text-white font-medium'
                    : 'text-[#5c6270] hover:bg-[#eef0f4] hover:text-[#1e212b]'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {label}
                {label === 'Chat' && (
                  <span className={`ml-auto w-2 h-2 rounded-full ${active ? 'bg-white opacity-70' : 'bg-[#ffc800]'}`} />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Sign Out */}
      <div className="p-4 border-t border-[#d4d6db]">
        <button
          onClick={() => navigate('/')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-[#5c6270] hover:bg-[#eef0f4] hover:text-[#1e212b] text-sm transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
