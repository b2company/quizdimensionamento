
import React from 'react';
import { TeamSize } from '../types';

interface Props {
  value: TeamSize;
  onChange: (v: TeamSize) => void;
  onNext: () => void;
  onBack: () => void;
}

const TeamSizeSelection: React.FC<Props> = ({ value, onChange, onNext, onBack }) => {
  const options: { id: TeamSize; title: string; subtitle: string; icon: string }[] = [
    { id: 'none', title: 'Nenhuma ainda', subtitle: 'Eu vendo sozinho(a)', icon: 'person_off' },
    { id: '1-3', title: '1 a 3 pessoas', subtitle: 'Estrutura inicial', icon: 'groups' },
    { id: '4-10', title: '4 a 10 pessoas', subtitle: 'Time em crescimento', icon: 'diversity_3' },
    { id: '10+', title: 'Mais de 10', subtitle: 'Operação robusta', icon: 'domain' },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <header className="px-6 pt-12 pb-4">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span className="material-icons-round text-2xl text-text-muted-light">arrow_back</span>
          </button>
          <div className="text-xs font-semibold tracking-wider text-text-muted-light dark:text-text-muted-dark uppercase">Diagnóstico de Vendas</div>
          <button className="p-2 -mr-2 opacity-0"><span className="material-icons-round text-2xl">close</span></button>
        </div>
        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full mb-2 overflow-hidden">
          <div className="h-full bg-primary w-[35%] rounded-full transition-all duration-500"></div>
        </div>
        <div className="flex justify-between text-xs font-medium text-text-muted-light dark:text-text-muted-dark">
          <span>Pergunta 3 de 8</span>
          <span>35%</span>
        </div>
      </header>

      <main className="flex-1 px-6 pb-24 overflow-y-auto no-scrollbar animate-fade-in-up">
        <div className="mb-8 mt-2">
          <h1 className="text-2xl font-bold text-primary dark:text-white mb-3 leading-tight">
            Qual o tamanho atual do seu time comercial?
          </h1>
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            Considere a soma de todos os profissionais dedicados a vendas, incluindo pré-vendas (SDR/BDR) e fechamento (Closers).
          </p>
        </div>

        <div className="space-y-4">
          {options.map((opt) => (
            <label key={opt.id} className="block cursor-pointer group relative">
              <input 
                className="sr-only peer" 
                name="team_size" 
                type="radio" 
                checked={value === opt.id} 
                onChange={() => onChange(opt.id)} 
              />
              <div className="p-5 rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-white dark:bg-surface-dark transition-all duration-200 hover:border-primary/50 peer-checked:border-primary dark:peer-checked:border-primary peer-checked:bg-blue-50/50 dark:peer-checked:bg-blue-900/10 flex items-center justify-between shadow-soft">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center text-primary dark:text-white transition-colors">
                    <span className="material-icons-round text-xl">{opt.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{opt.title}</h3>
                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-0.5">{opt.subtitle}</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center transition-all peer-checked:bg-primary peer-checked:border-primary">
                  <div className="w-2.5 h-2.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </label>
          ))}
        </div>
      </main>

      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white via-white to-transparent dark:from-surface-dark dark:via-surface-dark pt-12">
        <button 
          onClick={onNext}
          disabled={!value}
          className={`w-full font-medium text-lg py-4 rounded-xl shadow-lg transition-all transform flex items-center justify-center gap-2 ${
            value ? 'bg-primary text-white active:scale-[0.98]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <span>Continuar</span>
          <span className="material-icons-round text-xl">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default TeamSizeSelection;
