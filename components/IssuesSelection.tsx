
import React from 'react';

interface Props {
  values: string[];
  onChange: (v: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const IssuesSelection: React.FC<Props> = ({ values, onChange, onNext, onBack }) => {
  const issuesList = [
    { id: 'unproductive', title: 'Time comercial improdutivo', subtitle: 'Baixa conversão e atividades manuais excessivas.' },
    { id: 'leads_not_converting', title: 'Leads entram e não viram clientes', subtitle: 'Funil com gargalos e perda de oportunidades.' },
    { id: 'unpredictable_sales', title: 'Vendas imprevisíveis mês a mês', subtitle: 'Falta de consistência na receita recorrente.' },
    { id: 'misaligned_goals', title: 'Time desalinhado com metas', subtitle: 'Cultura fraca e falta de clareza nos objetivos.' },
    { id: 'hiring_difficulty', title: 'Dificuldade em contratar certo', subtitle: 'Turnover alto e demora no ramp-up.' },
  ];

  const handleToggle = (id: string) => {
    if (values.includes(id)) {
      onChange(values.filter(v => v !== id));
    } else {
      onChange([...values, id]);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-surface-dark overflow-hidden transition-colors duration-300">
      <header className="px-6 pt-12 pb-4">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span className="material-icons-round text-gray-600">arrow_back</span>
          </button>
          <div className="flex flex-col items-end">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Etapa 6 de 8</span>
            <div className="w-24 h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full mt-1">
              <div className="w-3/4 h-full bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-2">
          Situações na Operação
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          Selecione todas as situações que você identifica atualmente na sua operação comercial.
        </p>
      </header>

      <main className="flex-1 overflow-y-auto px-6 pb-24 pt-2 no-scrollbar animate-fade-in-up">
        <div className="space-y-3">
          {issuesList.map((issue) => (
            <label key={issue.id} className="block group cursor-pointer relative">
              <input 
                className="sr-only peer" 
                type="checkbox" 
                checked={values.includes(issue.id)} 
                onChange={() => handleToggle(issue.id)} 
              />
              <div className="flex items-center p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-surface-dark transition-all duration-200 hover:shadow-md peer-checked:border-primary dark:peer-checked:border-primary peer-checked:bg-blue-50/30 dark:peer-checked:bg-blue-900/10">
                <div className="flex-1 pr-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-base">{issue.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{issue.subtitle}</p>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center transition-colors peer-checked:bg-primary peer-checked:border-primary">
                  <span className="material-icons-round text-white text-sm opacity-0 peer-checked:opacity-100">check</span>
                </div>
              </div>
            </label>
          ))}
        </div>
      </main>

      <div className="absolute bottom-0 left-0 w-full bg-white/90 dark:bg-surface-dark/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 p-6 z-20">
        <button 
          onClick={onNext}
          className="w-full bg-primary text-white font-medium text-lg py-4 px-6 rounded-xl shadow-lg hover:bg-opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
        >
          Continuar
          <span className="material-icons-round text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default IssuesSelection;
