import type { SkillGroup } from '@/content/cv';
import { Pill } from './Pill';

export function Skills({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="space-y-6">
      {groups.map((group) => (
        <div key={group.category}>
          <h3 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {group.skills.map((skill) => (
              <Pill key={skill}>{skill}</Pill>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
