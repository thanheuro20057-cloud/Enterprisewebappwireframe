import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MarketingLandingPage } from './components/MarketingLandingPage';
import { UnifiedAuthPage } from './components/UnifiedAuthPage';
import { OnboardingWizard } from './components/OnboardingWizard';
import { AdminDashboardWithChart } from './components/AdminDashboardWithChart';
import { AdminDashboardNoChart } from './components/AdminDashboardNoChart';
import { RetireeInterview } from './components/RetireeInterview';
import { SuccessorKnowledge } from './components/SuccessorKnowledge';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MarketingLandingPage />} />
        <Route path="/auth" element={<UnifiedAuthPage />} />
        <Route path="/onboarding" element={<OnboardingWizard />} />
        <Route path="/admin/dashboard" element={<AdminDashboardWithChart />} />
        <Route path="/admin/dashboard-alt" element={<AdminDashboardNoChart />} />
        <Route path="/retiree/interview" element={<RetireeInterview />} />
        <Route path="/successor/knowledge" element={<SuccessorKnowledge />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}