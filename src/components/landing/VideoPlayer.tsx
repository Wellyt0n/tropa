import React from "react";

interface VideoPlayerProps {
  videoUrl?: string;
  title?: string;
}

const VideoPlayer = ({
  title = "Tropa do ML - Apresentação",
}: VideoPlayerProps) => {
  return (
    <div className="w-full max-w-[1024px] mx-auto bg-[#FF6B00] rounded-lg overflow-hidden shadow-xl">
      <div className="relative aspect-video bg-black">
        <div className="w-full h-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/1_gvNAa0qyM"
            title="Tropa do ML - Apresentação"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
