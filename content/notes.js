// Short write-ups about decisions behind the work. Each note is plain data:
// `body` is a list of blocks ({ type: "p" | "h2" | "list", ... }) rendered by
// app/notes/[slug]/page.jsx. Facts come from the GEMA Plantation and OneTap-SPB
// project notes.

export const notes = [
  {
    slug: "offline-first-nfc",
    title: "Offline first, with NFC cards as the network",
    summary:
      "Why GEMA Plantation saves everything on the phone first, and how harvest data moves between phones on an NFC card when there's no signal at all.",
    date: "October 2026",
    readingTime: "4 min read",
    relatedCaseStudy: "gema-plantation",
    body: [
      { type: "p", text: "Most blocks on a palm oil estate have no internet. Field supervisors start their day there, take attendance there, and record every job there. Before GEMA Plantation, they wrote it in a notebook and a clerk typed it into the system later. The office saw yesterday's work at best." },
      { type: "p", text: "Any app that needs a connection to save a record would simply not get used in that setting. So the first design decision was not about screens. It was about where the data lives." },
      { type: "h2", text: "The phone is the source of truth until upload" },
      { type: "p", text: "Everything a supervisor records is written to a local Room database first: attendance, harvest and upkeep work records (BKM), harvest collection and delivery notes (SPB), with photos and GPS. Nothing waits for the network." },
      { type: "list", items: [
        "Records go into an upload queue and are sent whenever the phone finds a signal.",
        "Every work record has a unique number built from the job and the block, with separate series for harvest (PN) and upkeep (RW). That number is what makes retries safe: sending the same record twice doesn't create a duplicate.",
        "Once a record reaches the server it is locked, so the copy on the phone and the copy in the office can't drift apart.",
      ] },
      { type: "h2", text: "When there's no network at all, the card is the network" },
      { type: "p", text: "Saving offline solves one supervisor's problem. But harvest data has to move between people in the field too: the harvest supervisor collects the fruit, and transport needs to know what is being loaded, often in places where neither phone has signal." },
      { type: "p", text: "For that, GEMA uses NFC cards (Mifare Classic 1K, NDEF). Harvest and load data, and the delivery note, are written to a card on one phone and read on another. When a paper copy is needed, the delivery note can also be printed on a Bluetooth thermal printer." },
      { type: "list", items: [
        "No pairing, no hotspot, no internet: tap, write, hand over, tap, read.",
        "The data still ends up in the same upload queue, so the office sees it as soon as any phone reaches signal.",
      ] },
      { type: "h2", text: "What it costs" },
      { type: "p", text: "Offline-first is more work than calling an API. Database migrations have to be handled carefully, because a phone in the field may skip several app versions. The upload queue needs retry logic that never duplicates and never silently drops a record. And a 1K card holds very little, so what goes on it has to be chosen carefully." },
      { type: "p", text: "It is worth it. Supervisors record each job once, in the field, with a photo, a location and a number, and the chain from block to hauling to delivery note stays connected even on days when the estate has no signal at all." },
    ],
  },
  {
    slug: "why-nfc-for-delivery-notes",
    title: "Why use NFC cards for Fruit Transport Documents (SPB)?",
    summary: "A palm fruit truck carries its transport document (SPB) from the estate to the mill. Paper gets re-typed, QR codes get dirty, and remote estates have zero signal. Here is why an NFC card became the ultimate data carrier—and what it takes to keep it secure.",
    date: "October 2026",
    readingTime: "4 min read",
    relatedCaseStudy: "onetap-spb",
    body: [
      { type: "p", text: "Every truck of palm fruit leaves the estate with a delivery note (SPB): the truck's plate, the note number, and how much fruit came from each block. The mill needs that data the moment the truck reaches the weighbridge, to match what arrives with what was harvested. The question is how the data gets there." },
      { type: "h2", text: "The options" },
      { type: "list", items: [
        "Paper. Cheap and familiar, but someone at the mill types it again, while trucks queue. Numbers get mistyped and the same note can be entered twice.",
        "Send it over the network. The cleanest on paper, but most estate blocks have no signal, and the note has to exist before the truck leaves, not when a phone finds coverage.",
        "A printed QR code. No typing, but a QR code on paper gets wet, folded and covered in dust on the way, and a long note makes a dense code that is hard to scan.",
        "An NFC card. The data is written once at the estate, travels with the driver, and is read at the mill with a tap.",
      ] },
      { type: "h2", text: "What the card gets right" },
      { type: "list", items: [
        "It needs no network on either end. The estate writes it offline, and the mill reads it offline.",
        "It survives the trip. The chip sits inside plastic, so mud, rain and a driver's pocket don't matter, and the card can be reused.",
        "Reading is one motion. No aiming, no focusing, no lighting. The operator taps and the reader does the rest, which keeps the weighbridge queue moving.",
        "The data arrives exactly as it was written. Nobody types it, so nobody mistypes it.",
        "Each card has its own UID, saved with the note, so you can tell later which physical card a record came from.",
      ] },
      { type: "h2", text: "What it costs" },
      { type: "p", text: "A card holds very little. A MIFARE Classic 1K has under a kilobyte of usable memory, so the note is stored as compact text: the header, then one row per block, with separators instead of field names. That is enough for a delivery note, not for photos or signatures." },
      { type: "p", text: "A card is also just a carrier. Anything can be written to it, so the reader cannot trust it. OneTap-SPB checks the field count of every row and that harvest and loose fruit are valid numbers, and a card that fails is not saved at all. The note number is the database key, so tapping the same card twice, or on two weighbridge PCs, never creates a second record. If a note already exists, the operator sees the saved data next to the card's data and decides." },
      { type: "p", text: "Then there's the hardware. Cards come in families that are read differently (Ultralight and NTAG, Classic with its keys, Type 4), readers get unplugged, and the network to the database drops. The app has to handle all of that without freezing, because the operator has a truck waiting." },
      { type: "h2", text: "Where it fits" },
      { type: "p", text: "NFC is not the right answer everywhere. If the estate had reliable signal, sending the note to a server would be simpler. But for a small, structured piece of data that has to move with a physical object through places without coverage, a card that costs very little and reads in a second is hard to beat. GEMA Plantation uses the same idea in the field, moving harvest data between phones; OneTap-SPB is where that card finally lands in the mill's database." },
    ],
  },
];

export const getNote = (slug) => notes.find((n) => n.slug === slug);
