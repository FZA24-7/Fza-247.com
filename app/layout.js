import './globals.css';
import Shell from '@/components/Shell';
import Script from 'next/script';

// ...your metadata stays the same...

export default function L({children}){
  return (
    <html lang="en">
      <body>
        <Shell>{children}</Shell>
        <script src="//code.tidio.co/upoae8g6ve1gdjuauabu1kl2ufbc1553.js" async></script>
      </body>
    </html>
  );
}
