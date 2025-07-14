"use client"
import { EnIcon, RuIcon, UzbIcon } from '@/assets/icons'
import { usePathname, useRouter } from '@/i18n/navigation'
import { getCookie } from 'cookies-next'
import React, { ReactNode, useEffect,useState } from 'react'

interface LangType {
    id: number,
    icon: ReactNode,
    title: string,
    content: string
}
const LangConfig = () => {
    const router = useRouter()
    const pathname = usePathname()
    const b = getCookie("NEXT_LOCALE")
    const langList: LangType[] = [
        { id: 1, icon: <EnIcon />, title: "en", content: "En" },
        { id: 2, icon: <RuIcon />, title: "ru", content: "Ру" },
        { id: 3, icon: <UzbIcon />, title: "uz", content: "O'z" }
    ]
    const [lang, setLang] = useState<LangType>(langList[0])

    function handleChangeLang(item: LangType) {
        setLang(item)
        router.push(pathname, { locale: item.title })
    }

    useEffect(() => {
        if (b == "uz" || b == "en" || b == "ru") {
            const findLang = langList.find(item => item.title == b)
            if (findLang) setLang(findLang)
        }
    }, [])
    return (
        <div className='lang-wrapper py-3 relative cursor-pointer'>
            <div className='flex  items-center gap-2 text-[16px] font-semibold'>
                <div className='w-[20px] h-[20px] rounded-full overflow-hidden'>{lang.icon}</div>
                <span>{lang.content}</span>
            </div>
            <div className='h-0 lang-popup overflow-hidden duration-300 space-y-1 absolute left-[-15px] top-[50px]  rounded-md bg-[var(--clr-violet)]'>
                {langList.filter((item: LangType) => item.id != lang.id).map((item: LangType) => (
                    <div onClick={() => handleChangeLang(item)} key={item.id} className='flex hover:bg-white hover:text-[var(--clr-violet)] p-2 rounded-md items-center gap-2 text-[14px] font-semibold'>
                        <div className='w-[20px] h-[20px] overflow-hidden rounded-full'>{item.icon}</div>
                        <span>{item.content}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default LangConfig