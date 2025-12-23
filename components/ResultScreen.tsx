
import React from 'react';
import { DiagnosisData } from '../types';

interface Props {
  diagnosisData: DiagnosisData;
  onNext: () => void;
  onBack: () => void;
}

const ResultScreen: React.FC<Props> = ({ diagnosisData, onNext, onBack }) => {
  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-surface-dark pb-24 transition-colors duration-300 overflow-y-auto no-scrollbar">
      <div className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md p-4 justify-between border-b border-gray-100 dark:border-gray-800">
        <button onClick={onBack} className="text-primary dark:text-white flex size-10 items-center justify-center rounded-full hover:bg-black/5 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-primary dark:text-white text-base font-bold flex-1 text-center pr-10">Diagnóstico Final</h2>
      </div>

      <div className="relative w-full overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#36495D 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="flex flex-col gap-6 px-5 py-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 w-fit backdrop-blur-sm border border-white/10">
            <span className="material-symbols-outlined text-[#4ADE80] text-[16px]">check_circle</span>
            <span className="text-white text-xs font-medium tracking-wide uppercase">Análise Concluída</span>
          </div>
          <div className="flex flex-col gap-3 text-left">
            <h1 className="text-white text-3xl font-black leading-[1.1] tracking-tight">
              Você está perdendo faturamento por falta de clareza.
            </h1>
            <p className="text-gray-300 text-sm font-normal leading-relaxed">
              O método B2 Company identificou lacunas críticas na sua operação comercial que estão impedindo seu crescimento.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 -mt-6 relative z-20">
        <div className="flex flex-col bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="p-5 pb-2">
            <h3 className="text-primary dark:text-white text-lg font-bold">Comparativo: Real vs. Potencial</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Projeção baseada nos seus dados atuais.</p>
          </div>
          <div className="w-full h-48 bg-gray-50 dark:bg-black/20 relative flex items-center justify-center p-4">
             {/* Mock Graph */}
            <div className="flex items-end justify-around w-full h-full px-4 gap-4">
               <div className="w-1/4 bg-gray-300 dark:bg-gray-600 rounded-t-lg h-1/2 relative">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-500">REAL</span>
               </div>
               <div className="w-1/4 bg-primary dark:bg-blue-600 rounded-t-lg h-[85%] relative">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary dark:text-blue-400">POTENCIAL</span>
                  <div className="absolute top-1/2 left-full translate-x-4 bg-primary text-white text-[10px] font-bold py-1 px-2 rounded shadow-lg whitespace-nowrap z-30">
                    Gap: R$ 450k
                    <div className="absolute top-1/2 right-full -translate-y-1/2 border-4 border-transparent border-r-primary"></div>
                  </div>
               </div>
               <div className="w-1/4 bg-gray-200 dark:bg-gray-700 rounded-t-lg h-1/3"></div>
               <div className="w-1/4 bg-gray-200 dark:bg-gray-700 rounded-t-lg h-2/3"></div>
            </div>
          </div>
          <div className="px-5 py-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-red-500">trending_down</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Receita não realizada</span>
              </div>
              <span className="text-base font-bold text-primary dark:text-white">R$ 450k</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Indicadores Chave</h2>
          <span className="text-xs font-medium text-primary dark:text-blue-300 bg-primary/10 dark:bg-blue-500/20 px-2 py-1 rounded">Prioridade Alta</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 flex flex-col gap-1 rounded-xl p-4 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1.5 rounded-md bg-green-100 text-green-700 dark:bg-green-900/30">
                <span className="material-symbols-outlined text-[18px]">monetization_on</span>
              </span>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Potencial de Receita</p>
            </div>
            <p className="text-primary dark:text-white text-2xl font-black tracking-tight">R$ 1.2M<span className="text-sm font-normal text-gray-400 ml-1">/ano</span></p>
            <div className="flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[16px] text-green-600">arrow_upward</span>
              <p className="text-green-700 dark:text-green-400 text-xs font-bold">+30% vs atual</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 rounded-xl p-4 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1.5 rounded-md bg-blue-100 text-blue-700 dark:bg-blue-900/30">
                <span className="material-symbols-outlined text-[18px]">filter_alt</span>
              </span>
              <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">Leads Nec.</p>
            </div>
            <p className="text-primary dark:text-white text-xl font-bold">+45<span className="text-xs font-normal text-gray-400 ml-0.5">/mês</span></p>
            <p className="text-blue-700 dark:text-blue-400 text-xs font-medium mt-1">Meta de volume</p>
          </div>
          <div className="flex flex-col gap-1 rounded-xl p-4 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1.5 rounded-md bg-purple-100 text-purple-700 dark:bg-purple-900/30">
                <span className="material-symbols-outlined text-[18px]">groups</span>
              </span>
              <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">Vendedores</p>
            </div>
            <p className="text-primary dark:text-white text-xl font-bold">+2<span className="text-xs font-normal text-gray-400 ml-0.5"> Full-time</span></p>
            <p className="text-purple-700 dark:text-purple-400 text-xs font-medium mt-1">Expansão time</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 pt-8 pb-4">
        <h2 className="text-gray-900 dark:text-white text-lg font-bold">Gargalos Operacionais</h2>
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900/30">
            <span className="material-symbols-outlined text-red-600 mt-0.5">warning</span>
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-900 dark:text-white text-sm font-bold">Follow-up Inconsistente</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">Sua equipe perde 40% dos leads por falta de contato após 48h.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-orange-50 dark:bg-orange-900/10 rounded-lg border border-orange-100 dark:border-orange-900/30">
            <span className="material-symbols-outlined text-orange-600 mt-0.5">sync_problem</span>
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-900 dark:text-white text-sm font-bold">Processo Indefinido</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">Ausência de playbook claro de vendas gera conversão irregular.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-surface-dark/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 z-50 max-w-md mx-auto">
        <button 
          onClick={onNext}
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-lg shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98]"
        >
          <span>Ver Plano de Ação</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
