import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import { FaYelp } from "react-icons/fa";
import Form from "@/components/Form";

const cinzel = Cinzel({
  subsets: ["latin"], // you can add 'latin-ext' if needed
  display: "swap",
});

const Services = () => {
  return (
    <>
      {/* intro section */}
      <section className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-1 md:gap-2  md:mt-[125px]  border-y-[10px] border-dark mx-2">
        <div className="bg-[url(/dental-anxiety.webp)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">Dental Anxiety</h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            Solutions to dental anxiety come in many forms. When left untreated,
            many dental problems only get worse. We can help empower patients
            with dental anxiety to take the necessary action to treat their
            underlying conditions.
          </p>
          <p className="font-tinos  text-justify">
            Solutions to dental anxiety are available at Revital Dental in
            Temple and the surrounding area. Fear should never get in the way of
            your health. Call us at (254) 207-0708 to learn more and schedule an
            appointment today.
          </p>
        </div>
        <div className="py-10">
          <Form/>
        </div>
      </section>

      {/* explanation */}
      <section className="md:grid md:grid-cols-[3fr_1fr]  md:w-[90%] w-[100%] md:mx-auto px-2 mt-3 gap-2">
        {/* left section */}
        <div className="left-section " id="what-is-dental-anxiety">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              Understanding Dental Anxiety
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Dental anxiety, also known as dental phobia, is a condition in
              which patients have a debilitating fear of the dentist. People
              with dental anxiety are aware that their fear is irrational, but
              have little to no means of managing it. They may be so
              panic-stricken by the prospect of seeing the dentist that they
              will only go when forced by extreme pain. Other common signs of
              dental anxiety include:
            </p>

            <ul className="font-tinos text-justify list-disc  pl-4 mt-2">
              <li>
                Escalating feelings of nervousness in a dentist’s waiting room
              </li>
              <li>
                Feelings of intense unease at the thought of a dentist placing
                objects in the mouth during treatment
              </li>
              <li>Physical reactions at the thought of visiting the dentist</li>
              <li>Trouble sleeping the night before a dental appointment</li>
            </ul>
            <p className="text-justify font-tinos mt-4">
              At times, dental anxiety may get severe enough to be considered
              pathological. Patients who find that their dental anxiety severely
              impedes their normal functioning may benefit from psychiatric
              treatment.
            </p>
          </div>

          {/* question and answer section */}
          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “People with dental anxiety are aware that their fear is
              irrational, but have little to no means of managing it.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="causes-of-dental-anxiety">
            <h2 className="font-cinzel text-2xl text-primary">
              Causes of Dental Anxiety
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              Patients of all ages and backgrounds can have dental anxiety. A
              multitude of factors may contribute to someone's unease at the
              prospect of being in the dentist's chair, including but not
              limited to fear of anesthesia, fear of injections, fear of pain,
              feelings of embarrassment, and feelings of helplessness.
            </p>
            <p className="font-tinos mt-2 text-justify">
              All of the above are valid reasons to be anxious. Still, they do
              not have to overtake a patient's dental experience. Patients
              should be open and honest with their dentist about their
              anxieties, as this is the first step to phobia management. At
              Revital Dental, we believe communication is key to a successful
              dentist-patient relationship.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10 w-full">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Patients should be open and honest with their dentist about their
              anxieties, as this is the first step to phobia management.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="coping-with-dental-anxiety">
            <h2 className="font-cinzel text-2xl text-primary">
              Coping with Dental Anxiety
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              Dealing with a dismissive dentist may only make the problem worse.
              Therefore, the first step to managing dental anxiety is finding
              the right dentist. Patients should also ask office staff about any
              recommended coping strategies and agree on a signal to let the
              dentist know if they need to take a break.
            </p>
            <p className="font-tinos mt-2">
              Mindfulness techniques can also help. Patients may want to try
              breathing exercises or doing body scans while in the dentist's
              chair. Others may benefit from distracting themselves by doing
              things like wearing headphones or occupying their hands.
            </p>
            <p className="font-tinos mt-2">
              Additionally, patients should let the dentist know if they are
              particularly sensitive to pain, even with local anesthesia. There
              is no need for patients to feel embarrassed about asking questions
              or being open about their fear. This is the only way to develop a
              truly individualized plan to attack one's dental anxiety.
            </p>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “There is no need for patients to feel embarrassed about asking
                questions or being open about their fear.”
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

            <div className="mt-10" id="sedation-for-dental-anxiety">
              <h2 className="font-cinzel text-2xl text-primary">
                Sedation & Dental Anxiety
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Some patients with more severe dental anxiety may require more
                intensive management measures. These include:
              </p>

              <ul className="font-tinos text-justify list-disc pl-4 mt-2">
                <li>
                  <span className="font-bold">Relative Analgesia.</span> Also
                  known as “laughing gas,” this method uses a combination of
                  oxygen and nitrous oxide delivered through a face mask. It
                  takes effect quickly, wears off fast, and allows patients to
                  remain awake yet relaxed during the procedure.
                </li>
                <li>
                  <span className="font-bold">Anxiety Medication.</span> This
                  involves a short-acting pill prescribed by a dentist or doctor
                  to ease dental anxiety. Taken about an hour before the
                  appointment, it helps calm patients without putting them to
                  sleep.
                </li>
                <li>
                  <span className="font-bold">Conscious Sedation.</span>{" "}
                  Administered via IV by a sedation dentist or anesthetist, this
                  "twilight sedation" allows patients to drift into a light
                  sleep while still being responsive during the treatment.
                </li>
                <li>
                  <span className="font-bold">General Anesthesia.</span> The
                  most intensive option, this involves IV medications and
                  inhaled gases to put patients fully to sleep. It requires
                  careful pre- and post-operative management and is used for
                  extensive procedures.
                </li>
              </ul>
              <p className="font-tinos mt-2 text-justify">
                Not all forms of sedation are appropriate for everyone or every
                dental procedure. Our qualified team works closely with our
                patients to take the proper measures to provide the most
                comfortable experience possible.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Some patients with more severe dental anxiety may require more
                intensive management measures.”
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
                  href="#what-is-dental-anxiety"
                >
                  Q. <span className="underline">What is dental anxiety?</span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#causes-of-dental-anxiety"
                >
                  Q.{" "}
                  <span className="underline">What causes dental anxiety?</span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#coping-with-dental-anxiety"
                >
                  Q.{" "}
                  <span className="underline">
                    How can I cope with dental anxiety?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#sedation-for-dental-anxiety"
                >
                  Q.{" "}
                  <span className="underline">
                    Can I be sedated for my dental anxiety?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#child-dental-anxiety"
                >
                  Q.{" "}
                  <span className="underline">
                    How can I ease my child's dental anxiety?
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
                  href="#dental-checkup-process"
                >
                  Q.{" "}
                  <span className="underline">
                    What happens during a dental check-up?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#find-a-dentist-resources"
                >
                  Q.{" "}
                  <span className="underline">
                    What other resources can I use to find a dentist?
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-10" id="child-dental-anxiety">
              <h2 className="font-cinzel text-2xl text-primary">
                Children & Dental Anxiety
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                It is not uncommon for parents to experience dental anxiety on
                their child's behalf. Parents should maintain a calm exterior as
                children will pick up on any anxiety displayed by their parents.
                Parents should refrain from telling their children that
                something will hurt or be painful, nor should they promise a
                reward for going to the dentist. Doing so will only cause
                children to anticipate something unpleasant and act accordingly.
                While parents should tell their children about any upcoming
                dental appointments, they should not overload their child with
                too much detail about what to expect. Dentists have received the
                training to give simple, non-threatening answers. Parents should
                prioritize stressing the importance of dental hygiene to their
                children instead.
              </p>
            </div>
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Parents should maintain a calm exterior … as children will pick
                up on any anxiety displayed by their parents.”
              </h2>
              <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
            </div>

            {/* Q & A */}

            <div className="bg-gray-100 p-5 mt-10 ">
              <h2 className="text-4xl text-center font-cinzel mb-3 text-primary">
                Frequently Asked Questions
              </h2>
              <hr />
              <div className="flex flex-col">
                <h2
                  id="child-dental-anxiety"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. What can a dentist do to help my child's dental anxiety?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Dental anxiety among children is common, so many dentists
                  anticipate having to use calming techniques. These include
                  distraction, non-verbal communication, simple instructions,
                  positive reinforcement, voice control, and in some cases,
                  sedation.
                </p>

                <h2
                  id="how-common-is-dental-anxiety"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. How common is dental anxiety?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. According to WebMD, between 9% and 20% of Americans avoid
                  going to the dentist due to dental anxiety. People of all ages
                  and backgrounds can suffer dental anxiety.
                </p>

                <h2
                  id="other-terms-for-dental-anxiety"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Are there any other words for dental anxiety?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. The term "dental anxiety" is most commonly interchanged
                  with "dental phobia." However, other synonymous terms include
                  dentophobia, dental fear, fear of dentists, and odontophobia.
                  These words all refer to the same phenomenon.
                </p>

                <h2
                  id="dental-visit-if-anxious"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Do I really need to go to the dentist if I have dental
                  anxiety?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Putting off necessary dental treatments can be detrimental
                  to your overall health. Patients who refrain from going to the
                  dentist due to dental anxiety are more likely to develop gum
                  disease and lose teeth. These, in turn, may lead to a decrease
                  in self-esteem and negatively affect one's overall quality of
                  life.
                </p>

                <h2
                  id="will-anxiety-improve"
                  className="text-justify text-primary font-tinos mt-3"
                >
                  Q. Will my dental anxiety get better over time?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Continued exposure and positive experiences with the
                  dentist should lessen your dental anxiety over time. Depending
                  on the severity of your condition, you may also benefit from
                  seeking psychiatric help for your phobia at another facility
                  along with the dental treatment tailored to your needs.
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
              <div className="space-y-10 ">
                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Cosmetic Dentistry</h2>
                  <p>
                    Cosmetic dentistry is generally used to refer to any dental
                    work that improves the appearance (though not necessarily
                    the function) of a person’s teeth, gums, and/or bite.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Decay</h2>
                  <p>
                    Tooth decay occurs when the enamel of the tooth begins to
                    deteriorate due to the erosion caused by plaque and tartar
                    on the teeth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Caries</h2>
                  <p>
                    Dental caries, commonly known as cavities, occur when proper
                    oral hygiene is not maintained, allowing plaque to form and
                    create tiny holes in the teeth.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Checkup</h2>
                  <p>
                    A dental checkup is an appointment where the dentist cleans
                    your teeth, identifies any signs of infection, and removes
                    the infection at least once every six months.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Filling</h2>
                  <p>
                    A dental filling is used to restore the structure of a tooth
                    by filling it with materials like metal, alloy, porcelain,
                    or plastic to restore its function and appearance.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Prophylaxis</h2>
                  <p>
                    Dental prophylaxis is a professional cleaning procedure that
                    removes plaque, tartar, and stains from the teeth to
                    maintain oral health.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dental Sealants</h2>
                  <p>
                    Dental sealants are resinous materials applied to the
                    chewing surfaces of the posterior teeth to prevent cavities
                    by shielding them from plaque.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Dentist</h2>
                  <p>
                    A dentist, also known as a dental surgeon, specializes in
                    diagnosing, preventing, and treating diseases and conditions
                    of the oral cavity.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Gingivitis</h2>
                  <p>
                    Gingivitis is the inflammation of gum tissue caused by
                    plaque buildup and poor oral hygiene, which can lead to
                    infection if untreated.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Preventive Dentistry</h2>
                  <p>
                    Preventive dentistry focuses on maintaining oral health
                    through measures that prevent plaque buildup, tartar
                    formation, and infections.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Tartar</h2>
                  <p>
                    Tartar forms when plaque hardens and becomes difficult to
                    remove. It requires professional treatment for removal.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Tooth Enamel</h2>
                  <p>
                    Tooth enamel is the visible outer surface of the tooth that
                    serves as a protective barrier to the underlying dentin and
                    dental pulp.
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
