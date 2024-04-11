"use client"
import React, { ReactNode } from "react"
import emailjs from "emailjs-com"
import * as Yup from "yup"
const emailjsServiceID = process.env.NEXT_EMAILJS_SERVICE_ID || ""
const emailjsTemplateID = process.env.NEXT_EMAILJS_TEMPLATE_ID || ""
const emailjsUserID = process.env.NEXT_EMAILJS_USER_ID || ""
import { useFormik } from "formik"
import "./Contact.scss"
interface ContactDetailProps {
  icon: string
  title: string
  content: ReactNode // Since you are passing JSX elements
}

interface InputFieldProps {
  placeholder: string
}

export default function Contact() {
  const contactDetails: ContactDetailProps[] = [
    { icon: "icon-map-signs", title: "Address", content: "02-956 Warsaw" },
    {
      icon: "icon-phone2",
      title: "Contact Number",
      content: <a href="tel://0048577966612">+48 577 966 612</a>,
    },
    {
      icon: "icon-paper-plane",
      title: "Email Address",
      content: <a href="mailto:oskar@straszynski.pl">oskar@straszynski.pl</a>,
    },
    // {
    //   icon: "icon-globe",
    //   title: "Website",
    //   content: <a href="#">yoursite.com</a>,
    // },
  ]

  return (
    <section className="ftco-section contact-section ftco-no-pb" id="contact">
      <div className="container">
        <Header />
        <div className="row d-flex justify-center contact-info mb-5">
          {contactDetails.map((detail, index) => (
            <ContactDetail key={index} {...detail} />
          ))}
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

function Header() {
  return (
    <div className="row justify-content-center mb-5 pb-3">
      <div className="col-md-7 heading-section text-center" data-aos="fade-up">
        <h1 className="big big-2">Contact</h1>
        <h2 className="mb-4">Contact Me</h2>
        <p>
          Feel free to reach out if you&apos;re looking for collaboration,
          consultation or just have a question!
        </p>
      </div>
    </div>
  )
}

const ContactDetail: React.FC<ContactDetailProps> = ({
  icon,
  title,
  content,
}) => {
  return (
    <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up">
      <div className="align-self-stretch box p-4 text-center">
        <div className="icon d-flex align-items-center justify-content-center">
          <span className={icon}></span>
        </div>
        <h3 className="mb-4">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      subject: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      emailjs
        .send(emailjsServiceID, emailjsTemplateID, values, emailjsUserID)
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text)
            setSubmitting(false)
            resetForm()
          },
          (err) => {
            console.log("FAILED...", err)
            setSubmitting(false)
          }
        )
    },
  })

  return (
    <div className="row no-gutters block-9">
      <div className="col-md-6 order-md-last d-flex">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-light p-4 p-md-5 contact-form"
        >
          <InputField
            placeholder="Your Name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <InputField
            placeholder="Your Email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <InputField
            placeholder="Subject"
            name="subject"
            onChange={formik.handleChange}
            value={formik.values.subject}
          />
          <TextArea
            placeholder="Message"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          <div className="form-group">
            <input
              type="submit"
              value="Send Message"
              className="btn btn-primary py-3 px-5"
            />
          </div>
        </form>
      </div>
      <div className="col-md-6 d-flex">
        <div
          className="img"
          style={{ backgroundImage: "url(me/me1.png)" }}
        ></div>
      </div>
    </div>
  )
}

const InputField: React.FC<
  InputFieldProps & { name: string; onChange: any; value: string }
> = ({ placeholder, name, onChange, value }) => {
  return (
    <div className="form-group">
      <input
        type="text"
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

const TextArea: React.FC<
  InputFieldProps & { name: string; onChange: any; value: string }
> = ({ placeholder, name, onChange, value }) => {
  return (
    <div className="form-group">
      <textarea
        name={name}
        id=""
        cols={30}
        rows={7}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></textarea>
    </div>
  )
}
