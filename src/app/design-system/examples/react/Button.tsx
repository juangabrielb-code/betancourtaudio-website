import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

/**
 * Button component siguiendo el Sistema de Diseño Japandi
 * 
 * @example
 * <Button variant="primary">Iniciar Proyecto</Button>
 * <Button variant="secondary">Ver Más</Button>
 * <Button variant="ghost">Enlace</Button>
 */
export function Button({ 
  variant = 'primary', 
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button 
      className={`${styles.btn} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
