import { bio } from '@/content/personal/bio';
import { skillGroups } from '@/content/skills';
import Link from 'next/link';
import { Download } from 'lucide-react';

export const metadata = {
  title: 'About',
  description: bio.shortBio,
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-section">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-display-md mb-8 text-center font-bold">
          About <span className="gradient-text">Me</span>
        </h1>

        <div className="prose prose-invert mx-auto mb-12 max-w-none">
          {bio.longBio.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-muted-foreground mb-4">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          {skillGroups.map((group) => (
            <div key={group.category} className="mb-8">
              <h3 className="text-lg font-semibold mb-4">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="px-3 py-1 rounded-full bg-card border border-border text-sm"
                    style={{ borderColor: skill.color + '40' }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Connect</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href={bio.resume.downloadUrl}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}