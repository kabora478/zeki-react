
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    id: 1,
    name: "Ezekiel Kabora",
    role: "CEO",
    image: "/img/team/zeki.jpg"
  },{
    id: 2,
    name: "silivester Staloon",
    role: "Chief Operating Officer",
    image: "/img/team/stano.jpeg"
  },
  {
    id: 3,
    name: "Mantel Cherotich",
    role: "Executive Associate",
    image: "/img/team/manu.jpeg"
  },
  
  
  {
    id: 4,
    name: "Ishmael Asap",
    role: "Head of Communication",
    image: "/img/team/asap.jpeg"
  }
];

const Team = () => {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-gradient-blue">Team</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            The dedicated individuals behind zeki tech solutions
            to work on quality softwares.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.id} className="border-0 overflow-hidden shadow hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
