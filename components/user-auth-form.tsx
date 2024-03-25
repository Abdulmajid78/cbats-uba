'use client'

import * as React from 'react'
import { useSearchParams } from 'next/navigation'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BiLogoGoogle } from 'react-icons/bi'
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  page?: string
}

export function UserAuthFormerAuthForm({ className, page, ...props }: UserAuthFormProps) {
  return (
    <div className={cn('grid gap-3', className)} {...props}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-3">
          <div className="grid gap-2">
            {page === 'register' && (
              <Input
                id="fullname"
                placeholder="Full name"
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
              />
            )}
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
            <Input
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
            />
          </div>
          <button className={cn(buttonVariants())}>
            {page === 'register' ? 'Create an Account' : 'Sign In with Email'}
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">OR</span>
        </div>
      </div>
      <button
        type="button"
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'items-center relative'
        )}
      >
        <span className="text-xl absolute left-3">
          <BiLogoGoogle />
        </span>
        Continue with Google
      </button>
      <button
        type="button"
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'items-center relative'
        )}
      >
        <span className="text-xl absolute left-3">
          <AiFillFacebook />
        </span>
        Continue with Facebook
      </button>
      <button
        type="button"
        className={cn(buttonVariants({ variant: 'outline' }), 'relative')}
      >
        <span className="text-xl absolute left-3">
          <AiFillGithub />
        </span>
        <p className="text-center">Continue with Github</p>
      </button>
    </div>
  )
}
