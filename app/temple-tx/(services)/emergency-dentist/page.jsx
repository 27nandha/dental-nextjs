import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import { FaYelp } from "react-icons/fa";
import Image from "next/image";

const cinzel = Cinzel({
  subsets: ["latin"], // you can add 'latin-ext' if needed
  display: "swap",
});

const Services = () => {
  return (
    <>
      {/* intro section */}
      <section className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-1 md:gap-2  md:mt-[125px]  border-y-[10px] border-dark mx-2">
        <div className="bg-[url(/emergency-dentist.webp)] bg-cover my-20"></div>

        <div className="px-10 py-5 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Emergency Dentist
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            While patients can avoid many oral problems with preventative care
            and regular visits to the dentist, emergency dental treatment is
            occasionally necessary. Dentists may administer this type of care
            during or outside of regular office hours to help patients with
            various oral problems, such as infections or missing teeth.
            Emergency dental treatment is care administered to relieve mouth
            pain without prior scheduling.
          </p>
          <p className="font-tinos  text-justify">
            Emergency dental treatment is available at Revital Dental in Temple
            and the surrounding area. We use this type of treatment to care for
            many common mouth problems to improve patients' oral health. Proper
            care and treatment are essential for helping patients recuperate
            from a dental emergency.
          </p>
          <p className="font-tinos  text-justify">
            If you are experiencing severe mouth pain and need immediate medical
            treatment, call us at (254) 207-0708 to make an appointment and have
            your oral health restored.
          </p>
        </div>
        <div className="py-5">
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
        <div className="left-section " id="why-dentures-preferred">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              How Emergency Dentistry Works
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Most dental practices offer routine checkups and cleanings with
              appointments. For most minor problems, patients can call ahead to
              schedule an appointment within a few days to resolve the issue.
              Emergency dentistry treats patients dealing with significant
              dental trauma who need immediate care.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Emergency dentistry treats patients dealing with significant
              dental trauma who need immediate care.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="how-dentures-made">
            <h2 className="font-cinzel text-2xl text-primary">
              When To Visit an Emergency Dentist
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              Not all oral problems require emergency dental care, so patients
              must examine their situation before making an appointment. Most
              minor issues can wait a few days for a scheduled appointment.
              However, there are several reasons to seek emergency dental care:
            </p>
            <ol className="font-tinos text-justify list-disc pl-4 mt-2">
              <li>
                <span className="font-bold">Restorative emergencies: </span>{" "}
                Accidents can occur at any time, and in the event of a missing
                or chipped tooth, it is best to seek immediate care. Restorative
                emergencies require dental care to preserve teeth, so they
                remain functional. Dentists can then replace teeth to restore
                the patient’s smile.
              </li>
              <li>
                <span className="font-bold">Severe gum pain:</span> According to
                WebMD, patients should visit the dentist if minor tooth, jaw, or
                gum pain lasts more than two days. However, those who are in
                extreme pain should visit the dentist immediately. Pain that
                persists despite taking over-the-counter medications, such as
                Aleve®, Tylenol®, or Advil®, could indicate a serious infection
                or gum disease.
              </li>
              <li>
                <span className="font-bold">Tooth abscess: </span> Tooth
                abscesses are caused by pockets of pus that develop underneath
                teeth. In addition to being extremely painful, a tooth abscess
                can lead to a life-threatening infection if left untreated.
                Seeking immediate care allows dentists to drain the pus that
                causes the pain before the problem becomes more severe.
              </li>
              <li>
                <span className="font-bold">Lost fillings:</span> When patients
                lose cavity fillings or crowns, the opening is susceptible to
                infection. Replacing lost crowns and fillings eliminates pain
                and reduces the chance of infection setting in. Waiting to
                receive this treatment could elevate patients’ pain.
              </li>
            </ol>
          </div>

          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “…there are several reasons to seek emergency dental care.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>

          {/* Q & A */}
          <div className="mt-10" id="types-of-dentures">
            <h2 className="font-cinzel text-2xl text-primary">
              Benefits of Emergency Dental Care
            </h2>
            <hr />

            <p className="font-tinos mt-2">
              Emergency dental treatment helps relieve mouth pain quickly and
              effectively. Dental trauma can occur from an accident or an
              injury. Seeking immediate care when a problem occurs prevents it
              from becoming a more extensive issue requiring harsher treatments.
              By taking control of dental emergencies and visiting the dentist
              immediately, patients can drastically improve their oral health.
            </p>
            <ol className="font-tinos text-justify list-disc pl-4 mt-2">
              <li>
                <span className="font-bold">Full Dentures.</span> Most commonly
                used by seniors, these dentures replace a complete set of teeth.
                They sit directly on top of the gums. Some patients are good
                candidates for immediate placement. In this instance, the
                dentist places the previously made dentures immediately after
                the extraction of the teeth. For everyone else, the dentist may
                recommend waiting eight to 12 weeks after teeth removal.
              </li>
              <li>
                <span className="font-bold">Partial Dentures.</span> If the
                patient still has a number of healthy teeth left, the dentist
                may recommend partial dentures. This usually requires the use of
                a metal piece to which a pink-colored base is attached. The
                metal helps to anchor the false teeth to the natural teeth to
                prevent movement.
              </li>
              <li>
                <span className="font-bold">Implant-Supported Dentures.</span>{" "}
                This method blends dental implants with dentures. Instead of
                anchoring all the teeth in place individually, the dentist may
                add several dental implants that hold the full upper and/or
                lower set in place. Dentists may use this for partial dentures
                too. These dentures are not removable once in place. Please note
                that not all patients are good candidates for these.
              </li>
              <li>
                <span className="font-bold">
                  Overdentures or Snap-In Dentures.
                </span>{" "}
                When patients prefer to retain the ability to remove dentures,
                but like the stability of implants, they may opt for
                overdentures. These are handy in instances where a person has no
                teeth, as the dental implants provide an anchor that the teeth
                can sit on. For even more excellent stability, patients may opt
                for snap-in dentures. In this case, the implants have locator
                receptors, and the dentures have attachments. These work
                together to snap the dentures into place for a snug fit.
              </li>
            </ol>
            <p className="font-tinos mt-2">
              The option a patient chooses will depend on that patient's unique
              situation and health. Our team is available to discuss all the
              options. We will help you determine the right one for you.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “In fact, over the past few years, dentists created hybrids with
                other dental treatments to provide patients with even more
                options.”
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

            <div className="mt-10" id="cleaning-dentures">
              <h2 className="font-cinzel text-2xl text-primary">
                How to Care for Dentures
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                The Canadian Dental Association explains that good dental
                hygiene is essential to maintain the appearance and function of
                new veneers. Brushing and flossing after meals and visiting the
                dentist for regular check-ups are critical aspects of proper
                maintenance. Skipping these steps can cause decay and cavities
                to develop between or under the veneer shells.
              </p>

              <p className="font-tinos mt-2 text-justify">
                Dentures do require ongoing maintenance outside of the typical
                oral hygiene routine. Many people believe they can set dentures
                down by the side of the bed. However, this can lead to warping
                and cracking over time.
              </p>

              <p className="font-tinos mt-2 text-justify">
                Patients should soak dentures overnight. Avoid hot water, as
                this may also cause warping. Never use a denture solution
                directly in the mouth. Patients who use denture solutions should
                rinse thoroughly before placing dentures in the mouth because
                denture solutions should not be ingested. Our team can help you
                determine if a solution is right for your regimen.
              </p>

              <p className="font-tinos mt-2 text-justify">
                It is also important to note that dentures require cleaning,
                just like regular teeth do. Whenever possible, remove dentures
                after eating or drinking and rinse them to get rid of food
                particles. Patients should brush dentures at least once per day.
                Dentists recommend a soft-bristled brush as a more abrasive
                brush may cause damage over time.
              </p>

              <p className="font-tinos mt-2 text-justify">
                Even if no teeth remain, continued dental hygiene is essential.
                Brush the teeth and gums and floss any remaining teeth. Patients
                may use gauze or a soft bristled toothbrush to clean the cheeks,
                roof of the mouth, and the tongue. Finally, people who use
                adhesives should take care to remove it.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Dentures do require ongoing maintenance outside of the typical
                oral hygiene routine.”
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
                  href="#why-dentures-preferred"
                >
                  Q.{" "}
                  <span className="underline">
                    Why are dentures a preferred treatment?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#how-dentures-made"
                >
                  Q. <span className="underline">How are dentures made?</span>
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
                <a
                  className="text-justify font-tinos mt-3"
                  href="#cleaning-dentures"
                >
                  Q.{" "}
                  <span className="underline">
                    How should I clean my dentures?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#dentures-longevity"
                >
                  Q.{" "}
                  <span className="underline">How long do dentures last?</span>
                </a>
              </div>
              <h2 className="text-4xl text-center font-cinzel mb-3 mt-3">
                People Also Ask
              </h2>
              <hr />
              <div className="flex flex-col mb-4">
                <a
                  className="text-justify font-tinos mt-3"
                  href="#removable-partial-dentures"
                >
                  Q.{" "}
                  <span className="underline">
                    How do removable partial dentures work?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#partial-dentures-one-tooth"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the pros and cons of partial dentures for one
                    missing tooth?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#why-dentures-preferred"
                >
                  Q.{" "}
                  <span className="underline">
                    Why are dentures a preferred treatment?
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-10" id="dentures-longevity">
              <h2 className="font-cinzel text-2xl text-primary">
                Common Myths and Misconceptions
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                One of the most common myths we hear about dentures is that once
                a patient gets their dentures created and placed, they are set
                for life. Dentures typically last for five to 10 years. Since
                this is a long time, patients may wonder how to know when they
                need new dentures. If the color has changed dramatically or
                there is physical damage, dentures may need replacement. A
                common telling sign is when they no longer fit securely.
              </p>

              <p className="font-tinos mt-2 text-justify">
                Some people believe that if they remove all their teeth and get
                full dentures, they will never need to set foot in a dentist’s
                office again.This is not true and regular dental visits are
                still necessary. Dentists are in the best position to tell
                patients whether or not they need to get their dentures repaired
                or replaced. In fact, the dentist may adjust dentures during
                annual or bi-annual visits to keep them fitting correctly.
                Dentists also pay keen attention to gum health especially if the
                patient smokes or suffers from an illness affecting the gums.
              </p>
            </div>

            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Some people may also believe that if they remove all their
                teeth and get full dentures, they’ll never need to set foot in a
                dentist’s office again.”
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
                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    Will dentures change my appearance?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. When patients lose their teeth, the bone loss may begin to
                  cause the cheek to look hollow and sunken. Dentures can help
                  to fill out space and retain the face’s original shape. Having
                  a full set of teeth that look beautiful and healthy also
                  improves a person’s appearance and overall confidence.
                </p>
                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    Is it difficult to eat with dentures?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Eating with dentures may feel uncomfortable for a few
                  weeks, just as when people get braces for the first time.
                  However, over time, it becomes easier. In the beginning, try
                  to stay away from foods that meet any of the following
                  criteria:
                </p>
                <div className="list-disc pl-6 font-tinos mt-2">
                  <ul>
                    <li>Sharp-edged</li>
                    <li>Tough</li>
                    <li>Sticky</li>
                    <li>Hot</li>
                  </ul>
                </div>
                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">
                    Are there any risks associated with dentures?
                  </span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. A 2015 study published by the National Institute of Health
                  found that seniors who wore dentures while they slept
                  long-term faced a higher risk of developing pneumonia. The CDC
                  also believes dentures may negatively affect nutrition. They
                  attribute this to denture wearers avoiding fruits and
                  vegetables because they are more difficult to chew.
                </p>
                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. <span className="underline">Are Adhesives Necessary?</span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Patients who have lost all their natural teeth may require
                  adhesives, while others may not. Even so, patients with only
                  partial tooth loss may choose to use adhesives for additional
                  support. It may also assist people suffering from neurological
                  disabilities, dry mouth, or who take certain medications.
                </p>
                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">How Much Do Dentures Cost?</span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Dentures tend to be more affordable than other tooth
                  replacement options. Each case is different, and the
                  individual selections a patient makes can affect the cost.
                  Generally speaking, dentures offer the most cost-effective
                  full tooth replacement. When patients choose hybrid options
                  that involve implants, the price may increase for each implant
                  added.
                </p>
                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q.{" "}
                  <span className="underline">How Can I Pay for Dentures?</span>
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Dental insurance may cover the cost of dentures. However,
                  there may be a waiting period due to a pre-existing condition.
                  Some patients rely on dental savings plans. Your insurance
                  provider can discuss with you the details.
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
                    The alveolar bone is the bone surrounding the root of the
                    tooth that keeps the tooth in place.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Clasp</h2>
                  <p>
                    A clasp is a device that holds a removable partial denture
                    prosthesis to the teeth.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Denture Base</h2>
                  <p>
                    The denture base is the part of the denture that connects
                    the artificial teeth with the soft tissue of the gums.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Edentulous</h2>
                  <p>
                    Edentulous is a term that applies to people who do not have
                    any teeth.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Periodontal Disease</h2>
                  <p>
                    Periodontal disease is a condition that causes inflammation
                    of the gingival tissues and membrane of the teeth, leading
                    to tooth loss without professional treatment.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Pontic</h2>
                  <p>
                    Pontic is another term for an artificial tooth on a fixed
                    partial denture.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Rebase</h2>
                  <p>
                    Rebase is the process of refitting denture prosthesis by
                    replacing the base material.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Reline</h2>
                  <p>
                    Reline is when a professional resurfaces the surface of the
                    prosthesis with a new base material.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Resin/Acrylic</h2>
                  <p>
                    Resin and Acrylic are resinous materials that can be
                    components in a denture base.
                  </p>
                  <hr className="mt-4" />
                </div>
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Stomatitis</h2>
                  <p>
                    Stomatitis is the inflammation of the tissue that is
                    underlying a denture that does not fit properly. It can also
                    result from other oral health factors.
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
