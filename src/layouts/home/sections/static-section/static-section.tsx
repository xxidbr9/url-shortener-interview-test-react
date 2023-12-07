import { IconConstumizeableSvg, IconRecognitionSvg, IconRecordsSvg } from '@/assets/svg/icon';
import { Card } from '@/components/ui';
import { cn } from '@/utils/cn';
import React, { ReactNode } from 'react';

const infos: { icon?: ReactNode; title: string; description: string }[] = [
  {
    icon: <IconRecognitionSvg />,
    title: 'Brand Recognition',
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    icon: <IconRecordsSvg />,
    title: 'Detailed Records',
    description:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    icon: <IconConstumizeableSvg />,
    title: 'Fully Customizable',
    description:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  },
];

export const StaticSection = () => (
  <section className="w-full lg:pt-[74px] lg:pb-[72px] pt-[52px] pb-[50px]">
    <div className="flex items-center flex-col gap-y-[17px] ">
      <span className="text-center text-[30px] lg:text-[34px] font-semibold text-black">
        Advanced Statistics
      </span>
      <p className="text-center w-[333px] lg:w-[567px] text-gray-500 text-lg font-medium">
        Track how your links are performing across the web with our advanced statistics dashboard.
      </p>
    </div>
    <div className="mt-20 lg:mt-[112px] flex container mx-auto flex-col lg:flex-row px-3 lg:px-0 ">
      {infos.map((info, idx) => (
        <React.Fragment key={`card-${idx}`}>
          <Card
            className={cn(
              'relative flex lg:items-start items-center flex-col pt-[65px] px-9 pb-[34px] gap-y-[21px] w-full lg:w-auto',
              {
                'lg:-mt-9 lg:self-start': idx === 0,
                'lg:mt-9 lg:self-end': idx === infos.length - 1,
                'lg:mt-0 lg:self-center': idx < infos.length - 1 && idx > 0,
              },
            )}
          >
            <div className="absolute w-20 h-20 rounded-full z-10 bg-gray-800 top-0 -mt-[36px] flex items-center justify-center">
              {info.icon}
            </div>
            <span className="text-2xl font-semibold text-gray-900 lg:text-left text-center">
              {info.title}
            </span>
            <p className="text-gray-500 text-sm font-medium w-[288px] lg:text-left text-center">
              {info.description}
            </p>
          </Card>
          {idx < infos.length - 1 && (
          <div className="lg:h-2 bg-[#2DD4BF] self-center lg:w-full h-[84px] w-2" />
          )}
        </React.Fragment>
      ))}
    </div>
  </section>
);
