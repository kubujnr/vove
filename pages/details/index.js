import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function index() {
  const [info, setInfo] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const router = useRouter();

  const { videoId } = router.query;

  const handleSubmit = async () => {
    setLoading(true);
    setError(false);
    const videoUrl = "https://www.youtube.com/watch?v=" + videoId;

    try {
      const res = await fetch("/api/video?url=" + videoUrl);
      const videoInfo = await res.json();

      setInfo({
        videoDetails: videoInfo.videoDetails,
        formats: videoInfo.formats.filter((f) => f.hasVideo && f.hasAudio),
      });
    } catch (error) {
      setError(true);
    }

    setLoading(false);
    //   window.location.href = `/details?videoDetails=${
    //     videoInfo.videoDetails
    //   }&formats=${videoInfo.formats.filter((f) => f.hasVideo && f.hasAudio)}`;
  };

  const handleDownload = (format) => {
    const downloadUrl = `/api/download-video?url=${info.videoDetails.video_url}&itag=${format.itag}`;
    window.location.href = downloadUrl;
  };

  useEffect(() => {
    if (videoId != undefined) {
      handleSubmit();
    }
  }, [videoId]);

  return (
    <div>
      <main className="h-[70vh] relative w-full text-white bg-[url(/home-hero-gradient-yt.svg)] bg-center bg-no-repeat bg-cover">
        <div className="mx-auto md:w-3/5 md:p-0 px-4 space-y-12">
          <div className="pt-36 space-y-4">
            <h1 className="font-bold text-2xl md:text-3xl">
              Download YouTube videos with ease on Vove
            </h1>
            <p className="font-extralight text-sm md:text-base w-4/5 text-justify">
              The ultimate destination for downloading YouTube videos! With
              VoVe, you can easily download your favorite YouTube videos and
              watch them offline, anytime, anywhere.
            </p>
          </div>
        </div>
        {isLoading ? (
          <div className="absolute flex -bottom-14 justify-center p-4 left-0 right-0">
            <div className="bg-white p-4 md:p-8 rounded shadow-xl">
              <div className="md:big-loader loader border-2"></div>
            </div>
          </div>
        ) : isError ? (
          <div className="absolute flex -bottom-24 justify-center p-4 left-0 right-0">
            <div className="bg-white text-slate-950 p-8 rounded shadow-xl">
              <div className="text-center md:space-y-4 space-y-2">
                <h2 className="md:text-4xl text-xl font-medium">
                  Error while loading youtube video
                </h2>
                <p className="text-gray-600">
                  Please check the link or{" "}
                  <a href="/" className="text-blue-600 underline">
                    Try Again
                  </a>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute md:-bottom-72 -bottom-[30rem] p-4 left-0 right-0">
            {info && (
              <div className="py-8 pt-16 px-4">
                <div className="bg-white shadow-xl text-slate-950 md:w-3/5 mx-auto p-4 rounded">
                  <h2 className="text-xl font-bold mb-4">
                    {info.videoDetails.title}
                  </h2>
                  <div className="flex flex-col gap-4">
                    <div className="mb-4 flex flex-col md:flex-row gap-4">
                      {info.videoDetails.thumbnails.length > 0 && (
                        <img src={info.videoDetails.thumbnails[3].url} />
                      )}
                      <div className="px-4  flex-1 line-clamp-3 md:line-clamp-[8]">
                        {info.videoDetails.description}
                      </div>
                    </div>

                    <ul className="mb-4 flex flex-wrap gap-4">
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
                </div>
              </div>
            )}
          </div>
        )}
      </main>
      {info && <div className="h-[450px] md:h-[300px]"></div>}
    </div>
  );
}
