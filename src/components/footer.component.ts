import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-brand-dark pt-20 pb-10 border-t border-white/5 relative section-bg-grid overflow-hidden">
      <div class="container mx-auto px-4">
        
        <div class="max-w-4xl mx-auto text-center mb-20">
          <h2 class="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Pronto para ter <span class="text-brand-primary">uma agenda sob seu controle?</span>
          </h2>
          <p class="text-gray-400 mb-10 max-w-xl mx-auto">
            Clique no botão abaixo para agendar seu diagnóstico gratuito e entender como nosso método pode transformar sua vida financeira e profissional.
          </p>
          
           <button (click)="openModal()" class="group inline-flex items-center justify-center px-8 py-4 bg-brand-secondary text-brand-black font-bold text-lg rounded-lg hover:bg-brand-primary transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
             <svg class="mr-2 w-5 h-5 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
             Quero meu diagnóstico gratuito
           </button>
        </div>

        <div class="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div class="flex items-center gap-2 mb-4 md:mb-0">
             <svg class="text-brand-primary" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              <path d="M12 5 v10"/>
              <path d="M7 10 h10"/>
            </svg>
            <span class="text-white font-serif font-bold">Med<span class="text-brand-primary">Finanças</span></span>
          </div>

          <div class="text-center md:text-right">
             <p class="mb-2">© 2025 MedFinanças. Todos os direitos reservados.</p>
             <p class="text-xs text-gray-600">Este é um projeto de demonstração. Nenhuma informação financeira real é coletada.</p>
          </div>
        </div>

      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  private modalService = inject(ModalService);

  openModal() {
    this.modalService.open();
  }
}