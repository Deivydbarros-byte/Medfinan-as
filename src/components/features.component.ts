import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  template: `
    <section class="py-24 bg-[#080d0f] relative overflow-hidden section-bg-grid">
      <!-- Glow effect -->
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Nosso Método Para Sua Liberdade
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            Um caminho claro para organizar sua carreira, sonhos, dinheiro e investimentos
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Step 1 -->
          <div class="bg-brand-card p-8 rounded-xl border border-white/5 text-center flex flex-col items-center group">
            <div class="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6 ring-8 ring-brand-primary/5 group-hover:scale-110 transition-transform duration-300">
               <span class="text-2xl font-bold">1</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-3 mt-2">Direção de Carreira</h3>
            <p class="text-gray-400 text-sm flex-grow mb-6">
              Escolha estratégica de plantões e hospitais que <strong class="text-gray-300">aceleram sua reputação</strong> e sua renda.
            </p>
            <div class="mt-auto w-full pt-6 border-t border-white/10">
              <span class="text-brand-primary font-semibold text-sm flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
                Mentoria de carreira
              </span>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="bg-brand-card p-8 rounded-xl border border-white/5 text-center flex flex-col items-center group">
            <div class="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6 ring-8 ring-brand-primary/5 group-hover:scale-110 transition-transform duration-300">
               <span class="text-2xl font-bold">2</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-3 mt-2">Organização Total</h3>
            <p class="text-gray-400 text-sm flex-grow mb-6">
             Fluxo de caixa simples, <strong class="text-gray-300">FIES sob controle</strong> e estrutura fiscal e de PJ definida para pagar menos impostos.
            </p>
             <div class="mt-auto w-full pt-6 border-t border-white/10">
              <span class="text-brand-primary font-semibold text-sm flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Fazemos seu planejamento financeiro
              </span>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="bg-brand-card p-8 rounded-xl border border-white/5 text-center flex flex-col items-center group">
            <div class="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6 ring-8 ring-brand-primary/5 group-hover:scale-110 transition-transform duration-300">
               <span class="text-2xl font-bold">3</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-3 mt-2">Crescimento Patrimonial</h3>
            <p class="text-gray-400 text-sm flex-grow mb-6">
              Sua primeira carteira de investimentos que evita produtos ruins e <strong class="text-gray-300">compra sua liberdade de agenda.</strong>
            </p>
             <div class="mt-auto w-full pt-6 border-t border-white/10">
              <span class="text-brand-primary font-semibold text-sm flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                Construímos sua carteira de investimentos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturesComponent {}