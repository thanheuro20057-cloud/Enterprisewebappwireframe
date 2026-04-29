import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronRight, Filter, MessageCircle, Download, BookOpen } from 'lucide-react';
import { AdminSidebar } from './AdminSidebar';

const categories = ['All', 'Vendors', 'Safety', 'Workarounds', 'Equipment', 'Processes', 'Contacts', 'Systems'];

const knowledgeItems = [
  { category: 'Vendors', title: 'Acme Supply Co. — Preferred Contact', retiree: 'Robert Martinez', department: 'Engineering', snippet: 'When ordering urgent parts, always contact Sarah Johnson directly at ext. 4521 instead of going through the general line. She can expedite orders within 24 hours.', date: 'Apr 10, 2025', views: 12 },
  { category: 'Safety', title: 'Machine 3B Safety Override Protocol', retiree: 'Robert Martinez', department: 'Engineering', snippet: 'In case of emergency shutdown, the reset button is located behind the panel on the left side. Wait exactly 30 seconds before pressing to avoid damaging the motor.', date: 'Apr 9, 2025', views: 8 },
  { category: 'Workarounds', title: 'Quarterly Report Batch Processing', retiree: 'Sarah Johnson', department: 'Operations', snippet: 'The official reporting system times out when pulling data for more than 50 vendors. Split vendor lists into groups of 30 and run reports during off-peak hours (6–7 AM).', date: 'Apr 8, 2025', views: 25 },
  { category: 'Processes', title: 'Month-End Close Checklist', retiree: 'James Wilson', department: 'Finance', snippet: 'The finance team needs vendor reconciliation data by the 3rd business day. Start the export on the last day of the month. Use the "Full Detail" template — not the default.', date: 'Apr 7, 2025', views: 19 },
  { category: 'Contacts', title: 'Building Maintenance After Hours', retiree: 'Linda Davis', department: 'HR', snippet: 'For after-hours facility issues, call Tom Rodriguez directly at (555) 0123. He responds faster than the general maintenance line and has keys to all equipment rooms.', date: 'Apr 6, 2025', views: 5 },
  { category: 'Equipment', title: 'Printer Room 204 — Paper Jam Fix', retiree: 'Robert Martinez', department: 'Engineering', snippet: 'This printer has a quirk where it jams on legal-sized paper. Always check that Tray 2 is set to "Legal" in the control panel before printing, not just in the print dialog.', date: 'Apr 5, 2025', views: 14 },
  { category: 'Vendors', title: 'TechGear Solutions — Warranty Claims', retiree: 'Thomas Garcia', department: 'Engineering', snippet: 'Their online warranty form is broken. Instead, email warranty@techgear.com with photos and include PO number in the subject line. Response within 2 business days.', date: 'Apr 4, 2025', views: 7 },
  { category: 'Systems', title: 'Legacy CRM Data Export', retiree: 'Sarah Johnson', department: 'Operations', snippet: 'The legacy CRM only exports clean data on Sunday nights between 2–4 AM. Schedule automated exports then and store them in the "CRM-Backups" shared drive folder.', date: 'Apr 3, 2025', views: 11 },
  { category: 'Safety', title: 'Chemical Storage Room Access', retiree: 'Robert Martinez', department: 'Engineering', snippet: "The keycard reader is faulty. If it doesn't work on first try, hold the card against the reader for 3 seconds. Never force the door as it will trigger the alarm.", date: 'Apr 2, 2025', views: 9 },
];

