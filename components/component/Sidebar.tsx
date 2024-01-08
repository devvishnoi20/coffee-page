import React from 'react'
import { Button } from '../ui/button'
import { CoffeeIcon, GraduationCapIcon, PenIcon, PhoneIcon, ReplyIcon, SettingsIcon, UserIcon } from 'lucide-react'


const Sidebar = () => {
  return (
    <div className="flex min-w-[340px] h-screen">
        <div className="p-4">
          <Button className="mb-4" variant="secondary">
            + New flow
          </Button>
          <ul className='flex flex-col gap-y-2'>
            <li className="flex items-center p-2 rounded-2xl bg-white cursor-pointer">
              <CoffeeIcon className="text-blue-600 mr-2" />
              <span>Coffee? - Marisa Lu</span>
            </li>
            <li className="flex items-center p-2 rounded-2xl hover:bg-gray-200 cursor-pointer">
              <ReplyIcon className="text-gray-600 mr-2" />
              <span>Feedback - Lindsay Weiss</span>
            </li>
            <li className="flex items-center p-2 rounded-2xl hover:bg-gray-200 cursor-pointer">
              <GraduationCapIcon className="text-gray-600 mr-2" />
              <span>Post-grad plans - Devlyn Hall</span>
            </li>
            <li className="flex items-center p-2 rounded-2xl hover:bg-gray-200 cursor-pointer">
              <PhoneIcon className="text-gray-600 mr-2" />
              <span>Lunch plan - Devlyn Jr</span>
            </li>
            <li className="flex items-center p-2 rounded-2xl hover:bg-gray-200 cursor-pointer">
              <PenIcon className="text-gray-600 mr-2" />
              <span>Victoria Writing</span>
            </li>
            <li className="flex items-center p-2 rounded-2xl hover:bg-gray-200 cursor-pointer">
              <SettingsIcon className="text-gray-600 mr-2" />
              <span>Settings</span>
            </li>
            <li className="flex items-center p-2 rounded-2xl hover:bg-gray-200 cursor-pointer">
              <UserIcon className="text-gray-600 mr-2" />
              <span>Dev Vishnoi</span>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Sidebar