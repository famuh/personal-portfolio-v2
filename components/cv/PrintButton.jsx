"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrintButton() {
  return (
    <Button type="button" size="sm" variant="outline" onClick={() => window.print()}>
      <Printer aria-hidden="true" />
      Print
    </Button>
  );
}
