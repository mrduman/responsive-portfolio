const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-4">
      <a
        className="flex items-center gap-3 text-[#D48C00] font-semibold text-lg tracking-wide hover:text-[#A63232] transition duration-500"
        href="https://www.instagram.com/lumosaic_/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="instagram-link"
          src="../assets/instagram.png"
          className="w-6 h-6 filter brightness-0 invert-[30%] sepia-[90%] saturate-[500%] hue-rotate-[10deg] contrast-[110%]"
        />
        INSTAGRAM
      </a>
    </div>
  );
};

export default SocialMediaIcons;
