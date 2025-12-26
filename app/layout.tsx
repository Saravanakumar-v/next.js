import '@/app/ui/global.css';
import { bitcount } from '@/app/ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bitcount.className} antialiased`}>{children}</body>
    </html>
  );
}
