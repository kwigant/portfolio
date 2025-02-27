import Image from "next/image";

export const handleEmailClick = () => {
  const email = "kirsten.wigant@gmail.com";
  const subject = "Let’s Connect! – [Your Name]";
  const body = "Body of the email";

  const mailtoUri = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUri;
};

const EmailButton: React.FC = () => {
  return (
    <button className="row" onClick={handleEmailClick}>
      <Image src="/visuals/paper-plane-blue.png" alt="contact me" width={24} height={24} />
      <div className="title-small" style={{fontSize: 18, color: '#4B8085',  marginLeft: 8 }}>
        Contact Kirsten
      </div>
    </button>
  );
};

export default EmailButton;
