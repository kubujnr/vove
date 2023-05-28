import ytdl from "ytdl-core";

export default async function handler(req, res) {
  const { url: videoUrl } = req.query;
  try {
    const videoInfo = await ytdl.getInfo(videoUrl);
    res.json(videoInfo);
  } catch (error) {
    throw error;
  }
}
