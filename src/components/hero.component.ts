import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-brand-black pt-32 pb-20 md:pt-40 md:pb-32 relative section-bg-grid overflow-hidden">
      <!-- Content -->
      <div class="container mx-auto px-4 relative text-center z-10">
        
        <div class="flex justify-center items-center gap-3 mb-8 opacity-0 animate-fade-in-up" style="animation-delay: 0.1s;">
          <svg class="text-brand-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            <path d="M12 5 v10"/>
            <path d="M7 10 h10"/>
          </svg>
          <span class="text-white font-serif text-3xl font-bold">Med<span class="text-brand-primary">Finanças</span></span>
        </div>
        
        <div class="mb-6 opacity-0 animate-fade-in-up" style="animation-delay: 0.3s;">
            <p class="inline-block bg-brand-primary/10 text-brand-primary text-sm font-semibold rounded-full px-4 py-2">
                Cuidar das pessoas é sua missão, cuidar da sua vida financeira é a nossa!
            </p>
        </div>

        <h1 class="text-5xl lg:text-6xl font-serif font-bold text-gradient leading-tight max-w-5xl mx-auto mb-6 text-center uppercase tracking-wider opacity-0 animate-fade-in-up" style="animation-delay: 0.5s;">
            Planejamento Financeiro para Médicos
        </h1>

        <p class="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium opacity-0 animate-fade-in-up" style="animation-delay: 0.7s;">
          Ganhe tempo para a família, realize sonhos e construa o seu futuro.
        </p>

        <div class="opacity-0 animate-fade-in-up" style="animation-delay: 0.9s;">
            <button (click)="openModal()" class="group relative inline-flex items-center justify-center px-8 py-4 bg-brand-secondary text-brand-black font-bold text-lg rounded-lg hover:bg-brand-primary transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
              <svg class="mr-2 w-5 h-5 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
              Quero meu diagnóstico gratuito
            </button>
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  private readonly modalService = inject(ModalService);

  openModal() {
    this.modalService.open();
  }
}