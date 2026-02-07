import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('pl-PL').format(price);
}

export function formatPhoneForDisplay(phone: string): string {
  // Format: 515 787 375
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('48')) {
    const number = cleaned.slice(2);
    return `${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6)}`;
  }
  return phone;
}
