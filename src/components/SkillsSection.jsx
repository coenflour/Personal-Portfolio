import { useState } from "react";
import { cn } from "@/lib/utils";

//General logos
import GoogleLogo from "@/assets/logos/google.svg";
import MicrosoftLogo from "@/assets/logos/microsoft.svg";
import NotionLogo from "@/assets/logos/notion.png";
import CanvaLogo from "@/assets/logos/canva-icon.svg";
import FigmaLogo from "@/assets/logos/figma-icon.svg";
import CapcutLogo from "@/assets/logos/capcut-icon.svg";

//Webdev logos
import VSCodeLogo from "@/assets/logos/vscode.svg";
import HTMLLogo from "@/assets/logos/html-icon.svg";
import CSSLogo from "@/assets/logos/css-icon.svg";
import JavaScriptLogo from "@/assets/logos/javascript-logo.png";
import PythonLogo from "@/assets/logos/python.svg";
import NodeJsLogo from "@/assets/logos/nodejs.svg";
import ReactLogo from "@/assets/logos/react.svg";
import TypeScriptLogo from "@/assets/logos/typescript.svg";
import TailwindLogo from "@/assets/logos/tailwind-css.svg";
import PHPLogo from "@/assets/logos/php.svg";
import MySQLLogo from "@/assets/logos/mysql-com.svg";
import MongoDBLogo from "@/assets/logos/mongodb-icon.svg";
import DartLogo from "@/assets/logos/dart.svg";
import FlutterLogo from "@/assets/logos/flutter-icon.svg";
import FirebaseLogo from "@/assets/logos/firebase-icon.svg";
import PostmanLogo from "@/assets/logos/postman-icon.svg";

//Cybersecurity logos
import KaliLinuxLogo from "@/assets/logos/kali-linux.svg";
import AutopsyLogo from "@/assets/logos/autopsy-logo.png";
import WiresharkLogo from "@/assets/logos/wireshark.png";
import BurpSuiteLogo from "@/assets/logos/burpsuite.png";  
import OSINTLogo from "@/assets/logos/osint.png";
import TorBrowserLogo from "@/assets/logos/tor-browser.svg";

const skills = [
  // General
  { name: "Google Workspace", level: 100, category: "general", logo: GoogleLogo },
  { name: "Microsoft 365", level: 95, category: "general", logo: MicrosoftLogo },
  { name: "Notion", level: 90, category: "general", logo: NotionLogo },
  { name: "Canva", level: 90, category: "general", logo: CanvaLogo },
  { name: "Figma", level: 80, category: "general", logo: FigmaLogo },
  { name: "CapCut", level: 85, category: "general", logo: CapcutLogo },

  // Webdev
  { name: "VS Code", level: 90, category: "webdev", logo: VSCodeLogo },
  { name: "HTML", level: 95, category: "webdev", logo: HTMLLogo },
  { name: "CSS", level: 90, category: "webdev", logo: CSSLogo },
  { name: "JavaScript", level: 85, category: "webdev", logo: JavaScriptLogo },
  { name: "Python", level: 75, category: "webdev", logo: PythonLogo },
  { name: "Node.Js", level: 80, category: "webdev", logo: NodeJsLogo },
  { name: "React.Js", level: 80, category: "webdev", logo: ReactLogo },
  { name: "TypeScript", level: 85, category: "webdev", logo: TypeScriptLogo },
  { name: "Tailwind CSS", level: 85, category: "webdev", logo: TailwindLogo },
  { name: "PHP", level: 70, category: "webdev", logo: PHPLogo },
  { name: "MySQL", level: 70, category: "webdev", logo: MySQLLogo },
  { name: "MongoDB", level: 70, category: "webdev", logo: MongoDBLogo },
  { name: "Dart", level: 80, category: "webdev", logo: DartLogo },
  { name: "Flutter", level: 80, category: "webdev", logo: FlutterLogo },
  { name: "Firebase", level: 90, category: "webdev", logo: FirebaseLogo },
  { name: "Postman", level: 90, category: "webdev", logo: PostmanLogo },

  // Cybersecurity
  { name: "Kali Linux", level: 80, category: "cybersecurity", logo: KaliLinuxLogo },
  { name: "Autopsy", level: 80, category: "cybersecurity", logo: AutopsyLogo },
  { name: "Wireshark", level: 70, category: "cybersecurity", logo: WiresharkLogo },
  { name: "Burp Suite", level: 90, category: "cybersecurity", logo: BurpSuiteLogo },
  { name: "OSINT", level: 95, category: "cybersecurity", logo: OSINTLogo },
  { name: "Tor Browser", level: 80, category: "cybersecurity", logo: TorBrowserLogo },
];

const categories = ["all", "general", "webdev", "cybersecurity"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
            <div className="flex items-center gap-3 mb-4">
              {skill.logo && (
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-10 h-10 object-contain"
                />
              )}
              <h3 className="font-semibold text-lg"> {skill.name}</h3>
            </div>

            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
              <div
                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                style={{ width: skill.level + "%" }}
              />
            </div>

            <div className="text-right mt-1">
              <span className="text-sm text-muted-foreground">
                {skill.level}%
              </span>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};
