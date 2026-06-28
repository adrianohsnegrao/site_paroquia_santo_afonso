'use client';

import { useState } from 'react';
import { submitContact } from './actions';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [telefone, setTelefone] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else if (value.length > 0) {
      value = value.replace(/^(\d{0,2})/, '($1');
    }
    setTelefone(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    const formData = new FormData(e.currentTarget);

    try {
      const response = await submitContact(formData);
      
      if (response.error) {
        setErrorMessage(response.error);
      } else if (response.success) {
        setIsSuccess(true);
      }
    } catch (err) {
      setErrorMessage('Erro de conexão ao enviar a mensagem.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-brand-cream-light/50 border border-brand-green/20 rounded-2xl p-10 text-center flex flex-col items-center">
        <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-4 text-brand-green">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="font-serif text-2xl font-bold text-brand-green-dark mb-2">Mensagem Recebida!</h3>
        <p className="text-gray-600 mb-6">
          Sua mensagem foi enviada com sucesso. Em breve a secretaria da paróquia entrará em contato.
        </p>
        <Button as="button" type="button" onClick={() => setIsSuccess(false)} variant="outline">
          Enviar Nova Mensagem
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 rounded-2xl shadow-card border border-gray-100 space-y-6">
      {errorMessage && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm flex items-start gap-3">
          <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
            Nome Completo <span className="text-brand-gold-dark">*</span>
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            placeholder="Seu nome"
            className="w-full border border-gray-200 rounded-lg shadow-sm px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition bg-gray-50/50"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail <span className="text-brand-gold-dark">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="seu@email.com"
            className="w-full border border-gray-200 rounded-lg shadow-sm px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition bg-gray-50/50"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefone / WhatsApp
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={telefone}
            onChange={handlePhoneChange}
            placeholder="(11) 90000-0000"
            className="w-full border border-gray-200 rounded-lg shadow-sm px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition bg-gray-50/50"
          />
        </div>
        <div>
          <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">
            Assunto <span className="text-brand-gold-dark">*</span>
          </label>
          <input
            type="text"
            id="assunto"
            name="assunto"
            required
            placeholder="Sobre o que deseja falar?"
            className="w-full border border-gray-200 rounded-lg shadow-sm px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition bg-gray-50/50"
          />
        </div>
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
          Sua Mensagem <span className="text-brand-gold-dark">*</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          placeholder="Escreva sua mensagem aqui..."
          className="w-full border border-gray-200 rounded-lg shadow-sm px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition resize-none bg-gray-50/50"
        ></textarea>
      </div>

      <div className="pt-2">
        <Button as="button" type="submit" variant="primary" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Enviando...
            </span>
          ) : (
            'Enviar Mensagem'
          )}
        </Button>
      </div>
    </form>
  );
}
