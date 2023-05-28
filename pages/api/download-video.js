import ytdl from "ytdl-core";

export default async function handler(req, res) {
  const { url, itag, title } = req.query;

  const filename = title == "" ? "video.mp4" : title + ".mp4";

  try {
    const videoStream = ytdl(url, { quality: itag });
    res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
    videoStream.pipe(res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
