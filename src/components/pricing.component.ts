import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="planos" class="py-24 bg-brand-black relative section-bg-grid overflow-hidden">
      <div class="container mx-auto px-4">
        
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          <!-- Base Plan -->
          <div class="bg-brand-card rounded-2xl p-8 border border-white/5 relative flex flex-col h-full hover:border-brand-primary/30 transition-all duration-300">
             <div class="text-center flex flex-col flex-grow">
                <p class="text-brand-primary font-semibold text-sm uppercase tracking-wider mb-4">Med Iniciante</p>
                <h3 class="text-2xl font-bold text-white mb-2 leading-tight">Organize e pare de perder dinheiro</h3>
                <div class="text-gray-400 text-sm mb-4 h-10 flex items-center justify-center font-semibold text-brand-primary">
                  <span>(em 6 meses)</span>
                </div>
                
                <div class="flex items-baseline justify-center mb-4 whitespace-nowrap">
                  <span class="text-3xl font-bold text-white">R$ 449,00</span>
                  <span class="text-gray-500 ml-1.5">Fee Único</span>
                </div>

                <ul class="space-y-4 mb-8 text-left">
                  @for (item of basicFeatures; track item) {
                    <li class="flex items-start gap-3 text-sm text-gray-300">
                      <svg class="w-5 h-5 text-brand-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                      <span>{{ item }}</span>
                    </li>
                  }
                </ul>
                <div class="text-gray-400 text-sm font-sans mt-auto pt-6"><strong class="text-white uppercase">PARA QUEM:</strong> Último ano, recém-formados e início de carreira.</div>
             </div>
          </div>

          <!-- Popular Plan -->
          <div class="bg-brand-card rounded-2xl p-8 border border-brand-primary relative flex flex-col h-full transform md:-translate-y-4 shadow-[0_0_30px_rgba(56,189,248,0.1)]">
             <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-secondary text-brand-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
               Mais Popular
             </div>
             <div class="text-center flex flex-col flex-grow">
                <p class="text-brand-primary font-semibold text-sm uppercase tracking-wider mb-4">Med Aceleração</p>
                <h3 class="text-2xl font-bold text-white mb-2 leading-tight">Coloque o dinheiro para trabalhar e recupere seu tempo</h3>
                <div class="text-gray-400 text-sm mb-4 h-10 flex items-center justify-center font-semibold text-brand-primary">
                   <span>(em 12 meses)</span>
                </div>
                
                <div class="flex items-baseline justify-center mb-4 whitespace-nowrap">
                  <span class="text-3xl font-bold text-white">R$ 1.229,00</span>
                  <span class="text-gray-500 ml-1.5">Fee Único</span>
                </div>
                
                <ul class="space-y-4 mb-8 text-left">
                  <li class="text-gray-400 text-xs font-bold uppercase tracking-wider">Inclui tudo do Plano Iniciante, e mais:</li>
                   @for (item of accelerationAddons; track item) {
                    <li class="flex items-start gap-3 text-sm text-gray-300 font-medium pt-2">
                      <svg class="w-5 h-5 text-brand-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                      <span>{{ item }}</span>
                    </li>
                  }
                </ul>
                <div class="text-gray-400 text-sm font-sans mt-auto pt-6"><strong class="text-white uppercase">PARA QUEM:</strong> Médicos com renda irregular buscando organização.</div>
             </div>
          </div>

          <!-- Advanced Plan -->
          <div class="bg-brand-card rounded-2xl p-8 border border-white/5 relative flex flex-col h-full hover:border-brand-primary/30 transition-all duration-300">
             <div class="text-center flex flex-col flex-grow">
                <p class="text-brand-primary font-semibold text-sm uppercase tracking-wider mb-4">Med Avançado</p>
                <h3 class="text-2xl font-bold text-white mb-2 leading-tight">Consolide patrimônio e libere agenda</h3>
                <div class="text-gray-400 text-sm mb-4 h-10 flex items-center justify-center font-semibold text-brand-primary">
                  <span>(em 12 meses)</span>
                </div>
                
                <div class="flex items-baseline justify-center mb-4 whitespace-nowrap">
                  <span class="text-3xl font-bold text-white">R$ 2.999,00</span>
                  <span class="text-gray-500 ml-1">/ano</span>
                </div>

                <ul class="space-y-4 mb-8 text-left">
                   <li class="text-gray-400 text-xs font-bold uppercase tracking-wider">Inclui tudo do Plano Aceleração, e mais:</li>
                   @for (item of advancedAddons; track item) {
                    <li class="flex items-start gap-3 text-sm text-gray-300 font-medium pt-2">
                      <svg class="w-5 h-5 text-brand-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                      <span>{{ item }}</span>
                    </li>
                  }
                </ul>
                <div class="text-gray-400 text-sm font-sans mt-auto pt-6"><strong class="text-white uppercase">PARA QUEM:</strong> Especialistas com consultório e renda consolidada.</div>
             </div>
          </div>
        </div>

        <div class="text-center mt-16">
           <button (click)="openModal()" class="group inline-flex items-center justify-center px-8 py-4 bg-brand-secondary text-brand-black font-bold text-lg rounded-lg hover:bg-brand-primary transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
             <svg class="mr-2 w-5 h-5 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
             Quero meu diagnóstico gratuito
           </button>
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingComponent {
  private modalService = inject(ModalService);

  basicFeatures = [
    "Planejamento financeiro",
    "Raio‑X de dívidas",
    "Abertura de 1 renegociação/portabilidade",
    "Abertura/estrutura de PJ: checklist, roteiros e indicação contábil",
    "Organização de fluxo de caixa PF/PJ",
    "Mentoria com médicos (1 sessão focada em agenda e precificação básica)",
    "IA EmDia (versão Lite): lembretes, confirmação de pagamentos e coleta de comprovantes"
  ];

  accelerationAddons = [
    "Carteira de investimentos",
    "Previdência: avaliação de PGBL/VGBL (objetivo, tributação, portabilidade/custos)",
    "Planejamento fiscal (PF/PJ) e agenda tributária (IR/DARF/DAS/INSS)",
    "Precificação de consulta/plantões + metas de receita mensal",
    "Revisão de impostos/bancos/taxas",
    "IA EmDia (Standard): integração via Open Finance para conciliação e alerta de anomalias"
  ];

  advancedAddons = [
    "Concierge financeiro: paga/organiza contas, agenda fiscal, coleta docs e abre/acompanha renegociação/portabilidade até comprovar.",
    "Família e sucessão: beneficiários, inventário financeiro e diretrizes; checklist para advogado/contador.",
    "Patrimônio internacional (estratégico): opções de estrutura, custos/passos e parceiros; câmbio e liquidez.",
    "IA EmDia Pro: regras de caixa, priorização de pagamentos, auditoria de gastos e relatórios automáticos PF/PJ."
  ];

  openModal() {
    this.modalService.open();
  }
}