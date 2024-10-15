'use client';

import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const FormSection: React.FC = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' });

  // Handlers
  const handleDataChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: keyof typeof data
  ) => {
    setData((prevState) => ({ ...prevState, [name]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit -> ', data);
  };

  // Renders
  return (
    <section className="py-28 bg-gray-50">
      <div className="container flex flex-col items-center gap-20">
        <SectionTitle description="We’d love to hear from you" />

        <form
          className="w-full max-w-md flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <div className="grid w-full max-w-md items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              type="name"
              id="name"
              placeholder="Name"
              value={data.name}
              onChange={(e) => handleDataChange(e, 'name')}
            />
          </div>

          <div className="grid w-full max-w-md items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => handleDataChange(e, 'email')}
            />
          </div>

          <div className="grid w-full gap-1.5 max-w-md">
            <Label htmlFor="message">Your message</Label>
            <Textarea
              placeholder="Type your message here."
              id="message"
              value={data.message}
              onChange={(e) => handleDataChange(e, 'message')}
            />
          </div>

          <Button type="submit">Send message</Button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
