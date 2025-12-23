
import React, { useState, useEffect } from 'react';

interface Props {
  onComplete: () => void;
}

const ProcessingScreen: React.FC<Props> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    if (progress > 30) setStep(1);
    if (progress > 70) setStep(2);
  }, [progress]);

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-surface-dark transition-colors duration-300">
      <div className="flex items-center bg-transparent p-5 pb-2 justify-between">
        <div className="w-10"></div>
        <h2 className="text-primary dark:text-white text-lg font-bold flex-1 text-center pr-10">B2 Company</h2>
      </div>

      <div className="flex-1 flex flex-col px-6 pt-6 pb-10">
        <div className="flex flex-col items-center justify-center py-8">
          <div className="relative flex items-center justify-center size-28 mb-8">
            <div className="absolute inset-0 rounded-full bg-primary/10 dark:bg-primary/30 animate-ping"></div>
            <div className="absolute inset-2 rounded-full bg-primary/20 dark:bg-primary/40 animate-pulse"></div>
            <div className="relative z-10 flex items-center justify-center size-20 rounded-full bg-primary text-white shadow-xl shadow-primary/20">
              <span className="material-symbols-outlined text-[40px]">query_stats</span>
            </div>
          </div>

          <h2 className="text-primary dark:text-white tracking-tight text-[26px] font-bold leading-tight text-center mb-3">
            Analisando sua Operação
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-[15px] font-normal leading-relaxed text-center max-w-[300px]">
            Aguarde enquanto processamos suas respostas para gerar o diagnóstico completo.
          </p>
        </div>

        <div className="flex flex-col gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 mb-10">
          <div className="flex gap-6 justify-between items-end">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <p className="text-primary dark:text-white text-sm font-semibold leading-normal animate-pulse">
                {progress < 40 ? 'Validando consistência...' : progress < 80 ? 'Identificando gargalos...' : 'Finalizando relatório...'}
              </p>
            </div>
            <p className="text-primary dark:text-white text-lg font-bold tabular-nums">{progress}%</p>
          </div>
          <div className="rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden h-2.5 w-full">
            <div className="h-full rounded-full bg-primary transition-all duration-100" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-gray-400 text-xs font-medium text-center">
            Isso levará apenas alguns segundos.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-primary dark:text-white text-lg font-bold leading-tight">
            O que estamos verificando:
          </h3>
          <div className="flex flex-col gap-3">
            <div className={`flex items-center gap-4 rounded-xl border p-4 transition-all duration-300 ${step >= 0 ? 'bg-green-50/30 border-green-100 dark:bg-green-900/10 dark:border-green-900/30' : 'bg-white border-gray-100 opacity-50'}`}>
              <div className={`flex shrink-0 items-center justify-center size-10 rounded-full transition-colors ${step >= 1 ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-400' : 'bg-gray-100 text-gray-400'}`}>
                <span className="material-symbols-outlined text-[20px]">{step >= 1 ? 'check' : 'hourglass_empty'}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <h4 className="text-gray-900 dark:text-white text-[15px] font-bold leading-tight">Consistência de Dados</h4>
                <p className="text-gray-500 text-xs">{step >= 1 ? 'Validação concluída' : 'Em análise...'}</p>
              </div>
            </div>

            <div className={`flex items-center gap-4 rounded-xl border p-4 transition-all duration-300 ${step >= 1 ? 'bg-blue-50/30 border-primary/20 dark:bg-blue-900/10 dark:border-blue-900/30' : 'bg-white border-gray-100 opacity-50'}`}>
              <div className={`flex shrink-0 items-center justify-center size-10 rounded-full transition-colors ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                {step === 1 ? <div className="absolute inset-0 rounded-full border-2 border-primary border-r-transparent animate-spin"></div> : null}
                <span className="material-symbols-outlined text-[20px]">{step >= 2 ? 'check' : 'warning'}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <h4 className="text-gray-900 dark:text-white text-[15px] font-bold leading-tight">Gargalos de Vendas</h4>
                <p className="text-gray-500 text-xs">{step >= 2 ? 'Identificados' : 'Mapeando atritos...'}</p>
              </div>
            </div>

            <div className={`flex items-center gap-4 rounded-xl border border-dashed p-4 transition-all duration-300 ${step >= 2 ? 'bg-gray-50 border-gray-200' : 'opacity-30'}`}>
              <div className="flex shrink-0 items-center justify-center size-10 rounded-full bg-gray-200 text-gray-400">
                <span className="material-symbols-outlined text-[20px]">trending_up</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <h4 className="text-gray-900 dark:text-white text-[15px] font-bold leading-tight">Oportunidades de Receita</h4>
                <p className="text-gray-500 text-xs">Aguardando processamento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessingScreen;
