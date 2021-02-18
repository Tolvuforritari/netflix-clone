import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";

class Footer extends Component {
  state = {
    langContent: false,
  };

  handleToggle = (e) => {
    e.preventDefault();
    this.setState({
      langContent: !this.state.langContent,
    });
  };

  render() {
    return (
      <FooterContainer>
        <span style={{ marginLeft: "12.5%", fontSize: "1.125rem" }}>
          <Link>Questions? Call 1-877-742-1335</Link>
        </span>
        <div className="footer-columns" style={{ marginLeft: "10.6%" }}>
          <ul>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Investor Relations</Link>
            </li>
            <li>
              <Link>Ways to Watch</Link>
            </li>
            <li>
              <Link>Corporate Information</Link>
            </li>
            <li>
              <Link>Netflix Originals</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Help Centre</Link>
            </li>
            <li>
              <Link>Jobs</Link>
            </li>
            <li>
              <Link>Terms of Use</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
            <li>
              <Link></Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Account</Link>
            </li>
            <li>
              <Link>Redeem Gift Cards</Link>
            </li>
            <li>
              <Link>Privacy</Link>
            </li>
            <li>
              <Link>Speed Test</Link>
            </li>
            <li>
              <Link></Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Media Centre</Link>
            </li>
            <li>
              <Link>Buy Gift Cards</Link>
            </li>
            <li>
              <Link>Cookie Preferences</Link>
            </li>
            <li>
              <Link>Legal Notices</Link>
            </li>
            <li>
              <Link></Link>
            </li>
          </ul>
          <div className="lang-btn" onClick={this.handleToggle}>
            <Icon icon={iosWorld} size={20} />
            &nbsp;Français&nbsp;
            <Icon icon={arrowSortedDown} />
          </div>
        </div>
        {this.state.langContent && (
          <div className="lang-toggle">
            <ul>
              <li>English</li>
            </ul>
            <ul>
              <li>Français</li>
            </ul>
          </div>
        )}
        <div
          style={{ marginLeft: "11%", fontSize: "0.9rem", paddingTop: "2rem" }}
        >
          Netflix Canada
        </div>
      </FooterContainer>
    );
  }
}

export default Footer;

const FooterContainer = styled.footer`
  background: var(--main-deep-dark);
  padding-top: 10rem;
  padding-bottom: 3rem;
  color: #999;

  .footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  ul li {
    list-style: none;
    line-height: 2.5;
  }

  .footer-columns:hover {
  }

  a {
    color: #999;
  }

  a:hover {
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
  }

  .lang-btn {
    background: transparent;
    border: 0.9px solid #333;
    border-radius: 10%;
    padding: 1rem;
    width: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0 2rem;
    cursor: pointer;
  }

  .lang-toggle {
    margin-left: 10.5%;
    margin-top: -2rem;
  }

  .lang-toggle ul {
    background: var(--main-deep-dark);
    width: 8.125rem;
    border: 1px solid #333;
    border-radius: 10%;
    text-align: center;
    margin: 0;

    &:hover {
      background: #0085ff;
      color: #fff;
    }
  }
`;
