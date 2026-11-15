import './globals.css';
import Shell from '@/components/Shell';
import Script from 'next/script';

// ...aapka metadata waisa hi rahega...

export default function L({children}){
  return (
    <html lang="en">
      <body>
        <Shell>{children}</Shell>
        <Script src="https://code.tidio.co/<script src="//code.tidio.co/upoae8g6ve1gdjuauabu1kl2ufbc1553.js" async></script>.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
