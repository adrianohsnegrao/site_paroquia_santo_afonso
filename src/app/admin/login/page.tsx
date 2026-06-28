'use client'

import Image from 'next/image'
import { useFormState, useFormStatus } from 'react-dom'
import { Loader2, Lock } from 'lucide-react'
import { site } from '@/data/site'
import { login } from './actions'
import { Field, Input } from '@/components/admin/ui/Form'

const initialState = { error: null as string | null }

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-4 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-green-dark focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? (
        <>
          <Loader2 size={16} className="animate-spin" /> Entrando...
        </>
      ) : (
        'Entrar'
      )}
    </button>
  )
}

export default function LoginPage() {
  const [state, formAction] = useFormState(login, initialState)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-brand-cream to-brand-cream-light px-4 py-12">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center text-center">
          <span className="grid h-20 w-20 place-items-center overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-brand-green-deep/[0.06]">
            <Image
              src={site.logo.src}
              alt={site.logo.alt}
              width={80}
              height={80}
              className="h-full w-full object-contain p-1"
              priority
            />
          </span>
          <h1 className="mt-5 font-serif text-3xl font-bold text-brand-green-deep">
            Acesso ao Painel
          </h1>
          <p className="mt-1 text-sm text-brand-green-deep/55">{site.fullName}</p>
        </div>

        <form
          action={formAction}
          className="mt-8 space-y-5 rounded-2xl bg-white p-7 shadow-card ring-1 ring-brand-green-deep/[0.06]"
        >
          <Field label="E-mail" htmlFor="email">
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="seu@email.com"
            />
          </Field>

          <Field label="Senha" htmlFor="password">
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="••••••••"
            />
          </Field>

          {state?.error && (
            <div className="rounded-xl bg-red-50 px-4 py-2.5 text-center text-sm text-red-700 ring-1 ring-inset ring-red-600/15">
              {state.error}
            </div>
          )}

          <SubmitButton />
        </form>

        <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-brand-green-deep/45">
          <Lock size={12} />
          Área restrita à administração da paróquia
        </p>
      </div>
    </div>
  )
}
