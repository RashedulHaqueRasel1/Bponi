import { useEffect, useState } from "react";

const sections = [
    { id: "section1", title: "Section 1", content: "This is content for Section 1" },
    { id: "section2", title: "Section 2", content: "This is content for Section 2" },
    { id: "section3", title: "Section 3", content: "This is content for Section 3" },
    { id: "section4", title: "Section 4", content: "This is content for Section 4" },
    { id: "section5", title: "Section 5", content: "This is content for Section 5" },
    { id: "section6", title: "Section 6", content: "This is content for Section 6" },
    { id: "section7", title: "Section 7", content: "This is content for Section 7" },
    { id: "section8", title: "Section 8", content: "This is content for Section 8" },
    { id: "section9", title: "Section 9", content: "This is content for Section 9" },
    { id: "section10", title: "Section 10", content: "This is content for Section 10" },
    { id: "section11", title: "Section 11", content: "This is content for Section 11" },
    { id: "section12", title: "Section 12", content: "This is content for Section 12" },
    { id: "section13", title: "Section 13", content: "This is content for Section 13" },
    { id: "section14", title: "Section 14", content: "This is content for Section 14" },
    { id: "section15", title: "Section 15", content: "This is content for Section 15" },
    { id: "section16", title: "Section 16", content: "This is content for Section 16" },
    { id: "section17", title: "Section 17", content: "This is content for Section 17" },
    { id: "section18", title: "Section 18", content: "This is content for Section 18" },
    { id: "section19", title: "Section 19", content: "This is content for Section 19" },
    { id: "section20", title: "Section 20", content: "This is content for Section 20" }
]
;


const Layout = () => {
    const [activeSection, setActiveSection] = useState(sections[0].id);

    useEffect(() => {
      const handleScroll = () => {
        sections.forEach((section) => {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
              setActiveSection(section.id);
            }
          }
        });
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  

    return (
        <div>
            <div className="flex">
                {/* Left Sidebar */}
                <div className="w-1/4 h-screen bg-gray-200 p-4 sticky top-0">
                    <ul className="space-y-4">
                        {sections.map((section) => (
                            <li
                                key={section.id}
                                className={`cursor-pointer ${activeSection === section.id ? "text-blue-500 font-bold" : ""
                                    }`}
                            >
                                <a href={`#${section.id}`}>{section.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content */}
                <div className="w-3/4 p-8 space-y-12">
                    {sections.map((section) => (
                        <div id={section.id} key={section.id} className="space-y-4">
                            <h2 className="text-2xl font-bold">{section.title}</h2>
                            <p>{section.content}</p>
                        </div>
                    ))}
                </div>

                {/* Right Sidebar */}
                <div className="w-1/4 h-screen bg-gray-200 p-4 sticky top-0">
                    <p>Right sidebar content here</p>
                </div>
            </div>
        </div>
    );
};

export default Layout;