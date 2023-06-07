import '../app/globals.css';
import {Nunito_Sans} from 'next/font/google'

const nunitoSans = Nunito_Sans({subsets: ['latin']})

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
          html {
            font-family: ${nunitoSans.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  ) 
}