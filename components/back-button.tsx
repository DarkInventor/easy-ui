'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function BackButton() {
  const router = useRouter();

  return (
    <Button variant="outline" size="sm" onClick={() => router.back()} className='rounded-[1rem] hidden lg:block bg-gray-100 dark:bg-black dark:hover:opacity-80 hover:opacity-60 '>      
      ← Back
    </Button>
  );
}