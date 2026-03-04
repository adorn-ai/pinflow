import { useEffect, useRef } from "react";

const pinterestImages = [
  "https://images.unsplash.com/photo-1542919901-ce575ee6e6e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcHJvZHVjdCUyMGZsYXQlMjBsYXl8ZW58MXx8fHwxNzcyMzg5MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1617325279446-f0831b1d369d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaG9tZSUyMGRlY29yfGVufDF8fHx8MTc3MjM0OTA1MHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1708987379841-2badb0d3a95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMHJlY2lwZXxlbnwxfHx8fDE3NzIzODAwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1629380106682-6736d2c327ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBza2luY2FyZSUyMHByb2R1Y3RzfGVufDF8fHx8MTc3MjM0ODIxNnww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1682687981715-fa2ff72bd87d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMHNjZW5lcnl8ZW58MXx8fHwxNzcyMzg5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1757625487036-1f9ad7f70289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdCUyMGRpeSUyMHByb2plY3R8ZW58MXx8fHwxNzcyMzg5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1518310383802-640c2de311b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGV4ZXJjaXNlfGVufDF8fHx8MTc3MjMzMjg1NXww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1522057236900-1281407e19f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwaW5zcGlyYXRpb24lMjBmbG93ZXJzfGVufDF8fHx8MTc3MjM4OTIwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
];

interface PinCardProps {
  image: string;
  height: number;
}

function PinCard({ image, height }: PinCardProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden bg-white shadow-lg mb-4"
      style={{ height: `${height}px` }}
    >
      <img
        src={image}
        alt="Pinterest pin"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export function PinterestFeedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate random heights for masonry effect
  const getRandomHeight = () => Math.floor(Math.random() * 150) + 200;

  // Create multiple columns of pins
  const columns = [
    pinterestImages.map((img, i) => ({ img, height: getRandomHeight(), id: `col1-${i}` })),
    pinterestImages.map((img, i) => ({ img, height: getRandomHeight(), id: `col2-${i}` })),
    pinterestImages.map((img, i) => ({ img, height: getRandomHeight(), id: `col3-${i}` })),
    pinterestImages.map((img, i) => ({ img, height: getRandomHeight(), id: `col4-${i}` })),
  ];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden opacity-[0.15] pointer-events-none"
    >
      <div className="flex gap-4 h-full">
        {columns.map((column, colIndex) => (
          <div
            key={colIndex}
            className="flex-shrink-0 w-[280px] animate-scroll-up"
            style={{
              animationDelay: `${colIndex * -5}s`,
              animationDuration: `${40 + colIndex * 5}s`,
            }}
          >
            <div className="flex flex-col">
              {/* Duplicate for seamless loop */}
              {[...column, ...column].map((pin, idx) => (
                <PinCard key={`${pin.id}-${idx}`} image={pin.img} height={pin.height} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}