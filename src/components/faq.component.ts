import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-brand-dark/50 relative section-bg-grid overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          <!-- Left Column: Title -->
          <div class="lg:col-span-2">
            <h2 class="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Suas Dúvidas, <br/>
              <span class="text-brand-primary">Nossas Respostas.</span>
            </h2>
            <p class="text-gray-400">
              Entendemos que dar o primeiro passo gera dúvidas. Aqui estão as mais comuns.
            </p>
          </div>

          <!-- Right Column: Accordion -->
          <div class="lg:col-span-3 space-y-4">
            @for(faq of faqs; track faq.q; let i = $index) {
              <div class="border border-white/10 rounded-lg bg-brand-card/50 overflow-hidden">
                <button 
                  (click)="toggle(i)"
                  class="w-full flex justify-between items-center p-5 text-left font-semibold text-white hover:bg-white/5 transition-colors"
                  [attr.aria-expanded]="openIndex() === i">
                  <span>{{ faq.q }}</span>
                  <svg class="w-5 h-5 shrink-0 transition-transform duration-300" 
                       [class.rotate-180]="openIndex() === i"
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div class="overflow-hidden transition-all duration-300 ease-in-out" 
                     [style.max-height]="openIndex() === i ? '500px' : '0px'">
                  <div class="p-5 pt-0 text-gray-400 text-sm leading-relaxed" [innerHTML]="faq.a">
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Risk Reversal Section -->
        <div class="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-brand-accent/50 to-brand-card border border-brand-primary/20 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
           <div class="shrink-0">
              <div class="w-20 h-20 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary ring-8 ring-brand-primary/5">
                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
           </div>
           <div>
             <h3 class="text-2xl font-bold font-serif text-white mb-2">Seu Risco é Zero.</h3>
             <p class="text-gray-300">
              Nosso primeiro encontro é um diagnóstico completo da sua vida financeira gratuito.
             </p>
           </div>
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent {
  openIndex = signal<number | null>(0);

  faqs = [
    {
      q: "E se eu não tiver tempo para isso?",
      a: "Nosso método foi desenhado para a rotina do médico. As sessões são online, gravadas e diretas ao ponto. Fornecemos templates e um assistente pessoal nos planos avançados para otimizar cada minuto do seu tempo."
    },
    {
      q: "Preciso ter uma renda alta para funcionar?",
      a: "Não. O maior ganho que geramos está na <strong class='text-gray-300'>direção</strong>, não no volume. Organizar a carreira, a estrutura de PJ e o fluxo de caixa gera mais resultado financeiro do que apenas aumentar a renda sem um plano."
    },
    {
      q: "Eu já invisto. Como a mentoria pode me ajudar?",
      a: "Ótimo! Para você, nosso trabalho é de <strong class='text-gray-300'>revisão e otimização.</strong> Analisamos suas proteções (seguros), evitamos produtos ruins ou duplicados que geram taxas desnecessárias e alinhamos 100% sua carteira aos seus objetivos de vida, não apenas ao mercado."
    }
  ];

  toggle(index: number) {
    this.openIndex.set(this.openIndex() === index ? null : index);
  }
}