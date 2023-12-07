import boostDesktop from '@/assets/svg/misc/boost_bg_desktop.svg';
import boostMobile from '@/assets/svg/misc/boost_bg_mobile.svg';
import { Button } from '@/components/ui';

export const BoostSection = () => (
  <section className="relative w-full h-[250px] flex justify-center items-center overflow-hidden bg-[#581C87]">
    <div className="absolute h-full w-full z-10">
      <div
        className="w-full h-full bg-nos-repeat bg-cover lg:block hidden"
        style={{ backgroundImage: `url(${boostDesktop})` }}
      />
      <div
        className="w-full h-full bg-nos-repeat bg-cover lg:hidden block"
        style={{ backgroundImage: `url(${boostMobile})` }}
      />
    </div>
    <div className="relative z-10 flex flex-col gap-y-5">
      <span className="text-white lg:text-[34px] text-[28px] font-semibold">
        Boost your links today
      </span>
      <Button>Get Started</Button>
    </div>
  </section>
);
