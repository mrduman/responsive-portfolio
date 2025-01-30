import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-[#FAE3C6] pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center mt-5">
          <p className="font-playfair font-semibold text-2xl text-[#D48C00]">
            LUMOSAIC
          </p>
          <p className="font-playfair text-md text-[#F5F5DC]">©2025 Lumosaic</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
