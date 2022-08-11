import Link from "next/link";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";
export default function Hamburger({ menu }: any) {
  // dom element
  let hamburger = useRef() as React.MutableRefObject<HTMLInputElement>;
  let revealMenu = useRef() as React.MutableRefObject<HTMLInputElement>;
  let revealMenuBg = useRef() as React.MutableRefObject<HTMLInputElement>;
  let cityBg = useRef() as React.MutableRefObject<HTMLInputElement>;
  let line1 = useRef() as React.MutableRefObject<HTMLAnchorElement>;
  let line2 = useRef() as React.MutableRefObject<HTMLAnchorElement>;
  let line3 = useRef() as React.MutableRefObject<HTMLAnchorElement>;
  let info = useRef() as React.MutableRefObject<HTMLInputElement>;

  // check si l'url change
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      menu.clicked = false;
      menu.menuName = "Menu";
    };
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  });

  useEffect(() => {
    if (menu.clicked === false) {
      //close  our menu
      console.log(revealMenuBg);

      gsap.to([revealMenu.current, revealMenuBg.current], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });

      gsap.to(menu.current, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      menu.clicked === true ||
      (menu.initial === true && menu.clicked === true)
    ) {
      console.log("blablabla");
      // OPEN MENU
      gsap.to([revealMenu.current, revealMenuBg.current], {
        duration: 0.8,
        height: "100%",
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.from([revealMenuBg.current], {
        duration: 0.8,
        transformOrigin: "right top",
        skewY: 3,
        ease: "power3.inOut",
      });

      hamburger.current.style.display = "flex";
    }
  }, [menu, router]);

  return (
    <div ref={hamburger} className="hamburger-menu">
      <div ref={revealMenuBg} className="menu-secondary-bg">
        <div ref={revealMenu} className="menu-layer">
          <div className="menu-city-bg"></div>
          <div className="container">
            <div className="wrapper">
              <div className="menu-links">
                <nav>
                  <ul>
                    <li>
                      <Link ref={line1} href="/solution">
                        Solutions
                      </Link>
                    </li>
                    <li>
                      <Link ref={line1} href="/opportunities">
                        Opportunities
                      </Link>
                    </li>
                    <li>
                      <Link ref={line1} href="/contact-us">
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div ref={info} className="info">
                  <h3>Our Promise</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nisi, explicabo consequuntur aliquam consectetur ad adipisci
                    deserunt ea est autem at sint dolorum iusto deleniti
                    quisquam architecto corrupti aliquid? Molestias, minima?
                    Odit impedit deserunt quasi temporibus eligendi cumque
                    ratione nihil consequuntur quaerat molestiae! Totam,
                    quibusdam pariatur assumenda facere dolorum suscipit id
                    recusandae quasi repudiandae officia nam fuga necessitatibus
                  </p>
                </div>
                <div className="location">
                  Locations :<span>Sidney</span>
                  <span>Tokyo</span>
                  <span>Seoul</span>
                  <span>Paris</span>
                  <span>New-York</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
