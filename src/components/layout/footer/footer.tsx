import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { siteConfig } from '@/config/site';

const socialIcons = [
  { icon: Github, href: siteConfig.links.github, label: 'GitHub' },
  { icon: Linkedin, href: siteConfig.links.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: siteConfig.links.twitter, label: 'Twitter' },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link href="/" className="text-lg font-bold gradient-text">
              Nexus
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              &copy; {new Date().getFullYear()} {siteConfig.creator}. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
