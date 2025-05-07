declare module 'sonner' {
  import { ReactNode } from 'react'

  export interface ToasterProps {
    className?: string
    theme?: 'light' | 'dark' | 'system'
    toastOptions?: {
      classNames?: {
        toast?: string
        description?: string
        actionButton?: string
        cancelButton?: string
      }
    }
  }

  export const Toaster: React.FC<ToasterProps>

  export const toast: {
    (message: string | ReactNode, options?: any): void
    success: (message: string | ReactNode, options?: any) => void
    error: (message: string | ReactNode, options?: any) => void
    warning: (message: string | ReactNode, options?: any) => void
    info: (message: string | ReactNode, options?: any) => void
    loading: (message: string | ReactNode, options?: any) => void
    custom: (message: string | ReactNode, options?: any) => void
    promise: <T>(promise: Promise<T>, options?: any) => Promise<T>
    dismiss: (id?: string) => void
    Toaster: React.FC<ToasterProps>
  }
} 