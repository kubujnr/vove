import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState("");

  const handleSetUrl = () => {
    if (url === "" || !url.includes("?v=")) {
      return;
    }

    setIsLoading(true);

    const videoId = url.split("v=")[1];

    setIsLoading(false);
    window.location.href = `/details?videoId=` + videoId;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const videoUrl = url;
  //   const res = await fetch("/api/video?url=" + videoUrl);
  //   const videoInfo = await res.json();

  //   window.location.href = `/details?videoDetails=${
  //     videoInfo.videoDetails
  //   }&formats=${videoInfo.formats.filter((f) => f.hasVideo && f.hasAudio)}`;

  // setInfo({
  //   videoDetails: videoInfo.videoDetails,
  //   formats: videoInfo.formats.filter((f) => f.hasVideo && f.hasAudio),
  // });
  // };

  // const handleDownload = (format) => {
  //   const downloadUrl = `/api/download-video?url=${info.videoDetails.video_url}&itag=${format.itag}`;
  //   window.location.href = downloadUrl;
  // };

  return (
    <div className="min-h-screen">
      <main className="h-screen relative w-full text-white bg-[url(/home-hero-gradient-yt.svg)] bg-center bg-no-repeat bg-cover">
        <div className="mx-auto md:p-0 p-4 md:w-3/5 space-y-12">
          <div className="pt-36 space-y-4">
            <h1 className="font-bold text-2xl md:text-3xl">
              Download YouTube videos with ease on Vove
            </h1>
            <p className="font-extralight w-4/5 text-justify">
              The ultimate destination for downloading YouTube videos! With
              Vove, you can easily download your favorite YouTube videos and
              watch them offline, anytime, anywhere.
            </p>
          </div>
          <div className="w-full flex gap-x-4">
            <input
              type="text"
              autoComplete="off"
              name="url"
              id="url"
              onChange={(e) => setUrl(e.target.value)}
              className="border-none py-3 bg-[#ffffff21] px-4 flex-1 rounded text-sm outline-none"
              placeholder="Youtube Video URL"
            />
            <button
              onClick={handleSetUrl}
              className="text-purple-500 rounded p-3 bg-white font-medium transition-all ease-in-out"
            >
              {isLoading ? <div class="loader"></div> : "Download"}
            </button>
          </div>
        </div>
        <div className="absolute md:-bottom-72 -bottom-96 p-4 left-0 right-0">
          <div className="bg-white text-slate-950 shadow-xl space-y-4 md:w-3/5 mx-auto p-4 rounded">
            <h3 className="text-center text-xl font-semibold">About Us</h3>
            <p>
              Vove is a completely free online platform that allows easy and
              convenient downloading of YouTube videos in various formats and
              resolutions. <br />
              <br />
              The platform is designed by an experienced team of developers and
              designers to deliver a seamless and hassle-free experience. <br />
              <br />
              Privacy and security are taken seriously, and no personal
              information or downloaded videos are stored.
              <br />
              <br />
              The goal of Vove is to provide a reliable and convenient way to
              enjoy favorite YouTube videos offline, whether on-the-go or with
              limited internet connectivity. Vove is committed to serving its
              users and appreciates their support.
            </p>
          </div>
        </div>
      </main>
      <div className="h-[400px] md:h-[300px]"></div>
      {/* <main className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold my-8">YouTube Downloader</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="url" className="block text-gray-700 font-bold mb-2">
              YouTube Video URL
            </label>
            <input
              id="url"
              type="text"
              placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="border rounded py-2 px-3 w-full"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Get Video Info
          </button>
        </form>

        {info && (
          <div className="my-8">
            <h2 className="text-2xl font-bold mb-4">
              {info.videoDetails.title}
            </h2>

            <div className="mb-4">
              {info.videoDetails.thumbnails.length > 0 && (
                <img src={info.videoDetails.thumbnails[0].url} />
              )}
            </div>

            <ul className="mb-4">
              {info.formats.map((format) => (
                <li key={format.itag} className="mb-2">
                  <button
                    className="inline-flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleDownload(format)}
                  >
                    {format.qualityLabel} ({format.container})
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main> */}
    </div>
  );
}
