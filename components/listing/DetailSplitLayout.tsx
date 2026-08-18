import { ReactNode } from 'react';

interface DetailSplitLayoutProps {
  header: ReactNode;
  left: ReactNode;
  right: ReactNode;
  footer?: ReactNode;
}

export default function DetailSplitLayout({
  header,
  left,
  right,
  footer,
}: DetailSplitLayoutProps) {
  return (
    <>
      {header}

      <section className="bg-surface-muted">
        <div className="section-container grid grid-cols-1 gap-6 py-5 pb-8 md:gap-8 md:py-8 lg:grid-cols-3 lg:items-start">
          <div className="lg:col-span-2">
            <div
              className="scrollbar-hide space-y-6 overflow-y-auto overscroll-contain lg:max-h-[calc(100svh-6.25rem-3rem)] lg:pr-2"
            >
              {left}
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-[7.5rem] lg:self-start">
            {right}
          </aside>
        </div>
      </section>

      {footer}
    </>
  );
}
