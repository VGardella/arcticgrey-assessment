export function CarouselComponent({text}: {text: string}) {
  return (
    <div className="w-min">
      <div className="flex text-white w-min whitespace-nowrap gap-4">
        <div>&#10039;</div>
        <div>{text}</div>
      </div>
    </div>
  );
}
