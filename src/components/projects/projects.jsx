import React from 'react'

export default function Projects() {
  return (
      <div>
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 shadow-md">
                        <h3 className="text-xl font-bold">Project 1</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl nec odio tincidunt aliquam.</p>
                    </div>
                    <div className="bg-white p-4 shadow-md">
                        <h3 className="text-xl font-bold">Project 2</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl nec odio tincidunt aliquam.</p>
                    </div>
                    <div className="bg-white p-4 shadow-md">
                        <h3 className="text-xl font-bold">Project 3</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl nec odio tincidunt aliquam.</p>
                    </div>
                </div>
            </div>  
    </div>
  )
}
