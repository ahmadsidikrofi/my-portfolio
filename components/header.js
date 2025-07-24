import TextType from "./TextType";

const Header = () => {
    return (
        <div className="p-2 border-b border-green-800 max-sm:text-center flex flex-col">
          <TextType
            text={["Ahmad Sidik Rofiudin"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="█"
            className="text-xl text-[#00c951] font-bold"
          />
          <TextType
            text={["Software Engineer", "Frontend Developer", "Backend Developer", "AI Engineer"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="█"
            className="text-sm text-gray-400"
          />
          {/* <h1 className="text-xl text-[#00c951] font-bold">Ahmad Sidik Rofiudin</h1>
          <p className="text-sm text-gray-400">Software Engineer</p> */}
        </div>
    );
}
 
export default Header;