Apply the following four specific fixes to the existing PinFlow landing page design:
1. MOBILE HERO BACKGROUND — Make Aurora Visible and Reposition
On mobile specifically the aurora background glow is too faint and sits behind too many elements to be seen. Apply these mobile-only changes:
Move the aurora glow to sit directly underneath the hero text content, not behind the full section. On mobile the glow should be centered horizontally at roughly 50% x and positioned at 65% y — sitting visually between the headline and the email input, glowing upward and downward from that center point.
Increase opacity significantly on mobile only. Use these values for mobile: first radial gradient #E60023 at opacity 0.28, second radial gradient #FF6B9D at opacity 0.22, third peach radial gradient #FFC8AA at opacity 0.15. These are much stronger than desktop values because the mobile background needs to punch through and be clearly visible on a smaller screen.
Make the glow larger relative to screen size on mobile — the red radial gradient should span roughly 80vw in diameter so it fills the width of the screen behind the text. The pink gradient should be offset slightly to the bottom left at 30% x 75% y at 70vw diameter. Together they should create a warm rosy atmospheric glow that is unmistakably visible behind the hero text on mobile, giving the section depth and warmth.
Add the slow drift animation on mobile too — same 8 second loop, shifting 6-8% position, breathing organically. This should feel like a living warm light source sitting behind your content.
2. HERO BADGE — Force Single Line
The badge pill reading "PINTEREST ORGANIC CPM IS $0.12. EVERYONE ELSE IS ASLEEP." is currently breaking onto two lines on certain screen sizes. Fix this completely with the following CSS applied to the badge component:
white-space: nowrap;
display: inline-flex;
align-items: center;
width: fit-content;
max-width: 100%;
padding: 8px 16px;
border-radius: 999px;
overflow: hidden;
text-overflow: ellipsis;
On desktop the full text should always display on one line. On mobile if the screen is too narrow to fit the full text, reduce the font size of the badge text only to 9px and tighten letter spacing to 0.06em — this keeps it on one line even on 375px wide screens without breaking the layout. The badge should never wrap to two lines on any screen size at any breakpoint.
3. HERO HEADING — Fix Font Size Using Clamp
The hero headline "Your product link. 30 days of Pinterest content. 5 minutes." is currently too large on certain screen sizes, causing awkward line breaks and oversized text on desktop. Replace the fixed font size with a fluid clamp value:
font-size: clamp(38px, 5.5vw, 64px);
line-height: 1.08;
letter-spacing: -0.03em;
font-weight: 800;
This means the headline will never go below 38px on the smallest mobile screens, scales fluidly with viewport width in between, and caps at 64px on large desktop screens. The result is a headline that always feels proportional and intentional regardless of screen size — never too large and dominating, never too small and weak.
On mobile specifically ensure each of the three lines breaks cleanly and intentionally: "Your product link." on line one, "30 days of Pinterest content." on line two, "5 minutes." on line three. Apply word-break: keep-all to prevent any single word from breaking awkwardly mid-word across lines.
4. BEEHIIV WAITLIST FORM INTEGRATION
Replace the current email form submission logic across all waitlist form instances on the page — both the Hero section form and the FinalCTA section form — with a direct Beehiiv API integration. Do not use the Beehiiv iframe embed. Keep the existing beautiful form design completely intact. Only the submission logic changes.
Update the handleSubmit function in both form components to the following async implementation:
typescriptconst handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (email && email.includes("@")) {

    try {
      await fetch(
        "https://api.beehiiv.com/v2/publications/28f7c998-d6ad-4b21-b17d-1d83f653c442/subscriptions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.VITE_PUBLIC_BEEHIIV_API_KEY}`,
          },
          body: JSON.stringify({
            email: email,
            reactivate_existing: false,
            send_welcome_email: true,
            utm_source: "landing_page",
            utm_medium: "waitlist_form",
            utm_campaign: "pinflow_launch",
          }),
        }
      );
    } catch (error) {
      console.error("Beehiiv error:", error);
      // Silent fail — user still sees success state
      // so a Beehiiv outage never blocks your signups
    }

    incrementCount();
    setSubmitted(true);
    setEmail("");

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E60023', '#FF6B9D', '#FFC8AA', '#FFFFFF']
    });

    setTimeout(() => setSubmitted(false), 3000);
  }
};
```

Create a `.env` file in the project root and add the following environment variable — this keeps the API key out of the codebase safely:
```
VITE_PUBLIC_BEEHIIV_API_KEY=A3eBxbtZYngG6rtmU4le3WhOVWDW5W8f0ylyOu2nY5NN3KqhwHKpF0tMVPQ4AnIB
Add .env.local to .gitignore if it is not already there. The publication ID 28f7c998-d6ad-4b21-b17d-1d83f653c442 is already hardcoded in the fetch URL above and does not need to be in the env file as it is not a secret.
After implementation, test the full flow: enter a real email address in the waitlist form, hit submit, confirm the confetti fires, confirm the success message appears, then check the Beehiiv dashboard under Subscribers to confirm the email was captured, and check the inbox of that email address to confirm the welcome automation email arrives within 60 seconds.
IMPORTANT — Mobile Breakpoint Reference
Apply all mobile-specific styles at max-width 768px. Apply tablet adjustments at max-width 1024px where relevant. All fixes should be tested at 375px, 390px, and 430px widths which cover the most common iPhone screen sizes in use today.