import { Component, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from '../services/modal.service';
import { SupabaseService } from '../services/supabase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lead-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styles: [`
    .animate-enter {
      animation: enter 0.3s ease-out;
    }
    .animate-leave {
      animation: leave 0.2s ease-in forwards;
    }

    @keyframes enter {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes leave {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(-20px);
      }
    }
  `],
  template: `
    @if (modalService.isOpen()) {
      <div class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-brand-black/90 backdrop-blur-sm transition-opacity" (click)="closeModal()"></div>

        <!-- Modal Content -->
        <div class="relative bg-brand-card border border-white/10 rounded-2xl w-full max-w-lg p-6 md:p-8 shadow-2xl transform transition-all animate-fade-in-up">
          <button (click)="closeModal()" class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <div>
            <div class="mb-6">
              <h3 class="text-2xl font-serif font-bold text-white mb-2">
                Agende seu Diagnóstico Gratuito
              </h3>
              <p class="text-gray-400 text-sm">
                Preencha seus dados para agendarmos uma conversa sem compromisso.
              </p>
            </div>
            
            <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-4">
              
              <div class="space-y-4">
                <div>
                  <label class="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wide">Nome Completo</label>
                  <input type="text" formControlName="name" class="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all" placeholder="Digite seu nome">
                </div>
                <div>
                  <label class="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wide">E-mail</label>
                  <input type="email" formControlName="email" class="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all" placeholder="seu@email.com">
                </div>
                <div>
                  <label class="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wide">Telefone</label>
                  <input type="tel" formControlName="telefone" class="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all" placeholder="(XX) XXXXX-XXXX">
                </div>
              </div>
              
              <div class="pt-6 flex flex-col items-center">
                <button type="submit" [disabled]="form.invalid || isSubmitting()" class="w-[180px] bg-brand-secondary text-brand-black font-bold py-3 px-6 rounded-lg hover:bg-brand-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(14,165,233,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]">
                  @if(isSubmitting()) {
                    <span class="flex items-center justify-center">
                      <svg class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  } @else {
                    <span>Enviar e Agendar</span>
                  }
                </button>
                <p class="text-[10px] text-center text-gray-600 mt-4 leading-relaxed">
                  Ao enviar, você será direcionado para a nossa agenda para marcar a conversa.
                </p>
              </div>

              <!-- Hidden Fields (UTMs) -->
              <input type="hidden" formControlName="utm_source">
              <input type="hidden" formControlName="utm_medium">
              <input type="hidden" formControlName="utm_campaign">

            </form>
          </div>
        </div>
      </div>
    }
  `
})
export class LeadModalComponent implements OnInit {
  modalService = inject(ModalService);
  private fb: FormBuilder = inject(FormBuilder);
  private supabaseService = inject(SupabaseService);

  isSubmitting = signal(false);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', Validators.required],
    utm_source: [''],
    utm_medium: [''],
    utm_campaign: ['']
  });
  
  get calendlyUrl(): string {
    const baseUrl = 'https://calendly.com/deivyd-barros/reuniao-de-diagnostico';
    if(this.form.valid) {
      const name = this.form.get('name')?.value;
      const email = this.form.get('email')?.value;
      const telefone = this.form.get('telefone')?.value;
      const answer = `Telefone para contato: ${telefone}`;
      // Pre-fill Calendly form. `a1` corresponds to the first custom question.
      return `${baseUrl}?name=${encodeURIComponent(name || '')}&email=${encodeURIComponent(email || '')}&a1=${encodeURIComponent(answer)}`;
    }
    return baseUrl;
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      this.form.patchValue({
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || ''
      });
    }
  }

  closeModal() {
    this.modalService.close();
    // Reset form state on close
    setTimeout(() => {
        this.isSubmitting.set(false);
        this.form.reset();
    }, 300); // delay for animation
  }

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.isSubmitting()) {
      return;
    }

    this.isSubmitting.set(true);
    
    try {
      // The form's value object now directly matches the required data structure.
      const { error } = await this.supabaseService.addLead(this.form.value);
      
      if (error) {
        console.error('Error saving lead to Supabase:', error);
        
        let userMessage = `Ocorreu um erro ao enviar seus dados: ${error.message}\n\nPor favor, tente novamente.`;

        // Check for common Supabase errors and provide helpful hints
        if (error.code === '42501' || error.message.includes('row-level security')) {
          userMessage = 'Erro de permissão no banco de dados. A política de segurança (RLS) para a tabela "leads" precisa ser ajustada para permitir inserções. Fale com o administrador do sistema.';
        } else if (error.code === '23505' || error.message.includes('duplicate key')) {
          userMessage = 'Parece que este e-mail já foi cadastrado. Por favor, utilize um e-mail diferente.';
        } else if (error.code === '42703' || (error.message.includes('column') && error.message.includes('does not exist'))) {
          userMessage = 'Erro de configuração: Há uma divergência entre os campos do formulário e as colunas da tabela no banco de dados. Fale com o administrador do sistema.';
        }

        alert(userMessage);
        this.isSubmitting.set(false);
      } else {
        // Redirect to scheduling page on successful submission
        if (typeof window !== 'undefined') {
            window.location.href = this.calendlyUrl;
        }
      }
    } catch (e: any) {
      console.error('An unexpected error occurred:', e);
      alert(`Ocorreu um erro inesperado: ${e.message}\n\nPor favor, tente novamente.`);
      this.isSubmitting.set(false);
    }
  }
}