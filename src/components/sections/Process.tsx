import { processSteps } from '@/lib/config';
import { Section, SectionHeader } from '@/components/ui';

export function Process() {
  return (
    <Section id="proces">
      <SectionHeader
        label="02 — Jak to działa"
        title="Prosty\nProces"
      />

      <div className="flex justify-center">
        <div className="flex flex-col gap-16 text-left max-w-2xl w-full">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 items-start group"
            >
              <span className="text-3d text-headline">{step.number}</span>
              <div>
                <h3 className="text-3d text-title uppercase mb-4 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-body-lg font-bold uppercase opacity-60">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
