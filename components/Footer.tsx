interface FooterProps {
    companyName: string;
  }
  
  const Footer: React.FC<FooterProps> = ({ companyName }) => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {currentYear} {companyName}. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  