import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, LogOut, ChevronRight } from 'lucide-react';

const filterCategories = ['All', 'Vendors', 'Safety', 'Workarounds', 'Equipment', 'Processes', 'Contacts'];

const knowledgeCards = [
  {
    category: 'Vendors',
    title: 'Acme Supply Co. - Preferred Contact',
    snippet: 'When ordering urgent parts, always contact Sarah Johnson directly at ext. 4521 instead of going through the general line. She can expedite orders within 24 hours...',
  },
  {
    category: 'Safety',
    title: 'Machine 3B Safety Override Protocol',
    snippet: 'In case of emergency shutdown, the reset button is located behind the panel on the left side. Wait exactly 30 seconds before pressing to avoid damaging the motor...',
  },
  {
    category: 'Workarounds',
    title: 'Quarterly Report Batch Processing',
    snippet: 'The official reporting system times out when pulling data for more than 50 vendors. Split vendor lists into groups of 30 and run reports during off-peak hours (6-7 AM)...',
  },
  {
    category: 'Equipment',
    title: 'Printer Room 204 - Paper Jam Fix',
    snippet: 'This printer has a quirk where it jams on legal-sized paper. Always check that Tray 2 is set to "Legal" in the control panel before printing, not just in the print dialog...',
  },
  {
    category: 'Processes',
    title: 'Month-End Close Checklist',
    snippet: 'The finance team needs vendor reconciliation data by the 3rd business day. Start the export on the last day of the month to avoid delays. Use the "Full Detail" template...',
  },
  {
    category: 'Contacts',
    title: 'Building Maintenance After Hours',
    snippet: 'For after-hours facility issues, call Tom Rodriguez directly at (555) 0123. He responds faster than the general maintenance line and has keys to all equipment rooms...',
  },
  {
    category: 'Workarounds',
    title: 'Email Attachment Size Limit',
    snippet: 'The company email has a 10MB limit. For larger files, use the shared drive folder "Transfer" and send a link instead. Files are auto-deleted after 7 days...',
  },
  {
    category: 'Vendors',
    title: 'TechGear Solutions - Warranty Claims',
    snippet: 'Their online warranty form is broken. Instead, email warranty@techgear.com with photos and include PO number in the subject line. Response within 2 business days...',
  },
  {
    category: 'Safety',
    title: 'Chemical Storage Room Access',
    snippet: 'The keycard reader is faulty. If it doesn\'t work on first try, hold the card against the reader for 3 seconds. Never force the door as it will trigger the alarm...',
  },
];

export function SuccessorKnowledge() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredCards =
    selectedFilter === 'All'
      ? knowledgeCards
      : knowledgeCards.filter((card) => card.category === selectedFilter);

  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      {/* Top Navigation */}
      <div className="bg-white border-b border-[#cccccc] px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-semibold text-[#595959]">ExitWise</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#7f7f7f]">Emily Chen</span>
            <button
              onClick={() => navigate('/')}
              className="p-2 text-[#7f7f7f] hover:text-[#595959]"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-[#595959] mb-2">Knowledge Library</h2>
          <p className="text-[#7f7f7f]">
            Access insights and expertise from Robert Martinez
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7f7f7f]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search knowledge base..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-[#cccccc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#595959] focus:border-transparent text-[#595959]"
          />
        </div>

        {/* Filter Pills */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 pb-2">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedFilter === category
                    ? 'bg-[#595959] text-white'
                    : 'bg-white text-[#7f7f7f] border border-[#cccccc] hover:bg-[#f2f2f2] hover:text-[#595959]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Knowledge Cards Grid */}
        <div className="grid grid-cols-3 gap-6">
          {filteredCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-[#cccccc] p-6 hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="mb-3">
                <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-[#f2f2f2] text-[#7f7f7f] border border-[#cccccc]">
                  {card.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#595959] mb-3 flex items-start justify-between gap-2">
                <span>{card.title}</span>
                <ChevronRight className="w-5 h-5 text-[#cccccc] group-hover:text-[#595959] flex-shrink-0 transition-colors" />
              </h3>
              <p className="text-sm text-[#7f7f7f] leading-relaxed">{card.snippet}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
