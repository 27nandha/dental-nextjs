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
        <div className="bg-[url(/why-are-my-gums-bleeding.webp)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Why Are My Gums Bleeding
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            Gum disease can take a toll on your health.Along with oral health
            issues, gum diseases can have lasting effects on the body. This
            makes it crucial to seek professional evaluation and treatment when
            noticing bleeding gums. In many cases, bleeding gums are often an
            early warning sign of gum disease.
          </p>
          <p className="font-tinos  text-justify">
            Treatment for gum disease is available at Revital Dental in Temple
            and the surrounding area. First, our team performs an in-depth exam
            to determine the cause of your symptoms. Next, we offer a range of
            treatments to improve your oral health. Early diagnosis and
            treatment can help you avoid complications. Call us at (254)
            207-0708 to schedule an appointment with a qualified dentist.
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
        <div className="left-section " id="bleeding-gums-causes">
          {/* dark section */}
          <div className="bg-dark p-5 text-white">
            <h2 className="text-2xl font-cinzel mb-3">
              Diseases That Cause Gums to Bleed
            </h2>
            <hr />
            <p className="text-justify font-tinos mt-4">
              Most forms of gum disease are caused by plaque. This sticky
              substance traps food and bacteria against the gum line. Over time,
              bacteria attack the gums, triggering inflammation and sensitivity.
              Without treatment, the problem can worsen. The gums may bleed
              while eating, brushing, or flossing. Gum problems have also been
              linked to heart disease and stroke.
            </p>
            <p className="text-justify font-tinos mt-4">
              Often, smoking and poor oral hygiene are to blame for gum disease.
              But some patients may be prone to gum disease even if they brush
              and floss daily. Pregnant women are at a high risk of gum disease,
              and so are people with diabetes. Patients who wear dentures are
              more likely to develop gum disease too.
            </p>
            <p className="text-justify font-tinos mt-4">
              In rare cases, bleeding gums can be a sign of a severe condition
              like leukemia. Patients who notice bleeding gums should seek
              dental care right away. Our team can determine the source of the
              problem. If further tests are required, we help patients make the
              necessary arrangements.
            </p>
          </div>

          {/* question and answer section */}
          {/* quote */}
          <div className="relative inline-block mt-10">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Often, smoking and poor oral hygiene are to blame for gum
              disease.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="prevent-mouth-injuries">
            <h2 className="font-cinzel text-2xl text-primary">
              Mouth Injuries
            </h2>
            <hr />
            <p className="font-tinos mt-2 text-justify">
              Gums may also bleed after a common mouth injury. Patients may
              notice bleeding after eating sharp foods or suffering a sports
              injury. More minor injuries may heal on their own, but severe
              dental bleeding can be dangerous. Seek medical care right away if
              you experience heavy or uncontrolled bleeding.
            </p>

            <p className="font-tinos mt-2 text-justify">
              Taking some quick and easy precautions can help prevent dental
              injuries. For example, wearing a mouthguard protects the teeth and
              gums while playing sports. Avoid sharp foods like chips and hard
              candies, and never use the teeth to cut or tear objects. Keep
              appliances like dentures and retainers in good shape, too. Wearing
              a damaged or ill-fitting appliance can result in a serious mouth
              injury. If your device no longer fits, contact our dental team. We
              can provide a replacement.
            </p>
          </div>

          {/* quote */}
          <div className="relative inline-block mt-10 w-full">
            <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
              “Taking some quick and easy precautions can help prevent dental
              injuries.”
            </h2>
            <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
          </div>
          {/* Q & A */}
          <div className="mt-10" id="gum-bleeding-triggers">
            <h2 className="font-cinzel text-2xl text-primary">
              Factors That Cause Gum Bleeding
            </h2>
            <hr />
            <p className="font-tinos mt-2">
              Smoking, vaping, and chewing tobacco all increase one's risk for
              gum disease. The substances dry out the mouth and reduce blood
              flow to the gums. Over time, some patients may develop gum
              problems. Patients who notice gums bleeding should quit all
              tobacco products at once.
            </p>

            <p className="font-tinos mt-2">
              A poor diet can also lead to vitamin deficiencies. If the body
              does not receive enough of certain nutrients, patients may develop
              gum recession. Blood tests can determine whether a patient suffers
              from nutritional deficiencies. If a nutritional deficiency is to
              blame, supplements may resolve the problem.
            </p>
            <p className="font-tinos mt-2">
              Some prescription medications are associated with oral bleeding,
              too. Blood thinners, including aspirin, can increase the risk of
              bleeding. Patients who experience oral bleeding while taking these
              drugs need immediate care. Contact your healthcare provider for
              further advice.
            </p>
            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Smoking, vaping, and chewing tobacco all increase one’s risk
                for gum disease”
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

            <div className="mt-10" id="treat-bleeding-gums-home">
              <h2 className="font-cinzel text-2xl text-primary">
                How to Stop Gums from Bleeding
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Patients with bleeding gums sometimes stop brushing and flossing
                their teeth. Unfortunately, poor oral hygiene only worsens the
                underlying problem. As such, patients must continue brushing
                their teeth twice daily, even if they are experiencing gum
                bleeding. Use a soft-bristled brush and apply gentle pressure.
                Afterward, floss carefully to remove any debris that might be
                stuck in the gums.
              </p>
              <p className="font-tinos mt-2 text-justify">
                Our team may also recommend a specially formulated mouthwash or
                a saltwater rinse. These treatments help clear up the infection
                and shrink swollen gums. Oral rinses also flush away debris and
                help prevent plaque buildup. Preventing plaque is an essential
                step in the gum-disease treatment process.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Preventing plaque is an important step in the gum-disease
                treatment process.”
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
                  href="#bleeding-gums-causes"
                >
                  Q.{" "}
                  <span className="underline">What causes bleeding gums?</span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#prevent-mouth-injuries"
                >
                  Q.{" "}
                  <span className="underline">
                    How can I prevent mouth injuries?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#gum-bleeding-triggers"
                >
                  Q.{" "}
                  <span className="underline">
                    What lifestyle factors can trigger gum bleeding?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#treat-bleeding-gums-home"
                >
                  Q.{" "}
                  <span className="underline">
                    How can I treat bleeding gums at home?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#after-gum-treatment"
                >
                  Q.{" "}
                  <span className="underline">
                    What happens after my office visit for gum bleeding?
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
                  href="#common-gum-disease"
                >
                  Q.{" "}
                  <span className="underline">How common is gum disease?</span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#symptoms-gum-recession"
                >
                  Q.{" "}
                  <span className="underline">
                    What are the symptoms of gum recession?
                  </span>
                </a>
                <a
                  className="text-justify font-tinos mt-3"
                  href="#gum-reshaping-reasons"
                >
                  Q.{" "}
                  <span className="underline">
                    Why would someone get gum reshaping?
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-10" id="after-gum-treatment">
              <h2 className="font-cinzel text-2xl text-primary">
                Post-Visit Care
              </h2>
              <hr />
              <p className="font-tinos mt-2 text-justify">
                Good dental hygiene can reduce gum bleeding. During each office
                visit, our team demonstrates brushing and flossing techniques.
                We can also provide advice on mouse washes and rises, which may
                reduce bleeding and gum disease. Individual treatment plans may
                vary. Our team will let each patient know how to care for their
                gums — even once they return home.
              </p>
            </div>

            {/* quotes */}
            <div className="relative inline-block mt-10 w-full">
              <h2 className="text-2xl font-cinzel bg-secondary text-white p-5 mt-5 rounded-2xl">
                “Good dental hygiene can reduce gum bleeding.”
              </h2>
              <FaCaretDown className="absolute left-5 -bottom-8 text-6xl text-secondary" />
            </div>

            <div className="bg-gray-100 p-5 mt-10">
              <h2 className="text-4xl text-center font-cinzel mb-3 text-primary">
                Frequently Asked Questions
              </h2>
              <hr />
              <div className="flex flex-col">
                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. Should I be concerned about bleeding gums?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Bleeding gums can signify an underlying health problem. If
                  you notice that your gums are inflamed, contact your dental
                  provider right away. A dentist can examine your gums and
                  determine the source of the problem.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. What causes gum bleeding?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Bleeding gums are usually a sign of gingivitis. Gingivitis
                  develops when plaque and bacteria become trapped against the
                  gum line. Treatment can get rid of plaque and destroy the
                  bacteria.
                </p>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Bleeding gums can also result from:
                </p>
                <ul className="list-disc list-inside font-tinos md:ps-6">
                  <li>Pregnancy</li>
                  <li>Prescription drugs</li>
                  <li>Vitamin deficiencies</li>
                  <li>Bleeding disorders</li>
                  <li>Poor brushing habits</li>
                  <li>Ill-fitting dental appliances</li>
                </ul>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Our dental team can provide an in-depth exam to determine
                  the cause of your symptoms.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. How is gum bleeding treated?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Our team begins by identifying the cause of your symptoms.
                  If you have gingivitis, our team can perform a scaling and
                  root planing procedure. This treatment removes plaque and
                  bacteria from below the gums.
                </p>
                <p className="font-tinos md:ps-4 mt-2">
                  A. If your symptoms have a different cause, we deliver the
                  appropriate treatment. As part of your treatment, our team
                  demonstrates proper brushing techniques and adjusts dental
                  appliances to ensure a comfortable fit.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. Is it normal for gums to bleed while flossing?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Many patients mistakenly believe that gum bleeding is
                  normal. But healthy gums should not bleed, even during
                  flossing or a dental checkup. If you notice that your gums
                  bleed while flossing, contact our team. We can check your gums
                  for signs of gingivitis or other dental problems.
                </p>

                <h2 className="text-justify text-primary font-tinos mt-3">
                  Q. Are bleeding gums linked to pregnancy?
                </h2>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Up to 40% of pregnant women experience gum disease during
                  pregnancy. Hormonal changes can make you more susceptible to
                  gum disease.
                </p>
                <p className="font-tinos md:ps-4 mt-2">
                  A. Make sure to keep up with dental checkups while pregnant,
                  and notify your team of any new symptoms. Prompt treatment can
                  keep the problem from progressing.
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
                  <h2 className="italic text-xl">Calculus</h2>
                  <p>
                    Calculus, also known as tartar, refers to the hardened
                    dental plaque that forms on teeth due to a lack of proper
                    oral hygiene.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Gingival Flap Surgery</h2>
                  <p>
                    Gingival flap surgery is a procedure in which the
                    periodontist temporarily separates the gums from the teeth
                    to reach the root and nearby bone for treatment.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">
                    Necrotizing Periodontal Diseases
                  </h2>
                  <p>
                    Necrotizing periodontal diseases involve the death of
                    gingival tissues, often accompanied by lesions in the mouth
                    and severe pain.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Periapical Abscess</h2>
                  <p>
                    A periapical abscess is an inflammatory condition where pus
                    collects in the tissues surrounding the tip of a tooth root.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Periodontal Ligament</h2>
                  <p>
                    The periodontal ligament is a connective tissue that holds
                    the tooth in place by attaching it to the surrounding bone
                    and can be destroyed by advanced gum disease.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Periodontitis</h2>
                  <p>
                    Periodontitis is a severe gum infection that damages the
                    soft tissue and destroys the bone supporting your teeth,
                    often caused by poor oral hygiene.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Periodontium</h2>
                  <p>
                    The periodontium is the structure that supports the teeth,
                    including the gums, periodontal ligament, cementum, and
                    alveolar bone.
                  </p>
                  <hr className="mt-4" />
                </div>

                <div className="mt-5 font-tinos">
                  <h2 className="italic text-xl">Root Scaling and Planing</h2>
                  <p>
                    Root scaling and planing is a non-surgical procedure where
                    plaque and calculus are removed from below the gum line, and
                    root surfaces are smoothed to promote healing.
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
