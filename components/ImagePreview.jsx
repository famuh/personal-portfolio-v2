"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function ImagePreview({ photos }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <li
            key={i}
            className="bg-black/20 rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition"
            onClick={() => setSelected(photo)}
          >
            <Image
              src={photo}
              alt={`design-${i}`}
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
          </li>
        ))}
      </ul>

      {/* FULL SCREEN PREVIEW */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogHeader>
        <DialogTitle>Ini judul dialog</DialogTitle>

        </DialogHeader>
        <DialogContent className="p-0 bg-transparent border-none shadow-none max-w-none">
          <div className="fixed inset-0 bg-black flex items-center justify-center">
            <div className="relative w-screen h-screen">
              <Image
                src={selected ?? ""}
                alt="preview"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
