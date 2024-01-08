import { Button } from "@/components/ui/button";
import { Dot, Mail, MapPinIcon, Mic, MicIcon } from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full min-h-full">
      <div className="flex gap-8 flex-row justify-center mt-11 items-start">
        <div className="flex flex-col w-[500px] bg-white rounded-2xl shadow">
          <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-t-2xl">
            <div className="flex justify-center items-center gap-x-2 ">
              <Mail className="text-gray-600 " />
              <h2 className="text-lg font-semibold flex justify-center items-center">
                Coffee?
                <Dot className="text-gray-600 p-0 m-0" />
              </h2>

              <span className="text-gray-600 text-sm">Mail from Marisa Lu</span>
            </div>
            <MicIcon className="text-gray-600" />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Marisa Lu</h2>
              <p className="text-muted-foreground">Just Now</p>
            </div>
            <h3 className="text-lg font-semibold mb-2">Coffee?</h3>
            <p className="mb-4">
              Hey Jason,
              <br />
              <br />
              Was wondering if you&apos;d be interested in meeting my team at Philz
              Coffee at 11 AM today. No pressure if you can&apos;t make it, although
              I think you guys would really get along!
              <br />
              <br />
              Marisa
            </p>
            <div className="flex gap-2">
              <Button variant="outline">Reply</Button>
              <Button variant="outline">Forward</Button>
              <Button variant="destructive">Delete</Button>
            </div>
            <div className="flex justify-start mt-4">
              <p className={
                "text-gray-600 text-sm cursor-pointer"
              }>More actions</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  bg-white rounded-2xl shadow">
          <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-t-2xl">
            <div className="flex justify-center items-center gap-x-2 ">
              <h2 className="text-lg font-semibold flex justify-center items-center">
                See my availability: today
              </h2>
            </div>
            <MicIcon className="text-gray-600" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Available until 1 PM</h3>
            <p className="mb-4">
              Would you like to create an event for Coffee with Marisa at 11 AM?
            </p>
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center justify-between p-2 bg-gray-100 rounded">
                <span>9:41 AM</span>
                <span>Coffee with Marisa - Philz Coffee</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-100 rounded">
                <span>1 PM</span>
                <span>Meeting with Danny Trinh - Main Lane</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-100 rounded">
                <span>3 PM</span>
                <span>...</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button>Create Event</Button>
              <Button variant="outline">Edit Event</Button>
              <Button variant="outline">Full Calendar</Button>
              <Button variant="outline">More actions</Button>
            </div>
            <div className="flex justify-start mt-4">
              <p className={
                "text-gray-600 text-sm cursor-pointer"
              }>More actions</p>
            </div>
          </div>
          
        </div>
        <div className="flex flex-col bg-white rounded-2xl shadow">
          <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-t-2xl">
            <div className="flex justify-center items-center gap-x-2 ">
              <MapPinIcon className="text-gray-600 " />
              <h2 className="text-lg font-semibold flex justify-center items-center">
                Philz Coffee
                <Dot className="text-gray-600 p-0 m-0" />
              </h2>

              <span className="text-gray-600 text-sm">Location</span>
            </div>
            <MicIcon className="text-gray-600" />
          </div>
          <div>
            {/*google map image here */}
            <div className="flex items-center justify-center">
              <img
                src="https://developers.google.com/static/maps/images/landing/hero_geocoding_api.png"
                className="rounded-sm cover w-full h-48"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Philz Coffee</h3>
              <p className="mb-4">
                Custom-blended java in a casual setting.
                <br />
                20886 Stevens Creek Blvd, Cupertino, CA 95014
              </p>
              <div className="flex gap-2">
                <Button variant="outline">Get directions</Button>
                <Button variant="outline">See details</Button>
                <Button variant="outline">Find more cafes nearby</Button>
              </div>
              <div className="flex justify-start mt-4">
                <p className={"text-gray-600 text-sm cursor-pointer"}>More actions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
