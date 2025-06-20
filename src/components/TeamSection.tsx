
const TeamSection = () => {
  const teamMembers = [
    {
      name: "Joshua Vigel",
      title: "CS and Business Honors at UT Austin",
      role: "Co-Founder & CTO"
    },
    {
      name: "Carson Sheffield",
      title: "Business at UT Austin",
      role: "Co-Founder & COO"
    },
    {
      name: "Mitul Gouni",
      title: "Business Honors at UT Austin",
      role: "Co-Founder & CFO"
    },
    {
      name: "Inesh Sharma",
      title: "Engineering Honors at A&M University",
      role: "Co-Founder & Lead Engineer"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Led by experienced professionals from top universities, we're committed to revolutionizing the payment industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              {/* Avatar placeholder */}
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-green-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Payments?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of customers and businesses already saving with test name
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
