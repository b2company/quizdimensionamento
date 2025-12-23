
import React from 'react';

interface Props {
  onNext: () => void;
  onBack: () => void;
}

const SocialProof: React.FC<Props> = ({ onNext, onBack }) => {
  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
      <header className="px-6 py-4 flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-icons-round text-text-muted-light dark:text-text-muted-dark">arrow_back</span>
        </button>
        <div className="flex-1 mx-6">
          <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[25%] rounded-full"></div>
          </div>
        </div>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center text-center space-y-8 px-6 animate-fade-in-up">
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/5 dark:bg-white/5 rounded-full blur-xl"></div>
          <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-soft shadow-primary/10 dark:shadow-black/30 border border-gray-100 dark:border-gray-800 relative z-10">
            <span className="material-icons-round text-primary dark:text-white text-5xl">verified_user</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-text-main-light dark:text-white leading-tight">
          Junte-se à elite<br />do mercado
        </h1>

        <div className="w-full bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-soft relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mt-2 -mr-2 w-16 h-16 bg-primary/10 rounded-full blur-2xl"></div>
          <p className="text-lg md:text-xl font-medium text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <span className="font-bold text-primary dark:text-white block mb-2 text-2xl">Mais de 1.000 empresas</span>
            já usaram o diagnóstico comercial da <span className="font-semibold text-primary dark:text-white">B2 Company</span> para descobrir gargalos ocultos e multiplicar seus resultados.
          </p>
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 flex justify-center items-center gap-4 opacity-40 grayscale">
            <div className="h-6 w-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-8 w-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            <div className="h-6 w-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-6 w-12 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bg-white/50 dark:bg-surface-dark/50 p-4 rounded-xl text-center border border-gray-100 dark:border-gray-800 shadow-sm">
            <span className="block text-2xl font-bold text-primary dark:text-white mb-1">98%</span>
            <span className="text-xs text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider font-semibold">Satisfação</span>
          </div>
          <div className="bg-white/50 dark:bg-surface-dark/50 p-4 rounded-xl text-center border border-gray-100 dark:border-gray-800 shadow-sm">
            <span className="block text-2xl font-bold text-primary dark:text-white mb-1">3x</span>
            <span className="text-xs text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider font-semibold">ROI Médio</span>
          </div>
        </div>
      </main>

      <footer className="p-6 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800">
        <button 
          onClick={onNext}
          className="w-full bg-primary hover:bg-[#0A2540]/90 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-primary/20 transform transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
        >
          <span>Continuar Diagnóstico</span>
          <span className="material-icons-round text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        <p className="text-center text-xs text-gray-400 mt-4">
          Seus dados estão protegidos e seguros.
        </p>
      </footer>
    </div>
  );
};

export default SocialProof;
