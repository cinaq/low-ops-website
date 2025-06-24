'use client';

import packagesImage from '@/assets/packages.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import email from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';
import Image from 'next/image';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { ReCAPTCHA } from 'react-google-recaptcha';

const initialData = {
  name: '',
  email: '',
  message: '',
  username: '',
  gender: '',
};

const FormSection: React.FC = () => {
  // States
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialData);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  // Hooks
  const { toast } = useToast();

  // Effects
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY) {
      console.warn('public key is undefined');
      return;
    }
    email.init(process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY);
  }, []);

  // Handlers
  const handleDataChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: keyof typeof data
  ) => {
    setData((prevState) => ({ ...prevState, [name]: event.target.value }));
  };

  const handleResponse = (status: number) => {
    if (status > 200) {
      toast({
        description: `Send message failed, please try again later.`,
        variant: 'destructive',
      });
      return;
    }

    toast({
      description: `We received your message. We will contact you soon.`,
      variant: 'default',
    });
    setData(initialData);
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      console.log(`serviceId or templateId is undefined`);
      return;
    }

    if (!!data.username || !!data.gender) {
      console.log('Unvisible fields are not empty');
      return;
    }

    setLoading(true);

    try {
      const formData = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        'g-recaptcha-response': recaptchaToken,
      };

      const res = await email.send(serviceId, templateId, formData);

      handleResponse(res.status);
    } catch (error: unknown) {
      if ((error as { status?: number })?.status) {
        handleResponse((error as { status: number }).status);
      }
      console.error(error);
    }

    setLoading(false);
  };

  // Renders
  return (
    <section
      className="py-20 md:py-28 bg-secondary relative overflow-hidden"
      id="contact-us"
    >
      <div className="container flex flex-col lg:flex-row gap-12 md:gap-20">
        <div className="w-full flex flex-col lg:w-1/2 lg:items-start items-center gap-10">
          <p className="text-center lg:text-left text-3xl md:text-4xl font-semibold leading-[32px] md:leading-[44px]">
            We’d love to hear from you
          </p>

          <form
            className="w-full max-w-md flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
            <div className="grid w-full max-w-md items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                required
                placeholder="Your name"
                value={data.name}
                onChange={(e) => handleDataChange(e, 'name')}
                disabled={loading}
              />
            </div>

            <div className="grid w-full max-w-md items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                required
                placeholder="Your email"
                value={data.email}
                onChange={(e) => handleDataChange(e, 'email')}
                disabled={loading}
              />
            </div>

            <div className="grid w-full gap-1.5 max-w-md">
              <Label htmlFor="message">Message</Label>
              <Textarea
                placeholder="Type your message here"
                id="message"
                required
                value={data.message}
                onChange={(e) => handleDataChange(e, 'message')}
                disabled={loading}
              />
            </div>

            <div style={{ display: 'none' }}>
              <label>
                <input
                  type="text"
                  value={data.username}
                  onChange={(e) => handleDataChange(e, 'username')}
                />
              </label>
              <label>
                <input
                  type="text"
                  value={data.gender}
                  onChange={(e) => handleDataChange(e, 'gender')}
                />
              </label>
            </div>

            <div className="flex items-center justify-center">
              {!!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
                <ReCAPTCHA
                  size="normal"
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={handleRecaptchaChange}
                />
              )}
            </div>

            <Button
              type="submit"
              aria-label="Send message"
              disabled={loading || !recaptchaToken}
            >
              <Loader
                className={cn('mr-2 h-4 w-4 animate-spin hidden', {
                  block: loading,
                })}
              />
              Send message
            </Button>
          </form>
        </div>

        <div className="relative justify-end hidden lg:flex w-1/2">
          <div className="absolute left-0 xl:left-[-100px] -top-4">
            <motion.div
              initial={{ opacity: 0, y: 100, x: 100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              className="flex flex-col items-center gap-4 border-6 border-black rounded-xl relative overflow-hidden w-[1000px] h-[720px]"
            >
              <Image
                src={packagesImage}
                alt="low-ops-packages"
                quality={80}
                sizes="auto"
                fill
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
