
import React from 'react';

interface Props {
  onStart: () => void;
}

const HomeScreen: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="px-6 py-4 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg shadow-glow">
            B2
          </div>
          <span className="font-semibold text-lg tracking-tight text-primary dark:text-white">B2 Company</span>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-icons-round text-text-muted-light dark:text-text-muted-dark">more_vert</span>
        </button>
      </div>

      <div className="flex-1 px-6 flex flex-col items-center pt-4 pb-24 overflow-y-auto no-scrollbar">
        {/* Visual Graph Area */}
        <div className="w-full aspect-[4/3] rounded-2xl mb-8 relative overflow-hidden shadow-soft bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 group">
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#0A2540 1px, transparent 1px), linear-gradient(90deg, #0A2540 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <div className="absolute inset-0 flex items-end justify-center px-8 pb-8 pt-12">
            <svg className="absolute inset-x-8 bottom-8 h-3/4 w-[calc(100%-4rem)] overflow-visible" preserveAspectRatio="none">
              <path className="text-gray-300 dark:text-gray-600" d="M0,150 C40,145 80,148 120,130 C160,110 200,120 280,115" fill="none" stroke="currentColor" strokeDasharray="6,4" strokeWidth="2"></path>
              <defs>
                <linearGradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#36495D', stopOpacity: 1 }}></stop>
                  <stop offset="100%" style={{ stopColor: '#0A2540', stopOpacity: 1 }}></stop>
                </linearGradient>
              </defs>
              <path className="dark:stroke-[#FAFAFA]" d="M0,150 C40,130 80,100 120,60 C160,20 200,40 280,10" fill="none" stroke="url(#lineGradient)" strokeLinecap="round" strokeWidth="3"></path>
              <circle className="fill-primary dark:fill-white" cx="280" cy="10" r="4"></circle>
              <rect className="fill-white dark:fill-gray-800 shadow-sm" height="24" rx="6" width="70" x="230" y="-10"></rect>
              <text className="fill-primary dark:fill-white" fontSize="10" fontWeight="bold" textAnchor="middle" x="265" y="6">+145%</text>
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-4 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-xs font-medium text-primary dark:text-blue-100 border border-blue-100 dark:border-blue-800">
            <span className="material-icons-round text-[14px]">timer</span>
            Diagnóstico em 3 minutos
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-text-main-light dark:text-white">
            Descubra Seu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-white dark:to-gray-400">Faturamento Potencial</span>
          </h1>
          <p className="text-text-muted-light dark:text-text-muted-dark text-base leading-relaxed max-w-xs mx-auto">
            Analise suas operações comerciais e identifique onde você está deixando dinheiro na mesa.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full mb-8">
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm">
            <span className="material-icons-round text-primary dark:text-white mb-1">analytics</span>
            <span className="text-xs font-medium text-text-muted-light dark:text-gray-400 text-center">Análise de Gap</span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm">
            <span className="material-icons-round text-primary dark:text-white mb-1">trending_up</span>
            <span className="text-xs font-medium text-text-muted-light dark:text-gray-400 text-center">Plano de Ação</span>
          </div>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-surface-dark dark:via-surface-dark pt-12">
        <button 
          onClick={onStart}
          className="w-full bg-primary hover:bg-[#0F3057] text-white font-semibold text-lg py-4 rounded-xl shadow-lg shadow-blue-900/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
        >
          Iniciar Diagnóstico Grátis
          <span className="material-icons-round group-hover:translate-x-1 transition-transform text-xl">arrow_forward</span>
        </button>
        <p className="text-center mt-4 text-xs text-text-muted-light dark:text-gray-500">
          Mais de 2.000 empresas já analisadas.
        </p>
      </div>
    </div>
  );
};

export default HomeScreen;
