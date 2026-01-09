import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { HeroComponent } from './components/hero.component';
import { FeaturesComponent } from './components/features.component';
import { PricingComponent } from './components/pricing.component';
import { FooterComponent } from './components/footer.component';
import { LeadModalComponent } from './components/lead-modal.component';
import { TestimonialsComponent } from './components/testimonials.component';
import { ModalService } from './services/modal.service';
import { ChangeOrStayComponent } from './components/change-or-stay.component';
import { FaqComponent } from './components/faq.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    FeaturesComponent,
    PricingComponent,
    FooterComponent,
    LeadModalComponent,
    TestimonialsComponent,
    ChangeOrStayComponent,
    FaqComponent
  ],
  template: `
    <div class="min-h-screen flex flex-col bg-transparent overflow-x-hidden">
      <!-- Navbar Overlay -->
      <nav class="sticky top-0 left-0 w-full z-50 py-4 px-4 md:px-8 border-b border-white/5 bg-brand-black/80 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
          <div class="flex items-center gap-2 text-brand-primary font-bold text-xl tracking-tight">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              <path d="M12 5 v10"/>
              <path d="M7 10 h10"/>
            </svg>
            <span class="text-white font-serif">Med<span class="text-brand-primary">Finanças</span></span>
          </div>
          
          <div class="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#planos" (click)="scrollToElement('planos', $event)" class="hover:text-brand-primary transition-colors cursor-pointer">Planos</a>
            <button (click)="openModal()" class="group flex items-center border border-brand-primary text-brand-primary font-medium px-5 py-2.5 rounded-full hover:bg-brand-primary hover:text-brand-black transition-colors duration-300">
               <svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
              Quero meu diagnóstico gratuito
            </button>
          </div>
        </div>
      </nav>

      <main>
        <app-hero />
        <app-change-or-stay />
        <app-features />
        <app-pricing />
        <app-testimonials />
        <app-faq />
      </main>

      <app-footer />
      
      <app-lead-modal />
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private modalService = inject(ModalService);

  openModal() {
    this.modalService.open();
  }

  scrollToElement(elementId: string, event: Event): void {
    event.preventDefault();
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}