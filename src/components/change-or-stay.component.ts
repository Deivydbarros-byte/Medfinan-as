import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-change-or-stay',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-[#080d0f] relative section-bg-grid overflow-hidden">
       <!-- Glow effect -->
       <div class="absolute left-1/2 -top-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
          Delegue a Burocracia Financeira
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto mb-12">
          Focamos no que você não tem tempo para fazer, para que você possa focar no que mais importa: seus pacientes e sua família.
        </p>

        <div class="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            @for(item of services; track item; let i = $index) {
              <div class="bg-brand-card p-6 rounded-xl border border-white/5 flex items-center gap-4 group hover:border-brand-primary/30 transition-colors">
                <div class="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary text-xl font-bold shrink-0 ring-4 ring-brand-primary/5">
                  <span>{{ i + 1 }}</span>
                </div>
                <h3 class="text-lg font-semibold text-white text-left">{{ item }}</h3>
              </div>
            }
        </div>
        
        <div class="mt-8">
          <button (click)="openModal()" class="inline-block text-2xl font-bold text-brand-black bg-brand-secondary rounded-lg py-5 px-10 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] hover:bg-brand-primary transition-all duration-300">
            TUDO ISSO FEITO POR NÓS!
          </button>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeOrStayComponent {
  private readonly modalService = inject(ModalService);

  services = [
    'Saia das dívidas',
    'Organize suas finanças e orçamento',
    'Construa sua carteira de investimentos',
    'Administre sua PJ'
  ];

  openModal() {
    this.modalService.open();
  }
}