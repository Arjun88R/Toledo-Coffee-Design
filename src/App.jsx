import React, { useRef } from 'react';
import './App.css';
import logo from './assets/logo.png'; // replace with your logo path
import LionsHead from './assets/Lions head.jpg';
import GreenEtching from './assets/Lion-coffee-card-green-etching.jpg';
import EasterLion from './assets/Easter-Lion-coffee-ad.jpg';
import WoolsonSpice from './assets/Woolson-Spice.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAnglesDown } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const scrollTargetRef = useRef(null);

  const handleChevronClick = () => {
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <div className="background-image-1">
        <div className="stories">
          <div className="stories-title">
            <h2>STORIES</h2>
          </div>
          <div className="stories-authors">
            <p>Julia Conti and Tiffany Wang</p>
          </div>
        </div>

        <div className="article-title">
          <h3>How Toledo, Ohio Revolutionized the Coffee Industry</h3>
        </div>
  
          <div className="article-desc">
              <p>Toledo has a long history of roasting and selling coffee. When mass production of coffee in the United States first began, Toledo was at the forefront of the industry on an international level, and locally, coffee was a special part of shopping for many Toledoans. Today, Toledo's rich heritage in coffee production lives on in the image of a lion and through local roasters reviving the tradition.</p>
          </div>

          <div className="article-date">
              <p>November 3rd, 2025</p>
          </div>

          <button className="chevron-button" aria-label="Expand article" onClick={handleChevronClick}>
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
            <div className="image-overlay">
              <p>
                Alvin Woolson of the Woolson Spice Company, another local aromatic venture, purchased Lion Coffee in 1872. Originally located on the corner of Jackson and Huron streets, by 1911, the factory had expanded and moved by the river on North Summit Street. The Woolson Spice Company sold spices and other dried goods, but Lion Coffee quickly became their signature brand.
              </p>
              <p>
                Woolson was determined to turn Lion Coffee into a household name, and ultimately revolutionized the coffee industry in two ways. First, he introduced the idea of selling roasted coffee in one-pound packages. This streamlined the purchasing process, as selling already roasted and weighed coffee standardized the quality of coffee that customers would receive.
              </p>
            </div>
          </div>
          <div>
            <p>
              He also introduced the idea of premiums as an incentive to purchase the coffee. Each bag of Lion coffee included a picture card, and customers could cut images of the iconic lion’s head from packages and send them back to the company for prizes. Today, you can still collect the picture cards as postcards, as documented in Sandy and John R. Husman’s “You Will Do Better in Toledo: From Frogtown to Glass City.”

This marketing scheme not only transformed the coffee industry, but the mail service, as well. According to the Husman’s, Woolson vice president N.L. Schmid remembered, “when the incoming mail was so heavy that we had to send our own truck to the post office to pick it up.” Eventually, the company had to weigh the mail they received, rather than counting each individual lion head, a method that the USPS soon adopted for dealing with bulk mail.”

The premiums were popular in part because they included prizes that appealed to people of all backgrounds and ages. 

According to “You Will Do Better in Toledo: From Frogtown to Glass City,” Schmid once shared in an interview that the premiums included suitcases, lamps, curtains, bicycles and more, and that “[s]ome individuals who made it their business to go through the country buying the lion heads would deliver as many as 8,000 or 10,000 and in redeeming them would take our entire supply of suitcases.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
