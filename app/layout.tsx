import type { Metadata } from "next";
import "./globals.css";
import { entity, SITE_URL } from "@/lib/entity";
import { profilePageSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import DualViewContainer from "@/components/DualViewContainer";
import MachineDataView from "@/components/MachineDataView";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: entity.headline,
    template: `%s — ${entity.name}`,
  },
  description: entity.elevatorPitch,
  alternates: { canonical: "/" },
  openGraph: {
    title: entity.headline,
    description: entity.elevatorPitch,
    url: SITE_URL,
    type: "profile",
    images: [entity.image],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={profilePageSchema()} />
        <script src="/view-toggle.js"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          // Immediate code view setup - runs before any other scripts
          (function() {
            if (document.getElementById('human-view')) {
              document.getElementById('human-view').style.display = 'none';
            }
            if (document.getElementById('code-view')) {
              document.getElementById('code-view').style.display = 'block';
            }
          })();
        `}} />
      </head>
      <body>
        <DualViewContainer
          humanContent={
            <>
              <SiteHeader />
              <main id="main" className="wrap">{children}</main>
              <SiteFooter />
            </>
          }
          codeContent={
            <MachineDataView />
          }
        />
      </body>
    </html>
  );
}
