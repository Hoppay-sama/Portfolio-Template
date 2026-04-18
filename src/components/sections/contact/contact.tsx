'use client';

import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';
import { socialLinks } from '@/content/personal/social';
import { bio } from '@/content/personal/bio';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

gsap.registerPlugin(ScrollTrigger);

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const iconMap: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useGSAP(() => {
    gsap.from('.contact-item', {
      scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
    });
  }, { scope: containerRef });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        alert('Message sent successfully!');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return (
    <section ref={containerRef} id="contact" className="py-section relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display-md font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="contact-item">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input {...register('name')} id="name" placeholder="Your name" />
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input {...register('email')} id="email" type="email" placeholder="your@email.com" />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input {...register('subject')} id="subject" placeholder="What's this about?" />
                {errors.subject && (
                  <p className="mt-1 text-sm text-destructive">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  placeholder="Your message..."
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                loading={isSubmitting}
                leftIcon={<Send className="w-4 h-4" />}
                className="w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div className="contact-item">
            <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
            <div className="space-y-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon] ?? Mail;
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium">{link.platform}</div>
                      <div className="text-sm text-muted-foreground">{link.username}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 p-6 rounded-lg bg-muted/50 border border-border">
              <h4 className="font-medium mb-2">Availability</h4>
              <p className="text-sm text-muted-foreground">
                {bio.available
                  ? "I'm currently open to new opportunities and freelance projects. Response time is typically within 24 hours."
                  : "I'm not currently available for new projects, but feel free to reach out for future collaborations."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
