import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Define the shape of our lead data using snake_case to match DB columns
export interface Lead {
  name: string;
  email: string;
  telefone: string;
  career_moment: string;
  income_range: string;
  work_model: string;
  has_pj: string;
  biggest_difficulty: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

const DEMO_MODE_KEY = 'COLE_SUA_CHAVE_PUBLICA_ANON_DO_SUPABASE_AQUI';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient | null = null;
  private isDemoMode = false;

  // Your Supabase credentials
  private supabaseUrl = 'https://sjcdflpymexwimaglcmv.supabase.co';

  // =================================================================================
  // AÇÃO OPCIONAL: Configure sua Chave de API do Supabase para salvar dados
  // =================================================================================
  // A aplicação funciona em modo de demonstração. Para salvar os leads de verdade,
  // siga estes passos:
  // 1. Acesse seu painel do Supabase.
  // 2. Vá para as Configurações do Projeto > API.
  // 3. Na seção "Project API keys", copie a chave "public" / "anon".
  // 4. Cole a chave copiada abaixo, substituindo a string inteira.
  // =================================================================================
  private supabaseKey = DEMO_MODE_KEY; // <-- SUBSTITUA ESTA CHAVE PARA ATIVAR O MODO REAL

  constructor() {
    if (this.supabaseKey === DEMO_MODE_KEY || this.supabaseKey.length < 50) {
       this.isDemoMode = true;
       console.warn(
        'MODO DE DEMONSTRAÇÃO ATIVADO: O formulário irá simular o envio. ' +
        'Para salvar os dados no Supabase, configure sua `supabaseKey` no arquivo `src/services/supabase.service.ts`.'
       );
    } else {
       this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
    }
  }

  async addLead(leadData: Partial<Lead>): Promise<{ error: any }> {
    if (this.isDemoMode || !this.supabase) {
      // Simulate network delay in demo mode for a better user experience
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Simulate a successful submission
      return { error: null };
    }

    // With form controls and interface now using snake_case,
    // we can pass the data object directly.
    const { error } = await this.supabase
      .from('leads')
      .insert([leadData]);

    return { error };
  }
}
