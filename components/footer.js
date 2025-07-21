const Footer = () => {
    return ( 
        <div className="p-4 border-t border-green-800 flex flex-row justify-between">
          <h1 className="text-sm font-bold text-[#00c951]">Ahmad Sidik Rofiudin</h1>
          <p className="text-sm text-[#00c951]">{new Date().toLocaleTimeString('id-ID')}</p>
        </div>
    );
}
 
export default Footer;