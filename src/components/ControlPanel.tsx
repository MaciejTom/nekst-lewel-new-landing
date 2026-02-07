'use client';

import { useState } from 'react';
import { headingFonts, bodyFonts } from '@/lib/config';
import { useTheme } from '@/hooks/useTheme';
import { ChevronDown } from '@/components/ui';

export function ControlPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'heading' | 'body'>('heading');
  const { theme, setHeadingFont, setBodyFont, setHeadingWeight, mounted } = useTheme();

  if (!mounted) return null;

  const weights = [400, 500, 600, 700, 800, 900];

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-secondary text-primary px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg hover:opacity-90 transition-opacity"
      >
        Panel
        <ChevronDown
          size={16}
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="absolute bottom-12 right-0 w-80 bg-secondary text-primary rounded-lg shadow-2xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-primary/20">
            <button
              onClick={() => setActiveTab('heading')}
              className={`flex-1 px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'heading' ? 'bg-primary text-secondary' : 'hover:bg-primary/10'
              }`}
            >
              Nagłówki
            </button>
            <button
              onClick={() => setActiveTab('body')}
              className={`flex-1 px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'body' ? 'bg-primary text-secondary' : 'hover:bg-primary/10'
              }`}
            >
              Body
            </button>
          </div>

          <div className="p-4">
            {/* Current font display */}
            <div className="mb-4 text-center">
              <span className="text-xs uppercase tracking-wider opacity-60">Aktualna czcionka:</span>
              <p className="font-bold text-lg">
                {activeTab === 'heading' ? theme.headingFont : theme.bodyFont}
              </p>
            </div>

            {/* Font grid */}
            <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto mb-4">
              {(activeTab === 'heading' ? headingFonts : bodyFonts).map((font) => (
                <button
                  key={font.name}
                  onClick={() => {
                    if (activeTab === 'heading') {
                      setHeadingFont(font.name);
                    } else {
                      setBodyFont(font.name);
                    }
                  }}
                  className={`px-3 py-2 text-xs font-bold uppercase rounded transition-colors ${
                    (activeTab === 'heading' ? theme.headingFont : theme.bodyFont) === font.name
                      ? 'bg-primary text-secondary'
                      : 'bg-primary/10 hover:bg-primary/20'
                  }`}
                  style={{ fontFamily: font.name }}
                >
                  {font.label}
                </button>
              ))}
            </div>

            {/* Weight selector (heading only) */}
            {activeTab === 'heading' && (
              <div>
                <span className="text-xs uppercase tracking-wider opacity-60 block mb-2">
                  Grubość:
                </span>
                <div className="flex gap-1">
                  {weights.map((weight) => (
                    <button
                      key={weight}
                      onClick={() => setHeadingWeight(weight)}
                      className={`flex-1 px-2 py-1 text-xs font-bold rounded transition-colors ${
                        theme.headingWeight === weight
                          ? 'bg-primary text-secondary'
                          : 'bg-primary/10 hover:bg-primary/20'
                      }`}
                    >
                      {weight}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
