'use client';
import { HaloWordmark } from '@/components/ui/HaloWordmark';




export function TopBar() {
 

  return (
    <div className="flex items-center justify-between px-10 pt-7 max-w-[1600px] mx-auto">
      <div className="flex items-center gap-4">
        <HaloWordmark size={20} />
        <span className="text-muted-2 text-[13px]">·</span>
        <span className="text-muted text-[13px]">Subscription checkout</span>
      </div>

    
    </div>
  );
}
