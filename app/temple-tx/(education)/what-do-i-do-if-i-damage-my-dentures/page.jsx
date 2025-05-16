import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import { FaYelp } from "react-icons/fa";

const cinzel = Cinzel({
  subsets: ["latin"], // you can add 'latin-ext' if needed
  display: "swap",
});

const Services = () => {
  return (
    <>
      {/* intro section */}
      <section className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-1 md:gap-2  md:mt-[85px]  border-y-[10px] border-dark mx-2">
        <div className="bg-[url(/damage-my-dentures.webp)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            What Do I Do If I Damage My Dentures
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            Many patients find dentures excellent replacements for natural
            teeth. Over time, however, they may need to be adjusted or remade
            from normal wear. Dental professionals advise patients against
            fixing dentures themselves because they could damage the denture
            beyond repair.
          </p>
          <p className="font-tinos  text-justify">
            At Revital Dental, we can help you with fixing dentures in Temple
            and the surrounding area. Unfortunately, accidents happen, and
            dentures can get damaged. This may not only be uncomfortable but
            also cause injury to your mouth. We may be able to help. Call us at
            (254) 207-0708 to schedule an appointment today.
          </p>
        </div>
        <div className="py-10">
          <form
            action=""
            className="w-full mx-auto mt-10 md:mt-0 max-w-[400px]"
          >
            <div className="text-2xl text-center font-cinzel text-white bg-[#192c2f] py-3">
              REQUEST AN APPOINMENT
            </div>
            <div className="text-center font-cinzel text-white bg-[#284b50] px-4 py-5">
              <input
                type="text"
                className="bg-white px-2 py-3 mb-3 text-gray-500 w-full focus:outline-none focus:border-b-[#ff9f29] border-b-4 border-b-white"
                placeholder="First & Last Name (Required)"
              />

              <input
                type="text`"
                className="bg-white px-2 py-3 mb-3 text-gray-500 w-full focus:outline-none focus:border-b-[#ff9f29] border-b-4 border-b-white"
                placeholder="Email (Required)"
              />

              <input
                type="text"
                className="bg-white px-2 py-3 mb-3 text-gray-500 w-full focus:outline-none focus:border-b-[#ff9f29] border-b-4 border-b-white"
                placeholder="Phone Number (Required)"
              />

              <select
                name=""
                id=""
                className="w-full px-2 py-4 bg-white text-gray-500"
              >
                <option value="">one</option>
                <option value="">two</option>
                <option value="">three</option>
              </select>

              <button className="bg-[#ff9f29] mt-4 px-4 py-2  uppercase rounded-full">
                Request Appointment
              </button>
              <button className="bg-[#ff9f29] mt-4  px-4 py-2 uppercase rounded-full">
                express online booking
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="how-dentures-damaged">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              How Dentures Get Damaged
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Though dentures will last for many years, some damage is
              inevitable and occurs gradually with regular wear. The mouth and
              jaw change over time which can cause dentures to fit poorly. It is
              possible for improper fit to damage dentures, as misalignment may
              cause undue stress to the devices when the patient bites down.
            </p>
            <p className="text-justify font-tinos mt-4">
              Furthermore, metal clasps, more common in dental bridges, can come
              loose or break off. Some dentures get damaged suddenly from an
              impact. The American Dental Association recommends dentures be
              evaluated by a professional when the prosthetic teeth are cracked,
              broken, or missing.
            </p>
            <p className="text-justify font-tinos mt-4">
              Patients may find it beneficial to use denture adhesive to help
              get used to dentures. Dentures should be checked for fit when they
              become loose and need more adhesive to stabilize. If dentures fall
              out, the impact could damage and crack them.
            </p>
          </div>

          {/* question and answer section */}
          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “The mouth and jaw change over time, which can cause dentures to
              fit poorly.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="care-for-dentures">
            <h2 className="font-cinzel text-2xl text-primary">
              Tips To Care For Dentures
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              As fragile items, dentures must be adequately taken care of to
              prevent damage. Good habits increase the longevity of dentures and
              bridges. The American College of Prosthodontists recommends
              treating dentures like fine china. Patients should follow these
              guidelines to take care of dentures:
            </p>
            <ul className="font-tinos text-justify list-disc  pl-4 mt-2">
              <li>
                When washing dentures, hold them over a folded towel or basin of
                water. If dentures get dropped, it will soften the impact
              </li>
              <li>
                Use denture brushes and cleaning products approved by the ADA
              </li>
              <li>
                Soak dentures in a solution or jaw of water when not being worn.
                Otherwise, they run the risk of being dried out
              </li>
              <li>
                Refrain from using hot water to clean dentures. Hot or boiling
                water can warp dentures
              </li>
              <li>
                Clean your dentures every day. Patients should brush their gums,
                tongue, and palate to remove plaque before inserting dentures
              </li>

              <li>Use adhesive to help dentures remain stable in the mouth</li>
              <li>
                Get dentures adjusted when the fit seems off. Dentures that fit
                correctly are less likely to fall out
              </li>
              <li>Keep dentures away from pets and children</li>
            </ul>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10 w-full">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Good habits increase the longevity of dentures and bridges.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="damaged-dentures">
            <h2 className="font-cinzel text-2xl text-primary">
              What To Do When Dentures Get Damaged
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              Accidents still happen despite all precautions. If dentures are
              damaged, the patient should make an appointment with a dental
              professional for repairs or adjustments. Fortunately, there are
              proactive steps patients can take until they can get to the
              dentist:
            </p>

            <ul className="font-tinos text-justify list-disc  pl-4 mt-2">
              <li>
                Use dental wax as a temporary barrier if wires are irritating
                the gums
              </li>
              <li>Avoid wearing damaged dentures to prevent further injury</li>
              <li>
                Soak dentures in water or a cleaning solution to keep them moist
              </li>
              <li>
                Transport dentures in a proper case for safety and hygiene
              </li>
              <li>
                Do not use over-the-counter glues, as they may not be safe for
                oral use
              </li>
            </ul>
            <p className="font-tinos mt-2">
              The amount of time it takes to fix dentures depends on many
              factors. If the dentures cannot be repaired immediately, patients
              may want to discuss other options with their dentist while waiting
              for their repair. Some patients have a spare set of dentures just
              in case the regular set gets damaged.
            </p>
            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Fortunately, there are still proactive steps patients can take
                until they can get to the dentist.”
              </h2>
              <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
            </div>

            <div className="relative inline-block mt-10 w-full">
              <h2 className="flex flex-wrap justify-center text-lg font-cinzel bg-primary text-white p-5 mt-5 rounded-2xl">
                <FaYelp className="text-2xl me-2" />
                Check out what others are saying about our dental services on
                Yelp:&nbsp;
                <Link
                  href="https://www.yelp.com/biz/revital-dental-temple"
                  className="underline hover:text-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dental Crowns and Dental Bridges in Temple, TX
                </Link>
              </h2>
            </div>

            <div className="mt-10" id="fix-dentures-myself">
              <h2 className="font-cinzel text-2xl text-primary">
                Fixing Dentures at Home
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Most dentists advise against patients fixing their own dentures
                at home. Patients should approach these repairs with caution and
                only use them as short-term solutions. The patient risks
                damaging the dentures further or introducing unsafe chemicals
                into the mouth. The best course of action is for the patient to
                call our team right away for advice on a temporary fix while
                waiting to see the dentist.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Just as one should never use over-the-counter glues on dentures,
                The American College of Prosthodontists does not recommend home
                repair kits for denture repair. However, if a patient chooses to
                use a home repair kit, they should make sure that it is
                FDA-approved for dental use. Make an appointment to see our team
                as soon as possible, as these kits can only offer temporary
                solutions.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “The American College of Prosthodontists does not recommend home
                repair kits for denture repair.”
              </h2>
              <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
            </div>

            <div className="bg-dark p-5 mt-10 text-white">
              <h2 className="text-4xl text-center font-cinzel mb-3">
                Questions Answered on This Page
              </h2>
              <hr />
              <div className="flex flex-col">
                <a
                  className="text-justify font-tinos mt-3"
                  href="#how-dentures-damaged"
                >
                  Q.{" "}
                  <span className="underline">
                    How do dentures get damaged?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#care-for-dentures"
                >
                  Q.{" "}
                  <span className="underline">
                    How can I care for my dentures?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#damaged-dentures"
                >
                  Q.{" "}
                  <span className="underline">
                    What should I do if I have damaged my dentures?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#fix-dentures-myself"
                >
                  Q.{" "}
                  <span className="underline">
                    Can I fix my dentures myself?
                  </span>
                </a>
              </div>

              <h2 className="text-4xl text-center font-cinzel mb-3 mt-3">
                People Also Ask
              </h2>
              <hr />
              <div className="flex flex-col mb-4">
                <a
                  className="text-justify font-tinos mt-3"
                  href="#reline-rebase-dentures"
                >
                  Q.{" "}
                  <span className="underline">
                    How can I tell if my dentures need to be relined or rebased?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#dentist-denture-maintenance"
                >
                  Q.{" "}
                  <span className="underline">
                    Can a dentist help ensure my dentures are in good condition?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#types-of-dentures"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the different types of dentures?
                  </span>
                </a>
              </div>
            </div>

            {/* Q & A */}
            <div className="bg-gray-100 p-5 mt-10">
              <h2 className="text-4xl text-center font-cinzel mb-3 text-primary">
                Frequently Asked Questions
              </h2>
              <hr />
              <div className="flex flex-col">
                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. Can I repair my own dentures?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. You may be able to address minor, temporary fixes to your
                  dentures, but only dental professionals can tackle any
                  significant issues. Trying to fix dentures yourself can only
                  damage them further. It is safer and more affordable to bring
                  your dentures to our office.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. What can I do if a tooth falls out of my dentures?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. If you lose a tooth from the denture, try to save the
                  tooth. Make an appointment with a prosthodontist for repairs.
                  If you cannot find the tooth, there is no need to panic. The
                  denture lab that offers repairs will typically have
                  replacement teeth.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. What do I do if I damage my dentures?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Do not wear damaged dentures. Call your dentist and ask for
                  an appointment to fix your dentures. Damaged dentures are
                  uncomfortable and can harm your oral health.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. Can I use superglue on my dentures?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Do not use any non-ADA approved glue to fix your dentures,
                  even if it is just temporary. The bond will not hold well, and
                  it is not safe to have these glues in your mouth. Plus, some
                  types of superglue are water-soluble, which means that saliva
                  will dissolve the bond.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. Why do dentures become warped or cracked?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Dentures lose their shape over time when they dry out. They
                  may also crack after being dropped onto a hard surface.
                  Placing dentures in hot water can cause them to warp. When
                  dentures do not fit, contact a professional.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. How long should my dentures last?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. When dentures are adequately taken care of, a set can last
                  up to 10 years. The American College of Prosthodontists
                  recommends getting your dentures evaluated when the prosthesis
                  is over five years old. If the prosthetic teeth are cracked,
                  broken, or missing, instead of fixing dentures, replacement
                  may be necessary.
                </p>
              </div>
            </div>

            {/* QR code */}
            <div className="bg-dark p-5 mt-10 text-white">
              <h2 className="text-3xl text-center font-cinzel mb-3">
                Quality Dental Services Can Transform Your Smile
              </h2>
              <p className="text-center font-tinos">
                By visiting us as soon as possible, our team can help get you
                the professional treatment you need. Instead of waiting around
                and allowing the symptoms to get worse, we can provide you with
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

            {/* two call */}
            <div className="bg-dark p-5 mt-10 text-white">
              <h2 className="text-4xl font-cinzel mb-3">Dental Terminology</h2>
              <hr />
              <div className="space-y-10">
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Alveolar Bone</h2>
                  <p>
                    The alveolar bone is the part of the jawbone that surrounds
                    the roots of the teeth and helps anchor them in place. It
                    plays a vital role in dental health and tooth stability.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Clasp</h2>
                  <p>
                    A clasp is a small metal or plastic component of a removable
                    partial denture that helps secure the denture by attaching
                    to natural teeth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Denture Base</h2>
                  <p>
                    The denture base is the pink, gum-colored portion of a
                    denture that holds the artificial teeth and rests on the
                    oral tissues, providing support and stability.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Edentulous</h2>
                  <p>
                    Edentulous refers to a condition where a person is missing
                    all natural teeth in one or both arches, requiring full
                    dentures or implants for restoration.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Periodontal Disease</h2>
                  <p>
                    Periodontal disease is an infection of the tissues
                    surrounding the teeth, commonly caused by poor oral hygiene.
                    It can lead to gum recession, bone loss, and tooth loss if
                    untreated.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Pontic</h2>
                  <p>
                    A pontic is an artificial tooth used in a dental bridge to
                    replace a missing tooth. It is supported by adjacent natural
                    teeth or implants.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Rebase</h2>
                  <p>
                    Rebase is the dental procedure of replacing the entire
                    acrylic base of a denture while keeping the existing teeth,
                    typically used when the denture base wears out.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Reline</h2>
                  <p>
                    Reline is a process where the inner surface of a denture is
                    reshaped with new material to improve its fit due to gum
                    changes or bone resorption.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Resin/Acrylic</h2>
                  <p>
                    Resin or acrylic materials are used in the fabrication of
                    dentures. These durable and biocompatible substances form
                    the base and sometimes the artificial teeth of the denture.
                  </p>
                  <hr className="mt-4" />
                </div>
              </div>
            </div>

            {/* call section */}
            <div className="bg-primary p-5 mt-10 text-white rounded-2xl">
              <h2 className="text-4xl font-cinzel mb-3">
                Call Us to Get More Details
              </h2>
              <hr />
              <p className="font-tinos mt-5 text-justify">
                Following through with dental checkups is how patients can
                ensure that their smile stays healthy and free of decay or
                disease. Our dental team is here to help. To schedule a dental
                checkup or for help with your dental questions, please call our
                team at{" "}
                <a href="tel:254-207-0708" className="underline">
                  254-207-0708.
                </a>
              </p>
            </div>

            {/* call qr */}
            {/* two call */}
            <div className="bg-dark p-5 mt-10 text-white">
              <div className="flex flex-col md:flex-row gap-10">
                {/* Left side content */}
                <div className="flex-1">
                  <h2 className="text-4xl font-cinzel mb-3">
                    Helpful Related Links
                  </h2>
                  <hr />
                  <ul className="font-tinos mt-3 list-disc px-3">
                    <li className="mt-2">
                      <Link href="#" className="hover:underline">
                        American Dental Association (ADA). Glossary of Dental
                        Clinical Terms. 2022
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link href="#" className="hover:underline">
                        American Academy of Cosmetic Dentistry® (AACD). Home
                        Page. 2022
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link href="#" className="hover:underline">
                        WebMD. WebMD’s Oral Care Guide. 2022
                      </Link>
                    </li>
                  </ul>

                  <h2 className="text-4xl font-cinzel mb-3 mt-10">
                    About our business and website security
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
                        We accept the following payment methods: American
                        Express, Cash, Check, Discover, MasterCard, and Visa
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link href="#" className="hover:underline">
                        We serve patients from the following counties: Bell
                        County, McLennan County and Coryell County
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

                {/* QR code on right */}
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
        </div>

        {/* Right section */}
        <div className="right-section ">
          <div className="bg-gray-100 px-8 p-5 w-[90%] mx-auto">
            <h2 className="text-2xl  text-primary font-cinzel ">
              Related Topics
            </h2>
            <hr />
            <ul className="font-tinos mt-2 list-disc px-3">
              <li className="mt-5">
                <Link href="#" className="hover:underline">
                  Dental Bonding
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#" className="hover:underline">
                  Dental Cleaning and Examinations
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#" className="hover:underline">
                  Dental Sealants
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#" className="hover:underline">
                  Oral Cancer Screening
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#" className="hover:underline">
                  Preventative Dental Care
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#" className="hover:underline">
                  Why Dental Sealants Play an Important Part in Protecting Your
                  Child’s Teeth
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 px-8 p-5 w-[90%] mx-auto mt-5">
            <h2 className="text-2xl  text-primary font-cinzel ">
              Related Topics
            </h2>
            <hr />
            <ul className="font-tinos mt-2 list-disc px-3">
              <li className="mt-5">
                <Link href="#" className="hover:underline">
                  Dental Bonding
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#" className="hover:underline">
                  Dental Cleaning and Examinations
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#" className="hover:underline">
                  Dental Sealants
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#" className="hover:underline">
                  Oral Cancer Screening
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#" className="hover:underline">
                  Preventative Dental Care
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#" className="hover:underline">
                  Why Dental Sealants Play an Important Part in Protecting Your
                  Child’s Teeth
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
