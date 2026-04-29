import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Mic, Check, LogOut } from 'lucide-react';

const topics = [
  { name: 'Safety Procedures', completed: true },
  { name: 'Vendor Relationships', completed: true },
  { name: 'Common Workarounds', completed: false },
  { name: 'Equipment Maintenance', completed: false },
  { name: 'Emergency Protocols', completed: false },
  { name: 'Team Dynamics', completed: false },
];

const initialMessages = [
  {
    role: 'ai',
    content: "Hello! I'm here to help capture your valuable knowledge and experience. Let's talk about common workarounds you've developed over the years. Can you tell me about a situation where the standard process didn't work and you had to improvise?",
  },
  {
    role: 'user',
    content: "Sure. One thing that comes up often is the quarterly reporting process. The official system times out when we're pulling data for more than 50 vendors at once.",
  },
  {
    role: 'ai',
    content: 'That sounds frustrating. How did you work around this timeout issue?',
  },
  {
    role: 'user',
    content: "I created a spreadsheet template that splits the vendor list into groups of 30. Then I run the reports in batches during off-peak hours, usually between 6-7 AM when the system is less loaded.",
  },
];

export function RetireeInterview() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { role: 'user', content: inputValue }]);
      setInputValue('');

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: 'ai',
            content: 'Thank you for sharing that. This is exactly the kind of practical knowledge that will be invaluable. Do you have any other workarounds or tips related to vendor management?',
          },
        ]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-screen bg-[#f2f2f2]">
      {/* Topics Sidebar */}
      <div className="w-80 bg-white border-r border-[#cccccc] flex flex-col">
        <div className="p-6 border-b border-[#cccccc]">
          <h1 className="text-xl font-semibold text-[#595959] mb-1">Knowledge Interview</h1>
          <p className="text-sm text-[#7f7f7f]">Robert Martinez</p>
        </div>

        <div className="flex-1 p-6 overflow-auto">
          <h2 className="text-sm font-medium text-[#7f7f7f] mb-4">Topics to Cover</h2>
          <div className="space-y-2">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-md border flex items-center gap-3 ${
                  topic.completed
                    ? 'bg-[#f2f2f2] border-[#cccccc]'
                    : 'bg-white border-[#cccccc] hover:bg-[#f2f2f2] cursor-pointer'
                }`}
              >
                {topic.completed ? (
                  <div className="w-5 h-5 rounded-full bg-[#595959] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-[#cccccc] flex-shrink-0" />
                )}
                <span
                  className={`text-sm ${
                    topic.completed ? 'text-[#7f7f7f] line-through' : 'text-[#595959]'
                  }`}
                >
                  {topic.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-[#f2f2f2] rounded-md border border-[#cccccc]">
            <div className="text-sm text-[#7f7f7f] mb-1">Progress</div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-white rounded-full overflow-hidden border border-[#cccccc]">
                <div className="h-full bg-[#595959] rounded-full" style={{ width: '33%' }} />
              </div>
              <span className="text-sm font-medium text-[#595959]">2/6</span>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-[#cccccc]">
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-[#7f7f7f] hover:bg-[#f2f2f2] hover:text-[#595959]"
          >
            <LogOut className="w-5 h-5" />
            Exit Interview
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white border-b border-[#cccccc] p-6">
          <h2 className="text-lg font-semibold text-[#595959]">Common Workarounds</h2>
          <p className="text-sm text-[#7f7f7f] mt-1">
            Share the unofficial processes and creative solutions you've developed
          </p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-auto p-6 space-y-4">
          {messages.map((message, idx) => (
            <div key={idx} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-2xl rounded-lg px-4 py-3 ${
                  message.role === 'ai'
                    ? 'bg-white border border-[#cccccc] text-[#595959]'
                    : 'bg-[#595959] text-white'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-[#cccccc] p-6">
          <div className="flex items-end gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your response..."
                className="w-full px-4 py-3 border border-[#cccccc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#595959] focus:border-transparent text-[#595959] pr-12"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7f7f7f] hover:text-[#595959]">
                <Mic className="w-5 h-5" />
              </button>
            </div>
            <button
              onClick={handleSend}
              className="p-3 bg-[#595959] text-white rounded-md hover:bg-[#454545] transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
