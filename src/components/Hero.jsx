import HeroContent from "./HeroContent";
import HeroImg from "./HeroImg";
export default function Hero() {
  return (
    <div>
      {/* Begin Hero  */}
      <section className="pb-[114px] pt-20 md:mt-[100px]">
        <div className="container mx-auto lg:px-20">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="flex justify-center md:order-2">
              <HeroImg />
            </div>
            <div>
              <HeroContent />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero  */}
    </div>
  );
}
