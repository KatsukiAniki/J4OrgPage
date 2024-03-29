'use client'

import { Disclosure, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'
import MotionPage from './motion'
import Image from 'next/image'


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

    const path = usePathname();

    const navigation = [
        { name: 'Events', href: '/events', current: path?.startsWith('/events') },
        { name: 'Teams', href: '/teams', current: path?.startsWith('/teams') },
    ]

    return (
        <Disclosure as="nav" className="bg-white">
            {({ open }) => (
                <>
                    <AnimatePresence>
                        <MotionPage>
                            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                                <div className="relative flex h-16 items-center justify-between">

                                    {/* Mobile menu button START */}
                                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                    {/* Mobile menu button END */}

                                    {/* Desktop menu button START */}

                                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start h-full">
                                        <div className="flex flex-shrink-0 items-center">
                                            <Link
                                                href={'/'}
                                            >
                                                <Image
                                                    className="h-8 w-auto"
                                                    src="/J4PB.png"
                                                    alt="J4"
                                                    width={30}
                                                    height={30}
                                                />
                                            </Link>
                                        </div>
                                        <div className="hidden sm:ml-6 sm:block justify-center">
                                            <div className="flex h-full justify-center space-x-4 relative">
                                                {navigation.map((item, index) => (
                                                        <Link key={item.name} href={item.href}
                                                            className={`px-3 py-2 text-sm font-medium flex items-center ${item.current
                                                                ? 'text-black font-bold  border-b-2 border-red-500'
                                                                : 'text-black hover:text-gray-500'
                                                                }`}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Desktop menu button END */}
                                </div>
                            </div>
                        </MotionPage>
                    </AnimatePresence>
                    {/* Mobile menu button START */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                    {/* Mobile menu button END */}
                </>
            )}
        </Disclosure>
    )
}
