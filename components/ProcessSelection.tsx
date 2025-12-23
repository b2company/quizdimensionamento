
import React from 'react';
import { ProcessState } from '../types';

interface Props {
  value: ProcessState;
  onChange: (v: ProcessState) => void;
  onNext: () => void;
  onBack: () => void;
}

const ProcessSelection: React.FC<Props> = ({ value, onChange, onNext, onBack }) => {
  const options: { id: ProcessState; title: string; subtitle: string; icon: string }[] = [
    { id: 'defined', title: 'Sim, bem definido', subtitle: 'Processo documentado e seguido por todos.', icon: 'verified' },
    { id: 'partial', title: 'Mais ou menos', subtitle: 'Depende muito da senioridade da equipe.', icon: 'people_outline' },
    { id: 'none', title: 'Não tenho processo', subtitle: 'Cada vendedor faz do seu jeito.', icon: 'help_outline' },
    { id: 'structuring', title: 'Ainda estou estruturando', subtitle: 'Estamos começando a desenhar agora.', icon: 'construction' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-surface-dark overflow-hidden transition-colors duration-300">
      <header className="px-6 pt-12 pb-4">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span className="material-icons-round text-gray-600">arrow_back</span>
          </button>
          <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
            <span className="text-xs font-semibold text-primary dark:text-gray-300 uppercase tracking-wider">Etapa 5 de 8</span>
          </div>
          <div className="w-10"></div>
        </div>
        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-primary w-[62%] rounded-full transition-all duration-500 ease-out"></div>
        </div>
      </header>

      <main className="flex-1 px-6 overflow-y-auto no-scrollbar pb-8 animate-fade-in-up">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
            Processo de Vendas Claro?
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            Para diagnosticar a saúde comercial, precisamos entender se sua equipe segue um roteiro previsível.
          </p>
        </div>

        <div className="space-y-4">
          {options.map((opt) => (
            <label key={opt.id} className="group relative flex items-center p-5 rounded-xl border-2 border-transparent bg-gray-50 dark:bg-gray-900/50 hover:border-primary cursor-pointer transition-all duration-200 shadow-sm">
              <input 
                className="peer sr-only" 
                name="sales_process" 
                type="radio" 
                checked={value === opt.id} 
                onChange={() => onChange(opt.id)} 
              />
              <div className="absolute right-5 w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                <span className="material-icons-round text-white text-[16px] opacity-0 peer-checked:opacity-100 transition-opacity">check</span>
              </div>
              <div className="mr-4 w-12 h-12 rounded-lg bg-white dark:bg-surface-dark text-primary flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200">
                <span className="material-icons-round text-2xl">{opt.icon}</span>
              </div>
              <div className="flex-1 pr-8">
                <h3 className="font-semibold text-gray-900 dark:text-white text-base mb-0.5 group-hover:text-primary transition-colors">{opt.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{opt.subtitle}</p>
              </div>
              <div className="absolute inset-0 rounded-xl border-2 border-primary opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
            </label>
          ))}
        </div>
      </main>

      <div className="px-6 py-6 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-surface-dark">
        <button 
          onClick={onNext}
          disabled={!value}
          className={`w-full py-4 px-6 font-semibold shadow-lg transition-all duration-200 flex items-center justify-center group rounded-xl ${
            value ? 'bg-primary text-white active:scale-[0.98]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Continuar
          <span className="material-icons-round ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        <div className="mt-4 text-center">
          <button onClick={onNext} className="text-xs font-medium text-gray-400 hover:text-primary transition-colors">
            Pular esta pergunta
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcessSelection;
