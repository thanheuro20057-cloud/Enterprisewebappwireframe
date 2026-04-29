import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, LogOut, MessageSquare, LayoutDashboard, BookOpen } from 'lucide-react';

const recentChats = [
  { name: 'Quarterly Reporting', timestamp: '2 hours ago', preview: 'How do I handle the vendor timeout issue?' },
  { name: 'Vendor Contacts', timestamp: 'Yesterday', preview: 'Who should I contact at Acme Supply?' },
  { name: 'Equipment Maintenance', timestamp: '2 days ago', preview: 'Tell me about Machine 3B safety protocol' },
];

const initialMessages = [
  {
    role: 'ai',
    content: "Hello Emily! I'm your AI assistant with knowledge from Robert Martinez. I can help you with processes, vendor relationships, safety procedures, and any other questions about your new role. What would you like to know?",
  },
  {
    role: 'user',
    content: "Hi! I'm having trouble with the quarterly reporting process. The system keeps timing out when I try to pull vendor data.",
  },
  {
    role: 'ai',
    content: "I can help with that! Robert encountered this issue frequently. The official system times out when pulling data for more than 50 vendors at once. Here's the workaround he used:\n\n1. Split your vendor list into groups of 30\n2. Run the reports in batches during off-peak hours (6-7 AM when the system is less loaded)\n3. He created a spreadsheet template to organize the batches\n\nWould you like me to explain more about the template or help with something else?",
  },
];

export function SuccessorChatbox() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [activeTab, setActiveTab] = useState<'chat' | 'dashboard' | 'library'>('chat');
  const navigate = useNavigate();

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { role: 'user', content: inputValue }]);
      setInputValue('');
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: 'ai', content: "Thank you for your question! Based on Robert's knowledge, I can help you with that. Let me provide you with the relevant information..." },
        ]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  const handleTabChange = (tab: 'chat' | 'dashboard' | 'library') => {
    setActiveTab(tab);
    if (tab === 'dashboard') navigate('/successor/dashboard');
    else if (tab === 'library') navigate('/successor/knowledge');
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

        {/* Recent Chats */}
        <div className="flex-1 p-6 overflow-auto">
          <h2 className="text-sm font-medium text-[#5c6270] mb-4">Recent Conversations</h2>
          <div className="space-y-2">
            {recentChats.map((chat, idx) => (
              <div key={idx} className="p-3 rounded-md border border-[#d4d6db] bg-white hover:bg-[#eef0f4] cursor-pointer transition-colors">
                <div className="font-medium text-sm text-[#1e212b] mb-1">{chat.name}</div>
                <div className="text-xs text-[#9ea3b0] mb-1.5">{chat.timestamp}</div>
                <div className="text-xs text-[#5c6270] truncate">{chat.preview}</div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 px-4 py-2 border border-[#d4d6db] rounded-md text-sm text-[#1e212b] hover:bg-[#eef0f4] transition-colors">
            + New Conversation
          </button>
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

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b border-[#d4d6db] p-6">
          <h2 className="text-lg font-semibold text-[#1e212b]">AI Knowledge Assistant</h2>
          <p className="text-sm text-[#5c6270] mt-1">Ask me anything about processes, contacts, or expertise from Robert Martinez</p>
        </div>

        <div className="flex-1 overflow-auto p-6 space-y-4">
          {messages.map((message, idx) => (
            <div key={idx} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-2xl rounded-lg px-4 py-3 text-sm ${
                message.role === 'ai'
                  ? 'bg-white border border-[#d4d6db] text-[#1e212b]'
                  : 'bg-[#1e212b] text-white'
              }`}>
                {message.content}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border-t border-[#d4d6db] p-6">
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask a question about your predecessor's knowledge..."
                className="w-full px-4 py-3 border border-[#d4d6db] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4d8b31] focus:border-transparent text-[#1e212b] text-sm"
              />
            </div>
            <button
              onClick={handleSend}
              className="p-3 bg-[#4d8b31] text-white rounded-md hover:bg-[#3d7026] transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-[#9ea3b0] mt-2">This AI assistant is powered by knowledge collected from Robert Martinez</p>
        </div>
      </div>
    </div>
  );
}
