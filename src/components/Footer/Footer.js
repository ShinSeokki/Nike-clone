import React, { useState } from "react";
import "./Footer.css";
import facebook from "../image/facebook.png";
import facebook_hover from "../image/facebook_hover.png";
import twitter from "../image/twitter.png";
import twitter_hover from "../image/twitter_hover.png";
import instagram from "../image/instagram.png";
import instagram_hover from "../image/instagram_hover.png";
import youtube from "../image/youtube.png";
import youtube_hover from "../image/youtube_hover.png";
import location_pin from "../image/location_pin.png";

function Footer(props) {
   const [isTwitterHovering, setIsTwitterHovering] = useState(0);
   const [isFacebookHovering, setIsFacebookHovering] = useState(0);
   const [isYoutubeHovering, setIsYoutubeHovering] = useState(0);
   const [isInstagramHovering, setIsInstagramHovering] = useState(0);

   return (
      <div className="footer-contents">
         <div className="footer-banner">
            고객님의 나이키 멤버 정보가 이전됩니다.
            <a className="btn-open-modal">동의하기</a>
         </div>
         <div className="footer-nav">
            <div className="uk-grid">
               <div className="company-info uk-width-medium-1-4">
                  <p>
                     <a>매장안내</a>
                  </p>
                  <p className="pc-only">
                     <a>나이키 저널</a>
                  </p>
                  <p className="pc-only">
                     <a>로그인</a>
                  </p>
                  <p className="pc-only">
                     <a>멤버 가입</a>
                  </p>
               </div>
               <dl className="company-legal uk-width-medium-1-4 pc-only">
                  <dt>고객센터</dt>
                  <dd>
                     <a>080-022-0182</a>
                  </dd>
                  <dd>
                     <a>주문/결제</a>
                  </dd>
                  <dd>
                     <a>배송</a>
                  </dd>
                  <dd>
                     <a>주문배송조회</a>
                  </dd>
                  <dd>
                     <a>멤버쉽 혜택/서비스</a>
                  </dd>
                  <dd>
                     <a>공지사항</a>
                  </dd>
                  <dd>
                     <a>1:1 채팅 문의</a>
                  </dd>
                  <dd>
                     <a>이용약관</a>
                  </dd>
                  <dd>
                     <a>개인정보처리방침</a>
                  </dd>
               </dl>
               <dl className="company-agreement uk-width-medium-1-4 pc-only">
                  <dt>ABOUT NIKE</dt>
                  <dd>
                     <a>나이키에 대하여</a>
                  </dd>
               </dl>
               <dl className="company-follow uk-width-medium-1-4 pc-only">
                  <dt>SOCIAL</dt>
                  <dd>
                     <div className="footer-sns">
                        <a
                           onMouseOver={() => setIsTwitterHovering(1)}
                           onMouseOut={() => setIsTwitterHovering(0)}
                        >
                           <span className="ns-twitter">
                              {isTwitterHovering ? (
                                 <img src={twitter_hover} />
                              ) : (
                                 <img src={twitter} />
                              )}
                           </span>
                        </a>
                        <a
                           onMouseOver={() => setIsFacebookHovering(1)}
                           onMouseOut={() => setIsFacebookHovering(0)}
                        >
                           <span className="ns-facebook">
                              {isFacebookHovering ? (
                                 <img src={facebook_hover} />
                              ) : (
                                 <img src={facebook} />
                              )}
                           </span>
                        </a>
                        <a
                           onMouseOver={() => setIsYoutubeHovering(1)}
                           onMouseOut={() => setIsYoutubeHovering(0)}
                        >
                           <span className="ns-youtube">
                              {isYoutubeHovering ? (
                                 <img src={youtube_hover} />
                              ) : (
                                 <img src={youtube} />
                              )}
                           </span>
                        </a>
                        <a
                           onMouseOver={() => setIsInstagramHovering(1)}
                           onMouseOut={() => setIsInstagramHovering(0)}
                        >
                           <span className="ns-instagram">
                              {isInstagramHovering ? (
                                 <img src={instagram_hover} />
                              ) : (
                                 <img src={instagram} />
                              )}
                           </span>
                        </a>
                     </div>
                  </dd>
               </dl>
            </div>
         </div>
         <div className="footer-copy">
            <div className="uk-clearfix">
               <div className="uk-float-left">
                  <a>
                     <span className="ns-pin">
                        <img src={location_pin} />
                     </span>
                     <span className="country-pin-label">대한민국</span>
                  </a>
                  ⓒ 2022 Nike, Inc. All Rights Reserved
               </div>
               <div className="uk-float-right menu-term">
                  <a>이용약관</a>
                  <a>개인정보처리방침</a>
               </div>
            </div>
         </div>
         <div className="footer-info"></div>
      </div>
   );
}

export default Footer;
