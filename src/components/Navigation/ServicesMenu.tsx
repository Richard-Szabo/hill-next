import Link from "next/link";

// Define menu items (can be fetched from a database later)
interface ServicesMenuItemProps {
  label: string;
  to: string;
  subItems?: ServicesMenuItemProps[];
}

const ServicesMenuItems: ServicesMenuItemProps[] = [
  {
    label: "Fogpótlás",
    to: "/fogpotlas",
    subItems: [
      {
        label: "Implantátum",
        to: "#implantatum",
      },
      {
        label: "Esztétikus koronák & hidak",
        to: "#koronak-hidak",
      },
    ],
  },
  {
    label: "Digitális technológiák",
    to: "/digitalis-technologiak",
    subItems: [
      {
        label: "Oral scan",
        to: "#oral-scan",
      },
      {
        label: "3D CB-CT",
        to: "#cb-ct",
      },
    ],
  },
  {
    label: "Fogszabályozás",
    to: "/fogszabalyozas",
    subItems: [
      {
        label: "Láthatatlan sínek",
        to: "#lathatatlan-sinek",
      },
      {
        label: "Rögzített fogszabályozás",
        to: "#rogzitett-fogszabalyozas",
      },
    ],
  },
  {
    label: "Esztétikus fogászat",
    to: "/esztetikus-fogaszat",
    subItems: [
      {
        label: "Természetes tömések",
        to: "#termeszetes-tomesek",
      },
      {
        label: "Héjak & Inlay",
        to: "#hejak-inlay",
      },
    ],
  },
  {
    label: "Szájsebészet",
    to: "/szajsebeszet",
    subItems: [
      {
        label: "Bölcsességfog eltávolítás",
        to: "#bolcsessegfog-eltavolitas",
      },
      {
        label: "Csontpótlás",
        to: "#csontpotlas",
      },
    ],
  },
  {
    label: "Implantológia",
    to: "/implantologia",
    subItems: [
      {
        label: "X-Guide",
        to: "#x-guide",
      },
      {
        label: "Metszésnélküli implantáció",
        to: "#metszesnelkuli-implantacio",
      },
    ],
  },
  {
    label: "Ínybetegségek",
    to: "/inybetegsegek",
    subItems: [
      {
        label: "Mozgó fogak",
        to: "#mozgo-fogak",
      },
      {
        label: "Vérző fogíny",
        to: "#verzo-foginy",
      },
    ],
  },
  {
    label: "Szájhigénia",
    to: "/szajhigenia",
    subItems: [
      {
        label: "Fájdalommentes fogkőszedés [EMS]",
        to: "#fajdalommentes-fogkoszedes",
      },
      {
        label: "Fogápolási módszerek",
        to: "#fogapolasi-modszerek",
      },
    ],
  },
  {
    label: "Gyermekfogászat",
    to: "/gyermekfogaszat",
  }
];


export default function ServicesMenu({handleClose}: {handleClose: () => void}) {
  return (
    <ul className="w-full flex flex-col md:flex-row md:flex-wrap text-lg md:text-xl font-light pt-3 md:pt-5 pl-2 md:pl-5 space-y-3">
      {ServicesMenuItems.map((item, index) => (
        <li key={index} className="w-full md:w-1/2 xl:w-1/3 first:mt-3">
          <Link className="font-bold uppercase xl:whitespace-nowrap font-merrieweather hover:text-hill-secondary" href={item.to} onClick={handleClose}>
            {item.label}
          </Link>
          {item.subItems && (
            <ul className="flex flex-col xl:flex-row xl:gap-4 mb-2 md:mb-0">
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex} className="whitespace-nowrap hover:text-hill-secondary font-karla">
                  <Link href={`${item.to}${subItem.to}`} onClick={handleClose}>{subItem.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
