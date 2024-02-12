import * as AdaptiveCards from 'adaptivecards';
import { useEffect, useRef } from 'react';

interface AdaptiveCardMessageProps {
    content: string;
}

const AdaptiveCardMessage: React.FC<AdaptiveCardMessageProps> = ({ content }: AdaptiveCardMessageProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cardRef.current) {
            const adaptiveCard = new AdaptiveCards.AdaptiveCard();
            adaptiveCard.parse(JSON.parse(content));
            adaptiveCard.render(cardRef.current);
        }
    }, [content]);

    return <div ref={cardRef} />;
};

export default AdaptiveCardMessage;
