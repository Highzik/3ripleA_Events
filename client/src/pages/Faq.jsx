import { Link } from "react-router-dom"
import "/src/pages/styles/faq.css"


export default function Faq() {
  return (
    <div className="container-fluid">
      <div className="text-center faq-header">
        <h1 className="" style={{ paddingTop: "25vh" }}>F.A.Q.</h1>
        <hr className="horizontal-rule mx-auto" />
      </div>
      <div className="row p-5 mx-auto faq-section" style={{ maxWidth: "1200px" }}>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h3 className="fs-6 fw-bold">WHAT KIND OF EVENTS ARE YOUR SPECIALTY?</h3>
          <p className="fw-semibold">Our team of expert planners are at our best when we are building any kind of event from the ground up, whether that be at a private estate, on a beachfront property, in a historic venue with lots of rules and regulations, or at a private club with limited access. We can transform any space imaginable and specialize in events with challenging logistics. We make the impossible possible.</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h3 className="fs-6 fw-bold mb-4 mt-4">DO YOU ACCEPT KICKBACKS FROM VENDORS?</h3>
          <p className="fw-semibold">Absolutely not!</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h3 className="fs-6 fw-bold mb-4 mt-4">HOW MANY YEARS HAVE YOU BEEN IN BUSINESS? HOW DID YOU GET STARTED?</h3>
          <p className="fw-semibold">Our founder, Abimbola, created 3ripleA Events in ****. After her service (NYSC) to her mother's land, she decided to start an event planning company. She found she enjoyed connecting with people and using her skills to bring out the joys and celebrations in life.</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h3 className="fs-6 fw-bold mb-4 mt-4">HOW MUCH SHOULD I EXPECT TO BUDGET FOR MY EVENT?</h3>
          <p className="fw-semibold">It is easiest to think of the overall budget in terms of price per person. Our typical clients expect to spend an entry-level amount of around **** per person on their event.</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h3 className="fs-6 fw-bold mb-4 mt-4">HOW MANY EVENTS DO YOU TAKE ON IN A YEAR?</h3>
          <p className="fw-semibold">Because of the high level of involvement of myself and my team in each one of our events, we aim to take no more than 4-6 events annually.</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h3 className="fs-6 fw-bold mb-4 mt-4">WHAT IS YOUR EXPERIENCE PLANNING DESTINATION EVENTS?</h3>
          <p className="fw-semibold">Nearly all of the events we plan are destination celebrations! Our clients hail from all over, so we are very familiar with juggling time zones. Additionally, we have built an amazing network of creative vendors all around the globe who we can tap for any event no matter how remote. Within 3ripleA Events, we have a travel concierge who handles all the logistics of a destination event from flights to hotels and beyond.</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h3 className="fs-6 fw-bold mb-4 mt-4">WHAT IF I DON'T NEED FULL SERVICE PLANNING - DO YOU OFFER PARTIAL PLANNING?</h3>
          <p className="fw-semibold">We do not offer partial planning!</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h3 className="fs-6 fw-bold mb-4 mt-4">I HAVE TALKED TO OTHER PLANNERS AND FIND THAT EVERYONE CHARGES DIFFERENTLY. HOW DOES YOUR PRICING STRUCTURE WORK?</h3>
          <p className="fw-semibold">This is my favorite question! Our fee structure is a three-part structure that compensates us for the three elements of what we are building for you over the course of our engagement together: planning, design + production, and event management. We go over the budget in depth during the planning and design stage.

          </p>
          <p className="fw-semibold">To learn more, <Link to='/connect'>please contact us here,</Link> and we will discuss in greater detail exactly how it all works!</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h3 className="fs-6 fw-bold mb-4 mt-4">DO YOU PLAN EVENTS OTHER THAN WEDDINGS?</h3>
          <p className="fw-semibold">Yes, all the time! We plan social events of all kinds – non-profit galas, birthday parties, anniversaries, international trips, and more. If there is a reason to celebrate, count us in!</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h3 className="fs-6 fw-bold mb-4 mt-4">WILL YOU PLAN OTHER EVENTS DURING A WEDDING WEEKEND, LIKE REHEARSAL DINNER AND FAREWELL BRUNCH?</h3>
          <p className="fw-semibold">Yes! We often plan a full weekend of events, and offer our design and planning services from start to finish for each day you will be hosting guests in your event location. <Link to="/contact">Contact us</Link> to find out more about how we can plan the specific details for each day of your celebration.</p>
        </div>
      </div>
    </div>
  )
}
