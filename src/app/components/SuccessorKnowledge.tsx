import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, LogOut, ChevronRight, MessageSquare, LayoutDashboard, BookOpen } from 'lucide-react';

const filterCategories = ['All', 'Vendors', 'Safety', 'Workarounds', 'Equipment', 'Processes', 'Contacts'];

const knowledgeCards = [
  { category: 'Vendors', title: 'Acme Supply Co. - Preferred Contact', snippet: 'When ordering urgent parts, always contact Sarah Johnson directly at ext. 4521 instead of going through the general line. She can expedite orders within 24 hours...' },
  { category: 'Safety', title: 'Machine 3B Safety Override Protocol', snippet: 'In case of emergency shutdown, the reset button is located behind the panel on the left side. Wait exactly 30 seconds before pressing to avoid damaging the motor...' },
  { category: 'Workarounds', title: 'Quarterly Report Batch Processing', snippet: 'The official reporting system times out when pulling data for more than 50 vendors. Split vendor lists into groups of 30 and run reports during off-peak hours (6-7 AM)...' },
  { category: 'Equipment', title: 'Printer Room 204 - Paper Jam Fix', snippet: 'This printer has a quirk where it jams on legal-sized paper. Always check that Tray 2 is set to "Legal" in the control panel before printing, not just in the print dialog...' },
  { category: 'Processes', title: 'Month-End Close Checklist', snippet: 'The finance team needs vendor reconciliation data by the 3rd business day. Start the export on the last day of the month to avoid delays. Use the "Full Detail" template...' },
  { category: 'Contacts', title: 'Building Maintenance After Hours', snippet: 'For after-hours facility issues, call Tom Rodriguez directly at (555) 0123. He responds faster than the general maintenance line and has keys to all equipment rooms...' },
  { category: 'Workarounds', title: 'Email Attachment Size Limit', snippet: 'The company email has a 10MB limit. For larger files, use the shared drive folder "Transfer" and send a link instead. Files are auto-deleted after 7 days...' },
  { category: 'Vendors', title: 'TechGear Solutions - Warranty Claims', snippet: 'Their online warranty form is broken. Instead, email warranty@techgear.com with photos and include PO number in the subject line. Response within 2 business days...' },
  { category: 'Safety', title: 'Chemical Storage Room Access', snippet: "The keycard reader is faulty. If it doesn't work on first try, hold the card against the reader for 3 seconds. Never force the door as it will trigger the alarm..." },
];

export function SuccessorKnowledge() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'chat' | 'dashboard' | 'library'>('library');
  const navigate = useNavigate();

  const filteredCards =
    selectedFilter === 'All' ? knowledgeCards : knowledgeCards.filter((card) => card.category === selectedFilter);

  const handleTabChange = (tab: 'chat' | 'dashboard' | 'library') => {
    setActiveTab(tab);
    if (tab === 'dashboard') navigate('/successor/dashboard');
    else if (tab === 'chat') navigate('/successor/chatbox');
  };

  return (
    <div className="flex h-screen bg-[#eef0f4]">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-[#d4d6db] flex flex-col">
        <div className="p-6 border-b border-[#d4d6db]">
          <h1 className="text-xl font-semibold text-[#1e212b] mb-1">
            Exit<span className="text-[#4d8b31]">Wise</span>
          </h1>
          <p className="text-sm text-[#5c6270]">Emily Chen</p>
        </div>

        {/* Nav Tabs */}
        <div className="border-b border-[#d4d6db] p-4">
          <div className="space-y-1">
            {[
              { tab: 'dashboard' as const, icon: LayoutDashboard, label: 'Dashboard' },
              { tab: 'chat' as const, icon: MessageSquare, label: 'AI Assistant' },
              { tab: 'library' as const, icon: BookOpen, label: 'Knowledge Library' },
            ].map(({ tab, icon: Icon, label }) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm transition-colors ${
                  activeTab === tab
                    ? 'bg-[#4d8b31] text-white font-medium'
                    : 'text-[#5c6270] hover:bg-[#eef0f4] hover:text-[#1e212b]'
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex-1 p-6 overflow-auto">
          <h2 className="text-sm font-medium text-[#5c6270] mb-4">Filter by Category</h2>
          <div className="space-y-1">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  selectedFilter === category
                    ? 'bg-[#eef0f4] text-[#1e212b] font-medium border-l-2 border-[#4d8b31]'
                    : 'text-[#5c6270] hover:bg-[#eef0f4] hover:text-[#1e212b]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

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

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-semibold text-[#1e212b] mb-2">Knowledge Library</h2>
            <p className="text-[#5c6270]">Access insights and expertise from Robert Martinez</p>
          </div>

          <div className="mb-6 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5c6270]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search knowledge base..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-[#d4d6db] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4d8b31] focus:border-transparent text-[#1e212b]"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            {filteredCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-[#d4d6db] p-6 hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-[#eef0f4] text-[#5c6270] border border-[#d4d6db]">
                    {card.category}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-[#1e212b] mb-3 flex items-start justify-between gap-2">
                  <span>{card.title}</span>
                  <ChevronRight className="w-5 h-5 text-[#d4d6db] group-hover:text-[#4d8b31] flex-shrink-0 transition-colors" />
                </h3>
                <p className="text-xs text-[#5c6270] leading-relaxed">{card.snippet}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
