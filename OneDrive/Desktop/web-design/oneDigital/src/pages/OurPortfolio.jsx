import React from 'react'
import WorkCard from '../components/WorkCard'

const OurPortfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className='absolute top-0 w-full h-[50vh] bg-blue-200 flex justify-center items-center'>
        <h2 className='text-[#1965DF] text-4xl md:text-5xl lg:text-6xl font-bold z-10 text-center px-4'>Our Portfolio</h2>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="
                M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,149.3C672,160,768,224,864,229.3C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </path>
          </svg>
        </div>
      </header>
      <section className="flex-grow bg-white px-4 py-12 md:px-8 lg:px-16 mt-[35vh]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
            {worksData.map((project, index) => (
              <WorkCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const worksData = [
  { title: 'E-Commerce Platform', category: 'Web Development', image: 'https://bcns.com.bd/wp-content/uploads/2020/07/E-Commerce-Web.jpg', link: 'https://ecommerce-example.com' },
  { title: 'EdTech Learning App', category: 'Mobile App', image: 'https://cdn.dribbble.com/userupload/4445138/file/original-1510c6891ade67e94b7d83af325650c3.png?resize=400x0', link: 'https://edtech-example.com' },
  { title: 'Corporate Website Redesign', category: 'UI/UX Design', image: 'https://miro.medium.com/v2/resize:fit:1400/1*3LB01xra89ACJIgwPhLlIw.jpeg', link: 'https://corporate-example.com' },
  { title: 'Social Media Dashboard', category: 'Web Application', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Va-Q3rHJnSovXfmaB-Gga5OO6OluUJVpIZDpkQxdARM4WYKjVm5lkpwQZFP4kgyh5Vc&usqp=CAU', link: 'https://dashboard-example.com' },
  { title: 'E-Commerce Platform', category: 'Web Development', image: 'https://bcns.com.bd/wp-content/uploads/2020/07/E-Commerce-Web.jpg', link: 'https://ecommerce-example.com' },
  { title: 'EdTech Learning App', category: 'Mobile App', image: 'https://cdn.dribbble.com/userupload/4445138/file/original-1510c6891ade67e94b7d83af325650c3.png?resize=400x0', link: 'https://edtech-example.com' },
  { title: 'Corporate Website Redesign', category: 'UI/UX Design', image: 'https://miro.medium.com/v2/resize:fit:1400/1*3LB01xra89ACJIgwPhLlIw.jpeg', link: 'https://corporate-example.com' },
  { title: 'Social Media Dashboard', category: 'Web Application', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Va-Q3rHJnSovXfmaB-Gga5OO6OluUJVpIZDpkQxdARM4WYKjVm5lkpwQZFP4kgyh5Vc&usqp=CAU', link: 'https://dashboard-example.com' },
]

export default OurPortfolio
