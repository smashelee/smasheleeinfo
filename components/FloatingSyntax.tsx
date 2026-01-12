import React, { useEffect, useState } from 'react';

const SYMBOLS = ['{', '}', ';', '//', '@', '<?>', 'JVM', 'class', 'public', 'private', 'void', 'int', 'String', 'new', 'this', 'super', 'extends', 'implements', 'import', 'package', 'try', 'catch', 'finally', 'throw', 'throws', 'null', 'true', 'false', '0x1', '->', '::', '&&', '||', '++', '--', '==', '!=', '>=', '<=', '+=', '-=', '*=', '/='];

export const FloatingSyntax: React.FC = () => {
  const [items, setItems] = useState<Array<{ id: number; left: number; duration: number; symbol: string; delay: number; size: number }>>([]);

  useEffect(() => {
    const newItems = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * -20,
      symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      size: 14 + Math.random() * 14
    }));
    setItems(newItems);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute text-saile-accent/30 font-mono font-bold select-none animate-float"
          style={{
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {item.symbol}
        </div>
      ))}
    </div>
  );
};