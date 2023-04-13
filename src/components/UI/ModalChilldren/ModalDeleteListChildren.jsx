import { useEffect, useState } from 'react'

const ModalDeleteListChildren = (props) => {
    const [headers, setHeaders] = useState([]);
    useEffect(() => {
        try {
            setHeaders(Object.keys(props?.selectedRows[0]))

        } catch (error) {
            console.log(error)
        }
    }, [props?.selectedRows[0]]);
    // console.log(props?.selectedRows[0])
    return (
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-y-auto max-h-96">
                        <table class="min-w-full text-left text-sm font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    {
                                        headers.map((header) => {
                                            return <th scope="col" class="px-6 py-4" key={header}>{header}</th>
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>

                                {/* {
                                    Object.entries(props?.selectedRows).map((row) => {
                                        console.log("row", row)
                                    })
                                } */}
                                <tr class="border-t dark:border-neutral-500">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                    <td class="whitespace-nowrap px-6 py-4">Mark</td>
                                    <td class="whitespace-nowrap px-6 py-4">Otto</td>
                                </tr>
                                <tr class="border-t dark:border-neutral-500">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                    <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                                    <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                                </tr>
                                <tr class="border-t dark:border-neutral-500">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                    <td class="whitespace-nowrap px-6 py-4">Larry</td>
                                    <td class="whitespace-nowrap px-6 py-4">Wild</td>
                                </tr>
                                <tr class="border-t dark:border-neutral-500">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                    <td class="whitespace-nowrap px-6 py-4">Larry</td>
                                    <td class="whitespace-nowrap px-6 py-4">last</td>
                                </tr>
                                <tr class="border-t dark:border-neutral-500">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                    <td class="whitespace-nowrap px-6 py-4">Mark</td>
                                    <td class="whitespace-nowrap px-6 py-4">Otto</td>
                                </tr>
                                <tr class="border-t dark:border-neutral-500">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                    <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                                    <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                                </tr>
                                <tr class="border-t dark:border-neutral-500">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                    <td class="whitespace-nowrap px-6 py-4">Larry</td>
                                    <td class="whitespace-nowrap px-6 py-4">Wild</td>
                                </tr>
                                <tr class="border-t dark:border-neutral-500">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                    <td class="whitespace-nowrap px-6 py-4">Larry</td>
                                    <td class="whitespace-nowrap px-6 py-4">last</td>
                                </tr>
                                <tr class="border-t dark:border-neutral-500">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                    <td class="whitespace-nowrap px-6 py-4">Mark</td>
                                    <td class="whitespace-nowrap px-6 py-4">Otto</td>
                                </tr>
                                <tr class="border-t dark:border-neutral-500">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                    <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                                    <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                                </tr>
                                <tr class="border-t dark:border-neutral-500">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                    <td class="whitespace-nowrap px-6 py-4">Larry</td>
                                    <td class="whitespace-nowrap px-6 py-4">Wild</td>
                                </tr>
                                <tr class="border-t dark:border-neutral-500">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                    <td class="whitespace-nowrap px-6 py-4">Larry</td>
                                    <td class="whitespace-nowrap px-6 py-4">last</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDeleteListChildren