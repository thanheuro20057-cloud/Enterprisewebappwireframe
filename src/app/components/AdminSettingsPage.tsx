import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Check } from 'lucide-react';
import { AdminSidebar } from './AdminSidebar';

type SettingsTab = 'profile' | 'organization' | 'notifications' | 'integrations' | 'security';

const integrations = [
  { name: 'Slack', desc: 'Send interview reminders and progress updates to Slack channels.', connected: true },
  { name: 'Microsoft Teams', desc: 'Post knowledge-transfer milestones to Teams channels.', connected: false },
  { name: 'Google Workspace', desc: 'Sync contacts and calendar reminders with Google.', connected: true },
  { name: 'Notion', desc: 'Export captured knowledge directly into Notion pages.', connected: false },
  { name: 'Confluence', desc: 'Publish knowledge articles to your Confluence space.', connected: false },
];

export function AdminSettingsPage({ userType = 'retiree' }: { userType?: 'retiree' | 'successor' }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<SettingsTab>('profile');
  const [isHovered, setIsHovered] = useState(false);
  const [saved, setSaved] = useState(false);

  const chatPath = userType === 'successor' ? '/successor/chatbox' : '/retiree/interview';
  const bubbleText = userType === 'retiree' ? "Let's transfer your knowledge" : "Let's get to know what your predecessor left behind";

  const [fullName, setFullName] = useState('Alex Morgan');
  const [email, setEmail] = useState('alex.morgan@company.com');
  const [role, setRole] = useState('HR Administrator');
  const [orgName, setOrgName] = useState('Acme Corporation');
  const [orgSize, setOrgSize] = useState('501–1,000');
  const [timezone, setTimezone] = useState('(UTC-05:00) Eastern Time');

  const [notifs, setNotifs] = useState({
    sessionCompleted: true,
    progressMilestone: true,
    newEmployee: false,
    weeklyDigest: true,
    urgentAlert: true,
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const toggleNotif = (key: keyof typeof notifs) => {
    setNotifs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const settingsTabs: { key: SettingsTab; label: string }[] = [
    { key: 'profile', label: 'Profile' },
    { key: 'organization', label: 'Organization' },
    { key: 'notifications', label: 'Notifications' },
    { key: 'integrations', label: 'Integrations' },
    { key: 'security', label: 'Security' },
  ];

  const inputClass = "w-full px-3 py-2 border border-[#d4d6db] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#4d8b31] focus:border-transparent text-[#1e212b]";
  const selectClass = "w-full px-3 py-2 border border-[#d4d6db] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#4d8b31] focus:border-transparent text-[#1e212b] bg-white";
  const labelClass = "block text-sm font-medium text-[#1e212b] mb-1.5";
  const saveBtn = (label = 'Save Changes') => (
    <button
      onClick={handleSave}
      className="flex items-center gap-2 px-5 py-2 bg-[#4d8b31] text-white rounded-md text-sm hover:bg-[#3d7026] transition-colors"
    >
      {saved && <Check className="w-4 h-4" />}
      {saved ? 'Saved!' : label}
    </button>
  );

  return (
    <div className="flex h-screen bg-[#eef0f4]">
      <AdminSidebar userType={userType} />

      <div className="flex-1 overflow-auto">
        <div className="p-8 max-w-4xl">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-[#1e212b]">Settings</h2>
            <p className="text-sm text-[#5c6270] mt-1">Manage your account, organization, and preferences</p>
          </div>

          <div className="flex gap-8">
            {/* Left Sub-Nav */}
            <div className="w-48 flex-shrink-0">
              <nav className="space-y-1">
                {settingsTabs.map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`w-full text-left px-4 py-2.5 rounded-md text-sm transition-colors ${
                      activeTab === key
                        ? 'bg-white border border-[#d4d6db] text-[#1e212b] font-medium shadow-sm'
                        : 'text-[#5c6270] hover:bg-white hover:text-[#1e212b]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Profile */}
              {activeTab === 'profile' && (
                <div className="bg-white rounded-lg border border-[#d4d6db] p-6">
                  <h3 className="text-lg font-semibold text-[#1e212b] mb-6">Profile Settings</h3>
                  <div className="flex items-center gap-5 mb-8 pb-6 border-b border-[#d4d6db]">
                    <div className="w-16 h-16 rounded-full bg-[#eef0f4] border border-[#d4d6db] flex items-center justify-center">
                      <span className="text-xl font-semibold text-[#1e212b]">AM</span>
                    </div>
                    <div>
                      <button className="px-4 py-2 border border-[#d4d6db] rounded-md text-sm text-[#1e212b] hover:bg-[#eef0f4] transition-colors">Change Avatar</button>
                      <p className="text-xs text-[#9ea3b0] mt-1.5">JPG, PNG or GIF. Max 2MB.</p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div><label className={labelClass}>Full Name</label><input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className={inputClass} /></div>
                    <div><label className={labelClass}>Email Address</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} /></div>
                    <div><label className={labelClass}>Job Title / Role</label><input type="text" value={role} onChange={(e) => setRole(e.target.value)} className={inputClass} /></div>
                  </div>
                  <div className="flex items-center gap-3 mt-8 pt-6 border-t border-[#d4d6db]">
                    {saveBtn()}
                    <button className="px-5 py-2 border border-[#d4d6db] text-[#1e212b] rounded-md text-sm hover:bg-[#eef0f4] transition-colors">Cancel</button>
                  </div>
                </div>
              )}

              {/* Organization */}
              {activeTab === 'organization' && (
                <div className="bg-white rounded-lg border border-[#d4d6db] p-6">
                  <h3 className="text-lg font-semibold text-[#1e212b] mb-6">Organization Settings</h3>
                  <div className="space-y-5">
                    <div><label className={labelClass}>Organization Name</label><input type="text" value={orgName} onChange={(e) => setOrgName(e.target.value)} className={inputClass} /></div>
                    <div>
                      <label className={labelClass}>Organization Size</label>
                      <select value={orgSize} onChange={(e) => setOrgSize(e.target.value)} className={selectClass}>
                        {['1–50','51–200','201–500','501–1,000','1,001–5,000','5,000+'].map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Default Timezone</label>
                      <select value={timezone} onChange={(e) => setTimezone(e.target.value)} className={selectClass}>
                        {['(UTC-08:00) Pacific Time','(UTC-07:00) Mountain Time','(UTC-06:00) Central Time','(UTC-05:00) Eastern Time','(UTC+00:00) UTC','(UTC+01:00) Central European Time'].map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Industry</label>
                      <select className={selectClass}>
                        {['Manufacturing','Technology','Healthcare','Finance','Retail','Other'].map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-8 pt-6 border-t border-[#d4d6db]">
                    {saveBtn()}
                    <button className="px-5 py-2 border border-[#d4d6db] text-[#1e212b] rounded-md text-sm hover:bg-[#eef0f4] transition-colors">Cancel</button>
                  </div>
                </div>
              )}

              {/* Notifications */}
              {activeTab === 'notifications' && (
                <div className="bg-white rounded-lg border border-[#d4d6db] p-6">
                  <h3 className="text-lg font-semibold text-[#1e212b] mb-6">Notification Preferences</h3>
                  <div className="space-y-5">
                    {[
                      { key: 'sessionCompleted', label: 'Interview Session Completed', desc: 'Get notified when a knowledge interview session is finished.' },
                      { key: 'progressMilestone', label: 'Progress Milestones', desc: 'Notify when a transfer reaches 25%, 50%, 75%, or 100%.' },
                      { key: 'newEmployee', label: 'New Employee Added', desc: 'Alert when a new retiree or successor is added to the system.' },
                      { key: 'weeklyDigest', label: 'Weekly Summary Digest', desc: 'Receive a weekly overview of all active transfers every Monday.' },
                      { key: 'urgentAlert', label: 'Urgent Alerts', desc: 'Critical notifications such as overdue transfers or unassigned pairs.' },
                    ].map(({ key, label, desc }) => (
                      <div key={key} className="flex items-start justify-between gap-4 py-4 border-b border-[#eef0f4] last:border-0">
                        <div>
                          <div className="text-sm font-medium text-[#1e212b]">{label}</div>
                          <div className="text-xs text-[#5c6270] mt-0.5">{desc}</div>
                        </div>
                        <button
                          onClick={() => toggleNotif(key as keyof typeof notifs)}
                          className={`relative flex-shrink-0 mt-0.5 rounded-full transition-colors`}
                          style={{
                            height: '22px',
                            width: '40px',
                            backgroundColor: notifs[key as keyof typeof notifs] ? '#4d8b31' : '#d4d6db',
                          }}
                        >
                          <span
                            className="absolute bg-white rounded-full shadow transition-all"
                            style={{
                              height: '18px',
                              width: '18px',
                              top: '2px',
                              left: notifs[key as keyof typeof notifs] ? '20px' : '2px',
                            }}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#d4d6db]">{saveBtn('Save Preferences')}</div>
                </div>
              )}

              {/* Integrations */}
              {activeTab === 'integrations' && (
                <div className="bg-white rounded-lg border border-[#d4d6db] p-6">
                  <h3 className="text-lg font-semibold text-[#1e212b] mb-2">Integrations</h3>
                  <p className="text-sm text-[#5c6270] mb-6">Connect ExitWise with your existing tools to streamline workflows.</p>
                  <div className="space-y-4">
                    {integrations.map((intg) => (
                      <div key={intg.name} className="flex items-center justify-between p-4 border border-[#d4d6db] rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-[#eef0f4] border border-[#d4d6db] flex items-center justify-center">
                            <span className="text-xs font-semibold text-[#1e212b]">{intg.name.slice(0, 2)}</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-[#1e212b]">{intg.name}</div>
                            <div className="text-xs text-[#5c6270] mt-0.5">{intg.desc}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {intg.connected && (
                            <span className="text-xs text-[#4d8b31] flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#4d8b31] inline-block" />
                              Connected
                            </span>
                          )}
                          <button className={`px-4 py-1.5 rounded-md text-xs border transition-colors ${
                            intg.connected
                              ? 'border-[#d4d6db] text-[#5c6270] hover:bg-[#eef0f4]'
                              : 'border-[#4d8b31] text-[#4d8b31] hover:bg-[#4d8b31] hover:text-white'
                          }`}>
                            {intg.connected ? 'Disconnect' : 'Connect'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Security */}
              {activeTab === 'security' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-lg border border-[#d4d6db] p-6">
                    <h3 className="text-lg font-semibold text-[#1e212b] mb-6">Password</h3>
                    <div className="space-y-4">
                      <div><label className={labelClass}>Current Password</label><input type="password" placeholder="••••••••" className={inputClass} /></div>
                      <div><label className={labelClass}>New Password</label><input type="password" placeholder="••••••••" className={inputClass} /></div>
                      <div><label className={labelClass}>Confirm New Password</label><input type="password" placeholder="••••••••" className={inputClass} /></div>
                    </div>
                    <div className="mt-6">{saveBtn('Update Password')}</div>
                  </div>
                  <div className="bg-white rounded-lg border border-[#d4d6db] p-6">
                    <h3 className="text-lg font-semibold text-[#1e212b] mb-2">Two-Factor Authentication</h3>
                    <p className="text-sm text-[#5c6270] mb-4">Add an extra layer of security to your account.</p>
                    <button className="px-5 py-2 border border-[#4d8b31] text-[#4d8b31] rounded-md text-sm hover:bg-[#4d8b31] hover:text-white transition-colors">Enable 2FA</button>
                  </div>
                  <div className="bg-white rounded-lg border border-[#d4d6db] p-6">
                    <h3 className="text-lg font-semibold text-[#1e212b] mb-2">Danger Zone</h3>
                    <p className="text-sm text-[#5c6270] mb-4">Permanently delete your account and all associated data.</p>
                    <button className="px-5 py-2 border border-[#d4d6db] text-[#5c6270] rounded-md text-sm hover:border-[#9ea3b0] hover:text-[#1e212b] transition-colors">Delete Account</button>
                  </div>
                </div>
              )}
            </div>
          </div>
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
