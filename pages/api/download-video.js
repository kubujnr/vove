import ytdl from "ytdl-core";

export default async function handler(req, res) {
  const { url, itag } = req.query;

  try {
    const videoStream = ytdl(url, { quality: itag });
    res.setHeader("Content-Disposition", `attachment; filename=video.mp4`);
    videoStream.pipe(res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
