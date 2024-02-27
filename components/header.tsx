'use client'

import React, { useEffect } from 'react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import styles from '../styles/header.module.scss'
import dynamic from 'next/dynamic'
import { useWallet } from '@solana/wallet-adapter-react'
import { signOut } from 'next-auth/react'

export function Header() {
  const wallet = useWallet()
  const WalletMultiButtonDynamic = dynamic(
    async () =>
      (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
  )

  useEffect(() => {
    if (wallet.disconnecting) {
      signOut({ callbackUrl: '/' })
    }
  }, [wallet])

  return (
    <header
      className={`${styles['c-header']} sticky top-0 z-50 justify-between w-full h-16 shrink-0 bg-transparent grid lg:grid-cols-[250px_1fr] xl:grid-cols-[300px_1fr]`}
    >
      <div className="flex items-start bg-[#121212]" />
      <div className="flex items-center justify-between space-x-2 px-4">
        <Image alt="ocada" src="/OCADA.svg" width={72} height={72} />
        <div className="flex items-center gap-4">
          <a
            target="_blank"
            href="/"
            rel="noopener noreferrer"
            className={
              (cn(buttonVariants({ variant: 'outline' })), 'hidden lg:flex')
            }
          >
            <span className="ml-2 text-type-600 text-sm text-opacity-80">
              Plugins
            </span>
          </a>
          <WalletMultiButtonDynamic
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'bg-type-alt-500 text-black hover:bg-type-alt-700 hover:text-black'
            )}
          />
          {wallet.publicKey && <></>}
        </div>
      </div>
    </header>
  )
}
