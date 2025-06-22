import React from 'react'
import { Code,ArrowRight, Github, Users, Activity, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const page = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-200'>
      
      <header className='bg-white shadow-sm border-b'>
        
        <div className='items-center justify-between mx-auto max-w-6xl px-6 py-4 flex'>         
          <div className='flex items-center gap-3'> 
            <div className='w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center'>
              <Code/>
            </div>
              <h1 className='font-bold text-xl'>DevLinkr</h1>
          </div>
          
          <nav>
            <Button className='cursor-pointer' >Login Using Github</Button>  
          </nav>       
        </div>
      </header>

      <section className='py-20 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <Badge variant="outline" className='mb-4'>
            Open Source Platform
          </Badge>
          <h1 className='text-5xl font-bold mb-6'>
            Connect Developers With
            <span className='text-blue-600'> Open Source Projects</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A professional platform where developers showcase their open source projects 
            and collaborate with the community to build amazing software.
          </p>
          <div className='flex justify-center gap-4'>
            <Link href={"/help-request"}>
              <Button variant="default" size="lg" className="px-8">
                Explore Projects
                <ArrowRight/>
              </Button>
            </Link>
            <Link href={"/help-request"}>
              <Button variant="secondary" size="lg" className="px-8">
                Submit Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className='py-16 px-6 bg-white'>
        <div className='max-w-6xl mx-auto'>
          
          <div className='text-center mb-12'>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose DevConnect?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built for developers, by developers. Our platform makes it easy to 
              discover, contribute to, and showcase open source projects.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <Card>
              <CardHeader>
                <Github className="w-8 h-8 text-blue-600 mb-3"/>
                <CardTitle>Github Integration</CardTitle>
                <CardDescription>
                  Seamlessly connect your GitHub repositories and showcase your work
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-blue-600 mb-3"/>
                <CardTitle>Community Driven</CardTitle>
                <CardDescription>
                  Connect with like-minded developers and contribute to meaningful projects
                </CardDescription>
              </CardHeader>
            </Card>
           <Card>
              <CardHeader>
                <Activity className='w-8 h-8 text-blue-600 mb-3'/>
                <CardTitle>Developer Timeline</CardTitle>
                <CardDescription>
                  Track your contributions and present them with clarity.                
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className='py-18 px-6 bg-blue-500'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-white font-bold text-3xl mb-4'>
            Ready To Start Contibuting?
          </h1>
          <p className="text-blue-100 mb-8">
            Join thousands of developers building the future of open source software.
          </p>
          <Button variant='secondary' size="lg" className='px-8'>
            Start Exploring
          </Button>
        </div>
      </section>
      <footer className='text-white bg-gray-900 py-8 px-6'>
        <div className='max-w-6xl mx-auto text-center'>
          <p className='text-gray-400 inline-flex items-center justify-center gap-2'>
            Made with <Heart className='w-4 h-4 text-red-400'/>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default page
