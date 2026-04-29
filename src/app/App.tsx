import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MarketingLandingPage } from './components/MarketingLandingPage';
import { UnifiedAuthPage } from './components/UnifiedAuthPage';
import { SignUpPage } from './components/SignUpPage';
import { ForgotPasswordPage } from './components/ForgotPasswordPage';
import { OnboardingWizard } from './components/OnboardingWizard';
import { AdminDashboardWithChart } from './components/AdminDashboardWithChart';
import { AdminDashboardNoChart } from './components/AdminDashboardNoChart';
import { AdminEmployeesPage } from './components/AdminEmployeesPage';
import { AdminKnowledgeBasePage } from './components/AdminKnowledgeBasePage';
import { AdminSettingsPage } from './components/AdminSettingsPage';
import { RetireeInterview } from './components/RetireeInterview';
import { SuccessorKnowledge } from './components/SuccessorKnowledge';
import { SuccessorChatbox } from './components/SuccessorChatbox';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Marketing & Auth */}
        <Route path="/" element={<MarketingLandingPage />} />
        <Route path="/auth" element={<UnifiedAuthPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/onboarding" element={<OnboardingWizard />} />

        {/* Admin / Retiree routes */}
        <Route path="/admin/dashboard" element={<AdminDashboardWithChart userType="retiree" />} />
        <Route path="/admin/dashboard-alt" element={<AdminDashboardNoChart userType="retiree" />} />
        <Route path="/admin/employees" element={<AdminEmployeesPage userType="retiree" />} />
        <Route path="/admin/knowledge-base" element={<AdminKnowledgeBasePage userType="retiree" />} />
        <Route path="/admin/settings" element={<AdminSettingsPage userType="retiree" />} />

        {/* Retiree interview/chat */}
        <Route path="/retiree/interview" element={<RetireeInterview />} />

        {/* Successor routes */}
        <Route path="/successor/dashboard" element={<AdminDashboardWithChart userType="successor" />} />
        <Route path="/successor/dashboard-alt" element={<AdminDashboardNoChart userType="successor" />} />
        <Route path="/successor/employees" element={<AdminEmployeesPage userType="successor" />} />
        <Route path="/successor/knowledge-base" element={<AdminKnowledgeBasePage userType="successor" />} />
        <Route path="/successor/settings" element={<AdminSettingsPage userType="successor" />} />
        <Route path="/successor/knowledge" element={<SuccessorKnowledge />} />
        <Route path="/successor/chatbox" element={<SuccessorChatbox />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
