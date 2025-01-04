import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import companies from '../data/companies.json'
import faqs from '../data/faq.json'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent,  } from '@/components/ui/accordion'

const LandingPage = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })])

  return (
    <main className="flex flex-col gap-10 py-10 sm:py-20"> 
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold 
        sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job and get <span className="flex items-center gap-2 sm:gap-6">HIRED</span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      
      <div className='flex gap-6 justify-center'>
        <Link to="/jobs">
          <Button variant="blue" size="xl">Find Jobs</Button>
        </Link>
        <Link to="/post-jobs">
          <Button variant="destructive" size="xl">Post Jobs</Button>
        </Link>
      </div>

      {/* Carousel */}
      <Carousel
        plugins={[Autoplay({ delay: 2000})]}
        ref={emblaRef}
        className="w-full py-10"      
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
              <img 
                src={path} 
                alt={name}
                className="h-9 sm:h-14 object-contain"
              /> 
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div>
        {/* Banner */}
        <img src=' /banner.webp' className='w-full'/>
      </div>

  {/* Job Cards */}
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4' >
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
          Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Recruiters</CardTitle>
          </CardHeader>
          <CardContent>
          Post jobs, manage applications and find best candidates.
          </CardContent>
        </Card>
      </section>

      {/* Accordion placeholder */}

      <Accordion type="single" collapsible>
        {faqs.map((faq, index)=>{
         return ( <AccordionItem key={index} value={`item=${index+1}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>
            {faq.answer}
          </AccordionContent>
         </AccordionItem>
        );
        })}
        </Accordion>
        
    </main>
  )
}

export default LandingPage