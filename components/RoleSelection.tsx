
import React from 'react';
import { Role } from '../types';

interface Props {
  value: Role;
  onChange: (v: Role) => void;
  onNext: () => void;
  onBack: () => void;
}

const RoleSelection: React.FC<Props> = ({ value, onChange, onNext, onBack }) => {
  const roles: { id: Role; title: string; subtitle: string; icon: string; color: string }[] = [
    { id: 'owner', title: 'Dono(a) / Sócio(a)', subtitle: 'Tomador de decisão final', icon: 'verified_user', color: 'bg-blue-50' },
    { id: 'director', title: 'Diretor(a) Comercial', subtitle: 'Gestão estratégica de vendas', icon: 'analytics', color: 'bg-purple-50' },
    { id: 'sales', title: 'Vendedor(a)', subtitle: 'Execução e fechamento', icon: 'work_outline', color: 'bg-green-50' },
    { id: 'other', title: 'Outro', subtitle: 'Consultor, Marketing, etc.', icon: 'more_horiz', color: 'bg-gray-100' },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <header className="px-6 py-4 flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-icons-round text-2xl text-text-muted-light dark:text-text-muted-dark">arrow_back</span>
        </button>
        <div className="flex-1 mx-6">
          <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[15%] rounded-full transition-all duration-500"></div>
          </div>
        </div>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 px-6 pt-4 pb-8 overflow-y-auto no-scrollbar animate-fade-in-up">
        <div className="mb-8">
          <span className="text-xs font-semibold tracking-wider text-primary dark:text-blue-400 uppercase mb-3 block">Diagnóstico Comercial</span>
          <h1 className="text-3xl font-bold leading-tight mb-3 text-gray-900 dark:text-white">
            Qual é o seu papel na empresa?
          </h1>
          <p className="text-text-muted-light dark:text-text-muted-dark text-lg leading-relaxed">
            Essa informação nos ajuda a personalizar as recomendações estratégicas para o seu perfil.
          </p>
        </div>

        <div className="space-y-4">
          {roles.map((role) => (
            <label key={role.id} className="group relative flex items-center p-5 rounded-2xl bg-white dark:bg-surface-dark border-2 border-transparent cursor-pointer shadow-soft transition-all duration-200 active:scale-[0.98]">
              <input 
                className="peer sr-only" 
                name="role" 
                type="radio" 
                checked={value === role.id} 
                onChange={() => onChange(role.id)} 
              />
              <div className="absolute inset-0 rounded-2xl border-2 border-gray-100 dark:border-gray-800 peer-checked:border-primary dark:peer-checked:border-primary transition-colors"></div>
              <div className="relative z-10 flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${role.color} dark:bg-blue-900/20 flex items-center justify-center text-primary dark:text-white transition-colors`}>
                    <span className="material-icons-round">{role.icon}</span>
                  </div>
                  <div>
                    <span className="block font-semibold text-lg text-gray-900 dark:text-white">{role.title}</span>
                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark">{role.subtitle}</span>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center transition-all">
                  <span className="material-icons-round text-white text-sm opacity-0 peer-checked:opacity-100">check</span>
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
          className={`w-full font-semibold text-lg py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group ${
            value ? 'bg-primary text-white active:scale-[0.98]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <span>Continuar</span>
          <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;
