const Footer = () => {
    return ( 
        <div className="p-2 border-t border-green-800 flex flex-row justify-between">
          <h1 className="text-xs font-bold text-[#00c951]">Ahmad Sidik Rofiudin</h1>
          <p className="text-xs text-[#00c951]">{new Date().toLocaleTimeString('id-ID')}</p>
        </div>
    );
}
 
export default Footer;