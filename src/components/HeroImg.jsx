import frame from "../assets/frame.png";
export default function HeroImg() {
  return (
    <>
      <img
        className="max-md:w-full"
        src={frame}
        width="326"
        height="290"
        alt="frame"
      />
    </>
  );
}
