import { RiArrowRightLine, RiArrowLeftLine, RiArrowRightUpLongLine } from "@remixicon/react";
import { useState, useId, useEffect, useRef } from "react";

const Slide = ({ slide }) => {
  const { src, title, text, link } = slide;

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 w-full max-w-[600px] mx-auto flex flex-col transform hover:-translate-y-1 min-h-[400px]">
      {/* Imagem maior */}
      <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 opacity-40"
          loading="lazy"
        />
        <h2
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            text-3xl font-bold text-gray-900 dark:text-white pointer-events-none select-none
            drop-shadow-lg whitespace-nowrap max-w-[90%] overflow-ellipsis"
          title={title}
        >
          {title}
        </h2>
      </div>

      {/* Texto mais compacto */}
      <div className="p-4 flex-1 flex items-start">
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-4">{text}</p>
      </div>

      {/* Botão */}
      <div className="mt-auto flex justify-center p-4">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-[#1EBEF2] to-[#18a6d4] text-white text-sm rounded-lg hover:opacity-90 transition"
        >
          Ver Projeto
          <RiArrowRightUpLongLine className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const id = useId();
  const autoplayRef = useRef(null);

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1 >= slides.length ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1 >= slides.length ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(autoplayRef.current);
  }, [isPaused, slides.length]);

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full max-w-[700px] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="transition-all duration-700 ease-in-out w-full opacity-100 scale-100"
        key={current}
      >
        <Slide slide={slides[current]} />
      </div>

      {/* Indicadores */}
      <div className="flex mt-5 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-[#1EBEF2] scale-110" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* Botões de navegação */}
      <div className="flex justify-center space-x-6 mt-6 pointer-events-auto">
        <button
          className="bg-white/80 backdrop-blur-md hover:bg-white text-[#1EBEF2] p-3 rounded-full shadow-lg transition transform hover:scale-105"
          onClick={handlePreviousClick}
        >
          <RiArrowLeftLine size={22} />
        </button>
        <button
          className="bg-white/80 backdrop-blur-md hover:bg-white text-[#1EBEF2] p-3 rounded-full shadow-lg transition transform hover:scale-105"
          onClick={handleNextClick}
        >
          <RiArrowRightLine size={22} />
        </button>
      </div>
    </div>
  );
}
