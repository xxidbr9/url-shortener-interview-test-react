import { IllustrationWorkingSvg } from '@/assets/svg/misc';
import { Button } from '@/components/ui';

export const HeroSection = () => (
  <section className="w-full overflow-hidden">
    <div className="h-auto container px-3 lg:px-0 relative mx-auto flex justify-between w-full flex-col-reverse lg:flex-row">
      <div className="relative z-10 lg:pt-[117px] lg:pb-[102px] pb-[61px] flex flex-col lg:items-start items-center gap-y-7">
        <div className="flex flex-col gap-y-4 lg:w-[485px]">
          <h1 className="lg:text-[62px] lg:leading-[68.8px] text-[42px] font-bold text-center lg:text-left">
            More than just shorter links
          </h1>
          <p className="font-medium text-xl text-gray-500 text-center lg:text-left">
            Build your brand’s recognition and get detailed insights on how your links are
            performing.
          </p>
        </div>
        <Button>Get Started</Button>
      </div>
      <div className="lg:block absolute lg:right-0 lg:-mr-60 lg:top-[29px] top-0 z-0 -ml-16">
        <IllustrationWorkingSvg className="h-[260px] lg:h-auto" />
      </div>
      <div className="w-full h-[260px]" />
    </div>
  </section>
);
