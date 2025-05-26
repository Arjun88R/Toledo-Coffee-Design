import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";
import './App.css';
import logo from './assets/logo.png'; // replace with your logo path
import LionsHead from './assets/Lions head.jpg';
import GreenEtching from './assets/Lion-coffee-card-green-etching.jpg';
import EasterLion from './assets/Easter-Lion-coffee-ad.jpg';
import WoolsonSpice from './assets/Woolson-Spice.jpg';
import LionCoffeeCard from './assets/Lion-Coffee-2.jpg';
import CardFront from './assets/PictureCardFront.jpg';
import CardBack from './assets/PictureCardBack.jpg';
import TiedtkesCoffee from './assets/Tiedtkes-Coffee.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAnglesDown } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Navbar() {
  const scrollTargetRef = useRef(null);
  const handleChevronClick = () => {
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const chevronRef = useRef(null);
  const bgImageOneRef = useRef(null);
  const bgImageThreeRef = useRef(null);

 useEffect(() => {

  gsap.to(chevronRef.current, {
  y: -10,
  duration: 0.8,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

  gsap.to(bgImageOneRef.current,{
    borderRadius: "0 0 0 0",
    ease: "none",
    scrollTrigger: {
      trigger: bgImageOneRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  })

  gsap.to(bgImageThreeRef.current,{
    borderRadius: "0 0 0 0",
    ease:"none",
    scrollTrigger: {
      trigger: bgImageThreeRef.current,
      start: "top top",
      end : "bottom top",
      scrub: true,
    }
  }
  )


}, []);

  return (
    <div className="main-container">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li className="dropdown">
            <a href="#">STORIES</a>
            <ul className="dropdown-menu">
              <li><a href="#">Art & Culture</a></li>
              <li><a href="#">Books</a></li>
              <li><a href="#">City Infrastructure</a></li>
              <li><a href="#">Education</a></li>
              <li><a href="#">Environment</a></li>
              <li><a href="#">Film</a></li>
              <li><a href="#">Food</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">Public Health</a></li>
              <li><a href="#">Science & Technology</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">PODCASTS</a>
            <ul className="dropdown-menu">
              <li><a href="#">Social Distances</a></li>
              <li><a href="#">The midpoint</a></li>
              <li><a href="#">In Transit</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">PROJECTS</a>
            <ul className="dropdown-menu">
              <li><a href="#">Asian in Ohio</a></li>
              <li><a href="#">Colors of Climate Change</a></li>
              <li><a href="#">COVID-19</a></li>
              <li><a href="#">City Infrastructure</a></li>
              <li><a href="#">Demography</a></li>
              <li><a href="#">Local Journalism</a></li>
              <li><a href="#">Voting</a></li>
              <li><a href="#">Water</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">WORK WITH US</a>
            <ul className="dropdown-menu">
              <li><a href="#">High School Program</a></li>
              <li><a href="#">College Internship</a></li>
              <li><a href="#">Graduate Fellowship</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">ENGAGEMENT</a>
            <ul className="dropdown-menu">
              <li><a href="#">Events</a></li>
              <li><a href="#">Workshops & Lectures</a></li>
              <li><a href="#">Collaborations</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">ABOUT</a>
            <ul className="dropdown-menu">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">The Midstorians</a></li>
              <li><a href="#">Press Room</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">SUPPORT</a>
            <ul className="dropdown-menu">
              <li><a href="#">Donate</a></li>
              <li><a href="#">Get Involved</a></li>
            </ul>
          </li>
        </ul>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </nav>
      <div className="background-image-1" ref={bgImageOneRef}>
        <div className="stories">
          <div className="stories-title">
            <h2>STORIES</h2>
          </div>
          <div className="stories-authors">
            <p>Julia Conti and Tiffany Wang</p>
          </div>
        </div>

        <div className="article-title">
          <h3>
            How Toledo, Ohio Revolutionized the Coffee Industry
          </h3>
        </div>

          <div className="article-desc">
              <p>Toledo has a long history of roasting and selling coffee. When mass production of coffee in the United States first began, Toledo was at the forefront of the industry on an international level, and locally, coffee was a special part of shopping for many Toledoans. Today, Toledo's rich heritage in coffee production lives on in the image of a lion and through local roasters reviving the tradition.</p>
          </div>

          <div className="article-date">
              <p>November 3rd, 2025</p>
          </div>

          <button ref={chevronRef} className="chevron-button" aria-label="Expand article" onClick={handleChevronClick}>
            <FontAwesomeIcon icon={faAnglesDown} />
          </button>
      </div>

      <div className="background-image-2" ref={scrollTargetRef}>
         
        <div className="section-1">
          <p className="big-t">T</p>

          <div className="para-1">
            <p>he best coffee on the islands for many Hawaiian residents comes from a one-pound package with an iconic image: a lion’s head. But here’s the catch – the iconic lion and the coffee it brands trace their heritage not to the tropics, but about 4,400 miles to the northeast in Toledo.</p>
            <p><em>“When I tell people it originated in Ohio in 1864, no one [here] knew that,”</em> James Butler, manager of the Lion Cafe in Honolulu, Hawaii, said.</p>
            <div className="Lions-head-image">
              <div className="lion-logo-wrapper">
                <img src={LionsHead} alt="Lion Coffee logo" className="lion-logo" />
                <p className="lion-logo-desc">
                  Lion Coffee logo. Image courtesy of Hawaii Coffee Company.
                </p>
              </div>
          </div>
            <p>Prior to 1864, commercial coffee roasting didn’t really exist in the United States. Households would buy raw beans and roast them at home, most often in a cast-iron skillet on a stovetop or over a fire. It was a difficult process, and inexperienced roasters would often be left with bitter and scorched coffee to drink.</p>
            <p>C.C. Warren of Toledo began roasting in a friend’s barn (which at one point caught fire during his experimentation process), and in 1864, he trademarked Lion Coffee, leading him to be one of the first to roast coffee at a commercial level and hold one of the oldest trademarks in the U.S.</p>
          </div>

          <div className="lion-image-gallery">
            <div className="lion-image-item">
              <img src={GreenEtching} alt="Green Lion Coffee Etching" />
              <p className="lion-image-desc">Lion Coffee branded trade card with midsummer advertisement, manufactured by Woolson Spice Company circa 1890. Image courtesy of Bowling Green State University via Ohio Memory.</p>
            </div>
            <div className="lion-image-item">
              <img src={EasterLion} alt="Easter Lion Coffee Advertisement" />
              <p className="lion-image-desc">Lion Coffee branded trade card with Easter holiday advertisement, manufactured by Woolson Spice Company circa 1890. Image courtesy of Bowling Green State University via Ohio Memory. </p>
            </div>
          </div>

          <div className="woolson-wrapper">

            <img src={WoolsonSpice} alt="Woolson-Spice" className="woolson-image" />
            <div className="woolson-caption">
              <p>
                Postcard of Woolson Spice building and warehouse. Image courtesy of Toledo Lucas County Public Library via Ohio Memory.
              </p>
            </div>

            <div className="image-overlay">
              <p>
                Alvin Woolson of the Woolson Spice Company, another local aromatic venture, purchased Lion Coffee in 1872. Originally located on the corner of Jackson and Huron streets, by 1911, the factory had expanded and moved by the river on North Summit Street. The Woolson Spice Company sold spices and other dried goods, but Lion Coffee quickly became their signature brand.
              </p>
              <p>
                Woolson was determined to turn Lion Coffee into a household name, and ultimately revolutionized the coffee industry in two ways. First, he introduced the idea of selling roasted coffee in one-pound packages. This streamlined the purchasing process, as selling already roasted and weighed coffee standardized the quality of coffee that customers would receive.
              </p>
            </div>
          </div>

          <div className="paragraph-2">
            <p>
              He also introduced the idea of premiums as an incentive to purchase the coffee. Each bag of Lion coffee included a picture card, and customers could cut images of the iconic lion’s head from packages and send them back to the company for prizes. Today, you can still collect the picture cards as postcards, as documented in Sandy and John R. Husman’s “You Will Do Better in Toledo: From Frogtown to Glass City.”
            </p>
            <p> 
              This marketing scheme not only transformed the coffee industry, but the mail service, as well. According to the Husman’s, Woolson vice president N.L. Schmid remembered, “when the incoming mail was so heavy that we had to send our own truck to the post office to pick it up.” Eventually, the company had to weigh the mail they received, rather than counting each individual lion head, a method that the USPS soon adopted for dealing with bulk mail.”
            </p>  
            <p>  
              The premiums were popular in part because they included prizes that appealed to people of all backgrounds and ages. 
            </p>
            <p>  
              According to “You Will Do Better in Toledo: From Frogtown to Glass City,” Schmid once shared in an interview that the premiums included suitcases, lamps, curtains, bicycles and more, and that “[s]ome individuals who made it their business to go through the country buying the lion heads would deliver as many as 8,000 or 10,000 and in redeeming them would take our entire supply of suitcases.”
            </p>
          </div>

        </div>

      </div>
      
      {/******************** Section - 2: Scroll-Reveal Image ********************/}
      <div className="background-image-3">
        <div className="section-2">

          <div className="caption-container">
            <p className="caption-text">
              Lion Coffee advertised  
              <br />“A Picture Card in Every Package.” 
              <br /><span className="credit-line">Image courtesy of the Library Company of Philadelphia.</span>
            </p>
            <div className="dropdown-image">
              <img src={LionCoffeeCard} alt="Lion Coffee Card" />
            </div>
          </div>

          <div className="caption-container">
            <p className="caption-text">
              The front of a Lion Coffee picture card
              <br /><span className="credit-line">Images courtesy of Toledo Lucas County Public Library via Ohio Memory.</span>
            </p>
            <div className="dropdown-image">
              <img src={CardFront} alt="CardFront" />
            </div>
          </div>

          <div className="caption-container">
            <p className="caption-text">
              The back of a Lion Coffee picture card
              <br /><span className="credit-line">Images courtesy of Toledo Lucas County Public Library via Ohio Memory.</span>
            </p>
            <div className="dropdown-image">
              <img src={CardBack} alt="CardBack" />
            </div>
          </div>

        </div>
      </div>

      <div className='background-image-4'>
        <div className="section-3">
          <p className="tiedtke-para">
            <p>
              Lion Coffee was sold all over the country. For several decades in the early 20th century, Woolson supplied almost all of the coffee consumed in the United States, with its only true competitor being the Arbuckle Company of Pittsburgh. When Woolson retired in 1897, the building housed 48 roasters and produced almost 454,000 bags annually.
            </p>
            <p>
              The combination of convenience and marketing appeal led Lion Coffee and Woolson’s to become immensely popular. The popularity, however, came at a cost — quite literally. Such large-scale marketing and the competitively low price of its coffee made for financial losses that Woolson Spice Company could not sustain; the final strike came with an unsuccessful lawsuit that led to the liquidation of the company in 1919
            </p>
            <p>
            Lion Coffee was out of production for decades until Jim Delano obtained the rights to the company in 1979 and the production and assets were moved to Hawaii, where Lion Coffee remains headquartered today.
            </p>
            <p>
            Lion Coffee’s grand rise and equally tremendous fall in Toledo weren’t unique. In the early years, coffee giants such as Great Atlantic & Pacific Tea Co., Berdan Co., Interstate Coffee Co. and Tiedtke’s occupied prime locations downtown and provided employment and beans to the city and abroad. As competition grew, companies folded or migrated out to other urban areas. 
            </p>
            <p>
            But for many Toledoans who recall the city’s golden era, memories of downtown will forever be associated with the smell of coffee. One of the best-loved stores downtown, Tiedtke’s, had a specially formatted ventilation system that blew the smell of their in-house brew throughout the store to lure customers in.
            </p>
            <p>
            “You’ll hear old-timers talk about how you could always smell coffee and you could always smell popcorn from the moment you walked in,” John Mohn, a local resident, said. “They just would pipe that or at least part of the exhaust right back in the store.”
            </p>          
          </p>

          <div className="tiedtkes-img">
            <img src={TiedtkesCoffee} alt="Tiedtkes-Coffee"/>
            <p>Tiedtke’s department store, which used a ventilation system behind the coffee counter to waft the smell of roasting beans throughout the store. Image courtesy of Toledo-Lucas County Public Library via Ohio Memory.</p>
          </div>

        </div>
      </div>

      



    </div>
  );
}
