import React, { useState } from 'react';
import {
  Button, Card, Input, Loading,
} from '@/components/ui';
import bgMobile from '@/assets/svg/misc/new_link_bg_mobile.svg';
import bgDesktop from '@/assets/svg/misc/new_link_bg_desktop.svg';
import { createLinkNetwork, getListLinkNetwork } from '@/network/shortner';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';

type CardLinkProps = {
  link: {
    url: string;
    shortUrl: string;
  };
};
const CardLink = ({ link: { shortUrl, url } }: CardLinkProps) => {
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopyButtonText('Copied');
      toast.success('Link copied!');
      setTimeout(() => {
        setCopyButtonText('Copy');
      }, 2000);
    } catch (error) {
      toast.error('Failed to copy link. Please try again.');
      console.error('Error copying link:', error);
    }
  };

  return (
    <Card className="lg:pl-9 lg:pr-[26px] lg:py-3 py-3 flex justify-between lg:items-center items-start w-full flex-col lg:flex-row">
      <span className="lg:text-xl font-medium text-left px-5 lg:px-0">{url}</span>
      <hr className="mt-3 mb-[14px] block lg:hidden border-t-[#E5E7EB] w-full" />
      <div className="flex lg:items-center text-left flex-col lg:flex-row gap-y-3 w-full lg:w-auto px-5 lg:px-0">
        <span className="lg:text-right text-left text-teal-500 font-medium lg:text-[22px] lg:mr-[77px] 18px">
          {shortUrl}
        </span>
        <Button onClick={handleCopy} variant="square" className="lg:w-[177px]">
          <span className="">{copyButtonText}</span>
        </Button>
      </div>
    </Card>
  );
};

type FormValue = {
  url: string;
};

const schema = yup
  .object({
    url: yup
      .string()
      .required('URL is required')
      .matches(
        /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
        'Invalid URL format. Please enter a valid URL.',
      ),
  })
  .required();

export const LinkSection = () => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: yupResolver(schema),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('url', e.target.value);
    clearErrors('url');
  };

  const links = useQuery({ queryKey: ['links'], queryFn: getListLinkNetwork });

  const mutation = useMutation({
    mutationFn: createLinkNetwork,
    mutationKey: ['links'],
    onSuccess: () => {
      reset({
        url: '',
      });
      links.refetch();
      toast.success('Successfully create new link!');
    },
    onError: () => {
      toast.error('Error when create new link!');
    },
  });

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    mutation.mutateAsync(data.url);
  };

  return (
    <section className="w-full px-3 lg:px-0">
      <div className="bg-[#581C87] container mx-auto relative  rounded-[10px] overflow-hidden">
        <div className="absolute h-full w-full z-10">
          <div
            className="w-full h-full bg-no-repeat bg-cover lg:block hidden"
            style={{ backgroundImage: `url(${bgDesktop})` }}
          />
          <div
            className="w-full h-full bg-no-repeat bg-cover lg:hidden block"
            style={{ backgroundImage: `url(${bgMobile})` }}
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative z-10 w-full flex lg:flex-row lg:gap-x-5 flex-col gap-y-3 lg:py-[70px] lg:pl-[38px] lg:pr-[26px] p-5"
        >
          <Input
            {...register('url')}
            className="flex-1"
            wrapperClassName="w-full"
            placeholder="Enter your link here"
            error={errors.url?.message}
            onChange={handleInputChange}
            value={getValues('url')}
            disabled={mutation.isPending}
          />
          <Button
            variant="square"
            className="lg:w-[177px] self-start w-full"
            type="submit"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? <Loading /> : 'Shorthen'}
          </Button>
        </form>
      </div>
      {links.isLoading && (
        <div className="flex items-center justify-center mt-10">
          <Loading />
        </div>
      )}

      {!!links.data?.data.length && (
        <div className="container mx-auto">
          <div className="lg:mt-10 mt-[30px]">
            <span className="text-lg font-semibold text-gray-400 ml-5 lg:ml-[38px]">
              Your links
            </span>
          </div>
          <div className="mt-4 lg:mt-8 flex flex-col gap-y-3 lg:gap-y-4">
            {links.data.data.map((link) => (
              <CardLink link={{ shortUrl: link.short_url, url: link.url }} key={link.id} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
