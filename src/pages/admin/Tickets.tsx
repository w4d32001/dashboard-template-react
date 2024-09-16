import { Disclosure, DisclosureButton, DisclosurePanel, Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { RiArrowRightLine, RiFilter2Fill, RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Tickets = () => {
  return (
    <div>
      <div className="flex items-center justify-between gap-y-4 mb-8">
        <div>
          <h1 className="font-bold text-gray-100 text-xl">Overviews</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>-</span>
            <span>Support center</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-secondary-100/50 hover:bg-secondary-100 flex items-center gap-4 py-2 px-4 rounded-lg hover:text-primary transition-colors">
            <RiFilter2Fill />
            Filter
          </button>
          <button className="bg-primary/50 hover:bg-primary flex items-center gap-4 py-2 px-4 rounded-lg text-white transition-colors">
            <RiFilter2Fill />
            Filter
          </button>
        </div>
      </div>
      <div className="bg-secondary-100 p-8 rounded-tl-lg rounded-tr-lg grid grid-cols md:grid-cols-2 items-center justify-center">
        <div className="p-8">
          <h1 className="text-4xl mb-8">How we can help you</h1>
          <form>
            <div className="relative">
              <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-3" />
              <input
                type="text"
                className="bg-secondary-900 outline-none py-2 pr-4 pl-10 rounded-lg w-full"
                placeholder="Search for anything"
              />
            </div>
          </form>
        </div>
        <div className="flex justify-center">
          <img src="portada.svg" alt="" className="w-72 h-72 object-cover" />
        </div>
      </div>
      <TabGroup>
        <div className="bg-secondary-100 p-8 rounded-bl-lg rounded-br-lg">
          <TabList className="flex items-center justify-between gap-2 bg-secondary-900/50 py-3 px-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Tab className="data-[selected]:bg-secondary-900 data-[selected]:text-gray-100 py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors outline-none">
                Overview
              </Tab>
              <Tab className="data-[selected]:bg-secondary-900 data-[selected]:text-gray-100 py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors outline-none">
                Tickets
              </Tab>
              <Tab className="data-[selected]:bg-secondary-900 data-[selected]:text-gray-100 py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors outline-none">
                FAQ
              </Tab>
            </div>
            <div>
              <button className="bg-primary/50 hover:bg-primary flex items-center gap-4 py-2 px-4 rounded-lg text-white transition-colors">
                Create
              </button>
            </div>
          </TabList>
        </div>
        <TabPanels className="mt-8">
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <div className="bg-secondary-100 p-8 rounded-lg">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-white text-2xl">Popular tickets</h1>
                    <Link to="/" className="flex items-center gap-2 text-primary">
                        Support <RiArrowRightLine/>
                    </Link>
                </div>
                <div>
                <Disclosure>
                    <DisclosureButton className="py-2 text-lg">Is team pricing available?</DisclosureButton>
                    <DisclosurePanel className="text-gray-500">
                        Yes! You can purchase a license that you can share with your entire team.
                    </DisclosurePanel>
                </Disclosure>
                </div>
              </div>
              <div className="bg-secondary-100 p-8 rounded-lg">FAQ</div>
            </div>
          </TabPanel>
          <TabPanel>asd</TabPanel>
          <TabPanel>asdas</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};
