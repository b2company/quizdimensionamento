
import React, { useState, useCallback, useMemo } from 'react';
import { AppStep, DiagnosisData, Role, TeamSize, GoalPerformance, ProcessState, PlanningMethod, Attitude } from './types';
import HomeScreen from './components/HomeScreen';
import RoleSelection from './components/RoleSelection';
import SocialProof from './components/SocialProof';
import TeamSizeSelection from './components/TeamSizeSelection';
import GoalSelection from './components/GoalSelection';
import ProcessSelection from './components/ProcessSelection';
import IssuesSelection from './components/IssuesSelection';
import ObjectiveSelection from './components/ObjectiveSelection';
import SuccessStories from './components/SuccessStories';
import PlanningSelection from './components/PlanningSelection';
import AttitudeSelection from './components/AttitudeSelection';
import ProcessingScreen from './components/ProcessingScreen';
import ResultScreen from './components/ResultScreen';
import SalesScreen from './components/SalesScreen';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.HOME);
  const [diagnosisData, setDiagnosisData] = useState<DiagnosisData>({
    role: '',
    teamSize: '',
    goalPerformance: '',
    processState: '',
    issues: [],
    objective: '',
    planningMethod: '',
    attitude: ''
  });

  const nextStep = useCallback(() => {
    setCurrentStep(prev => prev + 1);
  }, []);

  const prevStep = useCallback(() => {
    setCurrentStep(prev => Math.max(0, prev - 1));
  }, []);

  const updateData = useCallback((key: keyof DiagnosisData, value: any) => {
    setDiagnosisData(prev => ({ ...prev, [key]: value }));
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  const renderStep = useMemo(() => {
    switch (currentStep) {
      case AppStep.HOME:
        return <HomeScreen onStart={nextStep} />;
      case AppStep.ROLE_SELECTION:
        return (
          <RoleSelection 
            value={diagnosisData.role} 
            onChange={(v) => updateData('role', v)} 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        );
      case AppStep.SOCIAL_PROOF:
        return <SocialProof onNext={nextStep} onBack={prevStep} />;
      case AppStep.TEAM_SIZE:
        return (
          <TeamSizeSelection 
            value={diagnosisData.teamSize} 
            onChange={(v) => updateData('teamSize', v)} 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        );
      case AppStep.REVENUE_GOALS:
        return (
          <GoalSelection 
            value={diagnosisData.goalPerformance} 
            onChange={(v) => updateData('goalPerformance', v)} 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        );
      case AppStep.SALES_PROCESS:
        return (
          <ProcessSelection 
            value={diagnosisData.processState} 
            onChange={(v) => updateData('processState', v)} 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        );
      case AppStep.OPERATIONAL_ISSUES:
        return (
          <IssuesSelection 
            values={diagnosisData.issues} 
            onChange={(v) => updateData('issues', v)} 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        );
      case AppStep.OBJECTIVE:
        return (
          <ObjectiveSelection 
            value={diagnosisData.objective} 
            onChange={(v) => updateData('objective', v)} 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        );
      case AppStep.SUCCESS_STORIES:
        return <SuccessStories onNext={nextStep} onBack={prevStep} />;
      case AppStep.PLANNING_METHOD:
        return (
          <PlanningSelection 
            value={diagnosisData.planningMethod} 
            onChange={(v) => updateData('planningMethod', v)} 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        );
      case AppStep.ATTITUDE:
        return (
          <AttitudeSelection 
            value={diagnosisData.attitude} 
            onChange={(v) => updateData('attitude', v)} 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        );
      case AppStep.PROCESSING:
        return <ProcessingScreen onComplete={nextStep} />;
      case AppStep.RESULT:
        return <ResultScreen diagnosisData={diagnosisData} onNext={nextStep} onBack={prevStep} />;
      case AppStep.SALES_OFFER:
        return <SalesScreen />;
      default:
        return <HomeScreen onStart={nextStep} />;
    }
  }, [currentStep, diagnosisData, nextStep, prevStep, updateData]);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-text-main-light dark:text-text-main-dark transition-colors duration-300">
      <div className="max-w-md mx-auto min-h-screen bg-white dark:bg-surface-dark relative shadow-xl overflow-hidden flex flex-col">
        {renderStep}
        
        {/* Global Dark Mode Toggle */}
        <button 
          className="fixed bottom-4 right-4 p-3 bg-white dark:bg-surface-dark rounded-full shadow-lg z-50 border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform" 
          onClick={toggleDarkMode}
        >
          <span className="material-icons-round block dark:hidden text-primary">dark_mode</span>
          <span className="material-icons-round hidden dark:block text-white">light_mode</span>
        </button>
      </div>
    </div>
  );
};

export default App;