export function AdminKnowledgeBasePage({ userType = 'retiree' }: { userType?: 'retiree' | 'successor' }) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRetiree, setSelectedRetiree] = useState('All Retirees');
  const [isHovered, setIsHovered] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const chatPath = userType === 'successor' ? '/successor/chatbox' : '/retiree/interview';
  const bubbleText = userType === 'retiree' ? "Let's transfer your knowledge" : "Let's get to know what your predecessor left behind";

  const retireeNames = ['All Retirees', ...Array.from(new Set(knowledgeItems.map(i => i.retiree)))];

  const filtered = knowledgeItems.filter((item) => {
    const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    const matchRetiree = selectedRetiree === 'All Retirees' || item.retiree === selectedRetiree;
    return matchCat && matchSearch && matchRetiree;
  });

  const totalViews = knowledgeItems.reduce((acc, i) => acc + i.views, 0);
  const uniqueRetirees = new Set(knowledgeItems.map(i => i.retiree)).size;
  const uniqueCategories = new Set(knowledgeItems.map(i => i.category)).size;

  return (
    <div className="flex h-screen bg-[#eef0f4]">
      <AdminSidebar userType={userType} />

      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-semibold text-[#1e212b]">Knowledge Base</h2>
              <p className="text-sm text-[#5c6270] mt-1">All captured knowledge and expertise across your organization</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-[#d4d6db] bg-white text-[#1e212b] rounded-md hover:bg-[#eef0f4] transition-colors text-sm">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Items', value: knowledgeItems.length, icon: BookOpen, sub: 'Across all transfers' },
              { label: 'Total Views', value: totalViews, icon: ChevronRight, sub: 'By successors' },
              { label: 'Contributors', value: uniqueRetirees, icon: Filter, sub: 'Retiring employees' },
              { label: 'Categories', value: uniqueCategories, icon: Filter, sub: 'Knowledge types' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-lg border border-[#d4d6db] p-5">
                <div className="text-sm text-[#5c6270] mb-1">{s.label}</div>
                <div className="text-2xl font-semibold text-[#1e212b]">{s.value}</div>
                <div className="text-xs text-[#9ea3b0] mt-1">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Filters Row */}
          <div className="bg-white rounded-lg border border-[#d4d6db] p-4 mb-6">
            <div className="flex gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5c6270]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search knowledge base..."
                  className="w-full pl-9 pr-4 py-2 border border-[#d4d6db] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#4d8b31] focus:border-transparent text-[#1e212b]"
                />
              </div>
              <select
                value={selectedRetiree}
                onChange={(e) => setSelectedRetiree(e.target.value)}
                className="appearance-none pl-3 pr-8 py-2 border border-[#d4d6db] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#4d8b31] text-[#1e212b] bg-white"
              >
                {retireeNames.map((r) => <option key={r}>{r}</option>)}
              </select>
              <div className="flex border border-[#d4d6db] rounded-md overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 text-xs ${viewMode === 'grid' ? 'bg-[#4d8b31] text-white' : 'text-[#5c6270] hover:bg-[#eef0f4]'}`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 text-xs border-l border-[#d4d6db] ${viewMode === 'list' ? 'bg-[#4d8b31] text-white' : 'text-[#5c6270] hover:bg-[#eef0f4]'}`}
                >
                  List
                </button>
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#4d8b31] text-white border-[#4d8b31]'
                    : 'bg-white text-[#5c6270] border-[#d4d6db] hover:border-[#4d8b31] hover:text-[#4d8b31]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-sm text-[#5c6270] mb-4">
            {filtered.length} item{filtered.length !== 1 ? 's' : ''} found
          </div>

          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-2 gap-5">
              {filtered.map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-[#d4d6db] p-6 hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block px-2 py-1 rounded text-xs font-medium border border-[#d4d6db] bg-[#eef0f4] text-[#5c6270]">
                      {item.category}
                    </span>
                    <ChevronRight className="w-4 h-4 text-[#d4d6db] group-hover:text-[#4d8b31] transition-colors" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#1e212b] mb-2">{item.title}</h3>
                  <p className="text-xs text-[#5c6270] leading-relaxed mb-4 line-clamp-2">{item.snippet}</p>
                  <div className="flex items-center justify-between text-xs text-[#9ea3b0]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-[#eef0f4] border border-[#d4d6db] flex items-center justify-center">
                        <span className="text-[9px] text-[#1e212b]">{item.retiree.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <span>{item.retiree}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>{item.views} views</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === 'list' && (
            <div className="bg-white rounded-lg border border-[#d4d6db]">
              {filtered.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 border-b border-[#d4d6db] last:border-0 hover:bg-[#eef0f4]/50 cursor-pointer group">
                  <span className="inline-block px-2 py-1 rounded text-xs font-medium border border-[#d4d6db] bg-[#eef0f4] text-[#5c6270] flex-shrink-0">
                    {item.category}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-[#1e212b] mb-1">{item.title}</h3>
                    <p className="text-xs text-[#5c6270] leading-relaxed truncate">{item.snippet}</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[#9ea3b0] flex-shrink-0">
                    <span>{item.retiree}</span>
                    <span>{item.views} views</span>
                    <span>{item.date}</span>
                    <ChevronRight className="w-4 h-4 text-[#d4d6db] group-hover:text-[#4d8b31] transition-colors" />
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
