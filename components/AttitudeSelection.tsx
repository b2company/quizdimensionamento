
import React from 'react';
import { Attitude } from '../types';

interface Props {
  value: Attitude;
  onChange: (v: Attitude) => void;
  onNext: () => void;
  onBack: () => void;
}

const AttitudeSelection: React.FC<Props> = ({ value, onChange, onNext, onBack }) => {
  const options: { id: Attitude; title: string; subtitle: string }[] = [
    { id: 'immediate', title: 'Agiria imediatamente', subtitle: 'Prioridade máxima para crescimento e correção de rota.' },
    { id: 'planned', title: 'Planejaria para os próximos meses', subtitle: 'Integraria as mudanças ao roadmap atual com cautela.' },
    { id: 'maybe', title: 'Talvez, se fosse simples', subtitle: 'Depende da complexidade e dos recursos exigidos.' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-surface-dark overflow-hidden transition-colors duration-300">
      <header className="flex items-center px-4 py-4 justify-between sticky top-0 z-10 border-b border-gray-100 dark:border-gray-800">
        <button onClick={onBack} className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <h1 className="text-gray-900 dark:text-white text-base font-bold leading-tight flex-1 text-center truncate px-2">
          Diagnóstico Comercial
        </h1>
        <button onClick={onNext} className="flex h-10 items-center justify-end rounded px-2 hover:bg-gray-100 transition-colors">
          <span className="text-gray-500 font-semibold text-sm">Sair</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col px-4 pt-6 pb-24 overflow-y-auto no-scrollbar animate-fade-in-up">
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex justify-between items-baseline">
            <p className="text-primary dark:text-blue-300 text-sm font-semibold uppercase tracking-wider">Última Pergunta</p>
            <span className="text-xs text-gray-500 font-medium">95% Concluído</span>
          </div>
          <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-500 ease-out" style={{ width: '95%' }}></div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-gray-900 dark:text-white text-2xl md:text-[28px] font-bold leading-snug tracking-tight">
            Se você soubesse exatamente seu potencial de receita e as correções necessárias, o que você faria?
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            Escolha a opção que melhor descreve sua atitude diante dessa informação.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {options.map((opt) => (
            <label key={opt.id} className="group relative flex cursor-pointer items-start gap-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-surface-dark p-5 transition-all hover:border-primary peer-checked:border-primary shadow-soft hover:shadow-glow">
              <input 
                className="peer h-5 w-5 border-2 border-gray-300 dark:border-gray-600 text-primary focus:ring-primary focus:ring-offset-0 transition-colors" 
                name="attitude" 
                type="radio" 
                checked={value === opt.id} 
                onChange={() => onChange(opt.id)} 
              />
              <div className="flex grow flex-col">
                <span className="text-gray-900 dark:text-white text-base font-semibold leading-tight mb-1 group-hover:text-primary transition-colors">
                  {opt.title}
                </span>
                <span className="text-text-muted-light dark:text-gray-400 text-sm font-medium leading-normal">
                  {opt.subtitle}
                </span>
              </div>
            </label>
          ))}
        </div>
      </main>

      <div className="fixed bottom-0 w-full max-w-md bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 p-4 pb-6 z-20">
        <button 
          onClick={onNext}
          disabled={!value}
          className={`w-full flex items-center justify-center rounded-lg h-12 font-bold leading-normal tracking-wide transition-all shadow-lg ${
            value ? 'bg-primary text-white active:scale-[0.98]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Finalizar Diagnóstico
          <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default AttitudeSelection;
