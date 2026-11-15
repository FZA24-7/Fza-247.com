import './globals.css';
import Shell from '@/components/Shell';
import Script from 'next/script';

// Agar aapki file mein pehle se metadata wala code mojood hai toh usay yahan rehne dein

export default function L({ children }) {
  return (
    <html lang="en">
      <body>
        <Shell>{children}</Shell>
        <Script 
          src="https://tidio.co" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}
