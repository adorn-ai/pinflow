import { Bookmark } from "lucide-react";

const mockPins = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1542919901-ce575ee6e6e7?w=400&h=600&fit=crop",
    title: "Fashion Styling",
    height: 320,
    delay: 0,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1617325279446-f0831b1d369d?w=400&h=600&fit=crop",
    title: "Home Decor",
    height: 280,
    delay: 1,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1708987379841-2badb0d3a95a?w=400&h=600&fit=crop",
    title: "Healthy Recipes",
    height: 350,
    delay: 2,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1629380106682-6736d2c327ed?w=400&h=600&fit=crop",
    title: "Beauty & Skincare",
    height: 300,
    delay: 0.5,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1682687981715-fa2ff72bd87d?w=400&h=600&fit=crop",
    title: "Travel Inspiration",
    height: 290,
    delay: 1.5,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&h=600&fit=crop",
    title: "Fitness Goals",
    height: 340,
    delay: 2.5,
  },
];

export function PinterestFeedMockup() {
  // Split pins into 3 columns
  const column1 = mockPins.filter((_, i) => i % 3 === 0);
  const column2 = mockPins.filter((_, i) => i % 3 === 1);
  const column3 = mockPins.filter((_, i) => i % 3 === 2);

  return (
    <div className="relative w-full h-full">
      {/* Fade gradients */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, #FAF9F7 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute left-0 right-0 bottom-0 h-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #FAF9F7 0%, transparent 100%)",
        }}
      />

      {/* Pinterest Grid */}
      <div className="flex gap-4 justify-start">
        {[column1, column2, column3].map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4 w-[180px] overflow-hidden">
            <div 
              className="flex flex-col gap-4 animate-scroll-up"
              style={{
                animationDuration: `${30 + colIndex * 5}s`,
                animationDelay: `${colIndex * -10}s`,
              }}
            >
              {/* Render pins twice for infinite scroll */}
              {[...column, ...column].map((pin, pinIndex) => (
                <div
                  key={`${pin.id}-${pinIndex}`}
                  className="relative rounded-2xl overflow-hidden bg-white shadow-lg group cursor-pointer animate-float"
                  style={{
                    height: `${pin.height}px`,
                    animationDelay: `${pin.delay}s`,
                  }}
                >
                  <img
                    src={pin.image}
                    alt={pin.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Pinterest Save Button */}
                  <button
                    className="absolute top-3 right-3 bg-[#E60023] text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                    aria-label="Save pin"
                  >
                    <Bookmark className="w-4 h-4 fill-white" />
                  </button>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-medium">{pin.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}