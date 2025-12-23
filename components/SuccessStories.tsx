
import React from 'react';

interface Props {
  onNext: () => void;
  onBack: () => void;
}

const SuccessStories: React.FC<Props> = ({ onNext, onBack }) => {
  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-surface-dark overflow-hidden transition-colors duration-300">
      <header className="px-6 py-4 flex items-center justify-between z-10 relative">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-icons-round text-2xl text-text-muted-light">arrow_back</span>
        </button>
        <div className="h-1 w-12 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-primary w-2/3"></div>
        </div>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 px-6 pb-8 z-10 relative overflow-y-auto no-scrollbar animate-fade-in-up">
        <div className="mb-8 mt-2">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/10">
            Histórias de Sucesso
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-3 text-text-main-light dark:text-white">
            O impacto da <span className="text-primary dark:text-blue-400">Previsibilidade</span>
          </h1>
          <p className="text-text-muted-light dark:text-text-muted-dark text-base leading-relaxed">
            Veja como empresas como a sua transformaram seus resultados comerciais aplicando nossa metodologia de diagnóstico.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 relative">
            <span className="absolute top-6 right-6 text-4xl text-primary/10 font-serif leading-none">“</span>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden shadow-inner">
                <img alt="Ricardo Mendes" className="w-full h-full object-cover" src="https://picsum.photos/200/200?random=1" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Ricardo Mendes</h3>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium">CEO, TechFlow Solutions</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-4">
              "Estávamos estagnados há 2 anos. O diagnóstico da B2 identificou gargalos no nosso funil que nem imaginávamos. Em 6 meses, aumentamos nossa conversão em 40%."
            </p>
            <div className="flex items-center gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
              <span className="material-icons-round text-green-500 text-sm">trending_up</span>
              <span className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide">Crescimento de 40%</span>
            </div>
          </div>

          <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 relative">
            <span className="absolute top-6 right-6 text-4xl text-primary/10 font-serif leading-none">“</span>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden shadow-inner">
                <img alt="Juliana Costa" className="w-full h-full object-cover" src="https://picsum.photos/200/200?random=2" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Juliana Costa</h3>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium">Diretora Comercial, Varejo Ágil</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-4">
              "A previsibilidade era nosso maior problema. Nunca sabíamos como o mês ia fechar. Hoje temos clareza total das métricas e controle sobre nossa receita recorrente."
            </p>
            <div className="flex items-center gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
              <span className="material-icons-round text-primary dark:text-blue-400 text-sm">verified</span>
              <span className="text-xs font-semibold text-primary dark:text-blue-400 uppercase tracking-wide">Receita Previsível</span>
            </div>
          </div>
        </div>
      </main>

      <div className="p-6 bg-gradient-to-t from-white via-white to-transparent dark:from-surface-dark dark:via-surface-dark z-20 sticky bottom-0">
        <button 
          onClick={onNext}
          className="w-full bg-primary hover:bg-opacity-90 active:scale-[0.99] transition-all py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 group"
        >
          <span className="text-white font-semibold text-lg">Continuar Diagnóstico</span>
          <span className="material-icons-round text-white group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        <p className="text-center text-xs text-text-muted-light dark:text-gray-500 mt-4">
          Junte-se a mais de 500 empresas analisadas
        </p>
      </div>
    </div>
  );
};

export default SuccessStories;
