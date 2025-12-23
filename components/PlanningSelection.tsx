
import React from 'react';
import { PlanningMethod } from '../types';

interface Props {
  value: PlanningMethod;
  onChange: (v: PlanningMethod) => void;
  onNext: () => void;
  onBack: () => void;
}

const PlanningSelection: React.FC<Props> = ({ value, onChange, onNext, onBack }) => {
  const options: { id: PlanningMethod; title: string; subtitle: string; icon: string }[] = [
    { id: 'feeling', title: 'No achismo / feeling', subtitle: 'Sem processo formal, confio na intuição.', icon: 'psychology_alt' },
    { id: 'sheets', title: 'Em planilhas genéricas', subtitle: 'Uso Excel ou Sheets, mas é manual.', icon: 'table_chart' },
    { id: 'uncertain', title: 'Uso algo, mas sem confiança', subtitle: 'Tenho ferramenta, mas os dados não batem.', icon: 'rule' },
    { id: 'controlled', title: 'Tenho tudo sob controle', subtitle: 'Processo claro e dados precisos.', icon: 'verified_user' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-surface-dark overflow-hidden transition-colors duration-300">
      <header className="px-6 py-6 flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-text-muted-light">
          <span className="material-icons-round text-2xl">arrow_back</span>
        </button>
        <div className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium text-text-muted-light uppercase tracking-wide">
          Etapa 8 de 8
        </div>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 flex flex-col px-6 pb-8 animate-fade-in-up">
        <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mb-8">
          <div className="h-full bg-primary w-[87%] rounded-full transition-all duration-500"></div>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-3">
          Planejamento Comercial
        </h1>
        <p className="text-text-muted-light dark:text-text-muted-dark text-lg font-normal leading-relaxed mb-8">
          Como você realiza seu planejamento de vendas e metas hoje em dia?
        </p>

        <div className="flex flex-col gap-4 flex-1">
          {options.map((opt) => (
            <label key={opt.id} className="group relative cursor-pointer">
              <input 
                className="peer sr-only" 
                name="planning_method" 
                type="radio" 
                checked={value === opt.id} 
                onChange={() => onChange(opt.id)} 
              />
              <div className="p-5 rounded-xl border-2 border-gray-100 dark:border-gray-800 bg-white dark:bg-surface-dark peer-checked:border-primary peer-checked:bg-blue-50/50 dark:peer-checked:bg-blue-900/10 flex items-center gap-4 hover:border-primary/50 transition-all duration-200 shadow-soft">
                <div className="h-10 w-10 shrink-0 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-icons-round">{opt.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-base">{opt.title}</h3>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-0.5">{opt.subtitle}</p>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center peer-checked:border-primary peer-checked:bg-primary transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </label>
          ))}
        </div>

        <footer className="mt-8">
          <button 
            onClick={onNext}
            disabled={!value}
            className={`w-full font-bold text-lg py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group ${
              value ? 'bg-primary text-white active:scale-[0.98]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continuar
            <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </footer>
      </main>
    </div>
  );
};

export default PlanningSelection;
