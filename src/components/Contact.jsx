import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { slideIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { EarthCanvas } from './canvas'
import { styles } from '../styles'

//                      AUTH FOR EMAIL.JS
// template_2dszdv8
// service_ylfetrb
// fNmzdLNNCGF-7zD8G

const Contact = () => {

  const formRef = useRef()

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)



  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault
    setLoading(true)

    emailjs.send(
      'service_ylfetrb',
      'template_2dszdv8',
      {
        from_name: form.name,
        to_name: 'Tom',
        from_email: form.email,
        to_email: 'mahettom@gmail.com',
        message: form.message
      },
      'fNmzdLNNCGF-7zD8G'
    )
      .then(() => {

        setLoading(false)
        setForm({
          name: '',
          email: '',
          message: ''
        })
        alert('Thank you, I will get back to you as soon as possible!')

      }, (error) => {

        setLoading(false)
        console.log(error)
        alert('Something went wrong.')
      })
  }


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>

      <motion.div
        variants={slideIn('left', 'tween', 0.1, 1)}
        className='flex-[0.75] bg-blavk-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>


        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>

            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />

          </label>


          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>

            <input
              type='email'
              name='name'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />

          </label>


          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>

            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />

          </label>

          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? 'Sending...' : 'Send'}
          </button>

        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.1, 1)} className='xl:flex-1 xl:h-auto md:h-[500px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')