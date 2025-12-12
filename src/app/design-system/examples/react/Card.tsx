import { ReactNode } from 'react';
import Image from 'next/image';
import styles from './Card.module.css';

interface CardProps {
    children: ReactNode;
    className?: string;
}

interface CardImageProps {
    src: string;
    alt: string;
}

interface CardContentProps {
    children: ReactNode;
}

interface CardTitleProps {
    children: ReactNode;
}

interface CardDescriptionProps {
    children: ReactNode;
}

/**
 * Card component con patrón de composición
 * 
 * @example
 * <Card>
 *   <Card.Image src="/project.jpg" alt="Proyecto" />
 *   <Card.Content>
 *     <Card.Title>Nombre del Proyecto</Card.Title>
 *     <Card.Description>Descripción breve...</Card.Description>
 *   </Card.Content>
 * </Card>
 */
export function Card({ children, className = '' }: CardProps) {
    return (
        <article className={`${styles.card} ${className}`}>
            {children}
        </article>
    );
}

// Subcomponentes usando patrón de composición
Card.Image = function CardImage({ src, alt }: CardImageProps) {
    return (
        <Image
            src={src}
            alt={alt}
            className={styles.cardImage}
            width={400}
            height={300}
        />
    );
};

Card.Content = function CardContent({ children }: CardContentProps) {
    return <div className={styles.cardContent}>{children}</div>;
};

Card.Title = function CardTitle({ children }: CardTitleProps) {
    return <h3 className={styles.cardTitle}>{children}</h3>;
};

Card.Description = function CardDescription({ children }: CardDescriptionProps) {
    return <p className={styles.cardDescription}>{children}</p>;
};
