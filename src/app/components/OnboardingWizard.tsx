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
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/admin/dashboard');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center p-8">
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
                        ? 'bg-[#595959] border-[#595959] text-white'
                        : step.id === currentStep
                        ? 'bg-white border-[#595959] text-[#595959]'
                        : 'bg-white border-[#cccccc] text-[#a5a5a5]'
                    }`}
                  >
                    {step.id < currentStep ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span className="font-semibold">{step.id}</span>
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <div
                      className={`text-sm font-medium ${
                        step.id <= currentStep ? 'text-[#595959]' : 'text-[#a5a5a5]'
                      }`}
                    >
                      {step.name}
                    </div>
                    <div className="text-xs text-[#7f7f7f]">{step.description}</div>
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 mx-2 mb-12 ${
                      step.id < currentStep ? 'bg-[#595959]' : 'bg-[#cccccc]'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg border border-[#cccccc] p-8 shadow-sm">
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-semibold text-[#595959] mb-6">
                Organization Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="orgName" className="block text-sm font-medium text-[#595959] mb-2">
                    Organization Name
                  </label>
                  <input
                    id="orgName"
                    type="text"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full px-3 py-2 border border-[#cccccc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#595959] focus:border-transparent text-[#595959]"
                    placeholder="Enter your organization name"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-semibold text-[#595959] mb-6">Team Setup</h2>

              {/* Alert Box */}
              <div className="mb-6 p-4 rounded-md border border-[#7f7f7f] bg-[#f2f2f2] flex gap-3">
                <Info className="w-5 h-5 text-[#7f7f7f] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-[#595959]">
                  <span className="font-medium">Tip:</span> You can invite team members now or add them later from your dashboard settings.
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="inviteEmails" className="block text-sm font-medium text-[#595959] mb-2">
                    Invite Team Members
                  </label>
                  <textarea
                    id="inviteEmails"
                    value={inviteEmails}
                    onChange={(e) => setInviteEmails(e.target.value)}
                    className="w-full px-3 py-2 border border-[#cccccc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#595959] focus:border-transparent text-[#595959] min-h-32"
                    placeholder="Enter email addresses (one per line)"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-semibold text-[#595959] mb-6">Integration</h2>
              <p className="text-[#7f7f7f] mb-4">
                Connect your tools to streamline knowledge capture and sharing.
              </p>
              <div className="space-y-3">
                {['Slack', 'Microsoft Teams', 'Google Workspace'].map((tool) => (
                  <div
                    key={tool}
                    className="p-4 border border-[#cccccc] rounded-md flex items-center justify-between hover:bg-[#f2f2f2] cursor-pointer"
                  >
                    <span className="text-[#595959] font-medium">{tool}</span>
                    <button className="px-4 py-2 text-sm border border-[#cccccc] rounded-md text-[#595959] hover:bg-[#f2f2f2]">
                      Connect
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-semibold text-[#595959] mb-6">Review & Confirm</h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#f2f2f2] rounded-md">
                  <div className="text-sm text-[#7f7f7f] mb-1">Organization</div>
                  <div className="text-[#595959] font-medium">{orgName || 'Not provided'}</div>
                </div>
                <div className="p-4 bg-[#f2f2f2] rounded-md">
                  <div className="text-sm text-[#7f7f7f] mb-1">Team Members</div>
                  <div className="text-[#595959] font-medium">
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
                className="px-6 py-2 border border-[#cccccc] rounded-md text-[#595959] hover:bg-[#f2f2f2] transition-colors"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="ml-auto px-6 py-2 bg-[#595959] text-white rounded-md hover:bg-[#454545] transition-colors"
            >
              {currentStep === steps.length ? 'Complete Setup' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
