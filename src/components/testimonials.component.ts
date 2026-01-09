import { Component, ChangeDetectionStrategy, signal, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    /* Hide scrollbar for Chrome, Safari and Opera */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    .no-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  `],
  template: `
    <section class="py-24 bg-brand-black relative border-t border-white/5 overflow-hidden section-bg-grid">
       <!-- Decoration BG -->
       <div class="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/5 to-transparent pointer-events-none"></div>

       <div class="container mx-auto px-4 relative z-10">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Quem Já Está no <span class="text-brand-primary">Caminho Certo</span>
            </h2>
            <p class="text-gray-400 max-w-2xl mx-auto">
              Veja o que outros médicos estão falando sobre a nossa metodologia.
            </p>
          </div>

          <!-- Carousel Container -->
          <div class="max-w-4xl mx-auto relative group">
            
            <!-- Slides wrapper -->
            <div #carousel
                 class="overflow-x-auto flex snap-x snap-mandatory scroll-smooth no-scrollbar rounded-2xl"
                 (scroll)="onScroll()">
                
                @for (item of testimonials; track item.name) {
                  <div class="w-full flex-shrink-0 snap-center p-2 md:p-4">
                    <div class="bg-brand-card border border-white/5 rounded-2xl p-8 md:p-12 text-center relative hover:border-brand-primary/20 transition-all duration-300 shadow-xl">
                       <!-- Quote Icon -->
                       <div class="absolute top-6 left-6 md:left-8 text-brand-primary/10">
                         <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.896 14.353 15.986 15.025 15.27C15.697 14.554 16.593 14.12 17.713 13.968C17.618 13.792 17.57 13.596 17.57 13.38C17.57 12.756 17.798 12.228 18.254 11.796C18.71 11.356 19.314 11.136 20.066 11.136C20.81 11.136 21.41 11.356 21.866 11.796C22.322 12.228 22.55 12.756 22.55 13.38C22.55 14.612 22.094 15.692 21.182 16.62C20.27 17.548 19.046 18.012 17.51 18.012C16.99 18.012 16.534 17.964 16.142 17.868C15.758 17.772 15.426 17.644 15.146 17.484C14.77 18.788 14.394 19.96 14.017 21ZM2 21L2 18C2 16.896 2.336 15.986 3.008 15.27C3.68 14.554 4.576 14.12 5.696 13.968C5.601 13.792 5.553 13.596 5.553 13.38C5.553 12.756 5.781 12.228 6.237 11.796C6.693 11.356 7.297 11.136 8.049 11.136C8.793 11.136 9.393 11.356 9.849 11.796C10.305 12.228 10.533 12.756 10.533 13.38C10.533 14.612 10.077 15.692 9.165 16.62C8.253 17.548 7.029 18.012 5.493 18.012C4.973 18.012 4.517 17.964 4.125 17.868C3.741 17.772 3.409 17.644 3.129 17.484C2.753 18.788 2.377 19.96 2 21Z"/></svg>
                       </div>

                       <div class="mb-8 relative z-10 min-h-[120px] flex items-center justify-center">
                          <p class="text-lg md:text-xl text-gray-200 font-serif italic leading-relaxed">
                            "{{ item.quote }}"
                          </p>
                       </div>

                       <div class="flex flex-col items-center justify-center relative z-10">
                          <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-primary p-0.5 mb-3">
                            <img [src]="item.photo" [alt]="item.name" class="w-full h-full object-cover rounded-full bg-brand-dark">
                          </div>
                          <div class="text-white font-bold text-lg">{{ item.name }}</div>
                          <div class="text-brand-primary text-sm font-medium tracking-wide">{{ item.role }}</div>
                       </div>
                    </div>
                  </div>
                }

            </div>

            <!-- Controls (Visible on hover or mobile) -->
            <button (click)="prev()" aria-label="Anterior" class="absolute top-1/2 -left-2 md:-left-12 -translate-y-1/2 bg-brand-card/80 hover:bg-brand-primary hover:text-brand-black text-white p-3 rounded-full border border-white/10 transition-all focus:outline-none shadow-lg backdrop-blur-sm z-20 md:opacity-0 md:group-hover:opacity-100">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button (click)="next()" aria-label="Próximo" class="absolute top-1/2 -right-2 md:-right-12 -translate-y-1/2 bg-brand-card/80 hover:bg-brand-primary hover:text-brand-black text-white p-3 rounded-full border border-white/10 transition-all focus:outline-none shadow-lg backdrop-blur-sm z-20 md:opacity-0 md:group-hover:opacity-100">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>

            <!-- Dots -->
            <div class="flex justify-center gap-3 mt-8">
              @for (item of testimonials; track $index) {
                <button (click)="goTo($index)" 
                        [attr.aria-label]="'Ir para depoimento ' + ($index + 1)"
                        class="w-2.5 h-2.5 rounded-full transition-all duration-300"
                        [class.bg-brand-primary]="currentIndex() === $index"
                        [class.bg-white\/20]="currentIndex() !== $index"
                        [class.w-8]="currentIndex() === $index">
                </button>
              }
            </div>

          </div>
       </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsComponent {
  currentIndex = signal(0);
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;
  
  testimonials = [
    {
      name: "Dr. Lucas Mendes",
      role: "Anestesiologista",
      quote: "Achei que ganhar bem resolvia tudo. A MedFinanças me mostrou que organização vale mais que o plantão extra. Hoje invisto com consciência.",
      photo: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Dra. Juliana Costa",
      role: "Residente em Dermatologia",
      quote: "Começar a investir na residência parecia impossível. Hoje já tenho minha reserva montada e pago meu FIES sem sufoco.",
      photo: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "Dr. Roberto Almeida",
      role: "Cirurgião Geral",
      quote: "A clareza sobre a PJ e os impostos me economizou milhares de reais logo no primeiro ano. O ROI da consultoria foi imediato.",
      photo: "https://i.pravatar.cc/150?img=59"
    },
    {
       name: "Dra. Mariana Santos",
       role: "Pediatra",
       quote: "Eu não tinha tempo para estudar finanças. A curadoria de investimentos deles é perfeita para minha rotina corrida.",
       photo: "https://i.pravatar.cc/150?img=9"
    }
  ];

  next() {
    const nextIndex = (this.currentIndex() + 1) % this.testimonials.length;
    this.scrollToIndex(nextIndex);
  }

  prev() {
    const prevIndex = (this.currentIndex() - 1 + this.testimonials.length) % this.testimonials.length;
    this.scrollToIndex(prevIndex);
  }

  goTo(index: number) {
    this.scrollToIndex(index);
  }

  private scrollToIndex(index: number) {
    if (this.carousel?.nativeElement) {
      this.carousel.nativeElement.scrollTo({
        left: this.carousel.nativeElement.offsetWidth * index,
        behavior: 'smooth'
      });
      // Updating signal here provides immediate feedback on click
      this.currentIndex.set(index);
    }
  }

  onScroll() {
    // Update active index when manually scrolling/swiping
    if (this.carousel?.nativeElement) {
      const container = this.carousel.nativeElement;
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      if (index !== this.currentIndex()) {
        this.currentIndex.set(index);
      }
    }
  }
}