
import React from 'react';

const SalesScreen: React.FC = () => {
  const faqs = [
    { q: "Funciona no Excel e Google Sheets?", a: "Sim! A planilha é 100% compatível com Excel (Desktop) e Google Sheets (Online)." },
    { q: "O acesso é vitalício?", a: "Sim. Você paga uma única vez e tem acesso vitalício à ferramenta e atualizações." },
    { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento via e-mail." }
  ];

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-surface-dark pb-28 transition-colors duration-300 overflow-y-auto no-scrollbar">
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-surface-dark/95 backdrop-blur shadow-sm border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded bg-primary flex items-center justify-center text-white font-bold text-xs">B2</div>
            <h2 className="text-primary dark:text-white text-lg font-bold tracking-tight">B2 Company</h2>
          </div>
          <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">Oferta Especial</span>
        </div>
      </header>

      <section className="relative flex flex-col items-center bg-white dark:bg-surface-dark px-4 pt-6 pb-10">
        <div className="w-full max-w-md space-y-4 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 px-3 py-1 text-xs font-medium text-primary dark:text-blue-300 border border-blue-100">
            <span className="material-symbols-outlined text-sm">check_circle</span>
            Diagnóstico Concluído
          </div>
          <h1 className="text-gray-900 dark:text-white text-[32px] leading-[1.15] font-extrabold tracking-tight">
            Pare de operar no escuro.
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
            Com base no seu diagnóstico, a <span className="font-bold text-primary dark:text-blue-400">Planilha de Gestão Comercial 2.0</span> é a ferramenta exata para assumir o controle dos seus números.
          </p>

          <div className="relative w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden my-6 group">
            <img src="https://picsum.photos/seed/dashboard/800/450" className="w-full h-full object-cover opacity-80" alt="Dashboard" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg backdrop-blur-sm cursor-pointer hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-4xl ml-1">play_arrow</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <button className="w-full bg-primary hover:bg-[#06182a] text-white font-bold text-lg h-14 rounded-lg shadow-lg shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
              QUERO ACESSO POR R$47
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-sm">lock</span> Pagamento 100% Seguro
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-900 px-4 py-10">
        <h2 className="text-gray-900 dark:text-white text-xl font-bold mb-6 text-center leading-tight">
          A diferença entre <span className="text-red-600">perder dinheiro</span> e escalar resultados
        </h2>
        <div className="space-y-4 max-w-md mx-auto">
          <div className="bg-white dark:bg-surface-dark p-5 rounded-xl border-l-4 border-red-500 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-red-500 mt-0.5">close</span>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase mb-1">Sem gestão (O escuro)</h3>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li>• Não sabe quantos leads chegaram</li>
                  <li>• Perde vendas por falta de follow-up</li>
                  <li>• Metas baseadas em "achismo"</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark p-5 rounded-xl border-l-4 border-green-500 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-green-600 mt-0.5">check</span>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase mb-1">Com a Planilha 2.0</h3>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li>• Controle total do funil de vendas</li>
                  <li>• Previsibilidade de faturamento</li>
                  <li>• Decisões baseadas em dados reais</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-surface-dark px-4 py-10">
        <div className="max-w-md mx-auto">
          <h2 className="text-primary dark:text-white text-[22px] font-bold leading-tight mb-2">O que você vai receber:</h2>
          <p className="text-gray-500 text-sm mb-6">6 abas essenciais integradas em um único sistema.</p>
          <div className="space-y-3">
            {['Dashboard Geral', 'CRM Simples', 'Controle de Metas', 'Gestão de Time', 'Funil de Vendas'].map((title, i) => (
              <div key={i} className="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-300 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">apps</span>
                </div>
                <div className="ml-3">
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm">{title}</h3>
                  <p className="text-xs text-gray-500">Ferramenta integrada e intuitiva.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-4 py-10 text-white text-center">
        <h2 className="text-2xl font-bold mb-6">3 Bônus Exclusivos</h2>
        <div className="space-y-4 max-w-md mx-auto text-left">
          {[
            { t: 'Aula: Domine a Planilha', p: 'Tutorial passo a passo em 10 min.', v: 'R$ 97' },
            { t: 'PDF: Roteiros de Vendas', p: 'Scripts prontos para objeções.', v: 'R$ 47' },
            { t: 'Diagnóstico Comercial', p: 'Checklist para identificar gargalos.', v: 'R$ 197' }
          ].map((b, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Grátis</span>
                <span className="text-gray-400 text-xs line-through">{b.v}</span>
              </div>
              <h3 className="font-bold text-lg">{b.t}</h3>
              <p className="text-sm text-gray-300">{b.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white dark:bg-surface-dark px-4 py-10">
         <div className="max-w-md mx-auto text-center">
           <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6">
              <p className="text-sm text-primary dark:text-blue-300 font-medium mb-1">Oferta Especial Pós-Diagnóstico</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg text-gray-500 font-medium">12x de</span>
                <span className="text-4xl font-extrabold text-primary dark:text-white tracking-tight">R$ 4,70</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">ou R$ 47,00 à vista</p>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-14 rounded-lg shadow-lg flex items-center justify-center gap-2">
              COMPRAR AGORA
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
         </div>
      </section>

      <section className="px-4 py-10 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-bold text-center mb-6 dark:text-white">Perguntas Frequentes</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white dark:bg-surface-dark p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                <summary className="flex cursor-pointer items-center justify-between font-medium dark:text-white">
                  <span>{f.q}</span>
                  <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                </summary>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 p-4 z-50 shadow-lg max-w-md mx-auto flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 uppercase font-bold">Apenas hoje</span>
          <span className="text-xl font-bold text-primary dark:text-white">R$ 47,00</span>
        </div>
        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold h-12 rounded-lg transition-colors flex items-center justify-center gap-1">
          COMPRAR
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default SalesScreen;
