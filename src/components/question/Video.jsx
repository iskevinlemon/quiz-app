export default function Video() {
  return (
    <iframe
      width={750}
      height={315}
      src="https://www.youtube.com/embed/Tn6-PIqc4UM?si=2aFfX4LEQTsSTqnF"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen={true}
    />
  );
}
