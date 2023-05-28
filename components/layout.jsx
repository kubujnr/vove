import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

const layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>VoVe | Youtube Downloader</title>
        <meta
          property="og:description"
          name="description"
          content="vove the best youtube downloader webapp. built for you and for you only."
        />
        <meta
          property="og:keywords"
          name="keywords"
          content="
        youtube clip downloader,
        youtube downloader,
        best youtube downloader,
        downloader youtube,
        youtube short downloader,
        youtube downloader for pc,
        free youtube downloader,
        youtubedownloader,
        free youtube downloader for pc,
        mp4 youtube downloader,
        online youtube downloader,
        online youtube video downloader,
        video downloader youtube,
        mp3 youtube downloader,
        youtube downloader -- mp3,
        youtube downloader for windows,
        youtube downloader for windows 10,
        youtube downloader online,
        youtube downloader pc,
        youtube downloader windows,
        youtube downloaders,
        youtube link downloader,
        youtube mp3 downloader chrome,
        youtube mp4 downloader,
        youtube online downloader,
        youtube shorts downloader,
        youtube song downloader,
        youtube video downloader,
        youtube video downloader extension,
        youtube video downloader online,
        youtube videos downloader,
        youtubevideodownloader
        "
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
