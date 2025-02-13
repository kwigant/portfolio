import Image from "next/image";

const handleEmailClick = () => {
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
      <Image src="/send.png" alt="contact me" width={24} height={24} />
      <div className="title-thin-small" style={{ marginLeft: 8 }}>
        Contact Me
      </div>
    </button>
  );
};

export default EmailButton;
