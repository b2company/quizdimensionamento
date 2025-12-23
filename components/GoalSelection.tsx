
import React from 'react';
import { GoalPerformance } from '../types';

interface Props {
  value: GoalPerformance;
  onChange: (v: GoalPerformance) => void;
  onNext: () => void;
  onBack: () => void;
}

const GoalSelection: React.FC<Props> = ({ value, onChange, onNext, onBack }) => {
  const options: { id: GoalPerformance; title: string; subtitle: string }[] = [
    { id: 'always', title: 'Sim, sempre', subtitle: 'Consistência acima de 95%' },
    { id: 'sometimes', title: 'Às vezes', subtitle: 'Oscila entre meses bons e ruins' },
    { id: 'rarely', title: 'Raramente', subtitle: 'Dificuldade constante em atingir' },
    { id: 'never', title: 'Nunca', subtitle: 'Metas estão distantes da realidade' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-surface-dark overflow-hidden transition-colors duration-300">
      <header className="px-6 pt-12 pb-4">
        <div className="flex justify-between text-xs font-medium text-gray-400 mb-2">
          <span>Pergunta 4 de 8</span>
          <span>50%</span>
        </div>
        <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-primary w-[50%] rounded-full transition-all duration-500"></div>
        </div>
        <div className="py-4 flex items-center">
          <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-500">
            <span className="material-icons-round">arrow_back</span>
          </button>
          <span className="ml-2 text-sm font-semibold text-primary dark:text-gray-200 uppercase tracking-wider">Diagnóstico Comercial</span>
        </div>
      </header>

      <main className="flex-1 px-6 pt-2 pb-8 flex flex-col animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            O seu time comercial está batendo as metas de receita?
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            Considere o desempenho dos últimos 3 trimestres para uma avaliação mais precisa.
          </p>
        </div>

        <div className="space-y-4 flex-1">
          {options.map((opt) => (
            <label key={opt.id} className="block cursor-pointer group relative">
              <input 
                className="sr-only peer" 
                name="revenue_goal" 
                type="radio" 
                checked={value === opt.id} 
                onChange={() => onChange(opt.id)} 
              />
              <div className="flex items-center p-5 border-2 border-gray-100 dark:border-gray-800 rounded-xl transition-all duration-200 hover:border-primary peer-checked:border-primary dark:peer-checked:border-primary peer-checked:bg-blue-50/50 dark:peer-checked:bg-blue-900/10 bg-white dark:bg-surface-dark shadow-sm">
                <div className="flex-1">
                  <span className="block text-lg font-semibold text-gray-800 dark:text-gray-100 transition-colors">{opt.title}</span>
                  <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">{opt.subtitle}</span>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center transition-all peer-checked:bg-primary peer-checked:border-primary">
                  <span className="material-icons-round text-white text-base opacity-0 peer-checked:opacity-100 transition-opacity">check</span>
                </div>
              </div>
            </label>
          ))}
        </div>
      </main>

      <div className="p-6 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800">
        <button 
          onClick={onNext}
          disabled={!value}
          className={`w-full font-medium py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 ${
            value ? 'bg-primary text-white active:scale-[0.98]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <span>Próxima Pergunta</span>
          <span className="material-icons-round text-sm">arrow_forward</span>
        </button>
        <div className="mt-4 flex justify-center">
          <button onClick={onNext} className="text-sm text-gray-400 dark:text-gray-500 hover:text-primary transition-colors underline decoration-dotted">
            Pular esta etapa
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoalSelection;
