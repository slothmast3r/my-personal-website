import React from "react"
import "./Services.scss"
interface ServiceItemProps {
  iconName: string
  title: string
}

const ServiceItem: React.FC<ServiceItemProps> = ({ iconName, title }) => {
  return (
    <div className="col-md-4 text-center d-flex" data-aos="fade-up">
      <a href="#" className="services-1">
        <span className="icon">
          <i className={iconName}></i>
        </span>
        <div className="desc">
          <h3 className="mb-5">{title}</h3>
        </div>
      </a>
    </div>
  )
}

const serviceData: ServiceItemProps[] = [
  { iconName: "flaticon-ideas", title: "Web Developer" },
  { iconName: "flaticon-analysis", title: "Web Design" },
  { iconName: "flaticon-analysis", title: "App Developing" },
  { iconName: "flaticon-flasks", title: "Branding" },
  { iconName: "flaticon-ideas", title: "Product Strategy" },
]

const Services: React.FC = () => {
  return (
    <section className="ftco-section" id="services">
      <div className="container">
        <div className="row justify-content-center py-5 mt-5">
          <div
            className="col-md-12 heading-section text-center"
            data-aos="fade-up"
          >
            <h1 className="big big-2">Services</h1>
            <h2 className="mb-4">Services</h2>
            <p>
              I offer a variety of services including Web Design, Web
              Development, App Development, Branding, and Product Strategy.
            </p>
          </div>
        </div>
        <div className="row">
          {serviceData.map((service, index) => (
            <ServiceItem
              key={index}
              iconName={service.iconName}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
