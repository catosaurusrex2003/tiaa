import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Card from "./Card";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="grid lg:grid-cols-2">
        <section className="mt-20 lg:ml-24 ml-12">
          <h6 className="text-[#6185ED]"># Mind_Matters</h6>
          <h1 className="text-4xl py-2.5 font-semibold">Get in touch !!</h1>
          <p className="w-2/3 my-3.5">
            Lorem ipsum dolor sit amet consectetur. Lectus viverra iaculis
            sodales maecenas convallis non at odio.
          </p>
          <p className="w-2/3 my-3.5">
            Lorem ipsum dolor sit amet consectetur. Nulla consequat vitae
            sodales.
          </p>
        </section>
        <section className="grid sm:grid-cols-2 gap-6 my-24 mx-auto">
          <Card
            className="text-[#6185ED]"
            title="Visit Us"
            content="See all support centers."
            action="View on google maps"
          />
          <Card
            className="text-[#6185ED]"
            title="Chat to support"
            content="We are here to help."
            action="support@gmail.com"
          />
          <Card
            className="text-[#6185ED]"
            title="Ring Us"
            content="Call us anytime."
            action="+91 9887766565"
          />
          <Card
            className=""
            title="Emergency Hotline"
            content="See all support centers."
            action="+91 9876543210"
          />
        </section>
      </div>
      <Footer />
    </>
  );
}
