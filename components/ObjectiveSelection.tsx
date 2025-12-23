
import React from 'react';

interface Props {
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const ObjectiveSelection: React.FC<Props> = ({ value, onChange, onNext, onBack }) => {
  const objectives = [
    { id: 'revenue', title: 'Aumentar o faturamento', subtitle: 'Escalar receita e vendas', icon: 'trending_up', color: 'bg-green-50' },
    { id: 'team', title: 'Estruturar time e processo', subtitle: 'Organizar a casa para crescer', icon: 'groups', color: 'bg-blue-50' },
    { id: 'hiring', title: 'Contratar certo', subtitle: 'Encontrar talentos chave', icon: 'person_search', color: 'bg-purple-50' },
    { id: 'forecast', title: 'Prever resultados', subtitle: 'Clareza no forecast', icon: 'visibility', color: 'bg-orange-50' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-surface-dark overflow-hidden transition-colors duration-300">
      <header className="px-6 py-6 flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500">
          <span className="material-symbols-rounded text-2xl">arrow_back</span>
        </button>
        <div className="flex-1 mx-4 h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-primary w-[75%] rounded-full"></div>
        </div>
        <button onClick={onNext} className="text-sm font-medium text-gray-400 hover:text-primary transition-colors">
          Pular
        </button>
      </header>

      <main className="flex-1 flex flex-col px-6 pb-8 animate-fade-in-up">
        <section className="mt-4 mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-blue-300 text-xs font-semibold tracking-wide uppercase mb-4 border border-blue-100">
            Diagnóstico Comercial
          </span>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
            Qual é o seu principal objetivo nos próximos 3 meses?
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            Selecione a opção que melhor descreve sua prioridade número um para o trimestre.
          </p>
        </section>

        <div className="flex flex-col gap-4 flex-1">
          {objectives.map((obj) => (
            <label key={obj.id} className="group relative cursor-pointer">
              <input 
                className="peer sr-only" 
                name="objective" 
                type="radio" 
                checked={value === obj.id} 
                onChange={() => onChange(obj.id)} 
              />
              <div className="flex items-center p-5 rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-white dark:bg-surface-dark hover:border-blue-200 peer-checked:border-primary peer-checked:bg-blue-50/50 dark:peer-checked:bg-blue-900/10 transition-all duration-200 shadow-sm">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full ${obj.color} dark:bg-surface-dark flex items-center justify-center text-primary dark:text-white mr-4 group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-rounded">{obj.icon}</span>
                </div>
                <div className="flex-1">
                  <span className="block font-semibold text-gray-900 dark:text-white mb-0.5">{obj.title}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{obj.subtitle}</span>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center peer-checked:border-primary peer-checked:bg-primary transition-colors">
                  <div className="w-3 h-3 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </label>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <button 
            onClick={onNext}
            disabled={!value}
            className={`w-full font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center group relative overflow-hidden ${
              value ? 'bg-primary text-white active:scale-[0.98]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <span className="relative z-10 flex items-center">
              Continuar
              <span className="material-symbols-rounded ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </span>
          </button>
          <p className="text-center mt-4 text-xs text-gray-400 font-medium">
            Etapa 7 de 8
          </p>
        </div>
      </main>
    </div>
  );
};

export default ObjectiveSelection;
