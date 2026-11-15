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
            <script src="//code.tidio.co/upoae8g6ve1gdjuauabu1kl2ufbc1553.js" async></script>
      </body>
    </html>
  );
}
