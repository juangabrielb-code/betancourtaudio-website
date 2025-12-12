import { ReactNode } from 'react';
import styles from './Section.module.css';

type SectionVariant = 'default' | 'hero';

interface SectionProps {
    children: ReactNode;
    variant?: SectionVariant;
    className?: string;
}

/**
 * Section component para organizar contenido
 * 
 * @example
 * // Hero Section
 * <Section variant="hero">
 *   <h1>Título Principal</h1>
 *   <p>Subtítulo</p>
 * </Section>
 * 
 * // Content Section
 * <Section>
 *   <h2>Servicios</h2>
 *   {content}
 * </Section>
 */
export function Section({
    children,
    variant = 'default',
    className = ''
}: SectionProps) {
    return (
        <section className={`${styles.section} ${styles[variant]} ${className}`}>
            {children}
        </section>
    );
}
