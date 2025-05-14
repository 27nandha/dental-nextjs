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
      <section className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-1 md:gap-2  md:mt-[125px]  border-y-[10px] border-dark mx-2">
        <div className="bg-[url(/what-can-i-do-to-improve-my-smile.webp)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            What Can I Do to Improve My Smile
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            Brightening your smile can enhance your overall appearance. Most
            people have at least one aspect of their smile that they would like
            to improve. Fortunately, many options are available to enhance a
            smile’s appearance — from proper maintenance to restorative and
            cosmetic treatments.
          </p>
          <p className="font-tinos  text-justify">
            Revital Dental in Temple and the surrounding area can help you
            improve your smile. Our team will help determine the right treatment
            to help you meet your smile goals. Contact us at (254) 207-0708 to
            learn more about our services or schedule an appointment.
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
        <div className="left-section " id="importance-oral-hygiene">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">Improving Smiles</h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              A beautiful smile is not only pleasing to the eye but also has
              social and health benefits. Some common reasons people seek
              treatment to improve their smiles include issues such as gaps,
              chips, stains, missing teeth, and large or receding gums. Since a
              smile is one of the first things people see, treatments to improve
              the smile can help people feel more confident about their
              appearance.
            </p>
            <p className="text-justify font-tinos mt-4">
              A healthy smile can enhance people’s relationships, communication,
              and self-esteem. The right treatment can correct damage and help
              patients smile with pride. According to at least one study,
              happiness with one’s smile has been directly correlated with
              higher levels of self-confidence. No matter the dental issue,
              there is a treatment that can help patients achieve the smile
              results they want.
            </p>
            <p className="text-justify font-tinos mt-4">
              Once the bacteria can enter the bloodstream, the entire body may
              be at risk. Starting and following an oral hygiene routine will
              help prevent the buildup of bacteria and plaque on the teeth and
              keep the body safe. To protect the health of the smile is to
              protect the overall health of the body.
            </p>
          </div>

          {/* question and answer section */}
          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “A beautiful smile is not only pleasing to the eye but also has
              social and health benefits.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="family-oral-health-education">
            <h2 className="font-cinzel text-2xl text-primary">
              Addressing Concerns
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              Everyone has a unique smile, so patients need to find a dentist
              who understands their wants and needs. Seeking professional help
              to improve a smile is a big decision that should involve thorough
              research and consideration. Communication throughout the treatment
              process is an important part of ensuring that the patient is
              comfortable throughout the process and satisfied with their
              results.Since oral health can affect body health, it is important
              to teach children and others about oral hygiene. Someone should
              talk to family members about the importance of dental care. If any
              family member has anxiety about visiting the dentist, speak to the
              dental team about options to make the experience less
              intimidating. Either way, every member of the family should learn
              about oral hygiene and what they can do to take care of their
              smile.
            </p>
            <p className="font-tinos mt-2 text-justify">
              Patients should seek treatment from a dentist who values their
              input and is open to discussing any questions or concerns. It is
              important for patients to receive the necessary information and
              professional input before going into the treatment process.
              Listening to such concerns allows Revital Dental to create a
              customized treatment plan to improve each patient’s smile.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10 w-full">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Everyone has a unique smile, so it is essential for patients to
              find a dentist who understands their wants and needs.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="home-care-routine">
            <h2 className="font-cinzel text-2xl text-primary">
              Maintaining a Healthy Smile
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              A smile’s health plays an important role in its appearance. Proper
              dental care techniques play a vital role in sustaining and
              improving a healthy smile. Although a healthy smile is not
              achieved overnight, developing healthy dental habits can help
              improve the look and health of teeth. Some techniques that support
              healthy teeth and gums include:
            </p>
            <ul className="font-tinos text-justify list-disc  pl-4 mt-2">
              <li>Brushing teeth twice a day</li>
              <li>Flossing at least once a day</li>
              <li>Limiting staining foods or drinks</li>
              <li>Receiving prompt dental treatment</li>
              <li>Scheduling regular dental check-ups</li>
            </ul>
            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Proper dental care techniques play a vital role in sustaining
                and improving a healthy smile.”
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

            <div className="mt-10" id="diet-and-tooth-decay">
              <h2 className="font-cinzel text-2xl text-primary">
                Restorative Methods
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Restorative dental procedures are available to help repair the
                appearance and function of a patient’s teeth. The primary focus
                of restorative methods is to replace damaged or missing tooth
                structure. There are two types of restorative methods, direct
                and indirect. Direct dental restorations involve placing a
                filling directly into a prepped and cleaned tooth cavity.
              </p>
              <p className="font-tinos mt-2 text-justify">
                The creation of indirect dental restorations occurs outside of
                the mouth cavity to fix more severe dental damage. The common
                types of indirect restorative methods include veneers, dental
                crowns, inlays, onlays, and dental bridges. Patients should
                consult our dentist to learn about the available options.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Restorative dental procedures are available to help repair the
                appearance and function of a patient’s teeth.”
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
                  href="#reasons-improve-smile"
                >
                  Q.{" "}
                  <span className="underline">
                    What reasons cause people to want to improve their smile?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#importance-understanding-dentist"
                >
                  Q.{" "}
                  <span className="underline">
                    Why is it important for patients to discuss their concerns
                    with a dentist that understands them?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#smile-care-techniques"
                >
                  Q.{" "}
                  <span className="underline">
                    What care techniques help maintain a healthy smile?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#restorative-methods"
                >
                  Q.{" "}
                  <span className="underline">
                    What restorative methods can help patients improve their
                    smiles?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#cosmetic-treatments"
                >
                  Q.{" "}
                  <span className="underline">
                    What cosmetic treatments can patients receive?
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
                  href="#common-cosmetic-services"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the common cosmetic dental services?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#why-see-cosmetic-dentist"
                >
                  Q.{" "}
                  <span className="underline">
                    Why should someone see a cosmetic dentist?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#maintaining-smile"
                >
                  Q.{" "}
                  <span className="underline">
                    How does one maintain a healthy smile?
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-10" id="maintaining-healthy-smile">
              <h2 className="font-cinzel text-2xl text-primary">
                Health Practices for a Healthy Smile
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                If the goal is to have a healthy smile for life, then there are
                a number of things anyone can do to achieve that goal. The first
                and quite possibly most important thing to do is to stay in
                touch with the dental team. The dental professionals on this
                team will come to know each individual and their smile over
                time. They can provide guidance as the mouth ages and changes.
                To build and maintain this connection, regular dental checkups
                are important.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Dental checkups are normally recommended every six months,
                though some individuals may need them more often if they have a
                history of oral health concerns or gum disease. Between
                checkups, everyone should continue their at-home oral hygiene
                routine. While a checkup is a great way to remove the buildup of
                plaque and polish the teeth to protect them from bacteria,
                everyone needs to remove particles and bacteria daily to keep
                their smile healthy.
              </p>
              <p className="font-tinos mt-2 text-justify">
                A daily routine should include brushing, flossing, and rinsing
                with a mouthwash. The dentist may also recommend different or
                additional steps depending on the smile’s health. Additional
                recommendations may include:
              </p>
              <ul className="font-tinos text-justify list-disc  pl-4 mt-2">
                <li>Drinking fluoridated water</li>
                <li>Quitting smoking and other tobacco products</li>
                <li>Limiting alcoholic, caffeinated or sugary drinks</li>
                <li>Controlling other diseases that may affect the teeth</li>
                <li>Deep cleaning</li>
              </ul>
            </div>
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “While a checkup is a great way to remove the buildup of plaque
                and polish the teeth to protect them from bacteria, everyone
                needs to remove particles and bacteria daily to keep their smile
                healthy.”
              </h2>
              <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
            </div>

            {/* Q & A */}
            <div className="bg-gray-100 p-5 mt-10">
              <h2 className="text-4xl text-center font-cinzel mb-3 text-primary">
                Frequently Asked Questions
              </h2>
              <hr />
              <div className="flex flex-col">
                <h2
                  id="importance-oral-hygiene"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Why is oral hygiene important?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Aside from being one of the first things people notice
                  about others, the smile is important to the body's overall
                  health. Maintaining oral hygiene helps protect the body from
                  disease. By keeping the smile healthy and attending regular
                  dental checkups, everyone can support their overall health.
                </p>

                <h2
                  id="oral-care-children"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Is oral care important for children?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Yes. While baby teeth are temporary, how they are cared for
                  affects future oral health. Good habits early in life can lead
                  to a lifetime of healthy smiles.
                </p>

                <h2
                  id="dental-care-routine"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. What should be included in a dental care routine?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. A complete routine typically includes brushing at least
                  twice daily, flossing once a day, rinsing with
                  dentist-approved mouthwash, and attending regular dental
                  checkups. Individual needs may vary slightly.
                </p>

                <h2
                  id="what-is-dental-checkup"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. What is a dental checkup?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. A dental checkup usually includes a cleaning and
                  examination. The dental professional removes plaque and tartar
                  and checks for any signs of decay, gum disease, or other oral
                  health issues.
                </p>

                <h2
                  id="maintain-healthy-smile"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. How can anyone keep their smile healthy?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Healthy habits such as quitting smoking, limiting dark
                  drinks like coffee or tea, and practicing consistent oral care
                  at home — along with regular dental visits — help maintain a
                  clean, bright smile.
                </p>

                <h2
                  id="cleaning-vs-deep-cleaning"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Are dental cleanings and deep cleanings different?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Yes. Both involve cleaning the teeth, but deep cleanings
                  also include scaling and root planing below the gum line. Deep
                  cleaning is usually recommended for those with gum disease or
                  heavy buildup.
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
                  <h2 className="italic text-xl">Cosmetic Dentistry</h2>
                  <p>
                    Cosmetic dentistry refers to dental procedures that enhance
                    the appearance of the teeth, gums, or bite. Common
                    treatments include teeth whitening, veneers, and bonding.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Tooth Decay</h2>
                  <p>
                    Tooth decay occurs when bacteria in plaque produce acid that
                    erodes tooth enamel, leading to cavities and infection if
                    left untreated.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Checkup</h2>
                  <p>
                    A dental checkup is a routine appointment where a dentist
                    examines oral health, removes plaque and tartar, and checks
                    for signs of gum disease or cavities.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Filling</h2>
                  <p>
                    A dental filling is used to restore a tooth damaged by
                    decay. It involves cleaning the cavity and filling it with
                    materials like composite, porcelain, or amalgam.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Prophylaxis</h2>
                  <p>
                    Dental prophylaxis is a professional cleaning procedure that
                    removes plaque, tartar, and stains from teeth to prevent
                    oral diseases.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Sealants</h2>
                  <p>
                    Dental sealants are thin protective coatings applied to the
                    chewing surfaces of molars to prevent cavities by blocking
                    bacteria and food.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Gingivitis</h2>
                  <p>
                    Gingivitis is a mild form of gum disease that causes
                    redness, swelling, and bleeding gums. It is reversible with
                    proper oral hygiene and professional care.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Tartar</h2>
                  <p>
                    Tartar, also known as calculus, is hardened plaque that
                    sticks to the teeth and can only be removed by a dental
                    professional during cleanings.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Tooth Enamel</h2>
                  <p>
                    Tooth enamel is the hard, outermost layer of a tooth that
                    protects it from decay and damage. It cannot regenerate once
                    worn down.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dentist</h2>
                  <p>
                    A dentist is a licensed medical professional who diagnoses,
                    treats, and helps prevent diseases and conditions affecting
                    the oral cavity.
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
