import React from 'react'
import './style.css'
import './respnsive.css'
import LanguageSelector from '../LanguageSelector/index.jsx'

import BNH from '../../assets/BNH.png'
import Samitivevej from '../../assets/Samitivevej.png'
import FHF from '../../assets/FHF.png'
import call from '../../assets/call-calling.png'
import icon from '../../assets/icon.png'


const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-container '>
                    <div className='contact-side'>
                        <div>
                            <img className='logo' src={Samitivevej} />
                            <img className='logo' src={BNH} />
                            <img className='logo' src={FHF} />
                        </div>

                        <div className='contact-txt'>
                            สอบถามโทร
                        </div>
                        <div className='phone'>
                            <img src={call} width={24} height={24} />
                            <div className='phone-number'>
                                +66 (0) 2022-2222
                            </div>
                        </div>
                        <div className='contact-icon'>
                            ติดตามเรา:
                            <img className='icon' src={icon} />
                        </div>
                    </div>
                    <div className='data-side'>
                        <div>
                            <a href='#'>ค้นหางาน</a>
                        </div>
                        <div>
                            <a href='#'>ลงทะเบียน</a>
                        </div>
                        <div>
                            <a href='#'>ข้อกำหนดและเงื่อนไข</a>
                        </div>
                        <div>
                            <a href='#'>โปรไฟล์</a>
                        </div>
                        <div>
                            <a href='#'>แบบทดสอบ AI Test</a>
                        </div>
                        <div>
                            <a href='#'>ความปลอดภัยและความเป็นส่วนตัว</a>
                        </div>
                        <div>
                            <a href='#'>สวัสดิการและสิทธิประโยชน์</a>
                        </div>
                        <div>
                            <a href='#'>บทความแนะนำ</a>
                        </div>
                        <div>
                            <a href='#'>ติดต่อเรา</a>
                        </div>
                        <div>
                            <a href='#'>งานแนะนำ</a>
                        </div>
                        <div>
                            <a href='#'>งานที่บันทึก</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='last'>
                <div className='last-container'>
                    <div className='last-txt'>
                        สงวนลิขสิทธิ์ 0000-2024 โดย บริษัท xxxxxxx (ประเทศไทย) จำกัด
                    </div>
                    <div className='last-language'>
                        <LanguageSelector />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer