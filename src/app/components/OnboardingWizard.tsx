import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Info } from 'lucide-react';

const steps = [
  { id: 1, name: 'Organization Details', description: 'Basic information' },
  { id: 2, name: 'Team Setup', description: 'Invite your team' },
  { id: 3, name: 'Integration', description: 'Connect tools' },
  { id: 4, name: 'Review', description: 'Confirm setup' },
];

export function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [orgName, setOrgName] = useState('');
  const [inviteEmails, setInviteEmails] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
    else navigate('/admin/dashboard');
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const inputClass = "w-full px-3 py-2 border border-[#d4d6db] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4d8b31] focus:border-transparent text-[#1e212b] text-sm";

  return (
    <div className="min-h-screen bg-[#eef0f4] flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        {/* Stepper */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      step.id < currentStep
                        ? 'bg-[#4d8b31] border-[#4d8b31] text-white'
                        : step.id === currentStep
                        ? 'bg-white border-[#4d8b31] text-[#4d8b31]'
                        : 'bg-white border-[#d4d6db] text-[#9ea3b0]'
                    }`}
                  >
                    {step.id < currentStep ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span className="font-semibold">{step.id}</span>
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <div className={`text-sm font-medium ${step.id <= currentStep ? 'text-[#1e212b]' : 'text-[#9ea3b0]'}`}>
                      {step.name}
                    </div>
                    <div className="text-xs text-[#5c6270]">{step.description}</div>
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className={`h-0.5 flex-1 mx-2 mb-12 ${step.id < currentStep ? 'bg-[#4d8b31]' : 'bg-[#d4d6db]'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg border border-[#d4d6db] p-8 shadow-sm">
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-semibold text-[#1e212b] mb-6">Organization Details</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="orgName" className="block text-sm font-medium text-[#1e212b] mb-2">Organization Name</label>
                  <input
                    id="orgName"
                    type="text"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className={inputClass}
                    placeholder="Enter your organization name"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-semibold text-[#1e212b] mb-6">Team Setup</h2>
              <div className="mb-6 p-4 rounded-md border border-[#d4d6db] bg-[#eef0f4] flex gap-3">
                <Info className="w-5 h-5 text-[#5c6270] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-[#1e212b]">
                  <span className="font-medium">Tip:</span> You can invite team members now or add them later from your dashboard settings.
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="inviteEmails" className="block text-sm font-medium text-[#1e212b] mb-2">Invite Team Members</label>
                  <textarea
                    id="inviteEmails"
                    value={inviteEmails}
                    onChange={(e) => setInviteEmails(e.target.value)}
                    className={`${inputClass} min-h-32`}
                    placeholder="Enter email addresses (one per line)"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-semibold text-[#1e212b] mb-6">Integration</h2>
              <p className="text-[#5c6270] mb-4 text-sm">Connect your tools to streamline knowledge capture and sharing.</p>
              <div className="space-y-3">
                {['Slack', 'Microsoft Teams', 'Google Workspace'].map((tool) => (
                  <div key={tool} className="p-4 border border-[#d4d6db] rounded-md flex items-center justify-between hover:bg-[#eef0f4] cursor-pointer">
                    <span className="text-[#1e212b] font-medium text-sm">{tool}</span>
                    <button className="px-4 py-2 text-sm border border-[#d4d6db] rounded-md text-[#1e212b] hover:border-[#4d8b31] hover:text-[#4d8b31] transition-colors">
                      Connect
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-semibold text-[#1e212b] mb-6">Review & Confirm</h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#eef0f4] rounded-md border border-[#d4d6db]">
                  <div className="text-sm text-[#5c6270] mb-1">Organization</div>
                  <div className="text-[#1e212b] font-medium">{orgName || 'Not provided'}</div>
                </div>
                <div className="p-4 bg-[#eef0f4] rounded-md border border-[#d4d6db]">
                  <div className="text-sm text-[#5c6270] mb-1">Team Members</div>
                  <div className="text-[#1e212b] font-medium">
                    {inviteEmails ? inviteEmails.split('\n').filter(e => e.trim()).length + ' invited' : 'None'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-8">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="px-6 py-2 border border-[#d4d6db] rounded-md text-[#1e212b] hover:bg-[#eef0f4] transition-colors text-sm"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="ml-auto px-6 py-2 bg-[#4d8b31] text-white rounded-md hover:bg-[#3d7026] transition-colors text-sm"
            >
              {currentStep === steps.length ? 'Complete Setup' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
