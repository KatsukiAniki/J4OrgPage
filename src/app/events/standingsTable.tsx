'use client'

import { AppProps } from "next/app";
import { ReactElement } from "react";
import Image from "next/image";

export default function standingsTable() {

    return (
        <>
            <table className="min-w-full divide-y divide-gray-200 shadow-lg mt-10">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Place
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Participant
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            W
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            L
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Map
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            RND
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <Image src="https://projectv.gg/img/triangle-transparent.9a820544.svg" alt="Delta" width={30} height={30}/>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Malcolm Lockyer</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1961</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Witchy Woman</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">The Eagles</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1972</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Shining Star</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Earth, Wind, and Fire</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1975</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}