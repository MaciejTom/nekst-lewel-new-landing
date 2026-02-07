import { processSteps } from '@/lib/config';

export function Process() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-4 md:px-12 py-32 w-full max-w-[1600px] mx-auto"
      id="proces"
    >
      <div className="mb-16">
        <span
          className="block text-xs font-bold uppercase tracking-[0.2em] mb-6 text-muted"
          aria-hidden="true"
        >
          02 — Jak to działa
        </span>
        <h2 className="text-3d text-headline uppercase">
          Prosty
          <br />
          Proces
        </h2>
      </div>

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
                <p className="text-body-lg font-bold uppercase text-secondary">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
