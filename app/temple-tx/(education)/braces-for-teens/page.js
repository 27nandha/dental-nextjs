import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import Form from "@/components/Form";

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
});

const AlternativesToBraces = () => {
  return (
    <>
      {/* Intro section */}
      <section className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-1 md:gap-2 md:mt-[125px] border-y-[10px] border-dark mx-2">
        <div className="bg-[url(/alternatives-to-braces.jpg)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Alternatives to Braces for Teens
          </h2>
          <p className="font-cinzel">Temple, TX</p>
          <p className="font-tinos text-justify">
            Alternatives to traditional braces offer teens effective, discreet,
            and comfortable options to straighten their teeth and achieve a
            confident smile. Options like clear aligners (e.g., Invisalign),
            lingual braces, and ceramic braces provide aesthetic and practical
            solutions without the look or feel of metal braces, making them
            popular choices for teenagers.
          </p>
          <p className="font-tinos text-justify">
            At Revital Dental, our team specializes in orthodontic solutions
            tailored to teens’ needs and lifestyles. To learn more or schedule a
            consultation for alternatives to braces, contact our Temple office
            at (254) 207-0708.
          </p>
        </div>
        <div className="py-10">
          <Form />
        </div>
      </section>

      {/* Explanation section */}
      <section className="md:grid md:grid-cols-[3fr_1fr] md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* Left section */}
        <div className="left-section" id="what-are-alternatives-to-braces">
          {/* Dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              What Are Alternatives to Braces?
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Alternatives to traditional metal braces include clear aligners,
              lingual braces, and ceramic braces, designed to straighten teeth
              with greater discretion and comfort. Clear aligners, like
              Invisalign, are removable, transparent trays that gradually shift
              teeth. Lingual braces are placed behind the teeth, making them
              invisible from the front. Ceramic braces use tooth-colored
              brackets to blend with natural teeth.
            </p>
            <p className="text-justify font-tinos mt-4 mb-5">
              These options are ideal for teens who want effective orthodontic
              treatment without the noticeable appearance of metal braces. At
              Revital Dental, our dental team evaluates each teen’s needs to
              recommend the best alternative, ensuring both functionality and
              aesthetics.
            </p>
          </div>

          {/* Quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Alternatives to braces give teens the confidence to smile during
              treatment with discreet, comfortable options.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="alternatives-procedure">
            <h2 className="font-cinzel text-2xl text-primary">
              The Process for Alternatives to Braces
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              The process begins with a consultation where the dentist assesses
              the teen’s teeth, bite, and oral health. For clear aligners,
              digital scans or impressions are taken to create a series of
              custom trays, which are worn for 20–22 hours daily and changed
              every 1–2 weeks. Lingual or ceramic braces require custom brackets
              bonded to the back or front of teeth, respectively, with periodic
              adjustments.
            </p>
            <p className="font-tinos mt-2">
              Treatment duration varies (typically 6–24 months) depending on the
              severity of misalignment and the chosen method. Teens receive
              guidance on wearing and caring for their appliances, with regular
              checkups to monitor progress. The process is tailored to fit busy
              teen schedules and aesthetic preferences.
            </p>
          </div>

          {/* Quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Clear aligners and discreet braces make orthodontic treatment
              easier for teens to fit into their active lifestyles.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10">
            <h2 className="font-cinzel text-2xl text-primary">
              Caring for Orthodontic Alternatives
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              Proper care is essential to ensure the success of orthodontic
              alternatives. Regular dental checkups every 6–8 weeks allow the
              dentist to monitor progress and make adjustments. Teens using
              clear aligners should remove them while eating and drinking
              anything other than water, and clean them daily to prevent
              bacteria buildup.
            </p>
            <p className="font-tinos mt-2">
              To maintain oral health and the condition of orthodontic
              appliances, our dental team recommends:
            </p>
            <ul className="font-tinos list-disc pl-4 mt-2">
              <li>Brushing twice daily with fluoride toothpaste</li>
              <li>Flossing daily or using interdental brushes</li>
              <li>
                Cleaning clear aligners with a soft toothbrush and non-abrasive
                cleaner
              </li>
              <li>
                Avoiding sticky or hard foods that could damage appliances
              </li>
            </ul>
          </div>

          {/* Quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “With proper care and regular checkups, teens can achieve a
              straight, healthy smile with minimal disruption.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Questions Answered on This Page */}
          <div className="bg-dark p-5 mt-10 text-white">
            <h2 className="text-4xl text-center font-cinzel mb-3">
              Questions Answered on This Page
            </h2>
            <hr />
            <div className="flex flex-col">
              <a
                className="text-justify font-tinos mt-3"
                href="#what-are-alternatives-to-braces"
              >
                Q.{" "}
                <span className="underline">
                  What are alternatives to braces for teens?
                </span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="#alternatives-procedure"
              >
                Q.{" "}
                <span className="underline">
                  What is the process for getting alternatives to braces?
                </span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="#alternatives-procedure"
              >
                Q.{" "}
                <span className="underline">
                  What are the benefits of alternatives to braces?
                </span>
              </a>
              <a
                className="text-justify font-tinos mt-3"
                href="#alternatives-procedure"
              >
                Q.{" "}
                <span className="underline">
                  How do teens care for orthodontic alternatives?
                </span>
              </a>
            </div>
            <h2 className="text-4xl text-center font-cinzel mb-3 mt-3">
              People Also Ask
            </h2>
            <hr />
            <div className="flex flex-col mb-4">
              <a className="text-justify font-tinos mt-3" href="#">
                Q.{" "}
                <span className="underline">
                  Are clear aligners effective for teens?
                </span>
              </a>
              <a className="text-justify font-tinos mt-3" href="#">
                Q.{" "}
                <span className="underline">
                  How long does treatment with alternatives take?
                </span>
              </a>
              <a className="text-justify font-tinos mt-3" href="#">
                Q.{" "}
                <span className="underline">
                  Are alternatives to braces more expensive?
                </span>
              </a>
            </div>
          </div>

          {/* Q & A */}
          <div className="bg-gray-100 p-5 mt-10">
            <h2 className="text-4xl text-center font-cinzel mb-3 text-primary">
              Questions Answered on This Page
            </h2>
            <hr />
            <div className="flex flex-col">
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#what-are-alternatives-to-braces"
              >
                Q. What are alternatives to braces for teens?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Alternatives include clear aligners (e.g., Invisalign),
                lingual braces (placed behind teeth), and ceramic braces
                (tooth-colored). These options straighten teeth discreetly and
                comfortably, ideal for teens.
              </p>
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#alternatives-procedure"
              >
                Q. What is the process for getting alternatives to braces?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. The process involves a consultation, digital scans or
                impressions, and fitting of custom aligners or braces. Treatment
                duration is typically 6–24 months, with regular checkups to
                monitor progress.
              </p>
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#alternatives-procedure"
              >
                Q. What are the benefits of alternatives to braces?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Benefits include discreet appearance, comfort, and
                removability (for aligners). These options suit teens’ active
                lifestyles, boost confidence, and often require less maintenance
                than metal braces.
              </p>
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#alternatives-procedure"
              >
                Q. How do teens care for orthodontic alternatives?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Teens should brush and floss daily, clean aligners with a
                non-abrasive cleaner, avoid sticky or hard foods, and attend
                regular dental checkups to ensure treatment success and oral
                health.
              </p>
              <h2
                className="text-justify text-primary font-tinos mt-3"
                href="#alternatives-procedure"
              >
                Q. Are clear aligners effective for teens?
              </h2>
              <p className="font-tinos md:ps-4 mt-2">
                A. Yes, clear aligners like Invisalign are effective for teens
                with mild to moderate misalignment, provided they wear them
                20–22 hours daily and follow the dentist’s instructions.
              </p>
            </div>
          </div>

          {/* QR code */}
          <div className="bg-dark p-5 mt-10 text-white">
            <h2 className="text-3xl text-center font-cinzel mb-3">
              Quality Dental Services Can Transform Your Smile
            </h2>
            <p className="text-center font-tinos">
              By visiting us as soon as possible, our team can help get you the
              professional treatment you need. Instead of waiting around and
              allowing the symptoms to get worse, we can provide you with
              treatment options.
            </p>
            <div className="flex justify-evenly content-center gap-2 mt-5">
              <div className="flex justify-center flex-col items-center">
                <img
                  src="/dentist-map.webp"
                  alt=""
                  className="w-[200px] h-[200px]"
                />
                <a href="" className="mt-2 underline text-center">
                  Let Us Help – Click for Directions to Revital Dental
                </a>
              </div>
              <div className="flex justify-center flex-col items-center">
                <img
                  src="/dental-checkup-qrcode.png"
                  alt=""
                  className="w-[200px] h-[200px]"
                />
                <p className="mt-2 text-center">
                  Scan here to view this page, Dental Checkup, on mobile
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly content-center items-center gap-2 mt-5">
              <img
                src="/find-best-dentist-nav.webp"
                alt=""
                className="w-[200px] h-[200px]"
              />
              <img
                src="/general-dentistry-services-nav.webp"
                alt=""
                className="w-[200px] h-[200px]"
              />
              <img
                src="/dental-cleaning-and-examinations-nav.webp"
                alt=""
                className="w-[200px] h-[200px]"
              />
            </div>
          </div>

          {/* Dental Terminology */}
          <div className="bg-dark p-5 mt-10 text-white">
            <h2 className="text-4xl font-cinzel mb-3">Dental Terminology</h2>
            <hr />
            <div className="space-y-10">
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Clear Aligners</h2>
                <p>
                  Clear aligners are removable, transparent trays (e.g.,
                  Invisalign) that gradually shift teeth into alignment,
                  offering a discreet alternative to traditional braces for
                  teens.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Lingual Braces</h2>
                <p>
                  Lingual braces are placed on the back of the teeth, making
                  them invisible from the front, providing a discreet
                  orthodontic solution for teens.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Ceramic Braces</h2>
                <p>
                  Ceramic braces use tooth-colored or clear brackets to blend
                  with natural teeth, offering a less noticeable alternative to
                  metal braces for straightening teeth.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Orthodontics</h2>
                <p>
                  Orthodontics is the dental specialty focused on correcting
                  teeth and jaw alignment, including alternatives like clear
                  aligners, lingual braces, and ceramic braces for teens.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Malocclusion</h2>
                <p>
                  Malocclusion refers to misalignment of teeth or jaws, which
                  alternatives to braces, such as clear aligners or lingual
                  braces, can correct for improved function and aesthetics.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Dental Impressions</h2>
                <p>
                  Dental impressions are molds of the teeth used to create
                  custom orthodontic appliances, such as clear aligners,
                  ensuring a precise fit for effective treatment.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Preventive Dentistry</h2>
                <p>
                  Preventive dentistry focuses on maintaining oral health,
                  including regular checkups to monitor the progress of
                  orthodontic alternatives and ensure healthy teeth and gums.
                </p>
                <hr className="mt-4" />
              </div>
              <div className="mt-5 font-tinos">
                <h2 className="italic text-xl">Tooth Enamel</h2>
                <p>
                  Tooth enamel is the hard, protective outer layer of the tooth,
                  which remains intact during treatment with removable
                  alternatives like clear aligners.
                </p>
                <hr className="mt-4" />
              </div>
            </div>
          </div>

          {/* Call section */}
          <div className="bg-primary p-5 mt-10 text-white rounded-2xl">
            <h2 className="text-4xl font-cinzel mb-3">Call Us Today</h2>
            <hr />
            <p className="font-tinos mt-5 text-justify">
              Alternatives to braces can help your teen achieve a straight,
              confident smile with discreet and comfortable options. Our team at
              Revital Dental is here to guide you. Call us at{" "}
              <a href="tel:254-207-0708" className="underline">
                254-207-0708.
              </a>
            </p>
          </div>

          {/* Related Links and QR */}
          <div className="bg-dark p-5 mt-10 text-white">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <h2 className="text-4xl font-cinzel mb-3">
                  Helpful Related Links
                </h2>
                <hr />
                <ul className="font-tinos mt-3 list-disc px-3">
                  <li className="mt-2">
                    <Link href="#" className="hover:underline">
                      American Dental Association (ADA). Orthodontic Treatment
                      Options. 2022
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link href="#" className="hover:underline">
                      American Association of Orthodontists (AAO). Clear
                      Aligners for Teens. 2022
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link href="#" className="hover:underline">
                      WebMD. Orthodontics for Teens Guide. 2022
                    </Link>
                  </li>
                </ul>

                <h2 className="text-4xl font-cinzel mb-3 mt-10">
                  About Our Business and Website Security
                </h2>
                <hr />
                <ul className="font-tinos mt-3 list-disc px-3">
                  <li className="mt-2">
                    <Link href="#" className="hover:underline">
                      Revital Dental was established in 2022.
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link href="#" className="hover:underline">
                      We accept the following payment methods: American Express,
                      Cash, Check, Discover, MasterCard, and Visa
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link href="#" className="hover:underline">
                      We serve patients from the following counties: Bell
                      County, McLennan County, and Coryell County
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link href="#" className="hover:underline">
                      Norton Safe Web. View Details
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link href="#" className="hover:underline">
                      Trend Micro Site Safety Center. View Details
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-12 flex flex-col justify-center items-center md:w-[250px]">
                <img
                  src="/map-directions-qrcode.webp"
                  className="w-[150px] h-[150px]"
                  alt="Revital Dental Directions QR"
                />
                <p className="font-tinos text-center mt-3">
                  Scan here to open directions to Revital Dental on mobile
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="right-section">
          <div className="bg-gray-100 px-8 p-5 w-[90%] mx-auto">
            <h2 className="text-2xl text-primary font-cinzel">
              Related Topics
            </h2>
            <hr />
            <ul className="font-tinos mt-2 list-disc px-3">
              <li className="mt-5">
                <Link href="#" className="hover:underline">
                  Orthodontic Treatment
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#" className="hover:underline">
                  Clear Aligners
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#" className="hover:underline">
                  Lingual Braces
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#" className="hover:underline">
                  Ceramic Braces
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#" className="hover:underline">
                  Preventive Dental Care
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#" className="hover:underline">
                  Teen Dental Health
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center bg-primary px-8 p-5 w-[90%] mx-auto mt-5 rounded-lg">
            <h3 className="font-cinzel text-center text-4xl text-white">
              Call Us
            </h3>
            <h3 className="font-cinzel text-4xl text-center text-white">
              Today
            </h3>

            <img
              src="/phone-number-qrcode.png"
              alt=""
              className="w-[150px] pt-3 h-[150px] "
            />
            <p className="text-center font-tinos text-white pt-3">
              Scan here to call Revital <br /> Dental on mobile
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlternativesToBraces;
